import React, { ReactNode, createContext, useState } from "react";

export const OtpContext = createContext({
  otp: "",
  value: "",
  setValue: (text: string) => {},
});

export const OtpContextProvider = ({ children }: { children: ReactNode }) => {
  const [otp, setOtp] = useState("");
  const [value, setValue] = useState("");

  return (
    <OtpContext.Provider value={{ otp, value, setValue }}>
      {children}
    </OtpContext.Provider>
  );
};
