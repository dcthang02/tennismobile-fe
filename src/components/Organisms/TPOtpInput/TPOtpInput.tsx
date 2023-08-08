import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { View, TextInput } from "react-native";

import { COLORS } from "@/constant/colors";
import TPText from "@/components/Atom/TPText";
import TPIcon from "@/components/Atom/TPIcon";

import { OtpContext } from "@/context/OtpContext";

export const TPOtpInput = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { value, setValue } = useContext(OtpContext);

  const handleChangeText = useCallback((text: string) => {
    setValue(text);
  }, []);

  useEffect(() => {
    setCurrentIndex(value.length);
  }, [value]);

  const _renderDot = useCallback(() => {
    return <TPIcon name="dot" size="default" />;
  }, []);

  const _renderCursor = useCallback(
    (num: number) => {
      if (num === currentIndex)
        return (
          <View>
            <TPText variant="heading5" color={COLORS.green[600]}>
              |
            </TPText>
          </View>
        );
      return null;
    },
    [currentIndex]
  );

  return (
    <View>
      <TextInput
        inputMode="numeric"
        style={{
          color: "transparent",
          height: 1,
        }}
        cursorColor={"transparent"}
        autoFocus
        value={value}
        onChangeText={handleChangeText}
        maxLength={6}
      />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        {[0, 1, 2, 3, 4, 5].map((item) => {
          return (
            <View
              key={`input-otp-box-${item}`}
              style={{
                backgroundColor: COLORS.charcoal.white,
                height: 60,
                width: 50,
                borderRadius: 5,
                borderBottomColor:
                  currentIndex === item
                    ? COLORS.green[600]
                    : COLORS.charcoal.white,
                borderBottomWidth: 2,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {currentIndex > item ? _renderDot() : _renderCursor(item)}
            </View>
          );
        })}
      </View>
    </View>
  );
};
