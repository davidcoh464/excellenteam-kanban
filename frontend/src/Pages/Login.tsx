import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

type Props = {
  isLoggedIn: boolean;
  setIsLoggedIn: (p: boolean) => void;
};

const Login = (props: Props) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setLoggedIn(props.isLoggedIn);
  }, [props.isLoggedIn]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const registeredUser = sessionStorage.getItem("registeredUser");
    var userInfo: { username: string, password: string };
    if (registeredUser) {
      userInfo = JSON.parse(registeredUser);
      if (username === userInfo.username && password === userInfo.password) {
        props.setIsLoggedIn(true);
      } else {
        alert("Invalid credentials, please try again.");
      }
    } else {
      alert("Not register user was found.");
    }

  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <>
      {isLoggedIn ? null : (
        <div className="login-container">
          <div className="login-box">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" value={username}
                  onChange={(e) => setUsername(e.target.value)} required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password}
                  onChange={(e) => setPassword(e.target.value)} required />
              </div>
              <button type="submit" className="login-button">Log In</button>
            </form>
            <div className="register-span"><span onClick={handleRegister}>Register</span></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
