import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {
  Account,
  ImageUser,
  NameUser,
  TextScreen,
  ContainerScreen,
  ScreenSelected,
  TextLogout,
  StyledLogout,
  ContainerOptions,
  StyledLabels,
  ContainerUser,
  ButtonClose,
  ContainerLogout,
} from "./Custom.styled";
import { useAuth } from "../contexts/AuthProvider";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import {
  DrawerItemList,
  DrawerItem,
  DrawerContentScrollView,
} from "@react-navigation/drawer";

export default function CustomDrawer({ navigation }) {
  const { signOut } = useAuth();
  return (
    <DrawerContentScrollView>
      <ContainerUser>
        <Account>
          <ImageUser>
            <Image
              source={require("../../assets/user.png")}
              style={{ width: 50, height: 50, borderRadius: 50 }}
            />
          </ImageUser>
          <NameUser>David Cruz</NameUser>
        </Account>
        <ButtonClose>
          <MaterialCommunityIcons
            name="close"
            size={25}
            color="#F3779B"
            onPress={() => navigation.toggleDrawer()}
          />
        </ButtonClose>
      </ContainerUser>
      <ContainerOptions>
        <StyledLabels>
          <TextScreen onPress={() => navigation.navigate("Home")}>
            Início
          </TextScreen>
          <TextScreen onPress={() => navigation.navigate("Help")}>
            Ajuda
          </TextScreen>
        </StyledLabels>
        <ContainerLogout>
          <StyledLogout onPress={() => signOut()}>
            <MaterialCommunityIcons name="power" size={25} color="#fff" />
            <TextLogout>Sair</TextLogout>
          </StyledLogout>
          <Image
            source={require("../../assets/logo.png")}
            style={{ width: 100, height: 100 }}
          />
        </ContainerLogout>
      </ContainerOptions>
    </DrawerContentScrollView>
  );
}
