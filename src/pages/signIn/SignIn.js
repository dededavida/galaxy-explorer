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

export default function SignIn() {
  const { signIn } = useAuth();
  const dropdownRef = useRef();

  function authFaceIdOrTouchId() {
    LocalAuthentication.authenticateAsync({
      promptMessage: "Autenticação Digital",
      cancelLabel: "Entrar com senha",
    }).then((auth) => {
      if (auth.success) {
        signIn();
      } else {
        signIn();
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

  async function handleSms() {}

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
          Aplicação criada para efetuar o login atráves da impressão digital
        </Description>
      </ContainerInfo>
      <ContainerButtons>
        <ButtonTouchId
          underlayColor=" rgba(240, 141, 240, 0.1)"
          onPress={authFaceIdOrTouchId}
        >
          <ContainerButtonTouchId>
            <MaterialIcons name="fingerprint" size={24} color="#ccc" />
            <TextTouchId>Smart ID</TextTouchId>
          </ContainerButtonTouchId>
        </ButtonTouchId>
        {/* <ButtonFaceId underlayColor="#f185be" onPress={handleSms}>
          <TextFaceId>Enviar SMS</TextFaceId>
        </ButtonFaceId> */}
      </ContainerButtons>
      <DropdownAlert ref={dropdownRef} />
    </StyeldSignIn>
  );
}
