import TPAvatar from "@/components/Atom/TPAvatar";
import TPRow from "@/components/Atom/TPRow";
import TPText from "@/components/Atom/TPText";
import React from "react";
import { StyleSheet, View } from "react-native";
import { convertDate } from "@/utils/dateTime";
import { COLORS } from "@/constant/colors";
import TPButton from "@/components/Molecules/TPButton";
import TPIcon from "@/components/Atom/TPIcon";
import TPWrapper from "@/components/Atom/TPWrapper";

export const TPCompetitorNotice = () => {
  return (
    <View style={styles.container}>
      <TPText variant="small-semibold" color={COLORS.blue[600]}>
        Bạn có lời mời thi đấu từ
      </TPText>
      <TPRow style={styles.containerRow}>
        <TPRow style={styles.row}>
          <TPAvatar uri="https://png.pngtree.com/png-vector/20220119/ourmid/pngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png" />
          <View>
            <TPText variant="body14-semibold">Trần Huỳnh Tiến</TPText>
            <TPText variant="small">{convertDate(new Date())}</TPText>
          </View>
        </TPRow>
        <TPRow style={styles.row}>
          <TPButton
            title="Hủy"
            size="small"
            color={COLORS.error[600]}
            backgroundColor={COLORS.charcoal.white}
            startIcon={
              <TPIcon name="e-remove" size="small" color={COLORS.error[600]} />
            }
          />
          <TPButton
            title="Nhận"
            startIcon={<TPIcon name="check-big" size="small" />}
            size="small"
            backgroundColor={COLORS.green[600]}
          />
        </TPRow>
      </TPRow>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.blue[50],
    paddingVertical: 12,
    paddingHorizontal: 16,
    gap: 15,
  },
  containerRow: {
    justifyContent: "space-between",
  },
  row: {
    gap: 10,
    alignItems: "center",
  },
});
