import React, { useState, useEffect } from 'react';

function ErrorPage({ user }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setUserData(user);
  }, [user]);

  if (!userData) return null;

  return (
    <div>
      Тебе сюда нельзя - {userData.name} {userData.lastname}
    </div>
  );
}

export default ErrorPage;
