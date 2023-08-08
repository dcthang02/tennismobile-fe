import React, { useContext, useEffect } from "react";

import TPBackground from "@/components/Atom/TPBackgroud";
import TPWrapper from "@/components/Atom/TPWrapper";
import TPText from "@/components/Atom/TPText";
import TPHeader from "@/components/Molecules/TPHeader";
import TPOtpCountdown from "@/components/Molecules/TPOtpCountdown";
import TPOtpInput from "@/components/Organisms/TPOtpInput";
import { SafeAreaView } from "react-native-safe-area-context";

import { OtpSignupProps } from "@/utils/createProps";
import useNavigation from "@/hooks/useNavigation";

import { OtpContext } from "@/context/OtpContext";

const OtpSignupScreen = ({ navigation }: OtpSignupProps) => {
  const { handleNavigate } = useNavigation(navigation);
  const { value } = useContext(OtpContext);

  useEffect(() => {
    if (value.length === 6) handleNavigate("VerifyAccount");
  }, [value]);

  return (
    <TPBackground>
      <SafeAreaView>
        <TPHeader headerTitle="otp" />
        <TPWrapper paddingHorizontal={16}>
          <TPText variant="heading4">Mã OTP</TPText>
          <TPWrapper marginBottom={16} />
          <TPText variant="body16">
            Nhập 6 chữ số được gửi qua số điện thoại
          </TPText>
          <TPText variant="body16-semibold">0906939158</TPText>
          <TPWrapper marginBottom={30} />
          <TPOtpInput />
          <TPWrapper marginBottom={30} />
          <TPOtpCountdown />
        </TPWrapper>
      </SafeAreaView>
    </TPBackground>
  );
};

export default OtpSignupScreen;
