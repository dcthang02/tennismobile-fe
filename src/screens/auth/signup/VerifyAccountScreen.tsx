import React from "react";
import { View, Text, Button } from "react-native";
import AppButton from "../../../components/Atom/TPButton";
import useNavigation from "@/hooks/useNavigation";

const VerifyAccountScreen = ({ navigation }) => {
  const { handleNavigate } = useNavigation(navigation);
  return (
    <View>
      <Text>Xác thực tài khoản</Text>
      <AppButton
        title="Hoàn thành"
        onPress={() => handleNavigate("VerifySuccess")}
      />
    </View>
  );
};

export default VerifyAccountScreen;
