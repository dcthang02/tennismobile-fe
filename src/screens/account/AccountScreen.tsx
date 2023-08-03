import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { AuthContext } from "@/context/AuthContext";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <View>
      <Text>Tài khoản</Text>
      <Button title="Chỉnh sửa" />
      <Button title="Đăng xuất" onPress={signout} />
    </View>
  );
};

export default AccountScreen;
