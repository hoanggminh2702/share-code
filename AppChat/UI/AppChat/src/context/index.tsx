import React, { useState } from 'react';
import { io } from 'socket.io-client';
import SocketContext from './Context';

type SocketProviderProps = {
  children: any;
};

const SocketProvider = ({ children }: SocketProviderProps) => {
  const socket = io('http://localhost:6969');
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export default SocketProvider;
