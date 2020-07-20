import "react-native-gesture-handler";
import React from "react";
import Routes from "./src/routes";
import AuthProvider from "./src/contexts/AuthProvider";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar style="light" translucent />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
