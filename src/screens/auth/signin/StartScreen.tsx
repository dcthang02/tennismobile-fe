import React from "react";
import { View, Button, StyleSheet, Image, Modal, Text } from "react-native";

import Card from "@/components/Atom/Card";
import TPText from "@/components/Atom/TPText";
import TPButton from "@/components/Molecules/TPButton";

import { COLORS } from "@/constant/colors";

import TPIcon from "@/components/Atom/TPIcon";

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

          <View style={{ alignItems: "center" }}>
            <TPIcon name="add" size="default" />
          </View>

          <TPButton
            title="Đăng nhập"
            size="large"
            onPress={() => {
              console.log("dasd");
            }}
            color={COLORS.charcoal.white}
          />
          <TPButton
            title="siuuu"
            size="large"
            buttonType="outline"
            backgroundColor={COLORS.error[400]}
            color={COLORS.warning[400]}
          />
          <TPButton
            title="Tiếp tục là khách"
            size="large"
            buttonType="text"
            color={COLORS.green[600]}
          />
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
