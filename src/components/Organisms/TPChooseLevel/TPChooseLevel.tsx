import React, { useCallback, useRef, useState } from "react";

import TPModal from "@/components/Molecules/TPModal";
import { Pressable, View, PressableProps } from "react-native";
import TPText from "@/components/Atom/TPText";
import TPRow from "@/components/Atom/TPRow";
import TPButton from "@/components/Molecules/TPButton";
import TPIcon from "@/components/Atom/TPIcon";
import EditIcon from "assets/icon/edit.svg";
import { COLORS } from "@/constant/colors";
import useModal from "@/hooks/useModal";

const LEVELS = [
  {
    level: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    level: 2,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    level: 3,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    level: 4,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    level: 5,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    level: 6,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    level: 7,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    level: 8,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    level: 9,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    level: 10,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
];

type Props = {
  title?: string;
};

type LevelIconProps = {
  active?: boolean;
} & PressableProps;

const LevelIcon = ({ active, ...props }: LevelIconProps) => {
  return (
    <Pressable
      style={{
        width: 20,
        height: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={props.onPress}
    >
      <View
        style={{
          width: active ? 20 : 8,
          height: 20,
          borderRadius: active ? 10 : 4,
          backgroundColor: active ? COLORS.green[200] : COLORS.blue[400],
        }}
      ></View>
    </Pressable>
  );
};

const LinePath = () => {
  return (
    <View
      style={{
        width: "95%",
        top: 7,
        left: "2.5%",
        height: 6,
        backgroundColor: COLORS.charcoal[300],
        position: "absolute",
      }}
    ></View>
  );
};

export const TPChooseLevel = ({ title }: Props) => {
  const [selectedLevel, setSelectedLevel] = useState(0);

  const { isShow, handleToggleModal } = useModal();

  return (
    <TPRow
      style={{
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
      }}
    >
      <TPModal
        headerTitle={title}
        modalPosition="bottom"
        overlay={false}
        isShow={isShow}
        onCloseModal={() => handleToggleModal(false)}
      >
        <View
          style={{
            paddingHorizontal: 10,
            paddingTop: 40,
            paddingBottom: 50,
            gap: 20,
          }}
        >
          <TPRow
            style={{
              alignSelf: "stretch",
              position: "relative",
              justifyContent: "space-between",
            }}
          >
            <LinePath />
            {LEVELS.map((item, i) => {
              return (
                <LevelIcon
                  key={`path-${i}`}
                  active={item.level === selectedLevel}
                  onPress={() => {
                    setSelectedLevel(item.level);
                  }}
                />
              );
            })}
          </TPRow>
          {selectedLevel > 0 && (
            <View>
              <TPText variant="heading5" alignCenter>
                Cấp độ {selectedLevel}
              </TPText>
              <TPText variant="body16" alignCenter color={COLORS.charcoal[400]}>
                {LEVELS[selectedLevel - 1].description}
              </TPText>
            </View>
          )}
        </View>
      </TPModal>
      <View>
        <TPText variant="button">{title}</TPText>
        {selectedLevel !== 0 && (
          <TPText variant="body16">Cấp độ {selectedLevel}</TPText>
        )}
      </View>
      <TPRow>
        <TPButton
          title={selectedLevel !== 0 ? "Sửa" : "Thêm"}
          buttonType="text"
          color={COLORS.green[600]}
          endIcon={
            selectedLevel !== 0 ? (
              <EditIcon />
            ) : (
              <TPIcon
                name="add"
                size="small"
                color={COLORS.charcoal.white}
                hasBound
              />
            )
          }
          onPress={() => handleToggleModal(true)}
        />
      </TPRow>
    </TPRow>
  );
};
