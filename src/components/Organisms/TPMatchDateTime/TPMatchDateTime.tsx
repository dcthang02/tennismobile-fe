import TPText from "@/components/Atom/TPText";
import TPWrapper from "@/components/Atom/TPWrapper";
import React from "react";
import TPDatePicker from "../TPDatePicker";
import { StyleSheet, Switch } from "react-native";
import TPSwitch from "@/components/Atom/TPSwitch";
import TPRow from "@/components/Atom/TPRow";
import { COLORS } from "@/constant/colors";

type TPMatchDateTimeProps = {
  date: Date;
  onChange: (x: Date) => void;
  isPending?: boolean;
  onChangePendingStatus?: (status: boolean) => void;
};

export const TPMatchDateTime = ({
  date,
  onChange,
  isPending = false,
  onChangePendingStatus,
}: TPMatchDateTimeProps) => {
  return (
    <TPWrapper gap={4}>
      <TPText variant="heading6">Thời gian</TPText>
      <TPWrapper gap={8}>
        <TPDatePicker
          label="Ngày"
          color={COLORS.blue[600]}
          date={date}
          onChange={onChange}
        />
        <TPDatePicker
          label="Giờ"
          mode="time"
          color={COLORS.blue[600]}
          date={date}
          onChange={onChange}
        />
      </TPWrapper>
      <TPRow style={styles.row}>
        <TPText variant="body14">Chưa rõ thời gian</TPText>
        <TPSwitch value={isPending} onChange={onChangePendingStatus} />
      </TPRow>
    </TPWrapper>
  );
};

const styles = StyleSheet.create({
  row: {
    justifyContent: "space-between",
    alignContent: "center",
  },
});
