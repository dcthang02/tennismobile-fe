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
import TPTextInput from "@/components/Molecules/TPTextInput";
import { COLORS } from "@/constant/colors";
import useGetStadiums from "@/hooks/useGetStadiums";
import useModal from "@/hooks/useModal";
import useModalSelection from "@/hooks/useModalSelection";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  View,
} from "react-native";

type TPMatchLocationPickerProps = {
  value?: string;
  onChangeStadium?: (x: string) => void;
  isPending?: boolean;
  onChangePendingStatus?: (status: boolean) => void;
};

type LocationItemProps = {
  name: string;
  address: string;
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
  value = "",
  onChangeStadium,
}: TPMatchLocationPickerProps) => {
  const { getStadiums, stadiumsData } = useGetStadiums();

  const { isShow, handleToggleModal } = useModal();

  const [searchString, setSearchString] = useState("");

  const {
    value: selectedLocations,
    modalValues: modalLocations,
    setModalValues: setModalLocations,
    handleSelectSingleValue: handleSelectLocation,
    handleSubmitModal,
  } = useModalSelection("", handleToggleModal);

  const data = useMemo(
    () =>
      stadiumsData
        ? stadiumsData.stadiums.filter(
            (item: any) =>
              item.name.includes(searchString) ||
              item.address.includes(searchString)
          )
        : null,
    [stadiumsData, searchString]
  );

  useEffect(() => {
    getStadiums();
  }, []);

  const handleOnChangeStadium = useCallback(
    (id: string) => {
      handleSubmitModal();
      onChangeStadium && onChangeStadium(id);
    },
    [onChangeStadium, handleSubmitModal]
  );

  const openModalCallback = useCallback(() => {
    if (selectedLocations.length !== 0) setModalLocations(selectedLocations);
    else setModalLocations([]);
    setSearchString("");
  }, [selectedLocations, setModalLocations]);

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
            if (data)
              return (
                <>
                  <TPSearchBar
                    placeholder="Tìm kiếm tên sân, địa điểm,..."
                    onChange={setSearchString}
                  />
                  <TPSelection
                    data={data.map((item: any) => {
                      return {
                        id: item.id,
                        value: item.id,
                        label: (
                          <LocationItem
                            name={item.name}
                            address={item.address}
                          />
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
            return null;
          }}
        />
      </KeyboardAvoidingView>
    );
  }, [data, modalLocations, handleSelectLocation]);

  const _renderPendind = useCallback(() => {
    return (
      <TPWrapper gap={8}>
        <TPTextInput inputType="text" label="Nhập tên sân tạm thời" />
        <TPTextInput inputType="text" label="Địa chỉ" />
        <TPText variant="small" color={COLORS.charcoal[600]}>
          Bạn có thể chỉnh sửa lại địa điểm chính thức sau khi xác nhận cụ thể
          với mọi người
        </TPText>
      </TPWrapper>
    );
  }, []);

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
            onPress={() => handleOnChangeStadium(modalLocations[0] as string)}
          />
        }
      >
        {_renderFindLocation()}
      </TPModal>
      <TPText variant="heading6">Địa điểm thi đấu</TPText>
      <TPCard style={styles.card}>
        <Pressable
          style={styles.pressable}
          onPress={() => !isPending && handleToggleModal(true)}
        >
          <TPRow style={styles.row}>
            <TPIcon
              name="map-marker"
              size="small"
              color={isPending ? COLORS.charcoal[400] : COLORS.charcoal[800]}
            />
            <View style={styles.viewText}>
              <TPText
                variant="body14"
                color={isPending ? COLORS.charcoal[400] : COLORS.charcoal[800]}
              >
                Điạ điểm
              </TPText>
              {selectedLocations.length !== 0 && (
                <TPText variant="body14-semibold" color={COLORS.blue[600]}>
                  {
                    stadiumsData?.stadiums.find(
                      (item: any) => item.id === selectedLocations[0]
                    )?.name
                  }
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
      {isPending && _renderPendind()}
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
