import React, { useCallback, useRef, useState } from "react";

import { Pressable } from "react-native";
import TPIcon from "@/components/Atom/TPIcon";
import TPTextInput from "@/components/Molecules/TPTextInput";
import RNDateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

type TPDatePickerProps = {
  label?: string;
  mode?: "date" | "time";
  color?: string;
};

const formatDate = (date: Date) => {
  return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
};

const formatTime = (date: Date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours < 10 ? "0" + hours : hours}:${
    minutes < 10 ? "0" + minutes : minutes
  }`;
};

export const TPDatePicker = ({
  label,
  mode = "date",
  color,
}: TPDatePickerProps) => {
  const [date, setDate] = useState<Date>(new Date());
  const [show, setShow] = useState(false);

  const textDate = useRef(null);

  const handleChangeDate = useCallback(
    (event: DateTimePickerEvent, selectedDate?: Date) => {
      if (selectedDate) {
        const currentDate = selectedDate;
        setDate(currentDate);
      }
      setShow(false);
    },
    []
  );

  return (
    <Pressable onPress={() => setShow(true)}>
      <TPTextInput
        label={label || "Ngày tháng năm sinh"}
        inputType="text"
        disable
        end={
          mode === "date" ? (
            <TPIcon name="calendar" size="small" />
          ) : (
            <TPIcon name="clock" size="small" />
          )
        }
        parentValue={mode === "date" ? formatDate(date) : formatTime(date)}
        ref={textDate}
        styleColor={color}
      />
      {show && (
        <RNDateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={handleChangeDate}
        />
      )}
    </Pressable>
  );
};
