import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
  isLoggedIn: boolean;
};

const Register = (props: Props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Only update when `props.isLoggedIn` changes
  }, [props.isLoggedIn]);

  const setPasswordFunc = (e: any) => {
    setPassword(e.target.value);
    if (e.target.value === confirmPassword) {
      setPasswordError('');
    }
  };

  const setPasswordConfirmFunc = (e: any) => {
    setConfirmPassword(e.target.value);
    if (e.target.value === password) {
      setPasswordError('');
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordError('The passwords do not match.');
      return;
    }
    sessionStorage.setItem('registeredUser', JSON.stringify({ username, password }));
    navigate('/');
  };

  return (
    <div className='register-page'>
      {props.isLoggedIn ? (
        <div style={{ background: "#7F5F4F", color: "#F7F5F4", textAlign: "center" }}>
          <h2>You are already registered</h2>
        </div>
      ) : (
        <div className="register-container">
          <div className="register-box">
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" value={username}
                  onChange={(e) => setUsername(e.target.value)} required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password}
                  onChange={setPasswordFunc} required />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword" value={confirmPassword}
                  onChange={setPasswordConfirmFunc} required />
              </div>
              {passwordError && <div className="form-error-register">{passwordError}</div>}
              <button type="submit" className="register-button">Register</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );

};

export default Register;
