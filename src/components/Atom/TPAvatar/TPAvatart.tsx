import React from "react";

import { Image } from "react-native";

type TPAvatarProps = {
  uri: string;
  size?: "small" | "default" | "medium" | "large";
};

const sizes = {
  small: 36,
  default: 40,
  medium: 68,
  large: 102,
};

export const TPAvatar = ({ uri, size = "default" }: TPAvatarProps) => {
  return (
    <Image
      source={{ uri }}
      style={{ borderRadius: sizes[size] / 2 }}
      width={sizes[size]}
      height={sizes[size]}
    />
  );
};
