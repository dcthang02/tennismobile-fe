import React from "react";
import { View, Text, Button, Animated } from "react-native";
import useNavigation from "../../hooks/useNavigation";

const HomeMatchDetailScreen = ({ route, navigation }) => {
  const { handleGoback } = useNavigation(navigation);
  return (
    <View>
      <Text>Chi tiết trận đấu</Text>
      <Text>Đối thủ</Text>
      <Text>{route.params.competitor}</Text>
    </View>
  );
};

export default HomeMatchDetailScreen;
