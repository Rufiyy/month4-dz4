// src/components/MainPage.js
import React, { useState, useEffect } from 'react';

function MainPage({ user }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setUserData(user);
  }, [user]);

  if (!userData) return null;

  return (
    <div>
      Добро пожаловать {userData.name} {userData.lastname} мы тебя ждали
    </div>
  );
}

export default MainPage;