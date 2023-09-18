import React from "react";
import { View, Text, Button } from "react-native";
import useNavigation from "../../hooks/useNavigation";
import { ShoppingProps } from "@/utils/createProps";
import TPBackground from "@/components/Atom/TPBackgroud";
import TPTabHeader from "@/components/Molecules/TPTabHeader";
import TPWrapper from "@/components/Atom/TPWrapper";
import TPButton from "@/components/Molecules/TPButton";
import TPIcon from "@/components/Atom/TPIcon";
import { COLORS } from "@/constant/colors";
import TPShop from "@/components/Organisms/TPShop";

const ShoppingScreen = ({ navigation }: ShoppingProps) => {
  const { handleNavigate } = useNavigation(navigation);
  return (
    <TPBackground>
      <TPWrapper paddingHorizontal={16} gap={16} flex={1}>
        <TPTabHeader
          title="Shop"
          right={
            <TPButton
              title="Shop của bạn"
              startIcon={<TPIcon name="bag" color={COLORS.green[600]} />}
              color={COLORS.green[600]}
              buttonType="text"
              size="small"
            />
          }
        />
        <TPShop navigation={navigation} />
      </TPWrapper>
    </TPBackground>
  );
};

export default ShoppingScreen;
