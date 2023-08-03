import React from "react";
import { Button } from "react-native";

type AppButtonProps = {
  title: string;
  onPress: () => {};
};

const AppButton = ({ title, onPress }: AppButtonProps) => {
  return <Button title={title} onPress={onPress} />;
};

export default AppButton;
