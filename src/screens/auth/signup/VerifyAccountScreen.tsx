import React from "react";
import { View, Text, Button } from "react-native";

import TPBackground from "@/components/Atom/TPBackgroud";
import TPWrapper from "@/components/Atom/TPWrapper";
import TPText from "@/components/Atom/TPText";
import TPButton from "@/components/Molecules/TPButton";
import TPHeader from "@/components/Molecules/TPHeader";
import TPVerifyAccount from "@/components/Organisms/TPVerifyAccount";
import { SafeAreaView } from "react-native-safe-area-context";

import useNavigation from "@/hooks/useNavigation";
import { VerifyAccountProps } from "@/utils/createProps";
import { COLORS } from "@/constant/colors";

const VerifyAccountScreen = ({ navigation }: VerifyAccountProps) => {
  const { handleNavigate } = useNavigation(navigation);
  return (
    <TPBackground>
      <SafeAreaView>
        <TPHeader
          headerTitle=""
          right={
            <TPButton
              title="Hoàn thành"
              buttonType="text"
              color={COLORS.green[600]}
              onPress={() => handleNavigate("VerifySuccess")}
            />
          }
        />
        <TPWrapper paddingHorizontal={16}>
          <TPText variant="heading4">Xác thực tài khoản</TPText>
          <TPWrapper marginBottom={15} />
          <TPVerifyAccount />
        </TPWrapper>
      </SafeAreaView>
    </TPBackground>
  );
};

export default VerifyAccountScreen;
