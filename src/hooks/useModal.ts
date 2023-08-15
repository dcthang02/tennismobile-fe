import React, { useCallback, useState } from "react";

const useModal = () => {
  const [isShow, setIsShow] = useState(false);

  const handleToggleModal = useCallback((show: boolean) => {
    setIsShow(show);
  }, []);

  return {
    isShow,
    handleToggleModal,
  };
};

export default useModal;
