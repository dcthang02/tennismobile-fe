import TPAvatar from "@/components/Atom/TPAvatar";
import TPCard from "@/components/Atom/TPCard";
import TPDivide from "@/components/Atom/TPDivide";
import TPRow from "@/components/Atom/TPRow";
import TPText from "@/components/Atom/TPText";
import TPWrapper from "@/components/Atom/TPWrapper";
import TPButton from "@/components/Molecules/TPButton";
import TPMemberItem from "@/components/Molecules/TPMemberItem";
import { COLORS } from "@/constant/colors";
import useGetUsers from "@/hooks/useGetUsers";
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

type TPNearbyPlayersProps = {
  headerComponents: ReactNode;
};

export const TPNearbyPlayers = ({ headerComponents }: TPNearbyPlayersProps) => {
  const { loadingUsers, usersData } = useGetUsers();

  if (!usersData) return null;

  return (
    <TPWrapper flex={1}>
      <FlatList
        data={usersData.users.map((item: any) => ({
          id: item.id,
          name: item.name,
          avatar: item.image,
        }))}
        renderItem={({ item, index }) => (
          <TPMemberItem
            player={item}
            isFirst={index === 0}
            isLast={index === PLAYERS.length - 1}
          />
        )}
        ListEmptyComponent={() => (
          <TPText variant="heading6" alignCenter>
            Không có dữ liệu
          </TPText>
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
