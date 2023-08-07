import React from "react";
import { createIconSetFromIcoMoon } from "@expo/vector-icons";
import { COLORS } from "@/constant/colors";

type TPIconProps = {
  name:
    | "account"
    | "add"
    | "administrator-male"
    | "alarm"
    | "arrow-right"
    | "arrow-sm-back"
    | "arrow-sm-down"
    | "b-chart"
    | "bagde"
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
  size?: "default" | "larger" | "symbol";
  color?: string;
};

const sizes = {
  default: 24,
  larger: 48,
  symbol: 128,
};

const Icon = createIconSetFromIcoMoon(
  require("../../../../assets/icomoon/selection.json"),

  "IcoMoon",
  "icomoon.ttf"
);

const TPIcon = ({
  name,
  size = "default",
  color = COLORS.charcoal[900],
}: TPIconProps) => {
  return <Icon name={name} size={sizes[size]} color={color} />;
};

export default TPIcon;
