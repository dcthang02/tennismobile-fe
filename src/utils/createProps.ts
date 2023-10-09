import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import type { AuthStackParams } from "@/navigation/auth/auth";
import type { MainStackParams, MainTabParams } from "@/navigation/main/main";

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

export type HomeProps = BottomTabScreenProps<MainTabParams, "Home">;

export type HomeMatchDetailProps = NativeStackScreenProps<
  MainStackParams,
  "HomeMatch"
>;

export type HomeAllMatchProps = NativeStackScreenProps<
  MainStackParams,
  "HomeAllMatch"
>;

export type MemberProps = BottomTabScreenProps<MainTabParams, "Member">;

export type MemberInfoProps = NativeStackScreenProps<
  MainStackParams,
  "MemberInfo"
>;

export type AccountProps = BottomTabScreenProps<MainTabParams, "Account">;

export type AccountEditProfileProps = NativeStackScreenProps<
  MainStackParams,
  "AccountProfileEdit"
>;

export type MatchProps = BottomTabScreenProps<MainTabParams, "Match">;

export type ShoppingProps = BottomTabScreenProps<MainTabParams, "Shopping">;

export type ShoppingDetailProps = NativeStackScreenProps<
  MainStackParams,
  "ShoppingDetail"
>;

export type MyShopProps = NativeStackScreenProps<MainStackParams, "MyShop">;

export type CreateProductProps = NativeStackScreenProps<
  MainStackParams,
  "CreateProduct"
>;

export type SendCommentProps = NativeStackScreenProps<
  MainStackParams,
  "SendComment"
>;

export type NotificationProps = NativeStackScreenProps<
  MainStackParams,
  "Notification"
>;

export type NotificationDetailProps = NativeStackScreenProps<
  MainStackParams,
  "NotificationDetail"
>;
