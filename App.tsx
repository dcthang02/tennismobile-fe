import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthStack from "@/navigation/auth/auth";
import MainStack from "@/navigation/main/main";
import SigninScreen from "@/screens/auth/signin/SigninScreen";

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
        {/* <Stack.Screen name="MainStack" component={MainStack} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
