import React from "react";
import { View, Button, StyleSheet, Image, Modal, Text } from "react-native";

import Card from "@/components/Atom/Card";
import TPText from "@/components/Atom/TPText";

import { StartSigninProps } from "@/utils/createProps";

const StartSigninScreen = ({ navigation }: StartSigninProps) => {
  return (
    <View style={style.container}>
      <Image style={style.image} source={require("assets/tennis-bg.png")} />

      <Card>
        <View>
          <Image
            style={style.imageBall}
            source={require("assets/tennis-ball.png")}
          />
          <TPText variant="heading4">Hello</TPText>
        </View>
      </Card>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
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
