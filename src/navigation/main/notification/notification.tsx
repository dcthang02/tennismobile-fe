import AppButton from "../../../components/Atom/TPButton";

import NotificationDetailScreen from "@/screens/notification/NotificationDetail";
import NotificationScreen from "@/screens/notification/NotificationScreen";

import { Stack } from "../../../utils/createNavigator";

const NotificationStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <AppButton title={"<"} onPress={() => navigation.goBack()} />
        ),
      }}
    >
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen
        name="NotificationDetail"
        component={NotificationDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default NotificationStack;
