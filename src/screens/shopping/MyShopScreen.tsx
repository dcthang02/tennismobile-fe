import TPBackground from "@/components/Atom/TPBackgroud";
import TPCard from "@/components/Atom/TPCard";
import TPRow from "@/components/Atom/TPRow";
import TPText from "@/components/Atom/TPText";
import TPWrapper from "@/components/Atom/TPWrapper";
import TPButton from "@/components/Molecules/TPButton";
import TPHeader from "@/components/Molecules/TPHeader";
import TPSearchBar from "@/components/Molecules/TPSearchBar";
import { TPProductStatus } from "@/components/Organisms/TPShop/TPItemStatus";
import { COLORS } from "@/constant/colors";
import { MyShopProps } from "@/utils/createProps";
import { getPriceString } from "@/utils/price";
import React, { useCallback } from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";

type TypeProduct = {
  id: number | string;
  name: string;
  price: number;
  image: string;
  status: "Còn hàng" | "Hết hàng";
};

const products: TypeProduct[] = [
  {
    id: 1,
    name: "Wilson Minions 2.0 Junior 25 Tennis Kit",
    price: 1000000,
    image:
      "https://product.hstatic.net/1000135006/product/head_rs_gravity_tennis_2023_specs_carousel_post_teaml_de5f567f5ffe47269bf26ff2dae9840e_large.jpg",
    status: "Còn hàng",
  },
  {
    id: 2,
    name: "Wilson Minions 2.0 Junior 25 Tennis Kit",
    price: 1000000,
    image:
      "https://product.hstatic.net/1000135006/product/head_rs_gravity_tennis_2023_specs_carousel_post_teaml_de5f567f5ffe47269bf26ff2dae9840e_large.jpg",
    status: "Hết hàng",
  },
  {
    id: 3,
    name: "Wilson Minions 2.0 Junior 25 Tennis Kit",
    price: 1000000,
    image:
      "https://product.hstatic.net/1000135006/product/head_rs_gravity_tennis_2023_specs_carousel_post_teaml_de5f567f5ffe47269bf26ff2dae9840e_large.jpg",
    status: "Còn hàng",
  },
  {
    id: 4,
    name: "Wilson Minions 2.0 Junior 25 Tennis Kit",
    price: 1000000,
    image:
      "https://product.hstatic.net/1000135006/product/head_rs_gravity_tennis_2023_specs_carousel_post_teaml_de5f567f5ffe47269bf26ff2dae9840e_large.jpg",
    status: "Còn hàng",
  },
  {
    id: 5,
    name: "Wilson Minions 2.0 Junior 25 Tennis Kit",
    price: 1000000,
    image:
      "https://product.hstatic.net/1000135006/product/head_rs_gravity_tennis_2023_specs_carousel_post_teaml_de5f567f5ffe47269bf26ff2dae9840e_large.jpg",
    status: "Còn hàng",
  },
  {
    id: 6,
    name: "Wilson Minions 2.0 Junior 25 Tennis Kit",
    price: 1000000,
    image:
      "https://product.hstatic.net/1000135006/product/head_rs_gravity_tennis_2023_specs_carousel_post_teaml_de5f567f5ffe47269bf26ff2dae9840e_large.jpg",
    status: "Còn hàng",
  },
  {
    id: 7,
    name: "Wilson Minions 2.0 Junior 25 Tennis Kit",
    price: 1000000,
    image:
      "https://product.hstatic.net/1000135006/product/head_rs_gravity_tennis_2023_specs_carousel_post_teaml_de5f567f5ffe47269bf26ff2dae9840e_large.jpg",
    status: "Còn hàng",
  },
];

const MyShopScreen = ({ navigation }: MyShopProps) => {
  const _renderProductItem = useCallback((product: TypeProduct) => {
    return (
      <TPCard paddingHorizontal={16} paddingVertical={16}>
        <TPRow style={{ gap: 8 }}>
          <Image
            source={{ uri: product.image }}
            width={98}
            height={98}
            borderRadius={8}
          />
          <TPWrapper gap={26} flex={1}>
            <TPWrapper gap={4}>
              <TPText variant="body16">{product.name}</TPText>
              <TPText variant="body16-semibold">
                {getPriceString(product.price)}
              </TPText>
              <TPProductStatus status={product.status} />
            </TPWrapper>
            <TPRow style={{ justifyContent: "flex-end" }}>
              <TPButton
                title="Chỉnh sửa"
                buttonType="text"
                textSize="small"
                color={COLORS.green[600]}
              />
            </TPRow>
          </TPWrapper>
        </TPRow>
      </TPCard>
    );
  }, []);

  const _renderBtnAddProduct = useCallback(() => {
    return (
      <View style={styles.btnView}>
        <TPButton title="Thêm sản phẩm" size="large" />
      </View>
    );
  }, []);

  return (
    <TPBackground>
      <TPHeader headerTitle="Shop của bạn" />
      <TPWrapper paddingHorizontal={16} gap={16} marginBottom={30}>
        <TPSearchBar
          placeholder="Tìm kiếm sản phẩm của bạn"
          backgroundColor="transparent"
        />
        <FlatList
          style={{ gap: 16 }}
          data={products}
          renderItem={({ item, index }) => _renderProductItem(item)}
          keyExtractor={(item, index) => `product-${item.id}-${index}`}
        />
      </TPWrapper>
      {_renderBtnAddProduct()}
    </TPBackground>
  );
};

const styles = StyleSheet.create({
  btnView: {
    backgroundColor: COLORS.charcoal.white,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});

export default MyShopScreen;
