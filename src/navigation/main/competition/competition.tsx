import MatchScreen from "@/screens/competition/MatchScreen";
import CreateMatchScreen from "@/screens/competition/CreateMatchScreen";
import CreateMatchSuccessScreen from "@/screens/competition/CreateMatchSuccessScreen";

import { Stack } from "../../../utils/createNavigator";

const CompetitionStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CreateMatch" component={CreateMatchScreen} />
      <Stack.Screen
        name="CreateMatchSuccess"
        component={CreateMatchSuccessScreen}
      />
    </Stack.Navigator>
  );
};

export default CompetitionStack;
