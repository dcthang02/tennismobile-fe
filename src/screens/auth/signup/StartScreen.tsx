import React from "react";
import { View, Text, Button } from "react-native";

import useNavigation from "@/hooks/useNavigation";

const StartSignupScreen = ({ navigation }) => {
  const { handleNavigate } = useNavigation(navigation);

  return (
    <View>
      <Text>Start</Text>
      <Button title="Đăng ký" onPress={() => handleNavigate("Signup")} />
      <Button
        title="Đăng nhập"
        onPress={() => handleNavigate("SigninStack", { screen: "Signin" })}
      />
      <Button title="tiếp tục là khách" />
    </View>
  );
};

export default StartSignupScreen;
