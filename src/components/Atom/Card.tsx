import React, { ReactNode } from "react";
import { View } from "react-native";
import { COLORS } from "@/constant/colors";

type CardProps = {
  children: ReactNode;
  rounded?: boolean;
  transparent?: boolean;
};

const Card = ({ children, rounded = true, transparent = false }: CardProps) => {
  return (
    <View
      style={{
        backgroundColor: !transparent ? COLORS.charcoal.white : "transparent",
        padding: 20,
      }}
    >
      {children}
    </View>
  );
};

export default React.memo(Card);
