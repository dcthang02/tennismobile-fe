import { useCallback } from "react";

const useNavigation = (navigation: any) => {
  const handleNavigate = useCallback(
    (name: string, option: any = undefined) => {
      navigation.navigate(name, option);
    },
    [navigation]
  );

  const handleGoback = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return {
    handleNavigate,
    handleGoback,
  };
};

export default useNavigation;
