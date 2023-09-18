import TPAvatar from "@/components/Atom/TPAvatar";
import TPRow from "@/components/Atom/TPRow";
import TPText from "@/components/Atom/TPText";
import TPWrapper from "@/components/Atom/TPWrapper";
import TPButton from "@/components/Molecules/TPButton";
import { COLORS } from "@/constant/colors";
import { AntDesign } from "@expo/vector-icons";
import React, { useCallback } from "react";
import { FlatList, StyleSheet, View } from "react-native";

type TPItemReview = {
  rating: number;
  isFull?: boolean;
};

type TypeReview = {
  id: number | string;
  rating: number;
  description: string;
  reviewerName: string;
  reviewerImage: string;
};

const reviews: TypeReview[] = [
  {
    id: 1,
    rating: 4,
    description: "Sản phẩm tốt, đáng mua",
    reviewerName: "Huy",
    reviewerImage:
      "https://static.wikia.nocookie.net/naruto-viet-nam/images/4/49/Naruto_Shipp%C5%ABden_Logo-1.png/revision/latest?cb=20170427074448&path-prefix=vi",
  },
  {
    id: 2,
    rating: 1,
    description: "Bỏ đi bạn ơi, mua về ném thùng rác :((",
    reviewerName: "Huy",
    reviewerImage:
      "https://static.wikia.nocookie.net/naruto-viet-nam/images/4/49/Naruto_Shipp%C5%ABden_Logo-1.png/revision/latest?cb=20170427074448&path-prefix=vi",
  },
  {
    id: 3,
    rating: 1,
    description: "Tôi không hiểu sao lại mua thứ này nữa",
    reviewerName: "Huy",
    reviewerImage:
      "https://static.wikia.nocookie.net/naruto-viet-nam/images/4/49/Naruto_Shipp%C5%ABden_Logo-1.png/revision/latest?cb=20170427074448&path-prefix=vi",
  },
  {
    id: 4,
    rating: 4,
    description: "Sản phẩm tốt, đáng mua",
    reviewerName: "Huy",
    reviewerImage:
      "https://static.wikia.nocookie.net/naruto-viet-nam/images/4/49/Naruto_Shipp%C5%ABden_Logo-1.png/revision/latest?cb=20170427074448&path-prefix=vi",
  },
  {
    id: 5,
    rating: 4,
    description: "Sản phẩm tốt, đáng mua",
    reviewerName: "Huy",
    reviewerImage:
      "https://static.wikia.nocookie.net/naruto-viet-nam/images/4/49/Naruto_Shipp%C5%ABden_Logo-1.png/revision/latest?cb=20170427074448&path-prefix=vi",
  },
  {
    id: 6,
    rating: 4,
    description: "Sản phẩm tốt, đáng mua",
    reviewerName: "Huy",
    reviewerImage:
      "https://static.wikia.nocookie.net/naruto-viet-nam/images/4/49/Naruto_Shipp%C5%ABden_Logo-1.png/revision/latest?cb=20170427074448&path-prefix=vi",
  },
];

export const TPItemReviews = ({ rating, isFull = false }: TPItemReview) => {
  const _renderReview = useCallback((review: TypeReview) => {
    const { id, description, rating, reviewerImage, reviewerName } = review;
    return (
      <TPWrapper paddingTop={8} paddingBottom={8} gap={8} key={`review-${id}`}>
        <TPRow style={{ gap: 4, alignItems: "center" }}>
          <TPAvatar uri={reviewerImage} size="tiny" />
          <TPText variant="small-semibold">{reviewerName}</TPText>
        </TPRow>
        <TPRow>
          {[1, 2, 3, 4, 5].map((num) => (
            <AntDesign
              key={`star-${num}`}
              name="star"
              size={12}
              color={num <= rating ? COLORS.golden[600] : COLORS.charcoal[300]}
            />
          ))}
        </TPRow>
        <TPText variant="small" color={COLORS.charcoal[600]}>
          {description}
        </TPText>
      </TPWrapper>
    );
  }, []);
  return (
    <TPWrapper>
      <TPWrapper paddingHorizontal={16} paddingTop={4} paddingBottom={4}>
        <TPRow style={styles.row}>
          <TPText variant="heading6">Đánh giá sản phẩm</TPText>
          <TPButton
            title="Xem thêm"
            buttonType="text"
            color={COLORS.blue[600]}
            textSize="small"
            size="small"
          />
        </TPRow>
        <TPRow style={{ ...styles.itemsCenter, gap: 4 }}>
          {[1, 2, 3, 4, 5].map((num) => (
            <AntDesign
              key={`icon-star-${num}`}
              name="star"
              size={12}
              color={num <= rating ? COLORS.golden[600] : COLORS.charcoal[300]}
            />
          ))}
          <TPRow style={styles.itemsCenter}>
            <TPText variant="body14-semibold">{rating}</TPText>
            <TPText variant="small">/5</TPText>
          </TPRow>
        </TPRow>
      </TPWrapper>
      <View style={styles.listReviews}>
        <FlatList
          data={reviews}
          renderItem={({ item, index }) =>
            isFull
              ? _renderReview(item)
              : index < 3
              ? _renderReview(item)
              : null
          }
          keyExtractor={(item) => `review-${item.id}`}
        />
      </View>
    </TPWrapper>
  );
};

const styles = StyleSheet.create({
  row: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemsCenter: {
    alignItems: "center",
  },
  listReviews: {
    backgroundColor: COLORS.charcoal.white,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
});
