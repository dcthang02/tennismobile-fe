import React, { ReactNode } from "react";
import { View } from "react-native";
import { ViewStyle } from "react-native";

type TPRowProps = {
  children: ReactNode;
  style?: ViewStyle;
};

export const TPRow = ({ children, style }: TPRowProps) => {
  return (
    <View
      style={{
        ...style,
        flexDirection: "row",
      }}
    >
      {children}
    </View>
  );
};
