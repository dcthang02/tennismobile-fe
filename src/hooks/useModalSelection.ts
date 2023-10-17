import React, { useCallback, useState } from "react";

const useModalSelection = (
  constructor: number | string,
  handleToggleModal: (value: boolean) => void
) => {
  const [value, setValues] = useState<(number | string)[]>([]);
  const [modalValues, setModalValues] = useState<(number | string)[]>([
    constructor,
  ]);

  const handleSelectValue = useCallback(
    (value: number | string) => {
      const index = modalValues.findIndex((_value) => _value === value);
      const tArr = modalValues.slice();
      if (index === -1) {
        tArr.push(value);
        setModalValues(tArr);
      } else {
        tArr.splice(index, 1);
        setModalValues(tArr);
      }
    },
    [modalValues]
  );

  const handleSelectSingleValue = useCallback((value: number | string) => {
    setModalValues([value]);
  }, []);

  const handleSubmitModal = useCallback(() => {
    setValues(modalValues);
    handleToggleModal(false);
  }, [modalValues, handleToggleModal]);

  return {
    value,
    setValues,
    modalValues,
    setModalValues,
    handleSelectValue,
    handleSelectSingleValue,
    handleSubmitModal,
  };
};

export default useModalSelection;
