import React from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";
import TPIcon from "@/components/Atom/TPIcon";
import TPRow from "@/components/Atom/TPRow";
import { COLORS } from "@/constant/colors";

type TPSearchBarProps = {
  placeholder?: string;
  backgroundColor?: string;
};

export const TPSearchBar = ({
  placeholder,
  backgroundColor = COLORS.charcoal.white,
}: TPSearchBarProps) => {
  return (
    <TPRow style={{ ...styles.row, backgroundColor }}>
      <TPIcon name="zoom" size="small" />
      <TextInput style={{ fontSize: 16, flex: 1 }} placeholder={placeholder} />
    </TPRow>
  );
};

const styles = StyleSheet.create({
  row: {
    borderWidth: 2,
    borderColor: COLORS.charcoal[300],
    borderRadius: 50,
    padding: 10,
    alignItems: "center",
    gap: 15,
  },
});
