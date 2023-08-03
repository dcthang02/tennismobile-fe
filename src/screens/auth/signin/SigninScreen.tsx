import React from "react";
import { View, Text, Button } from "react-native";

import useNavigation from "@/hooks/useNavigation";

const SigninScreen = ({ navigation }) => {
  const { handleNavigate } = useNavigation(navigation);

  return (
    <View>
      <Text>Vui lòng nhập số điện thoại</Text>
      <Button title="Tiếp theo" onPress={() => handleNavigate("OtpSignin")} />
      <Button
        title="Đăng ký"
        onPress={() =>
          handleNavigate("SignupStack", {
            screen: "Signup",
          })
        }
      />
    </View>
  );
};

export default SigninScreen;
