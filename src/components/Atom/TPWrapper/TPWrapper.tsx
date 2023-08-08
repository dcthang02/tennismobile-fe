import React, { ReactNode } from "react";
import { View } from "react-native";

type TPWrapperProps = {
  children?: ReactNode;
  paddingTop?: number;
  paddingHorizontal?: number;
  paddingBottom?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
};

export const TPWrapper = ({
  children,
  paddingTop = 0,
  paddingHorizontal = 0,
  paddingBottom = 0,
  marginTop = 0,
  marginBottom = 0,
  marginLeft = 0,
}: TPWrapperProps) => {
  return (
    <View
      style={{
        paddingTop,
        paddingHorizontal,
        paddingBottom,
        marginTop,
        marginBottom,
        marginLeft,
      }}
    >
      {children}
    </View>
  );
};
