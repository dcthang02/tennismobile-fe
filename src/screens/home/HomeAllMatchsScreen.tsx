import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import useNavigation from "../../hooks/useNavigation";

const HomeAllMatchsScreen = ({ navigation }) => {
  const { handleNavigate } = useNavigation(navigation);
  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          handleNavigate("HomeMatch", {
            competitor: "Nguyễn Vũ",
          })
        }
      >
        <Text>Nguyễn Vũ</Text>
        <Text>28/2/2023</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeAllMatchsScreen;
