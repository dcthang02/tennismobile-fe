import React from "react";
import { View, Text, Button, Animated } from "react-native";
import useNavigation from "../../hooks/useNavigation";
import AppButton from "../../components/Atom/TPButton";

const HomeMatchDetailScreen = ({ route, navigation }) => {
  const { handleGoback } = useNavigation(navigation);
  return (
    <View>
      <AppButton title={"Quay lại"} onPress={() => handleGoback()} />
      <Text>Chi tiết trận đấu</Text>
      <Text>Đối thủ</Text>
      <Text>{route.params.competitor}</Text>
    </View>
  );
};

export default HomeMatchDetailScreen;
