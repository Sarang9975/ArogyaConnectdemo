import React, { createContext, useState, useContext } from 'react';

const StatusContext = createContext();

export const useStatus = () => useContext(StatusContext);

export const StatusProvider = ({ children }) => {
  const [status, setStatus] = useState('Select Status');

  return (
    <StatusContext.Provider value={{ status, setStatus }}>
      {children}
    </StatusContext.Provider>
  );
};