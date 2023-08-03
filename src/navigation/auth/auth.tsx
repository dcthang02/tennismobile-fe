import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SigninScreen from "@/screens/auth/signin/SigninScreen";
import StartSigninScreen from "@/screens/auth/signin/StartScreen";
import OtpScreen from "@/screens/auth/signin/OtpScreen";
import SignupScreen from "@/screens/auth/signup/SignupScreen";
import StartSignupScreen from "@/screens/auth/signup/StartScreen";
import OtpSignupScreen from "@/screens/auth/signup/OtpScreen";
import VerifyAccountScreen from "@/screens/auth/signup/VerifyAccountScreen";
import VerifySuccessScreen from "@/screens/auth/signup/VerifySuccessScreen";

export type AuthStackParams = {
  StartSignin: undefined;
  OtpSignin: undefined;
  Signin: undefined;
  StartSignup: undefined;
  Signup: undefined;
  OtpSignup: undefined;
  VerifyAccount: undefined;
  VerifySuccess: undefined;
  SigninGroup: undefined;
  SignupGroup: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParams>();

const SigninStack = () => {
  return (
    <Stack.Group>
      <Stack.Screen name="StartSignin" component={StartSigninScreen} />
      <Stack.Screen name="Signin" component={SigninScreen} />
      <Stack.Screen name="OtpSignin" component={OtpScreen} />
    </Stack.Group>
  );
};

const SignupStack = () => {
  return (
    <Stack.Group>
      <Stack.Screen name="StartSignup" component={StartSignupScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="OtpSignup" component={OtpSignupScreen} />
      <Stack.Screen name="VerifyAccount" component={VerifyAccountScreen} />
      <Stack.Screen name="VerifySuccess" component={VerifySuccessScreen} />
    </Stack.Group>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName={1 === 1 ? "SignupGroup" : "SigninGroup"}>
      <Stack.Group navigationKey="SigninGroup">
        <Stack.Screen
          name="StartSignin"
          component={StartSigninScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Signin" component={SigninScreen} />
        <Stack.Screen name="OtpSignin" component={OtpScreen} />
      </Stack.Group>
      <Stack.Group navigationKey="SignupGroup">
        <Stack.Screen name="StartSignup" component={StartSignupScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="OtpSignup" component={OtpSignupScreen} />
        <Stack.Screen name="VerifyAccount" component={VerifyAccountScreen} />
        <Stack.Screen name="VerifySuccess" component={VerifySuccessScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AuthStack;
