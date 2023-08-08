import React from "react";
import { View, Text, Button } from "react-native";
import useNavigation from "../../hooks/useNavigation";

const ShoppingScreen = ({ navigation }) => {
  const { handleNavigate } = useNavigation(navigation);
  return (
    <View>
      <Text>Shop</Text>
      {/* <AppButton
        title="Hoàn thành"
        onPress={() => handleNavigate("HomeStack")}
      /> */}
    </View>
  );
};

export default ShoppingScreen;
