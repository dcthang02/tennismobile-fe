import React, { useCallback, useContext, useEffect, useRef } from "react";
import { Alert, View } from "react-native";

import TPBackground from "@/components/Atom/TPBackgroud";
import TPText from "@/components/Atom/TPText";
import TPTextInput from "@/components/Molecules/TPTextInput";
import TPButton from "@/components/Molecules/TPButton";
import TPIcon from "@/components/Atom/TPIcon";
import TPWrapper from "@/components/Atom/TPWrapper";

import { SigninProps } from "@/utils/createProps";
import useNavigation from "@/hooks/useNavigation";
import { COLORS } from "@/constant/colors";
import { AuthContext } from "@/context/AuthContext";
import { convertPhoneNumber } from "@/utils/phone";
import useAuthentication from "@/hooks/useAuthentication";
import auth from "@react-native-firebase/auth";

const SigninScreen = ({ navigation }: SigninProps) => {
  const { setConfirm, setPreToken, preToken } = useContext(AuthContext);
  const { handleNavigate } = useNavigation(navigation);

  const phoneRef = useRef(null);

  const { signinByPhone } = useAuthentication();

  async function signInWithPhoneNumber(phoneNumber: string) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  useEffect(() => {
    if (preToken && phoneRef.current) {
      const phone = convertPhoneNumber(phoneRef.current["value"]);
      console.log("preToken", preToken);
      console.log(phone);
      signInWithPhoneNumber(phone);
    }
  }, [preToken, phoneRef.current]);

  const handleClickButton = useCallback(async () => {
    if (phoneRef.current) {
      if (phoneRef.current["isError"]) {
        return;
      } else {
        if (phoneRef.current["value"]) {
          const phone = convertPhoneNumber(phoneRef.current["value"]);
          try {
            const signData = await signinByPhone({
              variables: {
                phone,
              },
            });
            setPreToken(signData.data.signinByPhone.token);
          } catch (error) {
            console.log(error);
            Alert.alert("Lỗi đăng nhập");
          }
        }
      }
    }
  }, [phoneRef.current, signInWithPhoneNumber]);

  return (
    <TPBackground>
      <TPWrapper paddingTop={70} paddingHorizontal={16}>
        <TPWrapper marginBottom={10}>
          <TPText variant="heading4">Vui lòng nhập số điện thoại</TPText>
        </TPWrapper>

        <TPWrapper marginBottom={30}>
          <TPTextInput
            label="Số điện thoại"
            inputType="numeric"
            ref={phoneRef}
            maxLength={10}
            rules={["phone"]}
          />
        </TPWrapper>

        <View style={{ alignItems: "center", gap: 15 }}>
          <TPText variant="body16">hoặc đăng nhập với</TPText>
          <View
            style={{ flexDirection: "row", justifyContent: "center", gap: 30 }}
          >
            <TPIcon name="facebook" size="larger" color="red" />
            <TPIcon name="google" size="larger" />
          </View>
        </View>

        <TPWrapper marginTop={80}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 30,
            }}
          >
            <TPText variant="body16">Chưa có tài khoản?</TPText>
            <TPButton
              title="Đăng ký ngay"
              buttonType="text"
              color={COLORS.green[600]}
              onPress={() => handleNavigate("Signup")}
            />
          </View>
          <TPButton
            title="Tiếp theo"
            size="large"
            onPress={() => handleClickButton()}
          />
        </TPWrapper>
      </TPWrapper>
    </TPBackground>
  );
};

export default SigninScreen;
