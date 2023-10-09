import React from "react";
import TPButton from "@/components/Molecules/TPButton";
import TPAuthStart from "@/components/Organisms/TPAuthStart";

import { COLORS } from "@/constant/colors";

import { StartSignupProps } from "@/utils/createProps";

import useNavigation from "@/hooks/useNavigation";

const SignupScreen = ({ navigation }: StartSignupProps) => {
  const { handleNavigate } = useNavigation(navigation);
  return (
    <TPAuthStart>
      <TPButton
        title="Đăng ký"
        size="large"
        onPress={() => handleNavigate("Signup")}
      />
      <TPButton
        title="Đăng nhập"
        size="large"
        backgroundColor={COLORS.charcoal.background}
        onPress={() => handleNavigate("Signin")}
      />
      <TPButton
        title="Tiếp tục là khách"
        size="large"
        buttonType="text"
        color={COLORS.green[600]}
      />
    </TPAuthStart>
  );
};

export default SignupScreen;
