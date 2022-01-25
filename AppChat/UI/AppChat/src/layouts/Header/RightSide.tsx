import React from 'react';
import { ChatLayoutProps } from '..';

type RightSideProps = {} & ChatLayoutProps;

const RightSide = ({ setLoginInfo }: RightSideProps) => {
  return (
    <div className="right-side">
      <div
        className="avatar"
        onClick={() =>
          setLoginInfo
            ? setLoginInfo({ username: 'Ẩn danh', isLogin: false })
            : {}
        }
      >
        <img src="src/assets/images/ava-meo.jpg" alt="" />
      </div>
      <div className="user-name"></div>
    </div>
  );
};

export default RightSide;
