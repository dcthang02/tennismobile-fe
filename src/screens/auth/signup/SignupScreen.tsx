import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Alert, Platform, View } from "react-native";

import TPBackground from "@/components/Atom/TPBackgroud";
import TPText from "@/components/Atom/TPText";
import TPTextInput from "@/components/Molecules/TPTextInput";
import TPButton from "@/components/Molecules/TPButton";
import TPIcon from "@/components/Atom/TPIcon";
import TPWrapper from "@/components/Atom/TPWrapper";

import { SignupProps } from "@/utils/createProps";
import useNavigation from "@/hooks/useNavigation";
import { COLORS } from "@/constant/colors";
import { OtpContext } from "@/context/OtpContext";
import { AuthContext } from "@/context/AuthContext";

import auth from "@react-native-firebase/auth";
import useAuthentication from "@/hooks/useAuthentication";

const convertPhoneNumber = (phoneNumber: string) => {
  return "+84" + phoneNumber.substring(1, phoneNumber.length);
};

const SignupScreen = ({ navigation }: SignupProps) => {
  const { setConfirm, setPreToken, preToken } = useContext(AuthContext);
  const { handleNavigate } = useNavigation(navigation);
  const phoneRef = useRef(null);

  const { signupByPhone } = useAuthentication();

  async function signInWithPhoneNumber(phoneNumber: string) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  useEffect(() => {
    if (preToken && phoneRef.current) {
      const phone = convertPhoneNumber(phoneRef.current["value"]);
      signInWithPhoneNumber(phone);
    }
  }, [preToken]);

  const handleClickButton = useCallback(async () => {
    if (phoneRef.current) {
      if (phoneRef.current["isError"]) {
        return;
      } else {
        if (phoneRef.current["value"]) {
          const phone = convertPhoneNumber(phoneRef.current["value"]);
          try {
            const signData = await signupByPhone({
              variables: {
                phone,
              },
            });
            setPreToken(signData.data.signupByPhone.token);
          } catch (error) {
            Alert.alert("Lỗi đăng ký");
          }
        }
      }
    }
  }, [phoneRef.current, signInWithPhoneNumber]);

  return (
    <TPBackground scroll>
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
          <TPText variant="body16">hoặc đăng ký với</TPText>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              gap: 30,
            }}
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
            <TPText variant="body16">Đã có tài khoản?</TPText>
            <TPButton
              title="Đăng nhập"
              buttonType="text"
              color={COLORS.green[600]}
              onPress={() => handleNavigate("Signin")}
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

export default SignupScreen;
