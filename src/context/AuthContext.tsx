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
  const [token, setToken] = useState("");
  const [otp, setOtp] = useState("");
  const [confirm, setConfirm] = useState<any>(null);

  const onAuthStateChanged = async (user: any) => {
    if (user) {
      setToken(preToken);
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

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
