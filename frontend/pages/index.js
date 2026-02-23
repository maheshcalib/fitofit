import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Home = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold">Welcome to Fitofit</h1>
      {user ? <p>Hello, {user.name}</p> : <p>Please log in.</p>}
    </div>
  );
};

export default Home;
