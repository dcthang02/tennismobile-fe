import React from "react";

import TPButton from "@/components/Molecules/TPButton";
import TPAuthStart from "@/components/Organisms/TPAuthStart";

import { COLORS } from "@/constant/colors";

import { StartSigninProps } from "@/utils/createProps";

import useNavigation from "@/hooks/useNavigation";

const StartSigninScreen = ({ navigation }: StartSigninProps) => {
  const { handleNavigate } = useNavigation(navigation);
  return (
    <TPAuthStart>
      <TPButton
        title="Đăng nhập"
        size="large"
        onPress={() => {
          handleNavigate("Signin");
        }}
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

export default StartSigninScreen;
