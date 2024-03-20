// useDecodedToken.ts
import { useEffect, useState } from 'react';
import { TOKEN } from '../api/config';
import { decodeToken } from 'react-jwt';

interface DecodedToken {
  _id: string;
}

const useDecodedToken = (): DecodedToken | null => {
  const [decodedToken, setDecodedToken] = useState<DecodedToken | null>(null);
  useEffect(() => {
    const storedToken = localStorage.getItem(TOKEN);
  
    if (storedToken) {
      const decoded = decodeToken(storedToken);
      setDecodedToken(decoded as DecodedToken);
    } else {
      setDecodedToken(null);
    }
  }, []);

  return decodedToken;
};

export default useDecodedToken;
