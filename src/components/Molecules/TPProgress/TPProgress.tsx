import React, { ReactNode, useCallback, useState } from "react";
import { View } from "react-native";
import TPText from "@/components/Atom/TPText";
import TPIcon from "@/components/Atom/TPIcon";
import TPRow from "@/components/Atom/TPRow";
import TPButton from "../TPButton";

import { StepIconWrapper, StepWrapper } from "./style";

import { COLORS } from "@/constant/colors";

import { TypeTPIconName } from "@/components/Atom/TPIcon";

type StepType = {
  iconName: TypeTPIconName;
  title: string;
  step: ReactNode;
};

type TPProgress = {
  progress: StepType[];
};

export const TPProgress = ({ progress }: TPProgress) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentStep((prevIndex) => prevIndex + 1);
  }, []);

  const handleBack = useCallback(() => {
    setCurrentStep((prevIndex) => prevIndex - 1);
  }, []);

  const _renderStep = useCallback(
    (step: StepType, key: string, i: number) => {
      return (
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            opacity: i > currentStep ? 0.18 : 1,
          }}
          key={key}
        >
          <View style={{ alignSelf: "stretch", alignItems: "center" }}>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: 48,
                width: 48,
                borderRadius: 24,
                backgroundColor:
                  i < currentStep ? COLORS.green[600] : COLORS.charcoal[700],
              }}
            >
              <TPIcon
                name={i < currentStep ? "check-small" : step.iconName}
                size="default"
                color={COLORS.charcoal.white}
              />
            </View>
            <View
              style={{
                flex: i === progress.length - 1 ? 0 : 1,
                width: 3,
                backgroundColor:
                  i < currentStep ? COLORS.green[600] : COLORS.charcoal[700],
              }}
            ></View>
          </View>

          <View style={{ flex: 1 }}>
            <View style={{ marginBottom: i === currentStep ? 10 : 30 }}>
              <TPText variant="body16" color={COLORS.charcoal[500]}>
                Bước {i + 1}
              </TPText>
              <TPText variant="heading5" color={COLORS.charcoal[700]}>
                {step.title}
              </TPText>
            </View>
            <View style={{ display: i === currentStep ? "flex" : "none" }}>
              {step.step}
              <TPRow
                style={{ justifyContent: "flex-end", gap: 10, paddingTop: 10 }}
              >
                {i !== 0 && (
                  <TPButton
                    title="Trở về"
                    buttonType="outline"
                    backgroundColor="transparent"
                    color={COLORS.green[600]}
                    onPress={() => handleBack()}
                  />
                )}
                {i === progress.length - 1 ? (
                  <TPButton title="Hoàn thành" />
                ) : (
                  <TPButton title="Tiếp theo" onPress={() => handleNext()} />
                )}
              </TPRow>
            </View>
          </View>
        </View>
      );
    },
    [progress, currentStep]
  );

  return (
    <View>{progress.map((item, i) => _renderStep(item, item.title, i))}</View>
  );
};
