import TPCard from "@/components/Atom/TPCard";
import TPDivide from "@/components/Atom/TPDivide";
import TPIcon from "@/components/Atom/TPIcon";
import TPRow from "@/components/Atom/TPRow";
import TPText from "@/components/Atom/TPText";
import TPWrapper from "@/components/Atom/TPWrapper";
import { COLORS } from "@/constant/colors";
import React, { ReactNode, useCallback } from "react";
import { StyleSheet, View } from "react-native";

type TPPlayerFreeTime = {
  freeTime: boolean[][];
};

type CellProps = {
  children?: ReactNode | string;
  color?: string;
  isWeekDay?: boolean;
};

const DAYS = ["Hai", "Ba", "Tư", "Năm", "Sáu", "Bảy", "CN"];

const Cell = ({ children, color, isWeekDay = false }: CellProps) => {
  return (
    <TPRow style={isWeekDay ? styles.dayCeil : styles.cell}>
      {children ? (
        typeof children === "string" ? (
          <TPText
            variant="body14-semibold"
            color={color || COLORS.charcoal[500]}
          >
            {children}
          </TPText>
        ) : (
          children
        )
      ) : (
        <TPText variant="body14-semibold"></TPText>
      )}
    </TPRow>
  );
};

export const TPPlayerFreeTime = ({ freeTime }: TPPlayerFreeTime) => {
  const _renderFreeTime = useCallback(() => {
    return (
      <TPWrapper paddingTop={15} paddingBottom={10} gap={15}>
        <TPWrapper paddingHorizontal={10}>
          <TPRow>
            <Cell></Cell>
            <Cell>Sáng</Cell>
            <Cell>Trưa</Cell>
            <Cell>Tối</Cell>
          </TPRow>
        </TPWrapper>
        {DAYS.map((item, i) => (
          <TPWrapper
            paddingHorizontal={10}
            gap={10}
            key={`weekday-${item}-${i}`}
          >
            <TPRow>
              <Cell color={COLORS.charcoal[800]} isWeekDay>
                {item}
              </Cell>
              {freeTime[i].map((time, i) => (
                <Cell key={`freetime-day-${item}-${time}-${i}`}>
                  {time && (
                    <View style={styles.checkIconBox}>
                      <TPIcon
                        name="check-small"
                        color={COLORS.green[600]}
                        size="small"
                      />
                    </View>
                  )}
                </Cell>
              ))}
            </TPRow>
            {item !== "CN" && <TPDivide />}
          </TPWrapper>
        ))}
      </TPWrapper>
    );
  }, [freeTime]);
  return (
    <TPWrapper gap={10}>
      <TPText variant="heading5">Thời gian rảnh</TPText>
      <TPCard>{_renderFreeTime()}</TPCard>
    </TPWrapper>
  );
};

const styles = StyleSheet.create({
  dayBox: {
    width: 50,
  },
  cell: {
    flex: 1,
    justifyContent: "center",
  },
  dayCeil: {
    flex: 1,
    justifyContent: "flex-start",
  },
  checkIconBox: {
    width: 20,
    height: 20,
    backgroundColor: COLORS.green[50],
    borderRadius: 50,
    borderWidth: 2,
    borderColor: COLORS.green[600],
  },
});
