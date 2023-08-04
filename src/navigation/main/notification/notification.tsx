import NotificationDetailScreen from "@/screens/notification/NotificationDetail";
import NotificationScreen from "@/screens/notification/NotificationScreen";

import { Stack } from "../../../utils/createNavigator";

const NotificationStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen
        name="NotificationDetail"
        component={NotificationDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default NotificationStack;
