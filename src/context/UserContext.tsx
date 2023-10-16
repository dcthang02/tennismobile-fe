import { ReactNode, createContext, useState } from "react";

export const UserContext = createContext({
  userPhone: "",
  setUserPhone: (phone: string) => {},
});

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [userPhone, setUserPhone] = useState("");

  return (
    <UserContext.Provider
      value={{
        userPhone,
        setUserPhone,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
