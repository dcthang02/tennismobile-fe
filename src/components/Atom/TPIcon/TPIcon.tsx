import React from "react";
import { createIconSetFromIcoMoon } from "@expo/vector-icons";
import { COLORS } from "@/constant/colors";
import { View } from "react-native";

export type TypeTPIconName =
  | "account"
  | "add"
  | "administrator-male"
  | "alarm"
  | "arrow-right"
  | "arrow-sm-back"
  | "arrow-sm-down"
  | "b-chart"
  | "badge"
  | "bag"
  | "battle"
  | "board-game"
  | "c-check"
  | "calendar"
  | "caret-sm-up"
  | "chat"
  | "check-big"
  | "check-small"
  | "clock"
  | "close"
  | "cloud-sun"
  | "cockade"
  | "comment"
  | "comments"
  | "confetti"
  | "dead-hand"
  | "dot"
  | "e-remove"
  | "error"
  | "facebook"
  | "gloves"
  | "gold-coin"
  | "google"
  | "gym-shoes"
  | "gym"
  | "house"
  | "ic-symbol-placeholder"
  | "info"
  | "invitation"
  | "left-arrow"
  | "location"
  | "mail"
  | "map-marker"
  | "mobile"
  | "multiple-fill"
  | "multiple-outline"
  | "padlock"
  | "placeholder-outline"
  | "price"
  | "remove_moderator"
  | "repeat-cycle"
  | "resize-x"
  | "resize-y"
  | "right-arrow"
  | "send"
  | "share"
  | "skipping-rope"
  | "stadium"
  | "tennis-ball"
  | "tennis-racket"
  | "tennis"
  | "tranform-origin"
  | "tshirt"
  | "user"
  | "variant5"
  | "verified-account"
  | "vnd"
  | "warning-sign"
  | "zoom";

type TPIconProps = {
  name: TypeTPIconName;
  size?: "small" | "default" | "larger" | "symbol";
  color?: string;
  hasBound?: boolean;
  boundColor?: string;
  borderColor?: string;
  radiusBound?: number;
};

const sizes = {
  small: 16,
  default: 24,
  larger: 48,
  symbol: 128,
};

const Icon = createIconSetFromIcoMoon(
  require("../../../../assets/icomoon/selection.json"),

  "IcoMoon",
  "icomoon.ttf"
);

export const TPIcon = ({
  name,
  size = "default",
  color,
  hasBound = false,
  boundColor = COLORS.green[600],
  borderColor,
  radiusBound = sizes[size] * 2,
}: TPIconProps) => {
  if (hasBound) {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          height: radiusBound,
          width: radiusBound,
          borderRadius: radiusBound / 2,
          backgroundColor: boundColor,
          borderWidth: borderColor ? 1.5 : 0,
          borderColor: borderColor || "transparent",
        }}
      >
        <Icon name={name} size={sizes[size]} color={color} />
      </View>
    );
  }
  return <Icon name={name} size={sizes[size]} color={color} />;
};
