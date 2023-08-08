import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AuthStackParams } from "@/navigation/auth/auth";

export type StartSigninProps = NativeStackScreenProps<
  AuthStackParams,
  "StartSignin"
>;

export type SigninProps = NativeStackScreenProps<AuthStackParams, "Signin">;

export type OtpSigninProps = NativeStackScreenProps<
  AuthStackParams,
  "OtpSignin"
>;

export type StartSignupProps = NativeStackScreenProps<
  AuthStackParams,
  "StartSignup"
>;

export type SignupProps = NativeStackScreenProps<AuthStackParams, "Signup">;

export type OtpSignupProps = NativeStackScreenProps<
  AuthStackParams,
  "OtpSignup"
>;

export type VerifyAccountProps = NativeStackScreenProps<
  AuthStackParams,
  "VerifyAccount"
>;

export type VerifySuccessProps = NativeStackScreenProps<
  AuthStackParams,
  "VerifySuccess"
>;
