import TPCard from "@/components/Atom/TPCard";
import TPRow from "@/components/Atom/TPRow";
import TPText from "@/components/Atom/TPText";
import TPWrapper from "@/components/Atom/TPWrapper";
import React, { ReactNode, useCallback } from "react";
import { StyleSheet, View } from "react-native";

import LeaderBoardIcon from "assets/icon/leaderboard.svg";
import PrizeIcon from "assets/icon/prize.svg";
import TPIcon from "@/components/Atom/TPIcon";
import { COLORS } from "@/constant/colors";
import TPAvatar from "@/components/Atom/TPAvatar";
import TPButton from "@/components/Molecules/TPButton";
import { useNavigation } from "@react-navigation/native";

type TPPlayer = {
  name: string;
  avatar: string;
  rank: number;
  level: number;
  age: number;
  clubName?: string;
  editable?: boolean;
  renderType?: 1 | 2;
};

export const TPPlayer = ({
  name,
  avatar,
  rank,
  level,
  age,
  clubName,
  editable = false,
  renderType = 1,
}: TPPlayer) => {
  const { navigate } = useNavigation();
  const _renderIconRowItem = useCallback(
    (icon: ReactNode, title: string, text: string) => {
      return (
        <TPRow style={styles.gaprow}>
          {icon}
          <TPText variant="body14">{title}</TPText>
          <TPText variant="body14-semibold">{text}</TPText>
        </TPRow>
      );
    },
    []
  );
  const _renderRowSpaceBetween = useCallback(
    (iconName: TypeTPIconName, title: string, text: string | number) => {
      return (
        <TPRow style={styles.row2}>
          <TPIcon name={iconName} size="small" />
          <View style={styles.mrAuto}>
            <TPText variant="body14" color={COLORS.charcoal[600]}>
              {title}
            </TPText>
          </View>
          <TPText variant="body14-semibold" color={COLORS.charcoal[800]}>
            {text}
          </TPText>
        </TPRow>
      );
    },
    []
  );

  const _renderAvatar = useCallback(() => {
    return (
      <View style={renderType === 1 ? styles.avatarBox : {}}>
        <TPAvatar uri={avatar} size="medium" />
      </View>
    );
  }, [avatar, renderType]);

  return (
    <TPCard style={renderType === 1 ? styles.card : {}}>
      {editable && (
        <View style={styles.buttonEdit}>
          <TPButton
            title="Chỉnh sửa"
            buttonType="text"
            color={COLORS.blue[600]}
            size="small"
            onPress={() => navigate("AccountProfileEdit" as never)}
          />
        </View>
      )}
      <TPWrapper paddingTop={renderType === 1 ? 30 : 0}>
        <View style={renderType === 1 ? {} : styles.containerRow}>
          {_renderAvatar()}
          <View style={styles.container}>
            <TPText variant="heading5" alignCenter={renderType === 1}>
              {name}
            </TPText>
            <TPRow style={styles.row1}>
              {_renderIconRowItem(
                <LeaderBoardIcon width={22} height={22} />,
                "Hạng",
                `${rank}/120`
              )}
              {_renderIconRowItem(
                <PrizeIcon width={22} height={22} />,
                "Level",
                level.toString()
              )}
            </TPRow>
          </View>
          {renderType === 1 &&
            _renderRowSpaceBetween("repeat-cycle", "Tuổi", age)}
          {renderType === 1 &&
            _renderRowSpaceBetween("gym", "Câu lạc bộ", clubName || "Chưa có")}
        </View>
      </TPWrapper>
    </TPCard>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
  containerRow: {
    flexDirection: "row",
    gap: 12,
  },
  row1: {
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  gaprow: {
    gap: 4,
    alignItems: "center",
  },
  row2: {
    alignItems: "center",
    gap: 8,
  },
  mrAuto: {
    marginRight: "auto",
  },
  avatarBox: {
    position: "absolute",
    top: -80,
    right: "50%",
    transform: [{ translateX: 34 }],
  },
  card: {
    marginTop: 50,
  },
  buttonEdit: { position: "absolute", right: 0, top: -35 },
});
