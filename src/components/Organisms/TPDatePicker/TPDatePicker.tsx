import React, { useCallback, useRef, useState } from "react";

import { Pressable } from "react-native";
import TPIcon from "@/components/Atom/TPIcon";
import TPTextInput from "@/components/Molecules/TPTextInput";
import RNDateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

const formatDate = (date: Date) => {
  return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
};

export const TPDatePicker = () => {
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
        label="Ngày tháng năm sinh"
        inputType="text"
        disable
        end={<TPIcon name="calendar" size="default" />}
        parentValue={formatDate(date)}
        ref={textDate}
      />
      {show && (
        <RNDateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={"date"}
          is24Hour={true}
          onChange={handleChangeDate}
        />
      )}
    </Pressable>
  );
};
