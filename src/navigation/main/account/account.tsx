import AccountScreen from "@/screens/account/AccountScreen";
import AccountProfileEditScreen from "@/screens/account/AccountProfileEditScreen";

import { Stack } from "../../../utils/createNavigator";

const AccountStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AccountProfileEdit"
        component={AccountProfileEditScreen}
      />
    </Stack.Navigator>
  );
};

export default AccountStack;
