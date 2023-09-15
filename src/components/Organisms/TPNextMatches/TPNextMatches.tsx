import React from "react";
import { FlatList, Pressable, View } from "react-native";
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

const NEXT_MATCHES = [
  {
    id: "123456789",
    opponent: {
      name: "Nguyễn Minh Vũ Hiền",
      date: new Date(),
      avatar:
        "https://png.pngtree.com/png-vector/20220119/ourmid/pngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png",
    },
  },
  {
    id: "123456781",
    opponent: {
      name: "Phạm Ngọc Nam",
      date: new Date(),
      avatar:
        "https://png.pngtree.com/png-vector/20220119/ourmid/pngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png",
    },
  },
  {
    id: "123456782",
    opponent: {
      name: "Đường Tam",
      date: new Date(),
      avatar:
        "https://png.pngtree.com/png-vector/20220119/ourmid/pngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png",
    },
  },
  {
    id: "123456783",
    opponent: {
      name: "Đới Mộc Bạch",
      date: new Date(),
      avatar:
        "https://png.pngtree.com/png-vector/20220119/ourmid/pngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png",
    },
  },
];

type ItemProps = {
  match: {
    id: string;
    opponent: {
      name: string;
      date: Date;
      avatar: string;
    };
  };
  onPress: () => void;
};

type TPNextMatchesProps = {
  navigation: any;
};

const Item = ({ match, onPress }: ItemProps) => {
  return (
    <TPCard>
      <Pressable
        style={{ alignItems: "center", gap: 10, width: 140 }}
        onPress={onPress}
      >
        <TPAvatar uri={match.opponent.avatar} />
        <View>
          <TPText variant="body14-semibold" alignCenter>
            {convertName(match.opponent.name)}
          </TPText>
          <TPText variant="body14" color={COLORS.charcoal[400]} alignCenter>
            {convertDate(match.opponent.date)}
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
  return (
    <View>
      <TPRow style={{ justifyContent: "space-between", marginBottom: 15 }}>
        <TPText variant="heading5">Trận đấu sắp tới(5)</TPText>
        <TPButton
          title="Xem tất cả"
          buttonType="text"
          color={COLORS.blue[400]}
          size="tiny"
          onPress={() => handleNavigate("HomeAllMatch")}
        />
      </TPRow>
      <FlatList
        data={NEXT_MATCHES}
        renderItem={({ item, index }) => (
          <Item
            match={item}
            onPress={() => handleNavigate("HomeMatch", { matchId: item.id })}
          />
        )}
        keyExtractor={(item, index) => `match-${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 10 }}
      />
    </View>
  );
};
