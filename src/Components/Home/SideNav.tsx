import React from 'react'
import { BsSearch } from 'react-icons/bs';
import { IoMdMenu } from "react-icons/io";

const SideNav = () => {
  return (
    <div className='SideNav'>
       <IoMdMenu />
        <div className="SearchBar">
            <input type="text" placeholder='Search'  />
            <BsSearch/>
        </div>
    </div>
  )
}

export default SideNav