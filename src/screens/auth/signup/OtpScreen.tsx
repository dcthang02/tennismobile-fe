import React from "react";
import { View, Text, Button } from "react-native";

import AppButton from "../../../components/Atom/TPButton";
import useNavigation from "@/hooks/useNavigation";

const OtpSignupScreen = ({ navigation }) => {
  const { handleNavigate } = useNavigation(navigation);
  return (
    <View>
      <Text>Mã Otp</Text>
      <AppButton
        title="Tiếp theo"
        onPress={() => handleNavigate("VerifyAccount")}
      />
    </View>
  );
};

export default OtpSignupScreen;
