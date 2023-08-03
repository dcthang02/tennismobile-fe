import React, { ReactNode } from "react";
import { View } from "react-native";

type CardProps = {
  children: ReactNode;
  rounded?: boolean;
};

const Card = ({ children, rounded = true }: CardProps) => {
  return (
    <View style={{ backgroundColor: "#fff", padding: 20 }}>{children}</View>
  );
};

export default React.memo(Card);
