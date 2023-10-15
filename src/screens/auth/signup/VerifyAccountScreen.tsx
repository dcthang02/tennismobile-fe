import React, { useCallback, useRef, useState } from "react";
import { View, Text, Button, Alert } from "react-native";

import TPBackground from "@/components/Atom/TPBackgroud";
import TPWrapper from "@/components/Atom/TPWrapper";
import TPText from "@/components/Atom/TPText";
import TPButton from "@/components/Molecules/TPButton";
import TPHeader from "@/components/Molecules/TPHeader";
import { SafeAreaView } from "react-native-safe-area-context";

import useNavigation from "@/hooks/useNavigation";
import { VerifyAccountProps } from "@/utils/createProps";
import { COLORS } from "@/constant/colors";
import TPIcon from "@/components/Atom/TPIcon";
import TPRow from "@/components/Atom/TPRow";
import TPSelection from "@/components/Molecules/TPSelection";
import TPTextInput from "@/components/Molecules/TPTextInput";
import TPProgress from "@/components/Molecules/TPProgress";
import TPDatePicker from "@/components/Organisms/TPDatePicker";
import TPChooseLevel from "@/components/Organisms/TPChooseLevel";
import TPChooseClub from "@/components/Organisms/TPChooseClub";
import useKyc from "@/hooks/useKyc";

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

const VerifyAccountScreen = ({ navigation, route }: VerifyAccountProps) => {
  const { handleNavigate } = useNavigation(navigation);

  const { verifyAccount } = useKyc();

  const nameRef = useRef(null);
  const [genderId, setGenderId] = useState<string | number>(1);
  const [birthday, setBirthday] = useState(new Date());

  const handleSubmit = useCallback(async () => {
    try {
      await verifyAccount({
        variables: {
          authVerifyInput: {
            id: route.params.userId,
            name: nameRef.current?.["value"],
            gender: genderData.find((item) => item.id === genderId)?.value,
            birthday: birthday,
          },
        },
      });
      handleNavigate("VerifySuccess");
    } catch (error) {
      console.log(error);
      Alert.alert("Lỗi xác nhận. Hãy thử lại sau");
    }
  }, [
    handleNavigate,
    nameRef.current,
    birthday,
    genderId,
    route.params.userId,
  ]);

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
            buttonType="outline"
            color={COLORS.green[600]}
            backgroundColor="transparent"
          />
        </View>
        <TPTextInput inputType="text" label="Họ tên" ref={nameRef} />
        <TPDatePicker date={birthday} onChange={setBirthday} />
        <TPSelection
          data={genderData}
          value={[
            genderData.find((item) => item.id === genderId)?.value as string,
          ]}
          onChange={setGenderId}
        />
      </View>
    );
  }, [genderId, birthday]);

  const _renderStep2 = useCallback(() => {
    return (
      <View>
        <TPChooseLevel title="Trình độ đơn" />
        <TPChooseLevel title="Trình độ đôi" />
      </View>
    );
  }, []);

  const _renderStep3 = useCallback(() => {
    return <TPChooseClub />;
  }, []);

  return (
    <TPBackground>
      <SafeAreaView>
        <TPHeader
          headerTitle=""
          right={
            <TPButton
              title="Hoàn thành"
              buttonType="text"
              color={COLORS.green[600]}
              onPress={() => handleSubmit()}
            />
          }
        />
        <TPWrapper paddingHorizontal={16}>
          <TPText variant="heading4">Xác thực tài khoản</TPText>
          <TPWrapper marginBottom={15} />
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
        </TPWrapper>
      </SafeAreaView>
    </TPBackground>
  );
};

export default VerifyAccountScreen;
