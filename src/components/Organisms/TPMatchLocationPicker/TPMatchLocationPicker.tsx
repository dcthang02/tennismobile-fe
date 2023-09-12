import TPCard from "@/components/Atom/TPCard";
import TPIcon from "@/components/Atom/TPIcon";
import TPRow from "@/components/Atom/TPRow";
import TPSwitch from "@/components/Atom/TPSwitch";
import TPText from "@/components/Atom/TPText";
import TPWrapper from "@/components/Atom/TPWrapper";
import React from "react";
import { Pressable, StyleSheet } from "react-native";

type TPMatchLocationPickerProps = {
  isPending?: boolean;
  onChangePendingStatus?: (status: boolean) => void;
};

export const TPMatchLocationPicker = ({
  isPending = false,
  onChangePendingStatus,
}: TPMatchLocationPickerProps) => {
  return (
    <TPWrapper gap={4}>
      <TPText variant="heading6">Địa điểm thi đấu</TPText>
      <TPCard style={styles.card}>
        <Pressable style={styles.pressable}>
          <TPRow style={styles.row}>
            <TPIcon name="map-marker" size="small" />
            <TPRow style={styles.textRow}>
              <TPText variant="body14">Điạ điểm</TPText>
            </TPRow>
            <TPIcon name="arrow-sm-down" />
          </TPRow>
        </Pressable>
      </TPCard>
      <TPRow style={styles.row2}>
        <TPText variant="body14">Chưa rõ thời gian</TPText>
        <TPSwitch value={isPending} onChange={onChangePendingStatus} />
      </TPRow>
    </TPWrapper>
  );
};

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 0,
    borderRadius: 16,
  },
  pressable: {
    paddingLeft: 16,
    paddingRight: 12,
    paddingVertical: 8,
  },
  row: {
    gap: 12,
    alignItems: "center",
  },
  textRow: {
    flex: 1,
  },
  row2: {
    alignItems: "center",
    justifyContent: "space-between",
  },
});
