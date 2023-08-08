import React from "react";
import { View } from "react-native";

import TPBackground from "@/components/Atom/TPBackgroud";
import TPText from "@/components/Atom/TPText";
import TPTextInput from "@/components/Molecules/TPTextInput";
import TPButton from "@/components/Molecules/TPButton";
import TPIcon from "@/components/Atom/TPIcon";
import TPWrapper from "@/components/Atom/TPWrapper";

import { SignupProps } from "@/utils/createProps";
import useNavigation from "@/hooks/useNavigation";
import { COLORS } from "@/constant/colors";

const SignupScreen = ({ navigation }: SignupProps) => {
  const { handleNavigate } = useNavigation(navigation);
  return (
    <TPBackground>
      <TPWrapper paddingTop={70} paddingHorizontal={16}>
        <TPWrapper marginBottom={10}>
          <TPText variant="heading4">Vui lòng nhập số điện thoại</TPText>
        </TPWrapper>

        <TPWrapper marginBottom={30}>
          <TPTextInput label="Số điện thoại" inputType="numeric" />
        </TPWrapper>

        <View style={{ alignItems: "center", gap: 15 }}>
          <TPText variant="body16">hoặc đăng ký với</TPText>
          <View
            style={{ flexDirection: "row", justifyContent: "center", gap: 30 }}
          >
            <TPIcon name="facebook" size="larger" color="red" />
            <TPIcon name="google" size="larger" />
          </View>
        </View>

        <TPWrapper marginTop={80}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 30,
            }}
          >
            <TPText variant="body16">Đã có tài khoản?</TPText>
            <TPButton
              title="Đăng nhập"
              buttonType="text"
              color={COLORS.green[600]}
              onPress={() => handleNavigate("Signin")}
            />
          </View>
          <TPButton
            title="Tiếp theo"
            size="large"
            onPress={() => handleNavigate("OtpSignup")}
          />
        </TPWrapper>
      </TPWrapper>
    </TPBackground>
  );
};

export default SignupScreen;
