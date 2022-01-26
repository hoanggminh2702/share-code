import React, { useContext, useRef, useState } from 'react';
import './App.css';
import Context from './context/Context';
import ChatLayout from './layouts';
import Login from './pages/login';
import Screen from './pages/screen';

type AppProps = {};

export type LoginInfo = {
  username: string;
  isLogin: boolean;
};

const App = (props: AppProps) => {
  const [loginInfo, setLoginInfo] = useState<LoginInfo>({
    username: 'Ẩn danh',
    isLogin: false,
  });

  const socket = useContext(Context);

  const handleLogin = (username: string) => {
    setLoginInfo({
      username: username,
      isLogin: true,
    });
    socket.emit('all client', 'Hoàng Minh đã kết nối');
  };

  return (
    <div>
      <ChatLayout loginInfo={loginInfo} setLoginInfo={setLoginInfo} />
      {loginInfo.isLogin ? (
        <Screen loginInfo={loginInfo} />
      ) : (
        <Login handleLogin={handleLogin} setLoginInfo={setLoginInfo} />
      )}
    </div>
  );
};

export default App;
