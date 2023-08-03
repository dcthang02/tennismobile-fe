import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import AuthStack from "@/navigation/auth/auth";

import AuthStack from "@/navigation/auth/auth";
import MainStack from "@/navigation/main/main";

import type { AuthStackParams } from "@/navigation/auth/auth";

type AppStackParams = {
  AuthStack: undefined;
  MainStack: undefined;
};

const Stack = createNativeStackNavigator<AppStackParams>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="MainStack" component={MainStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
