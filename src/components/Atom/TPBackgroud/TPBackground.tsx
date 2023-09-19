import React, { ReactNode } from "react";
import { FlatList, View } from "react-native";
import { SafeAreaView } from "react-native";

import { COLORS } from "@/constant/colors";

type TPBackgroundProps = {
  top?: ReactNode;
  children?: ReactNode;
  bottom?: ReactNode;
  sticky?: ReactNode;
  scroll?: boolean;
};

export const TPBackground = ({
  top,
  children,
  bottom,
  sticky = null,
  scroll = false,
}: TPBackgroundProps) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: COLORS.background }}>
        {top || null}
        {scroll ? (
          <FlatList
            style={{ flex: 1 }}
            key={"appbg"}
            data={[1]}
            renderItem={({ item }) => {
              return <>{children}</>;
            }}
            keyExtractor={(item) => "Background-Container"}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          children
        )}
        {bottom || null}
      </View>
    </SafeAreaView>
  );
};
