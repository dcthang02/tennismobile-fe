import React, { useContext, useMemo } from "react";
import { View, Text, Button } from "react-native";
import { AuthContext } from "@/context/AuthContext";
import TPBackground from "@/components/Atom/TPBackgroud";
import TPTabHeader from "@/components/Molecules/TPTabHeader";
import TPWrapper from "@/components/Atom/TPWrapper";
import TPPlayerProfile from "@/components/Organisms/TPPlayerProfile";
import { AccountProps } from "@/utils/createProps";
import useNavigation from "@/hooks/useNavigation";
import useMe from "@/hooks/useMe";

const AccountScreen = ({ navigation }: AccountProps) => {
  const { myData } = useMe();

  if (!myData) return null;
  return (
    <TPBackground>
      <TPWrapper paddingHorizontal={16} marginBottom={16}>
        <TPTabHeader title="Tài khoản" />
      </TPWrapper>
      <TPWrapper paddingHorizontal={16} marginBottom={75}>
        <TPPlayerProfile member={myData.me} editable />
      </TPWrapper>
    </TPBackground>
  );
};

export default AccountScreen;
