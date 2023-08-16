import React from "react";
import { View, Text, Button, Animated } from "react-native";
import useNavigation from "../../hooks/useNavigation";
import { HomeMatchDetailProps } from "@/utils/createProps";

const HomeMatchDetailScreen = ({ route, navigation }: HomeMatchDetailProps) => {
  const { handleGoback } = useNavigation(navigation);
  return (
    <View>
      <Text>Chi tiết trận đấu</Text>
      <Text>Đối thủ</Text>
      <Text>{route.params.matchId}</Text>
    </View>
  );
};

export default HomeMatchDetailScreen;
