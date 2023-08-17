import TPText from "@/components/Atom/TPText";
import { COLORS } from "@/constant/colors";
import React from "react";
import { View, StyleSheet } from "react-native";

type TPStatusProps = {
  text: string;
  status?: "successful" | "warning";
};

export const TPStatus = ({ status = "successful", text }: TPStatusProps) => {
  return (
    <View style={{ ...styles.box, ...styles[status] }}>
      <TPText variant="body14" color={styles[status].color}>
        {text}
      </TPText>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    paddingVertical: 8,
    paddingHorizontal: 4,
    borderRadius: 12,
    borderWidth: 1,
  },
  warning: {
    backgroundColor: COLORS.warning[100],
    borderColor: COLORS.warning[300],
    color: COLORS.warning[300],
  },
  successful: {
    backgroundColor: COLORS.successfull[100],
    borderColor: COLORS.successfull[300],
    color: COLORS.successfull[300],
  },
});
