import React, { useState } from 'react';
import { LoginInfo } from '../../App';
import './style.css';

type LoginProps = {
  setLoginInfo: (data: LoginInfo) => void;
  handleLogin: (username: string) => void;
};

const Login = ({ handleLogin, setLoginInfo }: LoginProps) => {
  const [username, setUsername] = useState<string>('');

  return (
    <div id="login">
      <div className="form-login">
        <div className="form-group">
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            className="username"
          />
          <button onClick={() => handleLogin(username)} className="login-btn">
            Đăng nhập
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
