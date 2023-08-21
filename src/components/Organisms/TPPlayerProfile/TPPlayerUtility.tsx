import TPCard from "@/components/Atom/TPCard";
import TPIcon, { TypeTPIconName } from "@/components/Atom/TPIcon";
import TPText from "@/components/Atom/TPText";
import TPWrapper from "@/components/Atom/TPWrapper";
import TPButton from "@/components/Molecules/TPButton";
import { COLORS } from "@/constant/colors";
import React, { useCallback } from "react";
import { StyleSheet, View } from "react-native";

type TPPlayerUtilityProps = {
  utility: {
    [key: string]: (TypeTPIconName | string)[];
  };
};

export const TPPlayerUtility = ({ utility }: TPPlayerUtilityProps) => {
  const _renderUtilityCard = useCallback(() => {
    return Object.entries(utility).map((item, index) => {
      if (index < 6) {
        return (
          <TPCard style={styles.item} key={`utility-item-${item[0]}-${index}`}>
            <TPWrapper gap={8}>
              <TPIcon name={item[1][1] as TypeTPIconName} size="small" />
              <TPWrapper>
                <TPText variant="body14" color={COLORS.charcoal[600]}>
                  {item[0]}
                </TPText>
                <TPText variant="body14-semibold" color={COLORS.charcoal[800]}>
                  {item[1][0]}
                </TPText>
              </TPWrapper>
            </TPWrapper>
          </TPCard>
        );
      }
      return null;
    });
  }, [utility]);
  return (
    <TPWrapper gap={10}>
      <TPText variant="heading5">Trang bị</TPText>
      <View style={styles.container}>{_renderUtilityCard()}</View>
      <View style={styles.buttonBox}>
        <TPButton title="Xem thêm" buttonType="text" color={COLORS.blue[600]} />
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
});
