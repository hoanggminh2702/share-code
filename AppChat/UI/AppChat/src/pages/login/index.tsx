import React, { useState } from 'react';
import { LoginInfo } from '../../App';
import './style.css';

type LoginProps = {
  setLoginInfo: (data: LoginInfo) => void;
};

const Login = ({ setLoginInfo }: LoginProps) => {
  const [username, setUsername] = useState<string>('');
  const handleLogin = () => {
    setLoginInfo({
      username: username,
      isLogin: true,
    });
  };
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
          <button onClick={handleLogin} className="login-btn">
            Đăng nhập
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
