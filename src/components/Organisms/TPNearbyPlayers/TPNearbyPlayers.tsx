import TPAvatar from "@/components/Atom/TPAvatar";
import TPCard from "@/components/Atom/TPCard";
import TPDivide from "@/components/Atom/TPDivide";
import TPRow from "@/components/Atom/TPRow";
import TPText from "@/components/Atom/TPText";
import TPWrapper from "@/components/Atom/TPWrapper";
import TPButton from "@/components/Molecules/TPButton";
import { COLORS } from "@/constant/colors";
import React from "react";
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
};

const Item = ({ player }: ItemProps) => {
  return (
    <TPWrapper>
      <TPRow
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          padding: 10,
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

export const TPNearbyPlayers = () => {
  return (
    <TPWrapper gap={15}>
      <TPText variant="heading5">Tay vợt gần bạn</TPText>
      <TPCard paddingVertical={0} paddingHorizontal={0} height={240}>
        <FlatList
          data={PLAYERS}
          renderItem={({ item, index }) => <Item player={item} />}
          keyExtractor={(item) => `nearby-player-${item.id}`}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      </TPCard>
    </TPWrapper>
  );
};
