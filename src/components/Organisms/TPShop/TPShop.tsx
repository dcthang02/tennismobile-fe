import TPCard from "@/components/Atom/TPCard";
import TPRow from "@/components/Atom/TPRow";
import TPText from "@/components/Atom/TPText";
import TPWrapper from "@/components/Atom/TPWrapper";
import TPButton from "@/components/Molecules/TPButton";
import TPSearchBar from "@/components/Molecules/TPSearchBar";
import { COLORS } from "@/constant/colors";
import useNavigation from "@/hooks/useNavigation";
import { getPriceString } from "@/utils/price";
import { Ionicons } from "@expo/vector-icons";
import React, { useCallback } from "react";
import { FlatList, Image, Pressable, StyleSheet, View } from "react-native";
import { TPProductRatingInfo } from "./TPItemStatus";

type TPShopProps = {
  navigation: any;
};

type TypeItem = {
  id: number | string;
  name: string;
  price: number;
  image: string;
  status: "Còn hàng" | "Hết hàng";
  vote: number;
  sold: number;
};

const items: TypeItem[] = [
  {
    id: 1,
    name: "Yonex Ezone 100L 2022 Tennis Racquet",
    price: 2000000,
    status: "Còn hàng",
    image:
      "https://tennissaigon.com/wp-content/uploads/2020/12/bong-tennis.jpg",
    vote: 4.8,
    sold: 10,
  },
  {
    id: 2,
    name: "Yonex Ezone 100L 2022 Tennis Racquet",
    price: 2000000,
    status: "Còn hàng",
    image:
      "https://tennissaigon.com/wp-content/uploads/2020/12/bong-tennis.jpg",
    vote: 4.8,
    sold: 20,
  },
  {
    id: 3,
    name: "Yonex Ezone 100L 2022 Tennis Racquet",
    price: 2000000,
    status: "Còn hàng",
    image:
      "https://tennissaigon.com/wp-content/uploads/2020/12/bong-tennis.jpg",
    vote: 4.8,
    sold: 20,
  },
  {
    id: 3,
    name: "Yonex Ezone 100L 2022 Tennis Racquet",
    price: 2000000,
    status: "Còn hàng",
    image:
      "https://tennissaigon.com/wp-content/uploads/2020/12/bong-tennis.jpg",
    vote: 4.8,
    sold: 20,
  },
  {
    id: 5,
    name: "Yonex Ezone 100L 2022 Tennis Racquet",
    price: 2000000,
    status: "Còn hàng",
    image:
      "https://tennissaigon.com/wp-content/uploads/2020/12/bong-tennis.jpg",
    vote: 4.8,
    sold: 20,
  },
];

export const TPShop = ({ navigation }: TPShopProps) => {
  const { handleNavigate } = useNavigation(navigation);
  const _renderListItems = useCallback(() => {
    return (
      <FlatList
        key={"#"}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => `shop-item-${item.id}`}
        data={items}
        style={{ gap: 10 }}
        contentContainerStyle={{ gap: 10 }}
        renderItem={({ item, index }) => (
          <Pressable
            style={{
              width: "50%",
              paddingRight: index % 2 === 0 ? 5 : 0,
              paddingLeft: index % 2 === 0 ? 0 : 5,
            }}
            onPress={() =>
              handleNavigate("ShoppingDetail", {
                productId: item.id,
                name: item.name,
              })
            }
          >
            <TPCard
              style={{ overflow: "hidden" }}
              paddingHorizontal={0}
              paddingVertical={0}
            >
              <Image source={{ uri: item.image }} style={styles.imageItem} />
              <TPWrapper
                paddingHorizontal={8}
                paddingBottom={8}
                paddingTop={4}
                gap={8}
              >
                <TPText variant="body14" color={COLORS.charcoal[600]}>
                  {item.name}
                </TPText>
                <TPText variant="body16-semibold" color={COLORS.green[600]}>
                  {getPriceString(item.price)}
                </TPText>
                <TPProductRatingInfo
                  sold={item.sold}
                  status={item.status}
                  vote={item.vote}
                  textColor={COLORS.charcoal[400]}
                  flexDirection="column-reverse"
                  alignItems="flex-start"
                />
              </TPWrapper>
            </TPCard>
          </Pressable>
        )}
        numColumns={2}
      />
    );
  }, [handleNavigate]);

  return (
    <>
      <TPRow style={styles.searchBarRow}>
        <View style={{ flex: 1 }}>
          <TPSearchBar
            placeholder="Tìm kiếm sản phẩm"
            backgroundColor="transparent"
          />
        </View>
        <TPButton
          title=""
          startIcon={<Ionicons name="ios-filter" size={24} />}
          color={COLORS.charcoal[600]}
          size="tiny"
          buttonType="text"
        />
      </TPRow>
      {_renderListItems()}
    </>
  );
};

const styles = StyleSheet.create({
  searchBarRow: {
    alignItems: "center",
    gap: 16,
  },
  imageItem: {
    height: 200,
  },
});
