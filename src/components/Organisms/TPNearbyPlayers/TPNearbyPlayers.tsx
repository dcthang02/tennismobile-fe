import TPAvatar from "@/components/Atom/TPAvatar";
import TPCard from "@/components/Atom/TPCard";
import TPDivide from "@/components/Atom/TPDivide";
import TPRow from "@/components/Atom/TPRow";
import TPText from "@/components/Atom/TPText";
import TPWrapper from "@/components/Atom/TPWrapper";
import TPButton from "@/components/Molecules/TPButton";
import { COLORS } from "@/constant/colors";
import React, { ReactNode } from "react";
import { FlatList } from "react-native";

const PLAYERS = [
  {
    id: "1",
    name: "Nguyễn Hồng Thái",
    avatar:
      "https://png.pngtree.com/png-vector/20220119/ourmid/pngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png",
  },
  {
    id: "2",
    name: "Nguyễn Hồng Thái",
    avatar:
      "https://png.pngtree.com/png-vector/20220119/ourmid/pngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png",
  },
  {
    id: "3",
    name: "Nguyễn Hồng Thái",
    avatar:
      "https://png.pngtree.com/png-vector/20220119/ourmid/pngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png",
  },
  {
    id: "4",
    name: "Nguyễn Hồng Thái",
    avatar:
      "https://png.pngtree.com/png-vector/20220119/ourmid/pngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png",
  },
  {
    id: "5",
    name: "Nguyễn Hồng Thái",
    avatar:
      "https://png.pngtree.com/png-vector/20220119/ourmid/pngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png",
  },
  {
    id: "6",
    name: "Nguyễn Hồng Thái",
    avatar:
      "https://png.pngtree.com/png-vector/20220119/ourmid/pngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png",
  },
  {
    id: "7",
    name: "Nguyễn Hồng Thái",
    avatar:
      "https://png.pngtree.com/png-vector/20220119/ourmid/pngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png",
  },
  {
    id: "8",
    name: "Nguyễn Hồng Thái",
    avatar:
      "https://png.pngtree.com/png-vector/20220119/ourmid/pngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png",
  },
  {
    id: "9",
    name: "Nguyễn Hồng Thái",
    avatar:
      "https://png.pngtree.com/png-vector/20220119/ourmid/pngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png",
  },
  {
    id: "10",
    name: "Nguyễn Hồng Thái",
    avatar:
      "https://png.pngtree.com/png-vector/20220119/ourmid/pngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png",
  },
];

type ItemProps = {
  player: {
    id: string;
    name: string;
    avatar: string;
  };
  isFirst?: boolean;
  isLast?: boolean;
};

type TPNearbyPlayersProps = {
  headerComponents: ReactNode;
};

const Item = ({ player, isFirst = false, isLast = false }: ItemProps) => {
  return (
    <TPWrapper paddingHorizontal={16}>
      <TPRow
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          padding: 10,
          backgroundColor: COLORS.charcoal.white,
          borderTopLeftRadius: isFirst ? 15 : 0,
          borderTopRightRadius: isFirst ? 15 : 0,
          borderBottomLeftRadius: isLast ? 15 : 0,
          borderBottomRightRadius: isLast ? 15 : 0,
        }}
      >
        <TPRow style={{ gap: 10, alignItems: "center" }}>
          <TPAvatar uri={player.avatar} />
          <TPText variant="body16-semibold">{player.name}</TPText>
        </TPRow>
        <TPButton
          title="Thách đấu"
          buttonType="outline"
          size="large"
          color={COLORS.green[400]}
          backgroundColor="transparent"
        />
      </TPRow>
      <TPDivide />
    </TPWrapper>
  );
};

export const TPNearbyPlayers = ({ headerComponents }: TPNearbyPlayersProps) => {
  return (
    <TPWrapper flex={1}>
      <FlatList
        data={PLAYERS}
        renderItem={({ item, index }) => (
          <Item
            player={item}
            isFirst={index === 0}
            isLast={index === PLAYERS.length - 1}
          />
        )}
        keyExtractor={(item) => `nearby-player-${item.id}`}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => {
          return (
            <>
              <TPWrapper paddingHorizontal={0} gap={20} marginBottom={16}>
                {headerComponents}
                <TPWrapper paddingHorizontal={16}>
                  <TPText variant="heading5">Tay vợt gần bạn</TPText>
                </TPWrapper>
              </TPWrapper>
            </>
          );
        }}
      />
    </TPWrapper>
  );
};
