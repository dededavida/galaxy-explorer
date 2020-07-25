import React, { useEffect, useState, useRef } from "react";
import * as LocalAuthentication from "expo-local-authentication";
import { Image, Alert, View, Modal, Text } from "react-native";
import {
  StyeldSignIn,
  ContainerButtons,
  ButtonTouchId,
  TextTouchId,
  ButtonFaceId,
  TextFaceId,
  Subtitle,
  Title,
  Description,
  ContainerInfo,
  ContainerButtonTouchId,
} from "./SignIn.styled";
import { useAuth } from "../../contexts/AuthProvider";
import { MaterialIcons } from "@expo/vector-icons";
import DropdownAlert from "react-native-dropdownalert";
import Expo, { Constants } from "expo";

export default function SignIn() {
  const { signIn } = useAuth();
  const dropdownRef = useRef();

  async function authFaceIdOrTouchId() {
    const comp = await LocalAuthentication.hasHardwareAsync();
    console.log(comp);
    const s = await LocalAuthentication.supportedAuthenticationTypesAsync();
    console.log(s);
    const teste = await LocalAuthentication.isEnrolledAsync();
    console.log(teste);

    LocalAuthentication.authenticateAsync({
      promptMessage: "Acesse via Rosto ou Digital",
      cancelLabel: "Entrar com senha",
      disableDeviceFallback: true,
    }).then((auth) => {
      if (auth.success) {
        signIn();
      } else {
        if (auth.error == "lockout") {
          dropdownRef.current.alertWithType(
            "error",
            "Ops...!",
            "Excesso de tentativas. Tente novamente mais tarde"
          );
        }
      }
    });
  }

  return (
    <StyeldSignIn>
      <Image
        source={require("../../../assets/logo.png")}
        style={{
          width: 190,
          height: 215,
          marginTop: 100,
        }}
      />
      <ContainerInfo>
        <Title>Bem vindo</Title>
        <Subtitle>Galaxy Explorer</Subtitle>
        <Description>
          Aplicação criada para efetuar o login atráves da impressão digital ou
          reconhecimento facial
        </Description>
      </ContainerInfo>
      <ContainerButtons>
        <ButtonTouchId
          underlayColor=" rgba(240, 141, 240, 0.1)"
          onPress={authFaceIdOrTouchId}
        >
          <ContainerButtonTouchId>
            <TextTouchId>Acessar</TextTouchId>
          </ContainerButtonTouchId>
        </ButtonTouchId>
      </ContainerButtons>
      <DropdownAlert ref={dropdownRef} />
    </StyeldSignIn>
  );
}
