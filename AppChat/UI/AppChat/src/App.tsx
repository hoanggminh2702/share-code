import React, { useState } from 'react';
import './App.css';
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

  console.log(loginInfo.isLogin);
  return (
    <div>
      <ChatLayout loginInfo={loginInfo} setLoginInfo={setLoginInfo} />
      {loginInfo.isLogin ? <Screen /> : <Login setLoginInfo={setLoginInfo} />}
    </div>
  );
};

export default App;
