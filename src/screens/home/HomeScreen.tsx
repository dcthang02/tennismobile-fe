import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import useNavigation from "../../hooks/useNavigation";

const HomeScreen = ({ navigation }) => {
  const { handleNavigate } = useNavigation(navigation);
  return (
    <View>
      <Text>Chào buổi sáng</Text>

      <View>
        <Text>Tay vợt gần bạn</Text>
      </View>
    </View>
  );
};

export default HomeScreen;
