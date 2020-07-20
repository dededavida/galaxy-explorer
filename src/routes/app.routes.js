import React from "react";
import SignIn from "../pages/signIn/SignIn";
import { createStackNavigator } from "@react-navigation/stack";
export default function AppRoutes() {
  const AppStack = createStackNavigator();

  return (
    <AppStack.Navigator headerMode="none">
      <AppStack.Screen component={SignIn} name="SignIn" />
    </AppStack.Navigator>
  );
}
