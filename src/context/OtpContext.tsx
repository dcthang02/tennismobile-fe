import React, { ReactNode, createContext, useState } from "react";

export const OtpContext = createContext({
  value: "",
  setValue: (text: string) => {},
  confirm: null,
  setConfirm: (cf: any) => {},
});

export const OtpContextProvider = ({ children }: { children: ReactNode }) => {
  const [value, setValue] = useState("");
  const [confirm, setConfirm] = useState(null);

  return (
    <OtpContext.Provider value={{ value, setValue, confirm, setConfirm }}>
      {children}
    </OtpContext.Provider>
  );
};
