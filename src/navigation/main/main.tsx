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

import ShoppingDetailScreen from "@/screens/shopping/ShoppingDetailScreen";
import MyShopScreen from "@/screens/shopping/MyShopScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export type MainStackParams = {
  AppTabStack: undefined;
  HomeMatch: {
    matchId: string;
  };
  HomeMatchEdit: undefined;
  HomeAllMatch: undefined;
  Notification: undefined;
  NotificationDetail: undefined;
  MemberInfo: {
    memberId: string;
    name: string;
  };
  CreateMatch: undefined;
  CreateMatchSuccess: undefined;
  AccountProfileEdit: undefined;
  ShoppingDetail: {
    productId: string;
    name: string;
  };
  MyShop: undefined;
};

export type MainTabParams = {
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
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarHideOnKeyboard: true }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Member" component={MemberScreen} />
      <Tab.Screen name="Match" component={MatchScreen} />
      <Tab.Screen name="Shopping" component={ShoppingScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AppTabStack" component={AppTabStack} />

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

      <Stack.Screen name="ShoppingDetail" component={ShoppingDetailScreen} />
      <Stack.Screen name="MyShop" component={MyShopScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
