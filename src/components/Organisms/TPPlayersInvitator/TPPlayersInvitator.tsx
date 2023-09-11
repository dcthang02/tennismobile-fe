import TPCard from "@/components/Atom/TPCard";
import TPIcon from "@/components/Atom/TPIcon";
import TPRow from "@/components/Atom/TPRow";
import TPText from "@/components/Atom/TPText";
import TPWrapper from "@/components/Atom/TPWrapper";
import TPButton from "@/components/Molecules/TPButton";
import { COLORS } from "@/constant/colors";
import React from "react";
import { StyleSheet } from "react-native";

export const TPPlayersInvitator = () => {
  return (
    <TPWrapper gap={4}>
      <TPText variant="heading6">Mời đấu thủ</TPText>
      <TPCard style={styles.card}>
        <TPRow style={styles.row}>
          <TPText variant="body14">Số người tham gia</TPText>
          <TPText variant="body14">1</TPText>
        </TPRow>
        <TPRow style={styles.findPlayers}>
          <TPButton
            title="Tìm đấu thủ"
            textSize="small"
            startIcon={
              <TPIcon name="add" color={COLORS.green[600]} size="small" />
            }
            buttonType="text"
            color={COLORS.green[600]}
          />
        </TPRow>
      </TPCard>
    </TPWrapper>
  );
};

const styles = StyleSheet.create({
  row: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  findPlayers: {
    justifyContent: "center",
    borderTopWidth: 1,
    borderStyle: "dashed",
    borderColor: COLORS.charcoal[400],
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  card: {
    gap: 16,
    paddingBottom: 0,
    paddingHorizontal: 16,
  },
});
