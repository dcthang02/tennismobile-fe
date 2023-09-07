import TPCard from "@/components/Atom/TPCard";
import TPIcon, { TypeTPIconName } from "@/components/Atom/TPIcon";
import TPRow from "@/components/Atom/TPRow";
import TPText from "@/components/Atom/TPText";
import TPWrapper from "@/components/Atom/TPWrapper";
import TPButton from "@/components/Molecules/TPButton";
import TPModal from "@/components/Molecules/TPModal";
import TPTextInput from "@/components/Molecules/TPTextInput";
import { COLORS } from "@/constant/colors";
import useModal from "@/hooks/useModal";
import React, { useCallback, useEffect, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type TPPlayerUtilityProps = {
  utility: {
    [key: string]: (TypeTPIconName | string)[];
  };
  editable?: boolean;
};

export const TPPlayerUtility = ({
  utility,
  editable = false,
}: TPPlayerUtilityProps) => {
  const { isShow, handleToggleModal } = useModal();
  const { isShow: showEdit, handleToggleModal: handleToggleEditModal } =
    useModal();
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [keyBoardVisible, setKeyboardVisible] = useState(false);
  console.log(currentIndex);
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        console.log("hide");
        setKeyboardVisible(false); // or some other action
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  const _renderUtilityCard = useCallback(
    (showAll: boolean = false) => {
      const limit = showAll ? Object.entries(utility).length : 6;
      return (
        <View style={styles.container}>
          {Object.entries(utility).map((item, index) => {
            if (index < limit) {
              return (
                <TPCard
                  style={styles.item}
                  key={`utility-item-${item[0]}-${index}`}
                >
                  <TPWrapper gap={8}>
                    <TPIcon name={item[1][1] as TypeTPIconName} size="small" />
                    <TPWrapper>
                      <TPText variant="body14" color={COLORS.charcoal[600]}>
                        {item[0]}
                      </TPText>
                      <TPText
                        variant="body14-semibold"
                        color={COLORS.charcoal[800]}
                      >
                        {item[1][0]}
                      </TPText>
                    </TPWrapper>
                  </TPWrapper>
                </TPCard>
              );
            }
            return null;
          })}
        </View>
      );
    },
    [utility]
  );
  const _renderEditUtility = useCallback(() => {
    return (
      <View style={{ height: 715 }}>
        <View
          style={{
            position: "absolute",
            width: "100%",
            gap: 10,
            top: !keyBoardVisible ? 0 : currentIndex <= 4 ? 280 : 0,
          }}
        >
          {Object.entries(utility).map((item, index) => {
            return (
              <TPTextInput
                key={`input-${item[0]}`}
                label={item[0]}
                inputType="text"
                parentValue={item[1][0]}
                callbackFocus={() => setCurrentIndex(index)}
              />
            );
          })}
        </View>
      </View>
    );
  }, [utility, currentIndex, keyBoardVisible]);
  return (
    <TPWrapper gap={10}>
      <TPModal
        isShow={isShow}
        overlay={true}
        onCloseModal={() => handleToggleModal(false)}
        backgroundColor={COLORS.background}
        headerTitle="Trang bị"
      >
        {_renderUtilityCard(true)}
      </TPModal>
      <TPModal
        isShow={showEdit}
        overlay={true}
        onCloseModal={() => handleToggleEditModal(false)}
        backgroundColor={COLORS.background}
        headerTitle="Chỉnh sửa trang bị"
        headerRight={
          <TPButton
            title="Xong"
            textSize="small"
            buttonType="text"
            color={COLORS.green[600]}
            onPress={() => handleToggleEditModal(false)}
          />
        }
      >
        {_renderEditUtility()}
      </TPModal>
      <TPRow style={styles.headerRow}>
        <TPText variant="heading5">Trang bị</TPText>
        {editable && (
          <TPButton
            title="Chỉnh sửa"
            buttonType="text"
            color={COLORS.blue[600]}
            size="small"
            onPress={() => handleToggleEditModal(true)}
          />
        )}
      </TPRow>
      {_renderUtilityCard()}
      <View style={styles.buttonBox}>
        <TPButton
          title="Xem thêm"
          buttonType="text"
          color={COLORS.blue[600]}
          onPress={() => handleToggleModal(true)}
        />
      </View>
    </TPWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "space-between",
    rowGap: 10,
  },
  item: {
    width: "49%",
  },
  buttonBox: {
    alignItems: "center",
  },
  headerRow: {
    alignItems: "center",
    justifyContent: "space-between",
  },
});
