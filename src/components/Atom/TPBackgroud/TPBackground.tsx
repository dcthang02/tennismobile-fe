import React, { ReactNode } from "react";
import { View, Keyboard } from "react-native";

import { COLORS } from "@/constant/colors";

type TPBackgroundProps = {
  children?: ReactNode;
};

export const TPBackground = ({ children }: TPBackgroundProps) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#e4e8ec",
      }}
      onTouchStart={Keyboard.dismiss}
    >
      {children}
    </View>
  );
};
