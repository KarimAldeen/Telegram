// useToken.tsx
import { useEffect, useState } from 'react';
import { decodeToken } from 'react-jwt';
import { TOKEN } from '../api/config';

const useToken = () => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedToken = localStorage?.getItem(TOKEN);

    if (storedToken) {
      try {
        const decodedToken = decodeToken(storedToken) as any;
        const user = decodedToken?._id;

        if (user) {
          setUserId(user);
        }
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
  }, []);

  return userId;
};

export default useToken; // Make sure to export the hook
