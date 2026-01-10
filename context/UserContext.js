import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    firstName: 'Mike',
    lastName: 'Wheeler',
    email: 'mike@example.com',
    phone: '+1 234 567 8900',
    address: '123 Main Street',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
  });

  const updateUserData = (newData) => {
    setUserData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  return (
    <UserContext.Provider value={{ userData, updateUserData }}>
      {children}
    </UserContext.Provider>
  );
};