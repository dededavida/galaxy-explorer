import React from "react";
import { View, Button } from "react-native";
import Home from "../pages/home/Home";
import CustomDrawer from "../components/CustomDrawer";
import Help from "../pages/help/Help";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
export default function AuthRoutes() {
  const AuthStack = createStackNavigator();
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      statusBarAnimation="slide"
      hideStatusBar
      initialRouteName="Home"
      drawerType="slide"
      overlayColor="transparent"
      drawerStyle={{
        width: "100%",
        backgroundColor: "#3A363F",
      }}
      drawerContent={(props) => <CustomDrawer {...props} progress />}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Help" component={Help} />
    </Drawer.Navigator>
  );
}
