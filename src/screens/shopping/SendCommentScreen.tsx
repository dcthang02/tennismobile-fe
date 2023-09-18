import TPBackground from "@/components/Atom/TPBackgroud";
import TPRow from "@/components/Atom/TPRow";
import TPText from "@/components/Atom/TPText";
import TPWrapper from "@/components/Atom/TPWrapper";
import TPButton from "@/components/Molecules/TPButton";
import TPHeader from "@/components/Molecules/TPHeader";
import TPTextArea from "@/components/Molecules/TPTextArea";
import { COLORS } from "@/constant/colors";
import { SendCommentProps } from "@/utils/createProps";
import { AntDesign } from "@expo/vector-icons";
import React, { useCallback, useState } from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";

const product = {
  name: "Wilson Minions 2.0 Junior 25 Tennis Kit",
  image:
    "https://images.elipsport.vn/news/2020/12/7/tennis-la-gi-tim-hieu-luat-choi-tennis.1607314050.jpg",
};

const SendCommentScreen = ({ route, navigation }: SendCommentProps) => {
  const [rate, setRate] = useState(0);

  const _renderProductName = useCallback(() => {
    return (
      <TPRow style={styles.whiteBg}>
        <Image
          source={{ uri: product.image }}
          width={48}
          height={48}
          borderRadius={8}
        />
        <TPText variant="body16">{product.name}</TPText>
      </TPRow>
    );
  }, []);

  const _renderVote = useCallback(() => {
    return (
      <TPRow style={{ ...styles.whiteBg, justifyContent: "space-between" }}>
        <TPRow style={styles.starRow}>
          {[1, 2, 3, 4, 5].map((num) => (
            <Pressable key={`star-rate-${num}`} onPress={() => setRate(num)}>
              <AntDesign
                name="star"
                size={24}
                color={num <= rate ? COLORS.golden[600] : COLORS.charcoal[400]}
              />
            </Pressable>
          ))}
        </TPRow>
        <TPText variant="heading6">Tốt</TPText>
      </TPRow>
    );
  }, [rate]);

  const _renderWriteComment = useCallback(() => {
    return (
      <View style={styles.whiteBg}>
        <TPTextArea
          placeholder="Chia sẻ suy nghĩ của bạn về sản phẩm"
          borderColor={COLORS.charcoal[200]}
        />
      </View>
    );
  }, []);

  const _renderBtn = useCallback(() => {
    return (
      <View style={styles.btnView}>
        <TPButton title="Gửi đánh giá" />
      </View>
    );
  }, []);
  return (
    <TPBackground
      scroll
      top={<TPHeader headerTitle="Đánh giá sản phẩm" />}
      bottom={_renderBtn()}
    >
      <TPWrapper gap={20}>
        {_renderProductName()}
        {_renderVote()}
        {_renderWriteComment()}
      </TPWrapper>
    </TPBackground>
  );
};

const styles = StyleSheet.create({
  btnView: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: COLORS.charcoal.white,
  },
  whiteBg: {
    padding: 16,
    backgroundColor: COLORS.charcoal.white,
    gap: 8,
  },
  starRow: {
    gap: 12,
  },
});

export default SendCommentScreen;
