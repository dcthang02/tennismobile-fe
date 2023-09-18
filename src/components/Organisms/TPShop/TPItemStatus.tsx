import TPRow from "@/components/Atom/TPRow";
import TPText from "@/components/Atom/TPText";
import { COLORS } from "@/constant/colors";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";

type TPItemStatusProps = {
  vote: number;
  sold: number;
  status: "Còn hàng" | "Hết hàng";
  textColor?: string;
  flexDirection?: "column" | "column-reverse" | "row" | "row-reverse";
};

const ICON_SIZE = 12;

export const TPItemStatus = ({
  vote,
  sold,
  status,
  textColor = COLORS.charcoal[800],
  flexDirection = "row",
}: TPItemStatusProps) => {
  return (
    <View style={[styles.viewStyle, { flexDirection }]}>
      <TPRow style={{ gap: 4, alignItems: "center" }}>
        <AntDesign name="star" size={ICON_SIZE} color={COLORS.golden[600]} />
        <TPText variant="small" color={textColor}>
          {vote}
        </TPText>
        <View style={styles.divide}></View>
        <TPText variant="small" color={COLORS.charcoal[400]}>
          Đã bán
        </TPText>
        <TPText variant="small" color={textColor}>
          {sold}
        </TPText>
      </TPRow>
      <View
        style={[
          styles.statusView,
          {
            backgroundColor:
              status === "Còn hàng" ? COLORS.blue[50] : COLORS.error[50],
          },
        ]}
      >
        <TPText
          variant="small-semibold"
          color={status === "Còn hàng" ? COLORS.blue[600] : COLORS.error[600]}
        >
          {status}
        </TPText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    alignItems: "center",
    gap: 4,
  },
  statusView: {
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  divide: {
    width: 1,
    height: 16,
    backgroundColor: COLORS.charcoal[400],
  },
});
