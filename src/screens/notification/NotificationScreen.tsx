import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import useNavigation from "../../hooks/useNavigation";

const NotificationScreen = ({ navigation }) => {
  const { handleNavigate } = useNavigation(navigation);
  return (
    <View>
      <TouchableOpacity onPress={() => handleNavigate("NotificationDetail")}>
        <Text>Thông báo 1</Text>
        <Text>1 phút trước</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NotificationScreen;
