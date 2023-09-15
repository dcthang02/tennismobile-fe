import TPAvatar from "@/components/Atom/TPAvatar";
import TPCard from "@/components/Atom/TPCard";
import TPIcon from "@/components/Atom/TPIcon";
import TPRow from "@/components/Atom/TPRow";
import TPText from "@/components/Atom/TPText";
import TPButton from "@/components/Molecules/TPButton";
import TPStatus from "@/components/Molecules/TPStatus";
import { COLORS } from "@/constant/colors";
import { convertDate } from "@/utils/dateTime";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

type TPMatchItemProps = {
  match: MatchType;
  onPress: () => void;
};

export const TPMatchItem = ({ match, onPress }: TPMatchItemProps) => {
  return (
    <TPCard>
      <Pressable style={styles.view} onPress={onPress}>
        <TPRow style={styles.row}>
          <TPText variant="small">
            {match.date ? convertDate(match.date) : "Chưa rõ thời gian"}
          </TPText>
          <TPRow style={styles.playerCountRow}>
            <TPIcon name="multiple-outline" size="small" />
            <TPText variant="small-semibold" color={COLORS.charcoal[600]}>
              Đấu thủ
            </TPText>
            <TPText variant="small-semibold">
              {match.players.length}/{match.playerCount}
            </TPText>
          </TPRow>
        </TPRow>
        <TPText variant="body14">
          {match.stadium?.name || "Chưa có sân thi đấu"}
        </TPText>
        <TPRow style={styles.row}>
          <TPRow style={styles.row}>
            <TPAvatar uri={match.owner.avatar} size="small" />
            <View>
              <TPText variant="small">Chủ trận</TPText>
              <TPText variant="body14-semibold">{match.owner.name}</TPText>
            </View>
          </TPRow>
          {match.status === "pending" ? (
            <TPButton
              title="Tham gia"
              buttonType="outline"
              backgroundColor="transparent"
              color={COLORS.green[600]}
            />
          ) : (
            <TPStatus
              status={match.status}
              text={match.status === "successful" ? "Đã nhận" : "Chưa nhận"}
            />
          )}
        </TPRow>
      </Pressable>
    </TPCard>
  );
};

const styles = StyleSheet.create({
  view: {
    gap: 8,
  },
  row: {
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  playerCountRow: {
    gap: 4,
  },
});
