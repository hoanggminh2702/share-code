import React from 'react';
import './style.css';
import Header from './Header';
import { LoginInfo } from '../App';
import Sidebar from './Header/SideBar';

export type ChatLayoutProps = {
  loginInfo?: LoginInfo;
  setLoginInfo?: (fn: LoginInfo) => void;
};

const ChatLayout = ({
  loginInfo = undefined,
  setLoginInfo,
}: ChatLayoutProps) => {
  return (
    <div id="layout">
      <Header setLoginInfo={setLoginInfo} />
      {loginInfo && loginInfo.isLogin && <Sidebar />}
    </div>
  );
};

export default ChatLayout;
