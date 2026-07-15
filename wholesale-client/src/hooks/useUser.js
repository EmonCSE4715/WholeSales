import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const useUser = () => {
  const [users] = useAuthState(auth);
  const email = users?.email;
  const [user, setUser] = useState([]);
 

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`https://wholesales.onrender.com/user/${email}`)
      .then(res => res.json())
      .then(data => {
        setLoading(false);
        setUser(data);
      });
  }, [user,email]);

  return [user[0],  loading];
};

export default useUser;
