import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { OtpContextProvider } from "@/context/OtpContext";
import { AuthContextProvider, AuthContext } from "@/context/AuthContext";

import AuthStack from "@/navigation/auth/auth";
import MainStack from "@/navigation/main/main";

import { useFonts } from "expo-font";
import { useContext } from "react";

type AppStackParams = {
  AuthStack: undefined;
  MainStack: undefined;
};

const Stack = createNativeStackNavigator<AppStackParams>();

function App() {
  const [fontsLoaded] = useFonts({
    IcoMoon: require("./assets/icomoon/fonts/icomoon.ttf"),
  });

  const { user, token } = useContext(AuthContext);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        ) : (
          <Stack.Screen name="MainStack" component={MainStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function () {
  return (
    <SafeAreaProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </SafeAreaProvider>
  );
}
