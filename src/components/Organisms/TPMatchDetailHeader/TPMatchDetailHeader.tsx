import TPIcon from "@/components/Atom/TPIcon";
import TPText from "@/components/Atom/TPText";
import TPButton from "@/components/Molecules/TPButton";
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
  const [imageIndex, setImageIndex] = useState(0);

  const handleSwipeImage = useCallback((offset: number) => {
    setImageIndex(Math.ceil(offset / Dimensions.get("window").width));
  }, []);

  if (images.length === 0) return null;
  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={({ item, index }) => (
          <Image
            source={{ uri: item }}
            width={Dimensions.get("window").width}
            height={250}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        decelerationRate={"fast"}
        snapToAlignment="start"
        snapToInterval={Dimensions.get("window").width}
        onMomentumScrollEnd={(e) => {
          handleSwipeImage(e.nativeEvent.contentOffset.x);
        }}
      />

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
      <View style={styles.indexView}>
        <TPText variant="small-semibold" color={COLORS.charcoal.white}>
          {imageIndex + 1}/{images.length}
        </TPText>
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
  indexView: {
    position: "absolute",
    bottom: 10,
    right: 15,
    backgroundColor: COLORS.black.fade,
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
});
