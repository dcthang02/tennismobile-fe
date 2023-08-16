import React, { ReactNode, useMemo } from "react";
import TPText from "@/components/Atom/TPText";
import TPRow from "@/components/Atom/TPRow";
import { Button, TouchableOpacity, Text, Pressable } from "react-native";
import { ButtonStyled } from "./style";
import { COLORS } from "@/constant/colors";

type ButtonProps = {
  title: string;
  isFullWidth?: boolean;
  size?: "large" | "default" | "small" | "tiny";
  buttonType?: "solid" | "outline" | "text";
  disable?: boolean;
  color?: string;
  backgroundColor?: string;
  onPress?: () => void;
  endIcon?: ReactNode;
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
  endIcon,
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
      <TPRow
        style={{
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
        }}
      >
        {title && (
          <Text style={{ textAlign: "center" }}>
            <TPText variant="button" color={color}>
              {title}
            </TPText>
          </Text>
        )}
        {endIcon || null}
      </TPRow>
    </ButtonStyled>
  );
};
