import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { OtpContextProvider } from "@/context/OtpContext";
import { AuthContextProvider, AuthContext } from "@/context/AuthContext";

import AuthStack from "@/navigation/auth/auth";
import MainStack from "@/navigation/main/main";
import KYCStack from "@/navigation/main/kyc";

import { useFonts } from "expo-font";
import { useContext, useEffect } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import useGetUser from "@/hooks/useGetUser";
import { View } from "react-native";

const client = new ApolloClient({
  uri: "https://fef4-2405-4802-1d83-40e0-e8aa-923-f3bb-797f.ngrok-free.app/graphql",
  cache: new InMemoryCache(),
});

type AppStackParams = {
  AuthStack: undefined;
  MainStack: undefined;
  KYCStack: {
    userId: string;
  };
  BlankStack: undefined;
};

const Stack = createNativeStackNavigator<AppStackParams>();

const BlankScreen = () => {
  return null;
};

function App() {
  const [fontsLoaded] = useFonts({
    IcoMoon: require("./assets/icomoon/fonts/icomoon.ttf"),
  });

  const { getUserByPhone, userData, loadingUser, called } = useGetUser();
  const { token, user } = useContext(AuthContext);

  useEffect(() => {
    if (token && user) {
      getUserByPhone({
        variables: {
          phone: user["phoneNumber"],
        },
      });
    }
  }, [token, user]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!token ? (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        ) : called ? (
          !loadingUser ? (
            !userData.userByPhone.name ? (
              <>
                <Stack.Screen
                  name="KYCStack"
                  component={KYCStack}
                  initialParams={{ userId: userData.userByPhone.id }}
                />
                <Stack.Screen name="MainStack" component={MainStack} />
              </>
            ) : (
              <Stack.Screen name="MainStack" component={MainStack} />
            )
          ) : (
            <Stack.Screen name="BlankStack" component={BlankScreen} />
          )
        ) : (
          <Stack.Screen name="BlankStack" component={BlankScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function () {
  return (
    <ApolloProvider client={client}>
      <SafeAreaProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </SafeAreaProvider>
    </ApolloProvider>
  );
}
