import React from "react";
import { View, Text, Button } from "react-native";
import useNavigation from "@/hooks/useNavigation";

const VerifyAccountScreen = ({ navigation }) => {
  const { handleNavigate } = useNavigation(navigation);
  return (
    <View>
      <Text>Xác thực tài khoản</Text>
    </View>
  );
};

export default VerifyAccountScreen;
