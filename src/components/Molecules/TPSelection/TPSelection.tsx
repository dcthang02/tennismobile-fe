import React, { ReactNode, useCallback, useState } from "react";
import { View, Pressable, StyleSheet, FlatList } from "react-native";
import TPRow from "@/components/Atom/TPRow";
import TPRadio from "@/components/Atom/TPRadio";
import TPText from "@/components/Atom/TPText";

type TypeValue = number | string;

type TPSelectionProps = {
  data: {
    id: number | string;
    value: TypeValue;
    label: string | ReactNode;
  }[];
  column?: boolean;
  multiple?: boolean;
  value: TypeValue[];
  onChange?: (id: number | string) => void;
  gap?: number;
};

export const TPSelection = ({
  data,
  value,
  column = false,
  multiple = false,
  onChange,
  gap = 80,
}: TPSelectionProps) => {
  const _renderLabel = useCallback((label: string | ReactNode) => {
    if (typeof label === "string")
      return <TPText variant="body16">{label}</TPText>;
    return <>{label}</>;
  }, []);

  return (
    <FlatList
      horizontal={!column}
      data={data}
      style={{ maxHeight: 650, marginTop: 10 }}
      contentContainerStyle={{ gap }}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <Pressable onPress={onChange ? () => onChange(item.id) : () => {}}>
          <TPRow style={{ alignItems: "center", gap: 10 }}>
            <TPRadio
              active={
                multiple ? value.includes(item.value) : item.value === value[0]
              }
              radioType={multiple ? "check" : "select"}
            />
            {_renderLabel(item.label)}
          </TPRow>
        </Pressable>
      )}
      keyExtractor={(item) => `${item.label}-${item.id}`}
    />
  );
};

const styles = StyleSheet.create({
  viewRow: {
    flexDirection: "row",
    gap: 80,
  },
  viewColumn: {
    flexDirection: "column",
    gap: 80,
  },
});
