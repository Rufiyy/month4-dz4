// src/App.js
import React, { useState, useEffect } from 'react';
import MainPage from './components/MainPage';
import ErrorPage from './components/ErrorPage';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const name = prompt('Введите ваше имя:');
    const lastname = prompt('Введите вашу фамилию:');
    
    setUser({ name, lastname });
  }, []);

  if (!user) return null;

  if (user.name === 'John' && user.lastname === 'Johns') {
    return <MainPage user={user} />;
  } else {
    return <ErrorPage user={user} />;
  }
}

export default App;