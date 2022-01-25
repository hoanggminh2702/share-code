import React from 'react';
import { ChatLayoutProps } from '..';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

type HeaderProps = {} & ChatLayoutProps;

const Header = ({ setLoginInfo }: HeaderProps) => {
  return (
    <div id="header">
      <LeftSide />
      <RightSide setLoginInfo={setLoginInfo} />
    </div>
  );
};

export default Header;
