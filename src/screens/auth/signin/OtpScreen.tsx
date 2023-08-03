import React, { useContext } from "react";
import { View, Text, Button } from "react-native";

import { AuthContext } from "@/context/AuthContext";
import useNavigation from "@/hooks/useNavigation";

import { OtpSigninProps } from "@/utils/createProps";

const OtpScreen = ({ navigation }: OtpSigninProps) => {
  console.log(typeof navigation);
  const { handleNavigate } = useNavigation(navigation);
  const { signin } = useContext(AuthContext);

  return (
    <View>
      <Text>Mã Otp</Text>
      <Button title="Vào màn home" onPress={() => signin("01293")} />
    </View>
  );
};

export default OtpScreen;
