import TPBackground from "@/components/Atom/TPBackgroud";
import TPHeader from "@/components/Molecules/TPHeader";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AccountEditProfileProps } from "@/utils/createProps";
import TPTextInput from "@/components/Molecules/TPTextInput";
import TPWrapper from "@/components/Atom/TPWrapper";
import TPDatePicker from "@/components/Organisms/TPDatePicker";
import TPSelection from "@/components/Molecules/TPSelection";
import TPAvatar from "@/components/Atom/TPAvatar";
import TPRow from "@/components/Atom/TPRow";

import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "@/constant/colors";

const avatar_uri =
  "https://static.wikia.nocookie.net/powerrangers/images/0/0f/COCX-41908.jpg/revision/latest?cb=20221127143637";

const AccountProfileEditScreen = ({ navigation }: AccountEditProfileProps) => {
  return (
    <TPBackground>
      <TPHeader headerTitle="Tài khoản" />
      <TPWrapper paddingHorizontal={16} gap={10}>
        <TPRow style={styles.avatarBox}>
          <TPAvatar uri={avatar_uri} size="large" />
          <TPRow style={styles.iconCamera}>
            <AntDesign name="camerao" size={16} color="black" />
          </TPRow>
        </TPRow>
        <TPTextInput label="Họ tên" inputType="text" />
        <TPDatePicker />
        <TPSelection
          data={[
            { id: "1", value: "male", label: "Nam" },
            { id: "2", value: "female", label: "Nữ" },
          ]}
        />
      </TPWrapper>
    </TPBackground>
  );
};

const styles = StyleSheet.create({
  avatarBox: {
    justifyContent: "center",
    marginVertical: 10,
  },
  iconCamera: {
    position: "absolute",
    bottom: 0,
    right: 137,
    backgroundColor: COLORS.charcoal[300],
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: COLORS.background,
  },
});

export default AccountProfileEditScreen;
