import React, { useCallback, useState } from "react";
import { View, Pressable } from "react-native";
import TPRow from "@/components/Atom/TPRow";
import TPRadio from "@/components/Atom/TPRadio";
import TPText from "@/components/Atom/TPText";

type TPSelectionProps = {
  data: {
    id: number | string;
    value: number | string;
    label: string;
  }[];
};

export const TPSelection = ({ data }: TPSelectionProps) => {
  const [valueIndex, setValueIndex] = useState(0);

  const handleSelect = useCallback((i: number) => {
    setValueIndex(i);
  }, []);

  return (
    <TPRow
      style={{
        gap: 80,
      }}
    >
      {data.map((item, i) => {
        return (
          <Pressable
            key={`${item.label}-${item.id}`}
            onPress={() => handleSelect(i)}
          >
            <TPRow style={{ alignItems: "center", gap: 10 }}>
              <TPRadio active={i === valueIndex} />
              <TPText variant="body16">{item.label}</TPText>
            </TPRow>
          </Pressable>
        );
      })}
    </TPRow>
  );
};
