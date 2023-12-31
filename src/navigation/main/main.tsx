import HomeScreen from "@/screens/home/HomeScreen";
import MemberScreen from "@/screens/members/MemberScreen";
import MatchScreen from "@/screens/competition/MatchScreen";
import ShoppingScreen from "@/screens/shopping/ShoppingScreen";
import AccountScreen from "@/screens/account/AccountScreen";

import HomeMatchDetailScreen from "@/screens/home/HomeMatchDetailScreen";
import HomeMatchDetailEditScreen from "@/screens/home/HomeMatchDetailEditScreen";
import HomeAllMatchsScreen from "@/screens/home/HomeAllMatchsScreen";

import MemberInfoScreen from "@/screens/members/MemberInfoScreen";

import CreateMatchScreen from "@/screens/competition/CreateMatchScreen";
import CreateMatchSuccessScreen from "@/screens/competition/CreateMatchSuccessScreen";

import AccountProfileEditScreen from "@/screens/account/AccountProfileEditScreen";

import NotificationScreen from "@/screens/notification/NotificationScreen";
import NotificationDetailScreen from "@/screens/notification/NotificationDetail";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

type MainStackParams = {
  AppTabStack: undefined;
  HomeMatch: {
    competitor: string;
  };
  HomeMatchEdit: undefined;
  HomeAllMatch: undefined;
  Notification: undefined;
  NotificationDetail: undefined;
  MemberInfo: undefined;
  CreateMatch: undefined;
  CreateMatchSuccess: undefined;
  AccountProfileEdit: undefined;
};

type MainTabParams = {
  Home: undefined;
  Member: undefined;
  Match: undefined;
  Shopping: undefined;
  Account: undefined;
};

const Stack = createNativeStackNavigator<MainStackParams>();
const Tab = createBottomTabNavigator<MainTabParams>();

const AppTabStack = () => {
  return (
    <Tab.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Member" component={MemberScreen} />
      <Tab.Screen name="Match" component={MatchScreen} />
      <Tab.Screen name="Shopping" component={ShoppingScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

const HomeGroupStack = () => {
  return (
    <Stack.Group>
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
    </Stack.Group>
  );
};

const MemberGroupStack = () => {
  return (
    <Stack.Group>
      <Stack.Screen name="MemberInfo" component={MemberInfoScreen} />
    </Stack.Group>
  );
};

const CompetitionGroupStack = () => {
  return (
    <Stack.Group>
      <Stack.Screen name="CreateMatch" component={CreateMatchScreen} />
      <Stack.Screen
        name="CreateMatchSuccess"
        component={CreateMatchSuccessScreen}
      />
    </Stack.Group>
  );
};

const AccountGroupStack = () => {
  return (
    <Stack.Group>
      <Stack.Screen
        name="AccountProfileEdit"
        component={AccountProfileEditScreen}
      />
    </Stack.Group>
  );
};

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AppTabStack" component={AppTabStack} />
      {/* <Stack.Screen name="HomeStack" component={HomeStack} />
      <Stack.Screen name="MemberStack" component={MemberStack} />
      <Stack.Screen name="CompetitionStack" component={CompetitionStack} />
      <Stack.Screen name="AccountStack" component={AccountStack} /> */}

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

      <Stack.Screen name="MemberInfo" component={MemberInfoScreen} />

      <Stack.Screen name="CreateMatch" component={CreateMatchScreen} />
      <Stack.Screen
        name="CreateMatchSuccess"
        component={CreateMatchSuccessScreen}
      />

      <Stack.Screen
        name="AccountProfileEdit"
        component={AccountProfileEditScreen}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
