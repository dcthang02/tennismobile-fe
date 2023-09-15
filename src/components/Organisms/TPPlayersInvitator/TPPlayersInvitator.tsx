import TPAvatar from "@/components/Atom/TPAvatar";
import TPCard from "@/components/Atom/TPCard";
import TPIcon from "@/components/Atom/TPIcon";
import TPKeyboardScroll from "@/components/Atom/TPKeyboardScroll";
import TPRow from "@/components/Atom/TPRow";
import TPText from "@/components/Atom/TPText";
import TPWrapper from "@/components/Atom/TPWrapper";
import TPButton from "@/components/Molecules/TPButton";
import TPModal from "@/components/Molecules/TPModal";
import TPSearchBar from "@/components/Molecules/TPSearchBar";
import TPSelection from "@/components/Molecules/TPSelection";
import { COLORS } from "@/constant/colors";
import useModal from "@/hooks/useModal";
import useModalSelection from "@/hooks/useModalSelection";
import React, { useCallback, useMemo, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const players = [
  {
    id: "1",
    name: "Hoa Thiên Cốt",
    image: "https://practicaltyping.com/wp-content/uploads/2019/04/ace.jpg",
  },
  {
    id: "2",
    name: "Âu Dương Phong",
    image: "https://practicaltyping.com/wp-content/uploads/2019/04/ace.jpg",
  },
  {
    id: "3",
    name: "Lệnh Hồ Xung",
    image: "https://practicaltyping.com/wp-content/uploads/2019/04/ace.jpg",
  },
  {
    id: "4",
    name: "Bỉ Bỉ Đông",
    image: "https://practicaltyping.com/wp-content/uploads/2019/04/ace.jpg",
  },
  {
    id: "5",
    name: "Long Hạo Thần",
    image: "https://practicaltyping.com/wp-content/uploads/2019/04/ace.jpg",
  },
  {
    id: "6",
    name: "Long Hạo Thần",
    image: "https://practicaltyping.com/wp-content/uploads/2019/04/ace.jpg",
  },
  {
    id: "7",
    name: "Long Hạo Thần",
    image: "https://practicaltyping.com/wp-content/uploads/2019/04/ace.jpg",
  },
  {
    id: "8",
    name: "Long Hạo Thần",
    image: "https://practicaltyping.com/wp-content/uploads/2019/04/ace.jpg",
  },
  {
    id: "9",
    name: "Long Hạo Thần",
    image: "https://practicaltyping.com/wp-content/uploads/2019/04/ace.jpg",
  },
  {
    id: "10",
    name: "Long Hạo Thần",
    image: "https://practicaltyping.com/wp-content/uploads/2019/04/ace.jpg",
  },
  {
    id: "11",
    name: "Long Hạo Thần",
    image: "https://practicaltyping.com/wp-content/uploads/2019/04/ace.jpg",
  },
  {
    id: "12",
    name: "Long Hạo Thần",
    image: "https://practicaltyping.com/wp-content/uploads/2019/04/ace.jpg",
  },
  {
    id: "13",
    name: "Long Hạo Thần",
    image: "https://practicaltyping.com/wp-content/uploads/2019/04/ace.jpg",
  },
  {
    id: "14",
    name: "Long Hạo Thần",
    image: "https://practicaltyping.com/wp-content/uploads/2019/04/ace.jpg",
  },
  {
    id: "15",
    name: "Long Hạo Thần",
    image: "https://practicaltyping.com/wp-content/uploads/2019/04/ace.jpg",
  },
  {
    id: "16",
    name: "Long Hạo Thần",
    image: "https://practicaltyping.com/wp-content/uploads/2019/04/ace.jpg",
  },
  {
    id: "17",
    name: "Long Hạo Thần",
    image: "https://practicaltyping.com/wp-content/uploads/2019/04/ace.jpg",
  },
  {
    id: "18",
    name: "Long Hạo Thần",
    image: "https://practicaltyping.com/wp-content/uploads/2019/04/ace.jpg",
  },
];

const PlayerItem = ({
  name,
  image,
  style = {},
}: {
  name: string;
  image: string;
  style?: ViewStyle;
}) => {
  return (
    <TPRow style={style}>
      <TPAvatar uri={image} size="default" />
      <TPText variant="body14-semibold">{name}</TPText>
    </TPRow>
  );
};

export const TPPlayersInvitator = () => {
  const { isShow, handleToggleModal } = useModal();
  const [searchString, setSearchString] = useState("");
  const [numberPlayers, setNumberPlayers] = useState(1);

  const data = useMemo(
    () =>
      players.filter((item) =>
        item.name.toLowerCase().includes(searchString.toLowerCase())
      ),
    [searchString]
  );

  const {
    value: competitorIds,
    setValues: setCompetitorIds,
    modalValues: modalCompetiorIds,
    setModalValues: setModalCompetitorIds,
    handleSelectValue: handleSelectPlayers,
    handleSelectSingleValue: handleSelectSinglePlayer,
    handleSubmitModal: handleSubmitCompetitor,
  } = useModalSelection(players[0].id, handleToggleModal);

  const openModalCallback = useCallback(() => {
    if (competitorIds.length !== 0) setModalCompetitorIds(competitorIds);
    else setModalCompetitorIds([players[0].id]);

    setSearchString("");
  }, [competitorIds]);

  const _renderFindCompetitors = useCallback(() => {
    return (
      <>
        <TPKeyboardScroll>
          <TPSearchBar
            placeholder="Tìm kiếm tên đấu thủ..."
            onChange={setSearchString}
          />
          <TPSelection
            data={data.map((item) => {
              return {
                id: item.id,
                value: item.id,
                label: (
                  <PlayerItem
                    style={styles.playerItem}
                    name={item.name}
                    image={item.image}
                  />
                ),
              };
            })}
            value={modalCompetiorIds}
            column
            gap={8}
            multiple={numberPlayers !== 1}
            onChange={
              numberPlayers !== 1
                ? handleSelectPlayers
                : handleSelectSinglePlayer
            }
          />
          <TPButton
            title="Thêm"
            size="large"
            onPress={handleSubmitCompetitor}
          />
        </TPKeyboardScroll>
      </>
    );
  }, [
    numberPlayers,
    modalCompetiorIds,
    handleSelectPlayers,
    handleSelectSinglePlayer,
    handleSubmitCompetitor,
    data,
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
        {competitorIds.map((id) => {
          const player = players.find((el) => el.id === id);
          return (
            <PlayerItem
              style={styles.selectedPlayerItem}
              name={player?.name || ""}
              image={player?.image || ""}
              key={`player-${id}`}
            />
          );
        })}
        <View style={styles.findPlayers}>
          {Platform.OS === "ios" && (
            <View style={{ overflow: "hidden" }}>
              <View
                style={{
                  borderStyle: "dashed",
                  borderWidth: 1,
                  borderColor: COLORS.charcoal[400],
                  margin: -2,
                  marginTop: 10,
                }}
              >
                <View style={{ height: 1, width: 200 }} />
              </View>
            </View>
          )}
          <TPRow style={{ justifyContent: "center" }}>
            <TPButton
              title="Tìm đấu thủ"
              textSize="small"
              startIcon={
                <TPIcon name="add" color={COLORS.green[600]} size="small" />
              }
              buttonType="text"
              color={COLORS.green[600]}
              onPress={() => handleToggleModal(true, openModalCallback)}
            />
          </TPRow>
        </View>
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
  },
  card: {
    gap: 16,
    paddingHorizontal: 16,
  },
  playerItem: {
    gap: 8,
    alignItems: "center",
    paddingVertical: 12,
  },
  selectedPlayerItem: {
    gap: 8,
    alignItems: "center",
  },
});
