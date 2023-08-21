import TPCard from "@/components/Atom/TPCard";
import TPDivide from "@/components/Atom/TPDivide";
import TPIcon, { TypeTPIconName } from "@/components/Atom/TPIcon";
import TPRow from "@/components/Atom/TPRow";
import TPText from "@/components/Atom/TPText";
import TPWrapper from "@/components/Atom/TPWrapper";
import { COLORS } from "@/constant/colors";
import React, { ReactNode, useCallback } from "react";
import { StyleSheet, View } from "react-native";

type TPPlayerStatistic = {
  matches: {
    all: number;
    won: number;
    lost: number;
  };
  leagues: {
    matches: number;
    won: number;
    lost: number;
  };
  score: {
    sum: number;
    won: number;
    average: number;
  };
};

export const TPPlayerStatistic = ({
  matches,
  leagues,
  score,
}: TPPlayerStatistic) => {
  const _renderColItem = useCallback(
    (name: string, num: number, align: "start" | "center" | "end") => {
      return (
        <View style={style[`itemCol${align}`]}>
          <TPText variant="body14" color={COLORS.charcoal[600]}>
            {name}
          </TPText>
          <TPText variant="body14-semibold" color={COLORS.charcoal[800]}>
            {num}
          </TPText>
        </View>
      );
    },
    []
  );

  const _renderMatches = useCallback(() => {
    return (
      <TPRow style={style.itemRow}>
        {_renderColItem("Đã chơi", matches.all, "start")}
        {_renderColItem("Thắng", matches.won, "center")}
        {_renderColItem("Thua", matches.lost, "end")}
      </TPRow>
    );
  }, [matches, _renderColItem]);

  const _renderLeagues = useCallback(() => {
    return (
      <TPRow style={style.itemRow}>
        {_renderColItem("Đã chơi", leagues.matches, "start")}
        {_renderColItem("Thắng", leagues.won, "center")}
        {_renderColItem("Thua", leagues.lost, "end")}
      </TPRow>
    );
  }, [leagues, _renderColItem]);

  const _renderScore = useCallback(() => {
    return (
      <TPRow style={style.itemRow}>
        {_renderColItem("Tổng", score.sum, "start")}
        {_renderColItem("Thắng", score.won, "center")}
        {_renderColItem("Trung bình", score.average, "end")}
      </TPRow>
    );
  }, [score, _renderColItem]);

  const _renderRowItem = useCallback(
    (icon: TypeTPIconName, title: string, children: React.JSX.Element) => {
      return (
        <TPWrapper>
          <TPRow style={style.headerRow}>
            <TPIcon name={icon} size="small" />
            <TPText variant="heading6" color={COLORS.charcoal[800]}>
              {title}
            </TPText>
          </TPRow>
          {children}
        </TPWrapper>
      );
    },
    []
  );
  return (
    <TPWrapper gap={10}>
      <TPText variant="heading5">Thống kê</TPText>
      <TPCard>
        <TPWrapper gap={8}>
          {_renderRowItem("board-game", "Trận đấu", <>{_renderMatches()}</>)}
          <TPDivide />
          {_renderRowItem(
            "cockade",
            "Giải đấu đã tham gia",
            <>{_renderLeagues()}</>
          )}
          <TPDivide />
          {_renderRowItem("gold-coin", "Điểm", <>{_renderScore()}</>)}
        </TPWrapper>
      </TPCard>
    </TPWrapper>
  );
};

const style = StyleSheet.create({
  headerRow: {
    alignItems: "center",
    gap: 8,
  },
  itemRow: {
    justifyContent: "space-between",
  },
  itemColstart: {
    alignItems: "flex-start",
  },
  itemColcenter: {
    alignItems: "center",
  },
  itemColend: {
    alignItems: "flex-end",
  },
});
