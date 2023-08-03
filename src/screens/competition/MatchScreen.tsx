import React from "react";
import { View, Text, Button } from "react-native";
import AppButton from "../../components/Atom/TPButton";
import useNavigation from "../../hooks/useNavigation";

const MatchScreen = ({ navigation }) => {
  const { handleNavigate } = useNavigation(navigation);
  return (
    <View>
      <Text>Đấu trường</Text>
      {/* <AppButton
        title="Hoàn thành"
        onPress={() => handleNavigate("HomeStack")}
      /> */}
    </View>
  );
};

export default MatchScreen;
