import TPBackground from "@/components/Atom/TPBackgroud";
import TPIcon, { TypeTPIconName } from "@/components/Atom/TPIcon";
import TPRow from "@/components/Atom/TPRow";
import TPText from "@/components/Atom/TPText";
import TPWrapper from "@/components/Atom/TPWrapper";
import TPButton from "@/components/Molecules/TPButton";
import TPImageCarousel from "@/components/Molecules/TPImageCarousel";
import { TPProductRatingInfo } from "@/components/Organisms/TPShop/TPItemStatus";
import { COLORS } from "@/constant/colors";
import useNavigation from "@/hooks/useNavigation";
import { ShoppingDetailProps } from "@/utils/createProps";
import { getPriceString } from "@/utils/price";
import React, { ReactNode, useCallback } from "react";
import { StyleSheet, View } from "react-native";

import FacebookIcon from "assets/icon/facebook.svg";
import TPItemReviews from "@/components/Organisms/TPItemReviews";

const product = {
  images: [
    "https://vtv1.mediacdn.vn/zoom/640_400/2018/11/25/5af81423deea5image-15431019534061098857382.jpg",
    "https://vcdn-thethao.vnecdn.net/2020/08/21/2018-08-19t213843z483148379noc-2389-9116-1597985242.jpg",
    "https://cdnphoto.dantri.com.vn/yEqYMSARKdiLWZpvEGdFTfXlU6Y=/zoom/1200_630/2023/09/16/djokovic-1694831434590.jpeg",
  ],
  name: "Yonex Ezone 100L 2022 Tennis Racquet",
  price: 2000000,
  vote: 4.8,
  sold: 100,
  status: "Còn hàng",
  description:
    "This light weight and comfortable feel gives this model all the right reasons why it’s a top racket of 2023. Similar to the standard Ezone,the EZONE 100L uses the Isometric head, making it easier to hit shots unbalanced. This model weighs 10.1 ounces unstrung, which makes it easy to produce spin and power. Yonex has also modified the shaft for more stability along with a thinner frame for softer feedback and comfort. Yonex does a nice job by combining a mixture of blues and black to give this years version a nice look. All in all, the Yonex Ezone 100L is a great choice for any player looking for extra spin, power, and control.",
  seller: {
    name: "Luffy",
    phone: "0909668886",
    facebook: "/luffy99",
    email: "luffy99@gmail.com",
  },
};

const ShoppingDetailScreen = ({ route, navigation }: ShoppingDetailProps) => {
  const { images, name, price, vote, sold, status, seller, description } =
    product;
  const { handleGoback } = useNavigation(navigation);

  const _renderButtonBack = useCallback(() => {
    return (
      <View style={styles.backBtnView}>
        <TPButton
          title=""
          startIcon={
            <TPIcon
              name="arrow-sm-back"
              hasBound
              boundColor={COLORS.charcoal.white}
              size="small"
            />
          }
          buttonType="text"
          size="small"
          onPress={handleGoback}
        />
      </View>
    );
  }, [handleGoback]);

  const _renderButtonShare = useCallback(() => {
    return (
      <View style={styles.btnShare}>
        <TPButton
          title=""
          startIcon={
            <TPIcon
              name="share"
              hasBound
              boundColor={COLORS.charcoal.white}
              size="small"
            />
          }
          buttonType="text"
          size="small"
        />
      </View>
    );
  }, []);

  const _renderProductInfo = useCallback(() => {
    return (
      <TPWrapper>
        <TPRow style={styles.priceRow}>
          <TPIcon name="price" color={COLORS.charcoal.white} />
          <TPText variant="heading5" color={COLORS.charcoal.white}>
            {getPriceString(price)}
          </TPText>
        </TPRow>
        <TPWrapper paddingHorizontal={16} paddingTop={8} paddingBottom={8}>
          <TPText variant="body16">{name}</TPText>
          <TPWrapper paddingHorizontal={8} paddingTop={8} paddingBottom={8}>
            <TPProductRatingInfo
              vote={vote}
              sold={sold}
              status={status as "Còn hàng" | "Hết hàng"}
              textColor={COLORS.charcoal[800]}
            />
          </TPWrapper>
        </TPWrapper>
      </TPWrapper>
    );
  }, []);

  const _renderContactRow = useCallback(
    (icon: ReactNode, text: string, hasborder: boolean = true) => {
      return (
        <TPRow
          style={{
            ...styles.contactRow,
            borderBottomWidth: hasborder ? 1 : 0,
            borderBottomColor: COLORS.charcoal[200],
          }}
        >
          {icon}
          <View style={{ flex: 1 }}>
            <TPText variant="body14">{text}</TPText>
          </View>
          <TPIcon
            name="right-arrow"
            size="small"
            color={COLORS.charcoal[600]}
          />
        </TPRow>
      );
    },
    []
  );

  const _renderContactSeller = useCallback(() => {
    return (
      <TPWrapper>
        <TPWrapper paddingHorizontal={16} paddingTop={4} paddingBottom={4}>
          <TPText variant="heading6">Liên hệ người bán</TPText>
        </TPWrapper>
        <View style={{ backgroundColor: COLORS.charcoal.white }}>
          <TPWrapper paddingHorizontal={16} paddingTop={4} paddingBottom={4}>
            {_renderContactRow(
              <TPIcon name="mobile" size="small" />,
              seller.phone
            )}
            {_renderContactRow(
              <FacebookIcon width={16} height={16} />,
              seller.facebook
            )}
            {_renderContactRow(
              <TPIcon name="mail" size="small" />,
              seller.email,
              false
            )}
          </TPWrapper>
        </View>
      </TPWrapper>
    );
  }, [_renderContactRow]);

  const _renderProductDescription = useCallback(() => {
    return (
      <TPWrapper>
        <TPWrapper paddingHorizontal={16} paddingTop={4} paddingBottom={4}>
          <TPText variant="heading6">Mô tả sản phẩm</TPText>
        </TPWrapper>
        <View style={{ padding: 16, backgroundColor: COLORS.charcoal.white }}>
          <TPText variant="body14" color={COLORS.charcoal[400]}>
            {description}
          </TPText>
        </View>
      </TPWrapper>
    );
  }, []);

  const _renderContactSellerButton = useCallback(() => {
    return (
      <TPRow style={styles.buttonContactBox}>
        <TPIcon name="comment" />
        <TPWrapper flex={1}>
          <TPButton title="Liên hệ người bán" size="large" />
        </TPWrapper>
      </TPRow>
    );
  }, []);

  return (
    <TPBackground scroll>
      <View>
        <TPImageCarousel images={images} height={350} />
        {_renderButtonBack()}
        {_renderButtonShare()}
      </View>
      {_renderProductInfo()}
      <TPWrapper gap={20}>
        {_renderContactSeller()}
        {_renderProductDescription()}
        <TPItemReviews rating={vote} />
        {_renderContactSellerButton()}
      </TPWrapper>
    </TPBackground>
  );
};

const styles = StyleSheet.create({
  backBtnView: {
    position: "absolute",
    top: 30,
    left: 4,
  },
  btnShare: {
    position: "absolute",
    top: 30,
    right: 4,
  },
  priceRow: {
    gap: 8,
    alignItems: "center",
    backgroundColor: COLORS.green[600],
    padding: 16,
  },
  contactRow: {
    alignItems: "center",
    gap: 8,
    paddingVertical: 16,
  },
  buttonContactBox: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: COLORS.charcoal.white,
    gap: 16,
    alignItems: "center",
  },
});

export default ShoppingDetailScreen;
