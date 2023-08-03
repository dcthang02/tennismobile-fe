import React from "react";
import { View, Text, Button } from "react-native";

import useNavigation from "@/hooks/useNavigation";

const SignupScreen = ({ navigation }) => {
  const { handleNavigate } = useNavigation(navigation);
  return (
    <View>
      <Text>Đăng ký</Text>
      <Button title="Tiếp theo" onPress={() => handleNavigate("OtpSignup")} />
      <Button
        title="Đăng nhập"
        onPress={() =>
          handleNavigate("SigninStack", {
            screen: "Signin",
          })
        }
      />
    </View>
  );
};

export default SignupScreen;
