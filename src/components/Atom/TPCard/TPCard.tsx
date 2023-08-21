import { COLORS } from "@/constant/colors";
import React, { ReactNode } from "react";
import { View, ViewStyle } from "react-native";

type TPCardProps = {
  children?: ReactNode;
  paddingHorizontal?: number;
  paddingVertical?: number;
  overflow?: boolean;
  height?: number;
  maxHeight?: number;
  style?: ViewStyle;
};

export const TPCard = ({
  children,
  paddingHorizontal = 10,
  paddingVertical = 10,
  height,
  style,
}: TPCardProps) => {
  return (
    <View
      style={{
        paddingHorizontal,
        paddingVertical,
        backgroundColor: COLORS.charcoal.white,
        borderRadius: 15,
        maxHeight: height || "auto",
        ...style,
      }}
    >
      {children}
    </View>
  );
};
