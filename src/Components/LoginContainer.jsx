import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';

const LoginContainer = () => {
  const [showLogin, setShowLogin] = useState(true);

  const handleToggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div>
      {showLogin ? (
        <Login onToggleForm={handleToggleForm} />
      ) : (
        <Signup onToggleForm={handleToggleForm} />
      )}
    </div>
  );
};

export default LoginContainer;
