import ShoppingScreen from "@/screens/shopping/ShoppingScreen";

import { Stack } from "../../../utils/createNavigator";

const ShoppingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Shopping" component={ShoppingScreen} />
    </Stack.Navigator>
  );
};

export default ShoppingStack;
