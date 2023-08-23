import React, { useState, createContext } from "react";

export const MyContext = createContext<{
  dropMenu: boolean;
  setDropMenu: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  dropMenu: false,
  setDropMenu: () => {},
});

export const ContextProvoder: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [dropMenu, setDropMenu] = useState(true);
  return (
    <MyContext.Provider value={{ dropMenu, setDropMenu }}>
      {children}
    </MyContext.Provider>
  );
};
