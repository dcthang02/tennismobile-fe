import {
  createContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";

export const AuthContext = createContext({
  token: "",
  signin: (otp: string) => {},
  signup: (phone: string, otp: string) => {},
  signout: () => {},
});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState("");

  const handleSignIn = useCallback((otp: string) => {
    setToken("123");
  }, []);

  const handleSignout = useCallback(() => {
    setToken("");
  }, []);

  const handleSignup = useCallback((phone: string, otp: string) => {
    setToken("123");
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token,
        signin: handleSignIn,
        signout: handleSignout,
        signup: handleSignup,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
