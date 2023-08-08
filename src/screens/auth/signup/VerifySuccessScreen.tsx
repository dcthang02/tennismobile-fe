import React from "react";
import { View, Text, Button } from "react-native";

import useNavigation from "@/hooks/useNavigation";
import { VerifySuccessProps } from "@/utils/createProps";
import TPBackground from "@/components/Atom/TPBackgroud";
import TPWrapper from "@/components/Atom/TPWrapper";
import TPRow from "@/components/Atom/TPRow";
import TPConfetti from "assets/icon/confetti.svg";
import { SafeAreaView } from "react-native-safe-area-context";
import TPText from "@/components/Atom/TPText";
import { COLORS } from "@/constant/colors";
import TPButton from "@/components/Molecules/TPButton";

const VerifySuccessScreen = ({ navigation }: VerifySuccessProps) => {
  const { handleNavigate } = useNavigation(navigation);
  return (
    <TPBackground>
      <SafeAreaView>
        <TPWrapper paddingHorizontal={16}>
          <View style={{ alignItems: "center", paddingTop: 60 }}>
            <TPConfetti width={128} height={128} />
            <TPWrapper marginBottom={15} />
            <TPText variant="heading3">Đăng ký thành công</TPText>
            <TPWrapper marginBottom={15} />
            <TPText
              variant="design-note"
              color={COLORS.charcoal[400]}
              alignCenter
            >
              Chúc mừng bạn đã đăng ký thành công, khám phá và tìm những trận
              đấu gây cấn bạn nhé. Chúc vui.
            </TPText>
            <TPWrapper marginBottom={50} />
            <TPButton
              title="Khám phá ngay"
              size="large"
              onPress={() => handleNavigate("MainStack")}
            />
          </View>
        </TPWrapper>
      </SafeAreaView>
    </TPBackground>
  );
};

export default VerifySuccessScreen;
