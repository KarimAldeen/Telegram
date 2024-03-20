import React, { useState, useRef, useEffect } from 'react';
import { FaSmile } from 'react-icons/fa';
import { FaClosedCaptioning, FaLink, FaMicrophone } from 'react-icons/fa6';
import EmojiPicker from 'emoji-picker-react';
import { IoMdClose } from 'react-icons/io';
import { BsSend } from 'react-icons/bs';
import { useAddMessage } from '../../api/message';
import { useParams } from 'react-router-dom';
import { decodeToken } from 'react-jwt';
import { TOKEN } from '../../api/config';
import io from 'socket.io-client';

const BottomInput = ({setScroller}:any) => {
  const [showEmoji, setShowEmoji] = useState(false);
  const emojiPickerRef = useRef<any>(null);
    const [Input, setInput] = useState("")
  const handleEmojiOpen = () => {
    setShowEmoji(!showEmoji);
  };
  const handleEmojiClick = (value:any) => {
    setInput((prev: string) => prev + value?.emoji);
    
  };
 
const handleInputChange = (e: any) => {
  setInput((prev: any) => e?.target?.value);
  
}

const {id,chatId} = useParams()

const {mutate,isSuccess} = useAddMessage(chatId)

const storedToken = localStorage.getItem(TOKEN);
const myDecodedToken = decodeToken(storedToken || "") as any;
const userId = myDecodedToken?._id

const handleSubmit = (event: any) => {
  event.preventDefault();
  setShowEmoji(false);
 
  setInput("")

  mutate({
    "senderId":userId,
    "chatId" : chatId,
    "message" : Input
  })
  socket.emit('sendMessage', { recipientSocketId:userId, messageContent : Input });


};
useEffect(() => {
  if(isSuccess){
      setScroller((v:any)=> !v)

  }

}, [isSuccess])



const [socket, setSocket] = useState<any>(null);
useEffect(() => {
  const socketInstance = io('http://localhost:4000'); 
  setSocket(socketInstance);
 
}, []);
useEffect(() => {
  if (socket) {
    socket.on('getMessage', (message:any) => {
      console.log('Received message:', message);
    });
  }
}, [socket]);

  return (
    <div className='BottomInput'>
      <div className="SearchBar">
        <div className='MenuSvg'>
          <FaLink />
        </div>
        <form onSubmit={handleSubmit}>
      <input
        onFocus={() => setShowEmoji(false)}
        type="text"
        name="Input"
        onChange={handleInputChange}
        placeholder="Message"
        value={Input}
        className='Input'
        required
      />
    </form>     
       <FaSmile onClick={handleEmojiOpen} />
      </div>
      {showEmoji &&
      <div className='emoji-picker'  ref={emojiPickerRef}>
         <EmojiPicker onEmojiClick={handleEmojiClick } width={350} height={400} searchDisabled={true}  />
         <IoMdClose onClick={handleEmojiOpen}/>
      </div>
      }
      
      <span>
        {Input == "" 
        ?  
        <FaMicrophone/>
      :  
      <BsSend onClick={handleSubmit}/>
      }
        
      </span>
    </div>
  );
};

export default BottomInput;
