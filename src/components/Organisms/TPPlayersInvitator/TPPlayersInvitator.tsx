import TPAvatar from "@/components/Atom/TPAvatar";
import TPCard from "@/components/Atom/TPCard";
import TPIcon from "@/components/Atom/TPIcon";
import TPRow from "@/components/Atom/TPRow";
import TPText from "@/components/Atom/TPText";
import TPWrapper from "@/components/Atom/TPWrapper";
import TPButton from "@/components/Molecules/TPButton";
import TPModal from "@/components/Molecules/TPModal";
import TPSearchBar from "@/components/Molecules/TPSearchBar";
import TPSelection from "@/components/Molecules/TPSelection";
import { COLORS } from "@/constant/colors";
import useModal from "@/hooks/useModal";
import React, { useCallback, useState } from "react";
import { StyleSheet, View } from "react-native";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const players = [
  {
    id: "1",
    name: "Hoa Thiên Cốt",
    image:
      "https://www.clipartmax.com/png/small/277-2772093_user-female-skin-type-1-2-icon-avatar-100-x-100-pixel.png",
  },
  {
    id: "2",
    name: "Âu Dương Phong",
    image:
      "https://www.clipartmax.com/png/small/277-2772093_user-female-skin-type-1-2-icon-avatar-100-x-100-pixel.png",
  },
  {
    id: "3",
    name: "Lệnh Hồ Xung",
    image:
      "https://www.clipartmax.com/png/small/277-2772093_user-female-skin-type-1-2-icon-avatar-100-x-100-pixel.png",
  },
  {
    id: "4",
    name: "Bỉ Bỉ Đông",
    image:
      "https://www.clipartmax.com/png/small/277-2772093_user-female-skin-type-1-2-icon-avatar-100-x-100-pixel.png",
  },
  {
    id: "5",
    name: "Long Hạo Thần",
    image:
      "https://www.clipartmax.com/png/small/277-2772093_user-female-skin-type-1-2-icon-avatar-100-x-100-pixel.png",
  },
  {
    id: "6",
    name: "Long Hạo Thần",
    image:
      "https://www.clipartmax.com/png/small/277-2772093_user-female-skin-type-1-2-icon-avatar-100-x-100-pixel.png",
  },
  {
    id: "7",
    name: "Long Hạo Thần",
    image:
      "https://www.clipartmax.com/png/small/277-2772093_user-female-skin-type-1-2-icon-avatar-100-x-100-pixel.png",
  },
  {
    id: "8",
    name: "Long Hạo Thần",
    image:
      "https://www.clipartmax.com/png/small/277-2772093_user-female-skin-type-1-2-icon-avatar-100-x-100-pixel.png",
  },
  {
    id: "9",
    name: "Long Hạo Thần",
    image:
      "https://www.clipartmax.com/png/small/277-2772093_user-female-skin-type-1-2-icon-avatar-100-x-100-pixel.png",
  },
  {
    id: "10",
    name: "Long Hạo Thần",
    image:
      "https://www.clipartmax.com/png/small/277-2772093_user-female-skin-type-1-2-icon-avatar-100-x-100-pixel.png",
  },
  {
    id: "11",
    name: "Long Hạo Thần",
    image:
      "https://www.clipartmax.com/png/small/277-2772093_user-female-skin-type-1-2-icon-avatar-100-x-100-pixel.png",
  },
  {
    id: "12",
    name: "Long Hạo Thần",
    image:
      "https://www.clipartmax.com/png/small/277-2772093_user-female-skin-type-1-2-icon-avatar-100-x-100-pixel.png",
  },
  {
    id: "13",
    name: "Long Hạo Thần",
    image:
      "https://www.clipartmax.com/png/small/277-2772093_user-female-skin-type-1-2-icon-avatar-100-x-100-pixel.png",
  },
  {
    id: "14",
    name: "Long Hạo Thần",
    image:
      "https://www.clipartmax.com/png/small/277-2772093_user-female-skin-type-1-2-icon-avatar-100-x-100-pixel.png",
  },
  {
    id: "15",
    name: "Long Hạo Thần",
    image:
      "https://www.clipartmax.com/png/small/277-2772093_user-female-skin-type-1-2-icon-avatar-100-x-100-pixel.png",
  },
  {
    id: "16",
    name: "Long Hạo Thần",
    image:
      "https://www.clipartmax.com/png/small/277-2772093_user-female-skin-type-1-2-icon-avatar-100-x-100-pixel.png",
  },
  {
    id: "17",
    name: "Long Hạo Thần",
    image:
      "https://www.clipartmax.com/png/small/277-2772093_user-female-skin-type-1-2-icon-avatar-100-x-100-pixel.png",
  },
  {
    id: "18",
    name: "Long Hạo Thần",
    image:
      "https://www.clipartmax.com/png/small/277-2772093_user-female-skin-type-1-2-icon-avatar-100-x-100-pixel.png",
  },
];

