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
import useGetMatch from "@/hooks/useGetMatch";
import useMe from "@/hooks/useMe";

type PlayerRowProps = {
  name: string;
  image: string;
};

type InfoRowProps = {
  title: string;
  players?: ReactNode;
  text?: string;
  note?: string;
};

const PlayerRows = ({ name, image }: PlayerRowProps) => {
  return (
    <TPRow style={styles.playerRow}>
      <TPText variant="body14" color={COLORS.charcoal[600]}>
        {name}
      </TPText>
      <TPAvatar uri={image} size="small" />
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
  const { handleGoback } = useNavigation(navigation);
  const { getMatch, matchData } = useGetMatch();
  const { myData } = useMe();

  useEffect(() => {
    getMatch({
      variables: {
        id: route.params.matchId,
      },
    });
  }, [route.params.matchId]);

  return (
    <TPBackground>
      {matchData && (
        <View>
          <TPMatchDetailHeader
            images={matchData.match.location?.images || []}
            onPressButtonBack={handleGoback}
          />
          <TPWrapper paddingHorizontal={16} gap={15} marginBottom={30}>
            {matchData.match.location ? (
              <>
                <TPText variant="heading4">
                  {matchData.match.stadium?.name}
                </TPText>
                <TPText variant="body14" color={COLORS.charcoal[600]}>
                  {matchData.match.stadium?.address}
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
              </>
            ) : (
              <TPWrapper paddingTop={20}>
                <TPText variant="heading6">Chưa có địa điểm</TPText>
              </TPWrapper>
            )}
            <TPDivide />
            <InfoRow
              title={"Người chơi"}
              players={matchData.match.players.map((item: any, i: number) => (
                <PlayerRows
                  name={item.name}
                  image={item.image}
                  key={`player-${i}`}
                />
              ))}
            />
            <InfoRow
              title="Ngày"
              text={
                matchData.match.date
                  ? convertDate(matchData.match.date)
                  : "Chưa có ngày cụ thể"
              }
            />
            <InfoRow
              title="Giờ"
              text={
                matchData.match.date
                  ? `${convertTime(
                      matchData.match.date.getHours()
                    )}:${convertTime(matchData.match.date.getMinutes())}`
                  : "Chưa có giờ cụ thể"
              }
            />
          </TPWrapper>
          <TPWrapper paddingHorizontal={16}>
            {matchData.match.owner.id === myData.me.id && (
              <TPRow style={{ justifyContent: "space-between", gap: 8 }}>
                <View style={{ flex: 1 }}>
                  <TPButton
                    title="Hủy"
                    size="large"
                    startIcon={
                      <TPIcon name="check-big" color={COLORS.error[600]} />
                    }
                    color={COLORS.error[600]}
                    backgroundColor={COLORS.charcoal.white}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <TPButton title="Chỉnh sửa" size="large" />
                </View>
              </TPRow>
            )}
          </TPWrapper>
        </View>
      )}
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
