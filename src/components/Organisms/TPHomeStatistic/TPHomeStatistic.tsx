import React, { ReactNode } from "react";
import { View } from "react-native";
import TPCard from "@/components/Atom/TPCard";
import TPRow from "@/components/Atom/TPRow";
import TPText from "@/components/Atom/TPText";
import TPWrapper from "@/components/Atom/TPWrapper";
import PlayerIcon from "assets/icon/tennis-player.svg";
import LeaderBoardIcon from "assets/icon/leaderboard.svg";
import PrizeIcon from "assets/icon/prize.svg";
import { COLORS } from "@/constant/colors";
import useMe from "@/hooks/useMe";

type ItemProps = {
  icon: ReactNode;
  name: string;
  statistic: string | number;
};

type HomeStatisticProps = {
  rank?: number;
  matches?: number;
  score?: number;
};

const Item = ({ icon, name, statistic }: ItemProps) => {
  return (
    <TPWrapper paddingHorizontal={30}>
      {icon}
      <TPText variant="body14" alignCenter color={COLORS.charcoal[400]}>
        {name}
      </TPText>
      <TPText variant="body16-semibold" alignCenter>
        {statistic}
      </TPText>
    </TPWrapper>
  );
};

export const TPHomeStatistic = ({
  rank,
  matches = 0,
  score = 0,
}: HomeStatisticProps) => {
  return (
    <TPWrapper gap={15}>
      <TPText variant="heading5">Thống kê</TPText>
      <TPCard>
        <TPRow style={{ justifyContent: "space-between" }}>
          <Item icon={<PlayerIcon />} name="Trận" statistic={matches} />
          <Item
            icon={<LeaderBoardIcon />}
            name="Hạng"
            statistic={rank ? `${rank}/150` : "Vô hạng"}
          />
          <Item icon={<PrizeIcon />} name="Điểm" statistic={score} />
        </TPRow>
      </TPCard>
    </TPWrapper>
  );
};
