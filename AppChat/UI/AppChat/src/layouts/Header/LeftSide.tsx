import React from 'react';

type LeftSideProps = {};

const LeftSide = (props: LeftSideProps) => {
  return (
    <div className="left-side">
      <div className="logo">
        <img src="src/assets/images/logo-chat.png" alt="" />
      </div>
    </div>
  );
};

export default LeftSide;
