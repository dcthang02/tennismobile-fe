import TPRow from "@/components/Atom/TPRow";
import TPText from "@/components/Atom/TPText";
import React, { ReactNode } from "react";
import { StyleSheet } from "react-native";

type TPTabHeaderProps = {
  title: string;
  right?: ReactNode;
};

export const TPTabHeader = ({ title, right }: TPTabHeaderProps) => {
  return (
    <TPRow style={styles.rowHeader}>
      <TPText variant="heading3">{title}</TPText>
      {right || null}
    </TPRow>
  );
};

const styles = StyleSheet.create({
  rowHeader: {
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
