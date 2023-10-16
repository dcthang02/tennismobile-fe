import VerifyAccountScreen from "@/screens/auth/signup/VerifyAccountScreen";
import VerifySuccessScreen from "@/screens/auth/signup/VerifySuccessScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type KYCStackParams = {
  VerifyAccount: {
    userId: string;
  };
  VerifySuccess: undefined;
};

const Stack = createNativeStackNavigator<KYCStackParams>();

const KYCStack = ({ route }: any) => {
  return (
    <Stack.Navigator
      screenOptions={{ headerTransparent: true, headerShown: false }}
    >
      <Stack.Screen
        name="VerifyAccount"
        component={VerifyAccountScreen}
        initialParams={{
          userId: route.params.userId,
        }}
      />
      <Stack.Screen name="VerifySuccess" component={VerifySuccessScreen} />
    </Stack.Navigator>
  );
};

export default KYCStack;
