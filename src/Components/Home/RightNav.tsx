import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { FaEllipsisV, FaSearch } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import useImageError from '../../Hooks/useImageError';
import { useGetAllUsers } from '../../api/user';
import { UserImageURL } from '../../Layout/app/Const';

const RightNav = () => {
  
        const {id} = useParams()
        const {data} = useGetAllUsers(id)          
  return (
    <div className='RightNav'>
            <span>
                <img src={data?.userImage || UserImageURL} className='UserImage' onError={useImageError} alt="ChatCard_Image" />
                <div>
                  <h1>{data?.name}</h1>
                 <p>
                 {data?.isOnline ? "online" : data?.lastActive }
                 </p>
                </div>
              </span>
            <div>
            <FaPhone />
            <FaSearch />
            <FaEllipsisV />

            </div>
    </div>
  )
}

export default RightNav