import React, { useMemo } from "react";
import TPText from "@/components/Atom/TPText";
import { Button, TouchableOpacity, Text, Pressable } from "react-native";
import { ButtonStyled } from "./style";
import { COLORS } from "@/constant/colors";

type ButtonProps = {
  title: string;
  isFullWidth?: boolean;
  size?: "large" | "default" | "small";
  buttonType?: "solid" | "outline" | "text";
  disable?: boolean;
  color?: string;
  backgroundColor?: string;
  onPress?: () => void;
};

export const TPButton = ({
  title,
  isFullWidth = true,
  size = "default",
  buttonType = "solid",
  disable = false,
  color = COLORS.charcoal[900],
  backgroundColor = COLORS.green[600],
  onPress,
}: ButtonProps) => {
  const bgColor = useMemo(() => {
    if (buttonType === "text") return "transparent";
    return backgroundColor;
  }, [buttonType, backgroundColor]);

  return (
    <ButtonStyled
      backgroundColor={bgColor}
      size={size}
      fullWidth={isFullWidth}
      onPress={onPress}
      outline={buttonType === "outline"}
      color={color}
    >
      <Text style={{ textAlign: "center" }}>
        <TPText variant="button" color={color}>
          {title}
        </TPText>
      </Text>
    </ButtonStyled>
  );
};
