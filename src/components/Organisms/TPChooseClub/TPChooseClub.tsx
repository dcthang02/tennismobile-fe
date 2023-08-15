import React, { useEffect, useState } from "react";
import { View, ScrollView, Pressable, FlatList } from "react-native";
import { COLORS } from "@/constant/colors";

import TPIcon from "@/components/Atom/TPIcon";
import TPRow from "@/components/Atom/TPRow";
import TPText from "@/components/Atom/TPText";
import TPButton from "@/components/Molecules/TPButton";
import TPModal from "@/components/Molecules/TPModal";
import TPRadio from "@/components/Atom/TPRadio";
import TPDivide from "@/components/Atom/TPDivide";
import TPSearchBar from "@/components/Molecules/TPSearchBar";
import EditIcon from "assets/icon/edit.svg";

import useModal from "@/hooks/useModal";

const CLUBS = [
  {
    id: "1",
    name: "Câu lạc bộ tennis - cầu lông",
    address: "123 Hoàng Ngân, Trung Hòa, Cầu Giấy, Hà Nội",
  },
  {
    id: "2",
    name: "Câu lạc bộ Tennis",
    address: "Hai Bà Trưng, Hà Nội",
  },
  {
    id: "3",
    name: "Khúc Hạo Sport Club",
    address: "Ba Đình, Hà Nội",
  },
];

type ItemProps = {
  item: {
    id: string;
    name: string;
    address: string;
  };
  active?: boolean;
  onPress: () => void;
};

const Item = ({ item, active, onPress }: ItemProps) => {
  return (
    <Pressable onPress={onPress}>
      <TPRow style={{ alignItems: "center", gap: 15, marginBottom: 15 }}>
        <TPRadio active={active} />
        <View>
          <TPText variant="heading5">{item.name}</TPText>
          <TPText variant="body16" color={COLORS.charcoal[400]}>
            {item.address}
          </TPText>
        </View>
      </TPRow>
      <TPDivide />
    </Pressable>
  );
};

export const TPChooseClub = () => {
  const [clubIndex, setClubIndex] = useState(-1);

  const { isShow, handleToggleModal } = useModal();

  useEffect(() => {}, [clubIndex]);

  return (
    <TPRow
      style={{
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <TPModal
        headerTitle="Câu lạc bộ"
        headerRight={
          <TPButton
            title="Xong"
            buttonType="text"
            color={COLORS.green[600]}
            onPress={() => {
              handleToggleModal(false);
            }}
          />
        }
        modalPosition="bottom"
        overlay={true}
        isShow={isShow}
        onCloseModal={() => handleToggleModal(false)}
      >
        <View style={{ paddingHorizontal: 10, gap: 15 }}>
          <TPSearchBar placeholder="Tìm kiếm câu lạc bộ..." />
          <FlatList
            data={CLUBS}
            renderItem={({ item, index }) => (
              <Item
                item={item}
                active={clubIndex === index}
                onPress={() => setClubIndex(index)}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </TPModal>
      {clubIndex !== -1 ? (
        <View>
          <TPText variant="heading5">{CLUBS[clubIndex].name}</TPText>
          <TPText variant="body16" color={COLORS.charcoal[400]}>
            {CLUBS[clubIndex].address}
          </TPText>
        </View>
      ) : (
        <TPText variant="button" color={COLORS.green[600]}>
          Thêm câu lạc bộ
        </TPText>
      )}
      <TPRow
        style={{
          justifyContent: "flex-end",
          width: clubIndex !== -1 ? "100%" : "auto",
        }}
      >
        <TPButton
          title={clubIndex !== -1 ? "Sửa" : ""}
          buttonType="text"
          color={COLORS.green[600]}
          endIcon={
            clubIndex !== -1 ? (
              <EditIcon />
            ) : (
              <TPIcon
                name="add"
                size="small"
                color={COLORS.charcoal.white}
                hasBound
              />
            )
          }
          onPress={() => handleToggleModal(true)}
        />
      </TPRow>
    </TPRow>
  );
};
