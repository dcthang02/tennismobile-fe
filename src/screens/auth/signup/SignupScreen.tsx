import React from "react";
import { View, Text, Button } from "react-native";

import useNavigation from "@/hooks/useNavigation";

const SignupScreen = ({ navigation }) => {
  const { handleNavigate } = useNavigation(navigation);
  return (
    <View>
      <Text>Đăng ký</Text>
    </View>
  );
};

export default SignupScreen;
