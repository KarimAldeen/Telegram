import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { TOKEN } from '../../api/config';


const Layout = ({ children ,className=""}: { children: React.ReactNode ,className?: string }) => {
  const navigate = useNavigate()
  const storedToken = localStorage?.getItem(TOKEN);
  

  useEffect(() => {    
    if (storedToken === null || undefined || "") {
      navigate('/auth', { replace: true })
    }
  }, [])

  return (
 <div className='Layout'>
        {children}
 </div>
  )
}

export default Layout