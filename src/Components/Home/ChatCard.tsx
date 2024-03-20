import React from 'react'
import useImageError from '../../Hooks/useImageError'
import { useNavigate } from 'react-router-dom'
import { Skeleton } from 'antd';
import { UserImageURL } from '../../Layout/app/Const';

const ChatCard = ({ Data,Loading }: any) => {
  const navigate = useNavigate()
 
  return (
    <Skeleton avatar active paragraph={{ rows: 1 }} loading={Loading } >
      {
        Data?.map((item: any, index: any) => {
          const {name,userImage,lastMessage,_id,chatId,isOnline,lastActive} = item
            
          return (
            <div onClick={()=>navigate(`/${_id}/${chatId}`)} key={_id}  className='ChatCard'>
              <span>
                <img   src={userImage || UserImageURL}  className='UserImage' onError={useImageError} alt="ChatCard_Image" />
                <div>
                  <h1>{item?.name}</h1>
                 <p>
                 {lastMessage}
                 </p>
                </div>
              </span>
              <p>
              {isOnline ? "online" : lastActive }
              
              </p>
            </div>
          )
        })
      }
  </Skeleton>
  )
}

export default ChatCard