import HomeAllMatchsScreen from "@/screens/home/HomeAllMatchsScreen";
import HomeMatchDetailScreen from "@/screens/home/HomeMatchDetailScreen";
import HomeMatchDetailEditScreen from "@/screens/home/HomeMatchDetailEditScreen";
import NotificationStack from "../notification/notification";
import NotificationScreen from "@/screens/notification/NotificationScreen";
import NotificationDetailScreen from "@/screens/notification/NotificationDetail";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppButton from "../../../components/Atom/Button";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="HomeMatch" component={HomeMatchDetailScreen} />
      <Stack.Screen
        name="HomeMatchEdit"
        component={HomeMatchDetailEditScreen}
      />
      <Stack.Screen name="HomeAllMatch" component={HomeAllMatchsScreen} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen
        name="NotificationDetail"
        component={NotificationDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