const PlayerItem = ({ name, image }: { name: string; image: string }) => {
  return (
    <TPRow style={styles.playerItem}>
      <TPAvatar uri={image} size="default" />
      <TPText variant="body14-semibold">{name}</TPText>
    </TPRow>
  );
};

export const TPPlayersInvitator = () => {
  const { isShow, handleToggleModal } = useModal();
  const [numberPlayers, setNumberPlayers] = useState(1);
  const [competitorIds, setCompetitorIds] = useState<(number | string)[]>([
    players[0].id,
  ]);

  const handleSelectPlayers = useCallback(
    (id: number | string) => {
      const index = competitorIds.findIndex((value) => value === id);
      const tArr = competitorIds.slice();
      if (index === -1) {
        tArr.push(id);
        setCompetitorIds(tArr);
      } else {
        tArr.splice(index, 1);
        setCompetitorIds(tArr);
      }
    },
    [competitorIds, numberPlayers]
  );

  const handleSelectSinglePlayer = useCallback((id: number | string) => {
    setCompetitorIds([id]);
  }, []);

  const _renderFindCompetitors = useCallback(() => {
    return (
      <>
        <TPSearchBar placeholder="Tìm kiếm tên đấu thủ..." />
        <TPSelection
          data={players.map((item) => {
            return {
              id: item.id,
              value: item.id,
              label: <PlayerItem name={item.name} image={item.image} />,
            };
          })}
          value={competitorIds}
          column
          gap={8}
          multiple={numberPlayers !== 1}
          onChange={
            numberPlayers !== 1 ? handleSelectPlayers : handleSelectSinglePlayer
          }
        />
      </>
    );
  }, [
    numberPlayers,
    competitorIds,
    handleSelectPlayers,
    handleSelectSinglePlayer,
  ]);

  return (
    <TPWrapper gap={4}>
      <TPModal
        isShow={isShow}
        onCloseModal={() => handleToggleModal(false)}
        headerTitle={numberPlayers === 1 ? "Tìm đấu thủ đơn" : "Tìm đấu thủ"}
        headerRight={
          <TPButton
            title="Thêm bạn"
            buttonType="text"
            color={COLORS.green[600]}
            textSize="small"
            size="tiny"
          />
        }
      >
        {_renderFindCompetitors()}
      </TPModal>
      <TPText variant="heading6">Mời đấu thủ</TPText>
      <TPCard style={styles.card}>
        <TPRow style={styles.row}>
          <TPText variant="body14">Số người tham gia</TPText>
          <TPText variant="body14">{numberPlayers}</TPText>
        </TPRow>
        <TPRow style={styles.findPlayers}>
          <TPButton
            title="Tìm đấu thủ"
            textSize="small"
            startIcon={
              <TPIcon name="add" color={COLORS.green[600]} size="small" />
            }
            buttonType="text"
            color={COLORS.green[600]}
            onPress={() => handleToggleModal(true)}
          />
        </TPRow>
      </TPCard>
    </TPWrapper>
  );
};

const styles = StyleSheet.create({
  row: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  findPlayers: {
    justifyContent: "center",
    borderTopWidth: 1,
    borderStyle: "dashed",
    borderColor: COLORS.charcoal[400],
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  card: {
    gap: 16,
    paddingBottom: 0,
    paddingHorizontal: 16,
  },
  playerItem: {
    gap: 8,
    alignItems: "center",
    padding: 12,
  },
});
