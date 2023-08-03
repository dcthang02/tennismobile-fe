import React from "react";
import { View, Text, Button } from "react-native";

const StartSigninScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Chào mừng đến với ứng dụng Tennis App</Text>
      <Button title="Đăng nhập" onPress={() => navigation.navigate("Signin")} />
      <Button title="Tiếp tục là khách" />
    </View>
  );
};

export default StartSigninScreen;
