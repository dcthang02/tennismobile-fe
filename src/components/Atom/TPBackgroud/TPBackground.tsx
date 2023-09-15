import React, { ReactNode } from "react";
import { FlatList, View } from "react-native";
import { SafeAreaView } from "react-native";

import { COLORS } from "@/constant/colors";

type TPBackgroundProps = {
  children?: ReactNode;
};

export const TPBackground = ({ children }: TPBackgroundProps) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: COLORS.background }}>
        <FlatList
          data={[1]}
          renderItem={({ item }) => {
            return <>{children}</>;
          }}
          keyExtractor={(item) => "Background-Container"}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};
