import React, { useEffect, useState } from 'react';

type Props = {};

const Profile = (props: Props) => {
  const [username, setUsername] = useState('David');

  useEffect(() => {
    const storedUser = sessionStorage.getItem('registeredUser');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUsername(user.username);
    }
  }, []);

  return (
    <div>
      <h2>User name: {username}</h2>
    </div>
  );
};

export default Profile;
