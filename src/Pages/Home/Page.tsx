import React, { useLayoutEffect, useRef, useState } from 'react';
import SideNav from '../../Components/Home/SideNav';
import ChatCard from '../../Components/Home/ChatCard';
import RightNav from '../../Components/Home/RightNav';
import Messages from '../../Components/Home/Messages';
import BottomInput from '../../Components/Home/BottomInput';
import { useGetAllChats } from '../../api/chats';
import useToken from '../../Hooks/useToken'; // Correct import statement
import { TOKEN } from '../../api/config';
import { decodeToken } from 'react-jwt';

const Page = ({ show = true }) => {
  const scrollableDivRef = useRef<any>(null);
  // const userId = useToken(); 
  const storedToken = localStorage.getItem(TOKEN)as any ;
    const decodedToken = decodeToken(storedToken) as any;
    const userId = decodedToken?._id;
    

  const { data: chatsData, isLoading: chatsLoading } = useGetAllChats(userId);

  const [scroller, setScroller] = useState(false);

  useLayoutEffect(() => {
    if (scrollableDivRef.current && chatsData?.Chats && scroller) {
      scrollableDivRef.current.scrollTop = scrollableDivRef.current.scrollHeight;
      setScroller(false);
    }
  }, [chatsData, scroller]);

  return (
    <div className="Home_Page">
      <div className="Home_Left">
        <nav className="Home_Left_NavBar">
          <SideNav />
        </nav>
        <main className="Home_Left_Body">
          {chatsData && (
            <div className="ChatCards">
              <ChatCard Data={chatsData.Chats} Loading={chatsLoading} />
            </div>
          )}
        </main>
      </div>
      {show && (
        <div className="Home_Right">
          <nav className="Home_Right_NavBar">
            <RightNav />
          </nav>
          <main className="Home_Right_Body" ref={scrollableDivRef}>
            <Messages setScroller={setScroller} />
            <BottomInput  setScroller={setScroller} />
          </main>
        </div>
      )}
    </div>
  );
};

export default Page;
