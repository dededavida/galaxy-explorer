import React from "react";
import { View } from "react-native";
import {
  Container,
  Title,
  Description,
  Technologies,
  TitleTechnologies,
} from "./Home.styled";

export default function Home() {
  return (
    <Container>
      <View style={{ width: "70%" }}>
        <Title>O Projeto</Title>
        <Description>
          Esse projeto foi criado com intuito de exercitar os conhecimentos em
          React, foi implementado autenticação por meio da impressão digital.
        </Description>
        <View style={{ marginTop: 10 }}>
          <TitleTechnologies>Tecnologias utilizadas:</TitleTechnologies>
          <Technologies>React Native</Technologies>
          <Technologies>Expo</Technologies>
          <Technologies>Expo Local Authentication</Technologies>
          <Technologies>React Navigation - Drawer </Technologies>
          <Technologies>Animação - Lottie </Technologies>
          <Technologies>Context API</Technologies>
          <Technologies>Styled Components</Technologies>
          <Technologies>Polished</Technologies>
        </View>
      </View>
    </Container>
  );
}
