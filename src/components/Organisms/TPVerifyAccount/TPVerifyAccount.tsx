import React, { useCallback } from "react";

import { View } from "react-native";
import TPText from "@/components/Atom/TPText";
import TPWrapper from "@/components/Atom/TPWrapper";
import TPRow from "@/components/Atom/TPRow";
import TPButton from "@/components/Molecules/TPButton";
import TPTextInput from "@/components/Molecules/TPTextInput";
import TPProgress from "@/components/Molecules/TPProgress";
import TPIcon from "@/components/Atom/TPIcon";
import TPSelection from "@/components/Molecules/TPSelection";

import { COLORS } from "@/constant/colors";

const genderData = [
  {
    id: 1,
    value: "male",
    label: "Nam",
  },
  {
    id: 2,
    value: "female",
    label: "Nữ",
  },
];

export const TPVerifyAccount = () => {
  const _renderStep1 = useCallback(() => {
    return (
      <View style={{ paddingVertical: 10, gap: 10 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 15,
          }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 64,
              width: 64,
              borderRadius: 32,
              backgroundColor: COLORS.charcoal[300],
            }}
          >
            <TPIcon name="user" />
          </View>
          <TPButton
            title="Tải ảnh đại diện"
            size="small"
            isFullWidth={false}
            buttonType="outline"
            color={COLORS.green[600]}
            backgroundColor="transparent"
          />
        </View>
        <TPTextInput inputType="text" label="Họ tên" />
        <TPTextInput inputType="text" label="Ngày tháng năm sinh" />
        <TPSelection data={genderData} />
      </View>
    );
  }, []);

  const _renderStep2 = useCallback(() => {
    return (
      <View>
        <TPRow style={{ justifyContent: "space-between" }}>
          <TPText variant="heading5">Trình độ đơn</TPText>
          <TPRow style={{ alignItems: "center" }}>
            <TPButton
              title="Thêm"
              size="small"
              buttonType="text"
              color={COLORS.green[600]}
            />
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: 30,
                height: 30,
                borderRadius: 15,
                backgroundColor: COLORS.green[600],
              }}
            >
              <TPIcon name="add" size="default" color={COLORS.charcoal.white} />
            </View>
          </TPRow>
        </TPRow>
      </View>
    );
  }, []);

  const _renderStep3 = useCallback(() => {
    return (
      <TPRow style={{ justifyContent: "space-between", alignItems: "center" }}>
        <TPButton
          title="Thêm câu lạc bộ"
          buttonType="text"
          color={COLORS.green[600]}
        />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: 30,
            height: 30,
            borderRadius: 15,
            backgroundColor: COLORS.green[600],
          }}
        >
          <TPIcon name="add" size="default" color={COLORS.charcoal.white} />
        </View>
      </TPRow>
    );
  }, []);

  return (
    <View>
      <TPProgress
        progress={[
          {
            title: "Thông tin cá nhân",
            iconName: "badge",
            step: _renderStep1(),
          },
          {
            title: "Trình độ",
            iconName: "b-chart",
            step: _renderStep2(),
          },
          {
            title: "Câu lạc bộ",
            iconName: "stadium",
            step: _renderStep3(),
          },
        ]}
      />
    </View>
  );
};
