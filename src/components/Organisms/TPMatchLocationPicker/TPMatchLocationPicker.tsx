import TPCard from "@/components/Atom/TPCard";
import TPIcon from "@/components/Atom/TPIcon";
import TPRow from "@/components/Atom/TPRow";
import TPSwitch from "@/components/Atom/TPSwitch";
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
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  View,
} from "react-native";

type TPMatchLocationPickerProps = {
  isPending?: boolean;
  onChangePendingStatus?: (status: boolean) => void;
};

type LocationItemProps = {
  name: string;
  address: string;
};

const locations = [
  {
    id: "1",
    name: "Cau lac bo tennis cau long",
    address: "123 P. Hoàng Ngân, Trung Hoà, Cầu Giấy, Hà Nội, Vietnam",
  },
  {
    id: "2",
    name: "Cau lac bo tennis cau long",
    address: "123 P. Hoàng Ngân, Trung Hoà, Cầu Giấy, Hà Nội, Vietnam",
  },
  {
    id: "3",
    name: "Cau lac bo tennis cau long",
    address: "123 P. Hoàng Ngân, Trung Hoà, Cầu Giấy, Hà Nội, Vietnam",
  },
  {
    id: "4",
    name: "Cau lac bo tennis cau long",
    address: "123 P. Hoàng Ngân, Trung Hoà, Cầu Giấy, Hà Nội, Vietnam",
  },
  {
    id: "5",
    name: "Cau lac bo tennis cau long",
    address: "123 P. Hoàng Ngân, Trung Hoà, Cầu Giấy, Hà Nội, Vietnam",
  },
  {
    id: "6",
    name: "Cau lac bo tennis cau long",
    address: "123 P. Hoàng Ngân, Trung Hoà, Cầu Giấy, Hà Nội, Vietnam",
  },
  {
    id: "7",
    name: "Cau lac bo tennis cau long",
    address: "123 P. Hoàng Ngân, Trung Hoà, Cầu Giấy, Hà Nội, Vietnam",
  },
];

const getClubName = (id: string | number) => {
  return locations.find((item) => item.id === id)?.name;
};

const LocationItem = ({ name, address }: LocationItemProps) => {
  return (
    <TPWrapper gap={4}>
      <TPText variant="body16-semibold">{name}</TPText>
      <TPText variant="body14" color={COLORS.charcoal[500]}>
        {address}
      </TPText>
    </TPWrapper>
  );
};

export const TPMatchLocationPicker = ({
  isPending = false,
  onChangePendingStatus,
}: TPMatchLocationPickerProps) => {
  const { isShow, handleToggleModal } = useModal();
  const [searchString, setSearchString] = useState("");
  const {
    value: selectedLocations,
    modalValues: modalLocations,
    setModalValues: setModalLocations,
    handleSelectSingleValue: handleSelectLocation,
    handleSubmitModal,
  } = useModalSelection(locations[0].id, handleToggleModal);
  const data = useMemo(() => locations, []);

  const openModalCallback = useCallback(() => {
    if (selectedLocations.length !== 0) setModalLocations(selectedLocations);
    else setModalLocations([locations[0].id]);
    setSearchString("");
  }, [selectedLocations]);

  const _renderFindLocation = useCallback(() => {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <FlatList
          keyboardShouldPersistTaps={"always"}
          showsVerticalScrollIndicator={false}
          data={[1]}
          renderItem={() => {
            return (
              <>
                <TPSearchBar placeholder="Tìm kiếm tên sân, địa điểm,..." />
                <TPSelection
                  data={data.map((item) => {
                    return {
                      id: item.id,
                      value: item.id,
                      label: (
                        <LocationItem name={item.name} address={item.address} />
                      ),
                    };
                  })}
                  value={modalLocations}
                  column
                  gap={8}
                  multiple={false}
                  onChange={handleSelectLocation}
                />
              </>
            );
          }}
        />
      </KeyboardAvoidingView>
    );
  }, [data, modalLocations, handleSelectLocation]);

  return (
    <TPWrapper gap={4}>
      <TPModal
        isShow={isShow}
        onCloseModal={() => handleToggleModal(false, openModalCallback)}
        headerTitle="Địa điểm thi đấu"
        headerRight={
          <TPButton
            title="Thêm sân"
            buttonType="text"
            color={COLORS.green[600]}
            textSize="small"
            size="tiny"
            onPress={handleSubmitModal}
          />
        }
      >
        {_renderFindLocation()}
      </TPModal>
      <TPText variant="heading6">Địa điểm thi đấu</TPText>
      <TPCard style={styles.card}>
        <Pressable
          style={styles.pressable}
          onPress={() => handleToggleModal(true)}
        >
          <TPRow style={styles.row}>
            <TPIcon name="map-marker" size="small" />
            <View style={styles.viewText}>
              <TPText variant="body14">Điạ điểm</TPText>
              {selectedLocations.length !== 0 && (
                <TPText variant="body14-semibold" color={COLORS.blue[600]}>
                  {getClubName(selectedLocations[0])}
                </TPText>
              )}
            </View>
            <TPIcon name="arrow-sm-down" />
          </TPRow>
        </Pressable>
      </TPCard>
      <TPRow style={styles.row2}>
        <TPText variant="body14">Chưa rõ thời gian</TPText>
        <TPSwitch value={isPending} onChange={onChangePendingStatus} />
      </TPRow>
    </TPWrapper>
  );
};

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 0,
    borderRadius: 16,
  },
  pressable: {
    paddingLeft: 16,
    paddingRight: 12,
    paddingVertical: 8,
  },
  row: {
    gap: 12,
    alignItems: "center",
  },
  viewText: {
    flex: 1,
  },
  row2: {
    alignItems: "center",
    justifyContent: "space-between",
  },
});
