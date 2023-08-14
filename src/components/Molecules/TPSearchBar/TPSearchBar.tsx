import React from "react";
import { TextInput, TextInputProps } from "react-native";
import TPIcon from "@/components/Atom/TPIcon";
import TPRow from "@/components/Atom/TPRow";
import { COLORS } from "@/constant/colors";

export const TPSearchBar = ({ placeholder }: TextInputProps) => {
  return (
    <TPRow
      style={{
        borderWidth: 2,
        borderColor: COLORS.charcoal[300],
        backgroundColor: COLORS.charcoal.white,
        borderRadius: 50,
        padding: 10,
        alignItems: "center",
        gap: 15,
      }}
    >
      <TPIcon name="zoom" size="small" />
      <TextInput style={{ fontSize: 16, flex: 1 }} placeholder={placeholder} />
    </TPRow>
  );
};
