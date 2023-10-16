import React, { useCallback } from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import TPAvatar from "@/components/Atom/TPAvatar";
import TPCard from "@/components/Atom/TPCard";
import TPIcon from "@/components/Atom/TPIcon";
import TPRow from "@/components/Atom/TPRow";
import TPText from "@/components/Atom/TPText";
import TPButton from "@/components/Molecules/TPButton";
import { COLORS } from "@/constant/colors";

import { HomeProps } from "@/utils/createProps";

import { convertDate } from "@/utils/dateTime";
import { convertName } from "@/utils/name";
import useNavigation from "@/hooks/useNavigation";
import useGetNextMatches from "@/hooks/useGetNextMatches";

type ItemProps = {
  match: {
    id: string;
    owner: {
      name: string;
      image?: string;
    };
    date?: Date;
  };
  onPress: () => void;
};

type TPNextMatchesProps = {
  navigation: any;
};

const Item = ({ match, onPress }: ItemProps) => {
  console.log("das", match);
  return (
    <TPCard>
      <Pressable
        style={{ alignItems: "center", gap: 10, width: 140 }}
        onPress={onPress}
      >
        <TPAvatar
          uri={
            match.owner.image ||
            "https://www.clipartmax.com/png/small/248-2487966_matthew-man-avatar-icon-png.png"
          }
        />
        <View>
          <TPText variant="body14-semibold" alignCenter>
            {convertName(match.owner.name)}
          </TPText>
          <TPText variant="body14" color={COLORS.charcoal[400]} alignCenter>
            {match.date
              ? convertDate(new Date(match.date))
              : "Chưa rõ thời gian"}
          </TPText>
        </View>
        <TPRow style={{ justifyContent: "flex-end", alignSelf: "stretch" }}>
          <TPIcon
            name="arrow-right"
            hasBound
            borderColor={COLORS.blue[400]}
            color={COLORS.blue[400]}
            boundColor="transparent"
            size="small"
          />
        </TPRow>
      </Pressable>
    </TPCard>
  );
};

export const TPNextMatches = ({ navigation }: TPNextMatchesProps) => {
  const { handleNavigate } = useNavigation(navigation);

  const { nextMatchesData } = useGetNextMatches();
  console.log(nextMatchesData);

  const _renderEmptyMatches = useCallback(() => {
    return (
      <View style={styles.empty}>
        <Image source={require("assets/empty-matches.png")} />
        <TPText variant="heading6">Bạn chưa có đối thủ</TPText>
        <TPButton title="Tìm đối thủ ngay" size="large" />
      </View>
    );
  }, []);

  if (!nextMatchesData) {
    return <Text>Loading</Text>;
  }

  return (
    <View>
      <TPRow style={{ justifyContent: "space-between", marginBottom: 15 }}>
        <TPText variant="heading5">
          {`Trận đấu sắp tới (${nextMatchesData.nextMatches.length})`}
        </TPText>
        <TPButton
          title="Xem tất cả"
          buttonType="text"
          color={COLORS.blue[400]}
          size="tiny"
          onPress={() => handleNavigate("HomeAllMatch")}
        />
      </TPRow>
      <FlatList
        data={nextMatchesData.nextMatches}
        renderItem={({ item, index }) => (
          <Item
            match={{
              id: item.id,
              owner: item.owner,
              date: item.date,
            }}
            onPress={() => handleNavigate("HomeMatch", { matchId: item.id })}
          />
        )}
        ListEmptyComponent={_renderEmptyMatches}
        keyExtractor={(item, index) => `match-${index}`}
        horizontal={nextMatchesData.nextMatches.length !== 0}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 10 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  empty: {
    alignItems: "center",
    gap: 8,
  },
});
