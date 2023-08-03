import React from "react";
import { View, Text, Button } from "react-native";
import AppButton from "../../../components/Atom/Button";
import useNavigation from "@/hooks/useNavigation";

const VerifySuccessScreen = ({ navigation }) => {
  const { handleNavigate } = useNavigation(navigation);
  return (
    <View>
      <Text>Đăng ký thành công</Text>
      <AppButton
        title="Khám phá ngay"
        onPress={() => handleNavigate("MainStack")}
      />
    </View>
  );
};

export default VerifySuccessScreen;
