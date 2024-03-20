import { useEffect } from 'react';

const useClickOutside = (ref:any, callback:any) => {
  const handleClickOutside = (event:any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  };

  useEffect(() => {
    const handleClick = (event:any) => handleClickOutside(event);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [ref, callback]);
};

export default useClickOutside;
