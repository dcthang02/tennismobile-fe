import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

type RootStackParamList = {
  AuthStack: undefined;
  MainStack: undefined;
};

export const Stack = createNativeStackNavigator<RootStackParamList>();

export const Tab = createBottomTabNavigator();
