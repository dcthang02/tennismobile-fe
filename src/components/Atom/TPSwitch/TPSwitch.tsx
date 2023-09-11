import { COLORS } from "@/constant/colors";
import React from "react";
import { Text } from "react-native";
import { Switch, SwitchProps } from "react-native-switch";

type TPSwitchProps = {
  value: boolean;
  onChange?: (value: boolean) => void;
} & SwitchProps;

export const TPSwitch = ({
  value,
  onChange,
  activeText = "",
  inActiveText = "",
  backgroundActive = COLORS.green[600],
  backgroundInactive = COLORS.charcoal[400],
  ...props
}: TPSwitchProps) => {
  return (
    <Switch
      value={value}
      onValueChange={onChange}
      activeText={activeText}
      inActiveText={inActiveText}
      barHeight={28}
      backgroundActive={backgroundActive}
      backgroundInactive={backgroundInactive}
      circleSize={24}
      circleBorderWidth={0}
      switchLeftPx={2.5}
      switchRightPx={2.5}
      renderActiveText={false}
      renderInActiveText={false}
      switchBorderRadius={50}
      {...props}
    />
  );
};
