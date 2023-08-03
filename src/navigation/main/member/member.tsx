import MemberInfoScreen from "@/screens/members/MemberInfoScreen";

import { Stack } from "../../../utils/createNavigator";

const MemberStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MemberInfo" component={MemberInfoScreen} />
    </Stack.Navigator>
  );
};

export default MemberStack;
