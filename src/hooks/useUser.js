import { useEffect, useState } from 'react';
export function useUser() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getUser = async () => {
      const res = await fetch('/api/user');
      const data = await res.json();
      console.log('data: ', data?.uid);
      setUser(data);
    };

    getUser();
  }, []);
  return { user };
}
