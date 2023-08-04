import React from "react";
import { View, Button, StyleSheet, Image, Modal, Text } from "react-native";

import Card from "@/components/Atom/Card";
import TPText from "@/components/Atom/TPText";
import TPButton from "@/components/Molecules/TPButton";

import { COLORS } from "@/constant/colors";

import { StartSigninProps } from "@/utils/createProps";

const StartSigninScreen = ({ navigation }: StartSigninProps) => {
  return (
    <View style={style.container}>
      <Image style={style.image} source={require("assets/tennis-bg.png")} />

      <Card>
        <View style={style.cardView}>
          <Image
            style={style.imageBall}
            source={require("assets/tennis-ball.png")}
          />
          <TPText variant="heading4">
            Chào mừng đến với ứng dụng Tennis App
          </TPText>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TPButton
              title="Đăng nhập"
              size="large"
              onPress={() => {
                console.log("hello");
              }}
              color={COLORS.charcoal.white}
              isFullWidth={false}
            />
            <TPButton
              title="Tiếp tục là khách"
              size="large"
              buttonType="text"
              color={COLORS.green[600]}
              isFullWidth={false}
            />
          </View>
        </View>
      </Card>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  cardView: {
    paddingTop: 10,
    paddingBottom: 30,
    gap: 20,
  },
  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: -10,
  },
  imageBall: {
    width: 48,
    height: 48,
  },
});

export default StartSigninScreen;
