import React, { ReactNode } from "react";
import { View } from "react-native";

type TPWrapperProps = {
  children?: ReactNode;
  paddingTop?: number;
  paddingHorizontal?: number;
  paddingBottom?: number;
  marginTop?: number;
  marginBottom?: number | "auto";
  marginLeft?: number;
  gap?: number;
  flex?: number;
  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-around"
    | "space-between"
    | "space-evenly";
};

export const TPWrapper = ({
  children,
  paddingTop = 0,
  paddingHorizontal = 0,
  paddingBottom = 0,
  marginTop = 0,
  marginBottom = 0,
  marginLeft = 0,
  gap = 0,
  flex = 0,
  justifyContent = "flex-start",
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
        gap,
        flex,
        justifyContent,
      }}
    >
      {children}
    </View>
  );
};
