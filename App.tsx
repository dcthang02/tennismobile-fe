import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AppRegistry } from "react-native";

import AuthStack from "@/navigation/auth/auth";
import MainStack from "@/navigation/main/main";

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
