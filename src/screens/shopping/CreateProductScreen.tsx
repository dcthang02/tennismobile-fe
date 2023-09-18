import TPBackground from "@/components/Atom/TPBackgroud";
import TPIcon from "@/components/Atom/TPIcon";
import TPRow from "@/components/Atom/TPRow";
import TPText from "@/components/Atom/TPText";
import TPWrapper from "@/components/Atom/TPWrapper";
import TPHeader from "@/components/Molecules/TPHeader";
import TPTextArea from "@/components/Molecules/TPTextArea";
import TPTextInput from "@/components/Molecules/TPTextInput";
import { COLORS } from "@/constant/colors";
import { CreateProductProps } from "@/utils/createProps";
import React, { useCallback, useState } from "react";
import { Pressable, StyleSheet, View, Image } from "react-native";

import FacebookIcon from "assets/icon/facebook.svg";
import TPSwitch from "@/components/Atom/TPSwitch";
import TPButton from "@/components/Molecules/TPButton";
import useUploadImage from "@/hooks/useUploadImage";

const CreateProductScreen = ({ navigation }: CreateProductProps) => {
  const [isSaveInfo, setIsSaveInfo] = useState(false);
  const { singleFile, selectFile } = useUploadImage(true);

  const _renderImages = useCallback(() => {
    return (
      <>
        {singleFile?.assets
          ? singleFile.assets
              .slice(0, 4)
              .map((item, index) => (
                <Image
                  key={`image-${index}`}
                  source={{ uri: item.uri }}
                  width={44}
                  height={44}
                />
              ))
          : null}

        <View style={{ gap: 4, alignItems: "center" }}>
          <Pressable style={styles.imageSelect} onPress={selectFile}>
            <TPIcon name="add"></TPIcon>
          </Pressable>
          <TPText variant="small">
            {!singleFile?.assets ? 0 : Math.min(4, singleFile.assets.length)}/4
          </TPText>
        </View>
      </>
    );
  }, [singleFile]);

  const _renderImageSelector = useCallback(() => {
    return (
      <TPWrapper>
        <TPWrapper paddingHorizontal={16} paddingTop={4} paddingBottom={4}>
          <TPText variant="heading6">Hình ảnh sản phẩm</TPText>
        </TPWrapper>
        <View style={[styles.bgWhite, { gap: 4 }]}>
          <TPText variant="small" color={COLORS.charcoal[400]}>
            Bạn có thể tải lên tối đa 4 sản phẩm
          </TPText>
          <TPRow style={{ gap: 8 }}>{_renderImages()}</TPRow>
        </View>
      </TPWrapper>
    );
  }, [_renderImages, selectFile]);

  const _renderProductDetail = useCallback(() => {
    return (
      <TPWrapper>
        <TPWrapper paddingHorizontal={16} paddingTop={4} paddingBottom={4}>
          <TPText variant="heading6">Chi tiết sản phẩm</TPText>
        </TPWrapper>
        <View style={[styles.bgWhite, { gap: 16 }]}>
          <TPTextInput
            inputType="text"
            label="Tên sản phẩm"
            borderColor={COLORS.charcoal[200]}
          />
          <TPTextArea
            placeholder="Mô tả sản phẩm"
            borderColor={COLORS.charcoal[200]}
          />
        </View>
      </TPWrapper>
    );
  }, []);

  const _renderProductPrice = useCallback(() => {
    return (
      <TPWrapper>
        <TPWrapper paddingHorizontal={16} paddingTop={4} paddingBottom={4}>
          <TPText variant="heading6">Giá sản phẩm</TPText>
        </TPWrapper>
        <View style={[styles.bgWhite, { gap: 16 }]}>
          <TPTextInput
            inputType="text"
            label="Giá sản phẩm"
            borderColor={COLORS.charcoal[200]}
            end={<TPIcon name="vnd" />}
          />
        </View>
      </TPWrapper>
    );
  }, []);

  const _renderContact = useCallback(() => {
    return (
      <TPWrapper>
        <TPWrapper paddingHorizontal={16} paddingTop={4} paddingBottom={4}>
          <TPText variant="heading6">Thông tin liên hệ</TPText>
        </TPWrapper>
        <View style={[styles.bgWhite, { gap: 16 }]}>
          <TPTextInput
            inputType="numeric"
            label="Số điện thoại"
            borderColor={COLORS.charcoal[200]}
            maxLength={10}
            rules={["phone"]}
          />
          <TPTextInput
            inputType="text"
            label="Facebook"
            borderColor={COLORS.charcoal[200]}
            end={<FacebookIcon width={24} height={24} />}
          />
          <TPTextInput inputType="text" label="Email" require={false} />
        </View>
      </TPWrapper>
    );
  }, []);

  const _renderSaveInfo = useCallback(() => {
    return (
      <TPWrapper paddingHorizontal={16} paddingTop={16} paddingBottom={16}>
        <TPRow style={styles.row}>
          <TPText variant="body14">Lưu thông tin cho lần sau</TPText>
          <TPSwitch value={isSaveInfo} onChange={setIsSaveInfo} />
        </TPRow>
      </TPWrapper>
    );
  }, [isSaveInfo]);

  const _renderButtonAdd = useCallback(() => {
    return (
      <View style={styles.btnView}>
        <TPButton title="thêm" size="large" />
      </View>
    );
  }, []);

  return (
    <TPBackground scroll top={<TPHeader headerTitle="Thêm sản phẩm mới" />}>
      <TPWrapper gap={20}>
        {_renderImageSelector()}
        {_renderProductDetail()}
        {_renderProductPrice()}
        {_renderContact()}
      </TPWrapper>
      {_renderSaveInfo()}
      {_renderButtonAdd()}
    </TPBackground>
  );
};

const styles = StyleSheet.create({
  bgWhite: {
    backgroundColor: COLORS.charcoal.white,
    padding: 16,
  },
  imageSelect: {
    width: 44,
    height: 44,
    borderWidth: 1,
    borderRadius: 4,
    borderStyle: "dashed",
    borderColor: COLORS.charcoal[500],
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    justifyContent: "space-between",
  },
  btnView: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: COLORS.charcoal.white,
  },
});

export default CreateProductScreen;
