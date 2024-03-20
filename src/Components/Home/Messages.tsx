import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetAllMessage } from '../../api/message';
import { Spin } from 'antd';
import io from 'socket.io-client';

const Messages = ({ setScroller }: any) => {
  const { id, chatId } = useParams();
  const [socket, setSocket] = useState<any>(null);
  const { data: DataMessage, isLoading } = useGetAllMessage(chatId);
  const [NewData, setNewData] = useState<any>();

  useEffect(() => {
    // Connect to the Socket.IO server
    const newSocket = io('http://localhost:4000'); // Update the URL with your server URL
    setSocket(newSocket);

    // Clean up the socket connection on component unmount
    return () => {
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on('getMessage', (receivedMessage: any ,recipientSocketId:any) => {
        console.log('Received message:', receivedMessage);
        setNewData((prevData: any) => {
          return [
            ...prevData,  
            {
            "chatId": chatId,
            "message": receivedMessage,
            "senderId": recipientSocketId,
          }]
        });
      });
    }
  }, [socket]);

  useEffect(() => {
    if (DataMessage) {
      setNewData(DataMessage?.messages);
    }
  }, [DataMessage]);

  useEffect(() => {
    if (DataMessage) {
      setScroller((v: any) => !v);

    }
  }, [NewData, setScroller]);



  if (isLoading) {
    return <Spin />;
  } else {
    return (
      <div className='Messages'>
        {NewData?.map((item: any, index: any) => {
          const { message, senderId } = item;
          const WhoMessage = id === senderId;

          return (
            <div key={index} className='Message_Container'>
              <div className={WhoMessage ? 'HisMessage' : 'MyMessage'}>{message}</div>
            </div>
          );
        })}
      </div>
    );
  }
};

export default Messages;
