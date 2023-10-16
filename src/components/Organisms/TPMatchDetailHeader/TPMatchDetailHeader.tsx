import TPIcon from "@/components/Atom/TPIcon";
import TPText from "@/components/Atom/TPText";
import TPButton from "@/components/Molecules/TPButton";
import TPImageCarousel from "@/components/Molecules/TPImageCarousel";
import { COLORS } from "@/constant/colors";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Image, StyleSheet, View, Dimensions, FlatList } from "react-native";

type TPMatchDetailHeaderProps = {
  images: string[];
  onPressButtonBack: () => void;
};

export const TPMatchDetailHeader = ({
  images,
  onPressButtonBack,
}: TPMatchDetailHeaderProps) => {
  return (
    <View style={styles.container}>
      {images.length === 0 ? (
        <View style={{ height: 100 }}></View>
      ) : (
        <TPImageCarousel images={images} />
      )}

      <View style={styles.buttonView}>
        <TPButton
          title=""
          size="small"
          buttonType="text"
          startIcon={
            <TPIcon
              name="arrow-sm-back"
              hasBound
              boundColor={COLORS.charcoal.white}
            />
          }
          onPress={onPressButtonBack}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  buttonView: {
    position: "absolute",
    top: 50,
    left: 5,
  },
});
