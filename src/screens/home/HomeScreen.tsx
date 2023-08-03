import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AppButton from "../../components/Atom/TPButton";

import useNavigation from "../../hooks/useNavigation";

const HomeScreen = ({ navigation }) => {
  const { handleNavigate } = useNavigation(navigation);
  return (
    <View>
      <Text>Chào buổi sáng</Text>
      <AppButton
        title={"Thông báo"}
        onPress={() =>
          handleNavigate("HomeStack", {
            screen: "Notification",
          })
        }
      />
      <View>
        <Text>Thống kê</Text>
      </View>
      <View>
        <Text>Trận đấu sắp tới</Text>
        <AppButton
          title={"Xem tất cả"}
          onPress={() =>
            handleNavigate("HomeStack", {
              screen: "HomeAllMatch",
            })
          }
        />
        <TouchableOpacity
          onPress={() =>
            handleNavigate("HomeStack", {
              screen: "HomeMatch",
              params: {
                competitor: "Nguyễn Vũ",
              },
            })
          }
        >
          <Text>Nguyễn Vũ</Text>
          <Text>28/2/2023</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text>Tay vợt gần bạn</Text>
      </View>
    </View>
  );
};

export default HomeScreen;
