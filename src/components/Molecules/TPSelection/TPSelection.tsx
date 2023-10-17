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
  onChange?: (value: number | string) => void;
  gap?: number;
  maxSelected?: number;
};

export const TPSelection = ({
  data,
  value,
  column = false,
  multiple = false,
  onChange,
  gap = 80,
  maxSelected,
}: TPSelectionProps) => {
  const _renderLabel = useCallback((label: string | ReactNode) => {
    if (typeof label === "string")
      return <TPText variant="body16">{label}</TPText>;
    return <>{label}</>;
  }, []);

  const handlePress = useCallback(
    (x: number | string) => {
      if (maxSelected) {
        const able = value.includes(x);
        if (value.length < maxSelected) {
          onChange && onChange(x);
        } else if (able) {
          onChange && onChange(x);
        }
      } else {
        onChange && onChange(x);
      }
    },
    [maxSelected, value, onChange]
  );

  return (
    <FlatList
      horizontal={!column}
      data={data}
      style={{ maxHeight: 630, marginTop: 10 }}
      contentContainerStyle={{ gap }}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <Pressable onPress={() => handlePress(item.value)}>
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
