import {
  createContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";

import auth from "@react-native-firebase/auth";

export const AuthContext = createContext({
  token: "",
  preToken: "",
  user: null,
  otp: "",
  setOtp: (text: string) => {},
  confirm: null,
  setConfirm: (cf: any) => {},
  signin: () => {},
  signup: () => {},
  signout: () => {},
  setPreToken: (x: string) => {},
});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(null);
  const [preToken, setPreToken] = useState("");
  const [token, setToken] = useState(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6Iis4NDM1ODM3NDMyOCIsImlhdCI6MTY5NzM4MTE1NiwiZXhwIjoxNjk3Mzg0NzU2fQ.LjzIM012qzWKGf45ohbeaBBUf7xsL5YA8SXf-Fw0Yfc"
  );
  const [otp, setOtp] = useState("");
  const [confirm, setConfirm] = useState<any>(null);

  const onAuthStateChanged = async (user: any) => {
    if (user) {
      setUser(user);
      if (preToken) setToken(preToken);
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, [onAuthStateChanged]);

  const confirmCode = useCallback(
    async (code: string) => {
      try {
        await confirm.confirm(code);
      } catch (error) {
        console.log(error);
      }
    },
    [confirm]
  );

  const handleSignIn = useCallback(async () => {
    await confirmCode(otp);
  }, [confirmCode]);

  const handleSignout = useCallback(() => {
    auth()
      .signOut()
      .then(() => console.log("User signed out!"));
  }, []);

  const handleSignup = useCallback(async () => {
    await confirmCode(otp);
  }, [confirmCode]);

  return (
    <AuthContext.Provider
      value={{
        token,
        preToken,
        user,
        otp,
        setOtp,
        confirm,
        setConfirm,
        signin: handleSignIn,
        signout: handleSignout,
        signup: handleSignup,
        setPreToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
