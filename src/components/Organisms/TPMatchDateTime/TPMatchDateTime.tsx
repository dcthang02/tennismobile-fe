import TPText from "@/components/Atom/TPText";
import TPWrapper from "@/components/Atom/TPWrapper";
import React, { useCallback } from "react";
import TPDatePicker from "../TPDatePicker";
import { StyleSheet, Switch } from "react-native";
import TPSwitch from "@/components/Atom/TPSwitch";
import TPRow from "@/components/Atom/TPRow";
import { COLORS } from "@/constant/colors";

type TPMatchDateTimeProps = {
  date: Date;
  onChange: (x: Date) => void;
  fromDatePending: Date;
  setFromDatePending: (x: Date) => void;
  toDatePending: Date;
  setToDatePending: (x: Date) => void;
  isPending?: boolean;
  onChangePendingStatus?: (status: boolean) => void;
};

export const TPMatchDateTime = ({
  date,
  fromDatePending,
  toDatePending,
  onChange,
  setFromDatePending,
  setToDatePending,
  isPending = false,
  onChangePendingStatus,
}: TPMatchDateTimeProps) => {
  const _renderIsPending = useCallback(
    (mode: "date" | "time") => {
      return (
        <TPWrapper>
          <TPRow style={{ gap: 10 }}>
            <TPWrapper flex={1}>
              <TPDatePicker
                label={mode === "date" ? "Từ ngày" : "Từ giờ"}
                mode={mode}
                color={COLORS.blue[600]}
                date={fromDatePending}
                onChange={setFromDatePending}
              />
            </TPWrapper>
            <TPWrapper flex={1}>
              <TPDatePicker
                mode={mode}
                label={mode === "date" ? "Đến ngày" : "Đến giờ"}
                color={COLORS.blue[600]}
                date={toDatePending}
                onChange={setToDatePending}
              />
            </TPWrapper>
          </TPRow>
        </TPWrapper>
      );
    },
    [fromDatePending, toDatePending, setFromDatePending, setToDatePending]
  );

  return (
    <TPWrapper gap={4}>
      <TPText variant="heading6">Thời gian</TPText>
      <TPWrapper gap={8}>
        <TPDatePicker
          label="Ngày"
          color={isPending ? COLORS.charcoal[400] : COLORS.blue[600]}
          date={date}
          onChange={onChange}
          editable={!isPending}
        />
        <TPDatePicker
          label="Giờ"
          mode="time"
          color={isPending ? COLORS.charcoal[400] : COLORS.blue[600]}
          date={date}
          onChange={onChange}
          editable={!isPending}
        />
      </TPWrapper>
      <TPRow style={styles.row}>
        <TPText variant="body14">Chưa rõ thời gian</TPText>
        <TPSwitch value={isPending} onChange={onChangePendingStatus} />
      </TPRow>
      {isPending && (
        <>
          {_renderIsPending("date")}
          {_renderIsPending("time")}
        </>
      )}
    </TPWrapper>
  );
};

const styles = StyleSheet.create({
  row: {
    justifyContent: "space-between",
    alignContent: "center",
  },
});
