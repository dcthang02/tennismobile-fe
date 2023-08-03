import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AuthStackParams } from "@/navigation/auth/auth";

export type StartSigninProps = NativeStackScreenProps<
  AuthStackParams,
  "StartSignin"
>;

export type OtpSigninProps = NativeStackScreenProps<
  AuthStackParams,
  "OtpSignin"
>;
