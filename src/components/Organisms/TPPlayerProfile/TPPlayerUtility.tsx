import TPCard from "@/components/Atom/TPCard";
import TPIcon, { TypeTPIconName } from "@/components/Atom/TPIcon";
import TPRow from "@/components/Atom/TPRow";
import TPText from "@/components/Atom/TPText";
import TPWrapper from "@/components/Atom/TPWrapper";
import TPButton from "@/components/Molecules/TPButton";
import TPModal from "@/components/Molecules/TPModal";
import { COLORS } from "@/constant/colors";
import useModal from "@/hooks/useModal";
import React, { useCallback } from "react";
import { StyleSheet, View } from "react-native";

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
      <TPRow style={styles.headerRow}>
        <TPText variant="heading5">Trang bị</TPText>
        {editable && (
          <TPButton
            title="Chỉnh sửa"
            buttonType="text"
            color={COLORS.blue[600]}
            size="small"
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
