import React from "react";
import { View } from "react-native";
import { createIconSetFromIcoMoon } from "@expo/vector-icons";
import { COLORS } from "@/constant/colors";
import TPIcon from "../TPIcon";

const Icon = createIconSetFromIcoMoon(
  require("assets/icomoon/selection.json"),
  "IcoMoon",
  "icomoon.ttf"
);

type TPRadioProps = {
  active?: boolean;
  radioType?: "select" | "check";
};

export const TPRadio = ({
  active = false,
  radioType = "select",
}: TPRadioProps) => {
  return (
    <View
      style={{
        width: 20,
        height: 20,
        borderRadius: radioType === "select" ? 10 : 1,
        borderWidth: active ? (radioType === "select" ? 5 : 0) : 2,
        borderColor: active ? COLORS.green[600] : COLORS.charcoal[900],
        backgroundColor:
          active && radioType === "check" ? COLORS.green[600] : "transparent",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {radioType === "check" && (
        <Icon
          name="check-big"
          size={14}
          color={active ? COLORS.charcoal.white : "transparent"}
        />
      )}
    </View>
  );
};
