import React from "react";
import { View, Text, Button } from "react-native";

import useNavigation from "../../hooks/useNavigation";

const MemberScreen = ({ navigation }) => {
  const { handleNavigate } = useNavigation(navigation);
  return (
    <View>
      <Text>Danh sách thành viên</Text>
      {/* <AppButton
        title="Hoàn thành"
        onPress={() => handleNavigate("HomeStack")}
      /> */}
    </View>
  );
};

export default MemberScreen;
