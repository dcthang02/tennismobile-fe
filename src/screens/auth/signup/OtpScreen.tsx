import React from "react";
import { View, Text, Button } from "react-native";

import useNavigation from "@/hooks/useNavigation";

const OtpSignupScreen = ({ navigation }) => {
  const { handleNavigate } = useNavigation(navigation);
  return (
    <View>
      <Text>Mã Otp</Text>
    </View>
  );
};

export default OtpSignupScreen;
