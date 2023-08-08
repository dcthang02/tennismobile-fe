import React from "react";
import { View, Text, Button } from "react-native";
import useNavigation from "../../hooks/useNavigation";

const MatchScreen = ({ navigation }) => {
  const { handleNavigate } = useNavigation(navigation);
  return (
    <View>
      <Text>Đấu trường</Text>
    </View>
  );
};

export default MatchScreen;
