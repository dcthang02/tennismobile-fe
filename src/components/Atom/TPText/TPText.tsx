import React, { ReactNode, useMemo } from "react";
import { TEXT_VARIANTS } from "@/constant/textVariants";
import { COLORS } from "@/constant/colors";

import { TextWrapper } from "./style";

enum variantEnum {
  "design-note",
  "heading1",
  "heading2",
  "heading3",
  "heading4",
  "heading5",
  "heading6",
  "body16",
  "body16-semibold",
  "body14-semibold",
  "button",
  "small",
  "small-semibold",
  "tiny",
}

type TPTextProps = {
  variant:
    | "design-note"
    | "heading1"
    | "heading2"
    | "heading3"
    | "heading4"
    | "heading5"
    | "heading6"
    | "body16"
    | "body16-semibold"
    | "body14-semibold"
    | "button"
    | "small"
    | "small-semibold"
    | "tiny";
  color?: string;
  children?: string | "" | ReactNode;
};

export const TPText = ({
  variant,
  children,
  color = COLORS.charcoal[900],
}: TPTextProps) => {
  const { fontSize, lineHeight, fontWeight } = useMemo(
    () => TEXT_VARIANTS[variant],
    [variant]
  );

  return (
    <TextWrapper
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
    >
      {children}
    </TextWrapper>
  );
};
