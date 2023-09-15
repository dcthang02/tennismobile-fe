import React, { ReactNode, useCallback, useEffect, useState } from "react";
import useNavigation from "../../hooks/useNavigation";
import { HomeMatchDetailProps } from "@/utils/createProps";
import TPBackground from "@/components/Atom/TPBackgroud";
import TPWrapper from "@/components/Atom/TPWrapper";
import TPText from "@/components/Atom/TPText";
import { fetchMatch } from "@/api/matches";
import TPButton from "@/components/Molecules/TPButton";
import { COLORS } from "@/constant/colors";
import TPRow from "@/components/Atom/TPRow";
import TPDivide from "@/components/Atom/TPDivide";
import TPAvatar from "@/components/Atom/TPAvatar";
import { ScrollView, StyleSheet, View } from "react-native";
import { convertDate, convertTime } from "@/utils/dateTime";
import TPIcon from "@/components/Atom/TPIcon";
import TPMatchDetailHeader from "@/components/Organisms/TPMatchDetailHeader";

type PlayerRowProps = {
  name: string;
  avatar: string;
};

type InfoRowProps = {
  title: string;
  players?: ReactNode;
  text?: string;
  note?: string;
};

const PlayerRows = ({ name, avatar }: PlayerRowProps) => {
  return (
    <TPRow style={styles.playerRow}>
      <TPText variant="body14" color={COLORS.charcoal[600]}>
        {name}
      </TPText>
      <TPAvatar uri={avatar} size="small" />
    </TPRow>
  );
};

const InfoRow = ({ title, players, text, note }: InfoRowProps) => {
  return (
    <TPWrapper>
      <TPText variant="heading6">{title}</TPText>
      {players || null}
      {text && (
        <TPText variant="body14" color={COLORS.charcoal[600]}>
          {text}
        </TPText>
      )}
      <TPDivide />
      {note && <TPText variant="small">{note}</TPText>}
    </TPWrapper>
  );
};

const HomeMatchDetailScreen = ({ route, navigation }: HomeMatchDetailProps) => {
  const [match, setMatch] = useState<MatchType | null>(null);
  const { handleGoback } = useNavigation(navigation);

  useEffect(() => {
    handleGetMatch(route.params.matchId);
  }, []);

  const handleGetMatch = useCallback(async (id: string) => {
    try {
      const match = await fetchMatch(id);
      if (match) setMatch(match);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <TPBackground>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: "80%",
          justifyContent: "space-between",
        }}
      >
        {match && (
          <View>
            <TPMatchDetailHeader
              images={match.stadium?.images || []}
              onPressButtonBack={handleGoback}
            />
            <TPWrapper paddingHorizontal={16} gap={15} marginBottom={30}>
              <TPText variant="heading4">{match.stadium?.name}</TPText>
              <TPText variant="body14" color={COLORS.charcoal[600]}>
                {match.stadium?.address}
              </TPText>
              <TPRow>
                <TPButton
                  title="Xem đường đi"
                  size="tiny"
                  textSize="small"
                  buttonType="text"
                  color={COLORS.blue[600]}
                />
              </TPRow>
              <TPDivide />
              <InfoRow
                title={match.mode === "single" ? "Đối thủ" : "Người chơi"}
                players={match.players.map((item, i) => (
                  <PlayerRows
                    name={item.name}
                    avatar={item.avatar}
                    key={`player-${i}`}
                  />
                ))}
              />
              <InfoRow
                title="Ngày"
                text={match.date ? convertDate(match.date) : ""}
              />
              <InfoRow
                title="Giờ"
                text={
                  match.date
                    ? `${convertTime(match.date.getHours())}:${convertTime(
                        match.date.getMinutes()
                      )}`
                    : ""
                }
              />
            </TPWrapper>
          </View>
        )}
        <TPWrapper paddingHorizontal={16}>
          <TPButton
            title="Hủy"
            size="large"
            startIcon={<TPIcon name="check-big" color={COLORS.error[600]} />}
            color={COLORS.error[600]}
            backgroundColor={COLORS.charcoal.white}
          />
        </TPWrapper>
      </ScrollView>
    </TPBackground>
  );
};

const styles = StyleSheet.create({
  playerRow: {
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 5,
  },
});

export default HomeMatchDetailScreen;
