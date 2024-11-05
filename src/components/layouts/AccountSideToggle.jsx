import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router';

import useSWR from 'swr';

import { Account } from '@toolpad/core/Account';
import {
  AuthenticationContext,
  SessionContext,
} from '@toolpad/core/AppProvider';

import axios from '../../configs/axios';

const AccountSideToggle = () => {
  const navigate = useNavigate();
  const fetcher = (url) => axios.get(url).then((response) => response.data);
  const { data, error, isLoading } = useSWR('/user/profile', fetcher);

  const signOutHandler = async () => {
    try {
      const responce = await axios.post('/auth/sign-out');
      navigate('/');
    } catch (err) {
      console.log(err.response.data.message);
      toast.error(err.response.data.message, {
        position: 'top-center',
      });
    }
  };

  const [session, setSession] = useState(null);

  useEffect(() => {
    if (data) {
      setSession({
        user: {
          name: data.user.name,
          email: data.user.email,
          image: data.user.profilePic.url, // Access the image from profilePic.url
        },
      });
    }
  }, [data]);

  const authentication = useMemo(
    () => ({
      signIn: () => setSession(data),
      signOut: async () => {
        signOutHandler();
      },
    }),
    [data]
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <AuthenticationContext.Provider value={authentication}>
      <SessionContext.Provider value={session}>
        <Account />
      </SessionContext.Provider>
    </AuthenticationContext.Provider>
  );
};

export default AccountSideToggle;
