import React from "react";
import { View, Text, Button } from "react-native";
import useNavigation from "@/hooks/useNavigation";

const VerifySuccessScreen = ({ navigation }) => {
  const { handleNavigate } = useNavigation(navigation);
  return (
    <View>
      <Text>Đăng ký thành công</Text>
    </View>
  );
};

export default VerifySuccessScreen;
