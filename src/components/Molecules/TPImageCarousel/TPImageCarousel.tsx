import TPText from "@/components/Atom/TPText";
import { COLORS } from "@/constant/colors";
import React, { useCallback, useState } from "react";
import { Dimensions, FlatList, View, Image, StyleSheet } from "react-native";

type TPImageCarouselProps = {
  images: string[];
  height?: number;
};

export const TPImageCarousel = ({
  images,
  height = 240,
}: TPImageCarouselProps) => {
  const [imageIndex, setImageIndex] = useState(0);

  const handleSwipeImage = useCallback((offset: number) => {
    setImageIndex(Math.ceil(offset / Dimensions.get("window").width));
  }, []);

  return (
    <View>
      <FlatList
        data={images}
        renderItem={({ item, index }) => (
          <Image
            source={{ uri: item }}
            width={Dimensions.get("window").width}
            height={height}
          />
        )}
        keyExtractor={(item, index) => `image-${item}-${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        decelerationRate={"fast"}
        snapToAlignment="start"
        snapToInterval={Dimensions.get("window").width}
        onMomentumScrollEnd={(e) => {
          handleSwipeImage(e.nativeEvent.contentOffset.x);
        }}
      />

      <View style={styles.indexView}>
        <TPText variant="small-semibold" color={COLORS.charcoal.white}>
          {imageIndex + 1}/{images.length}
        </TPText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
