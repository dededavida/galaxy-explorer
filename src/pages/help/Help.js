import React from "react";
import { View, TouchableHighlight } from "react-native";
import { Container, Title, Description, Span } from "./Help.styled";
import * as WebBrowser from "expo-web-browser";
export default function Help() {
  async function handlePressButtonAsync() {
    await WebBrowser.openBrowserAsync("https://github.com/daviddossantos/");
  }
  return (
    <Container>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Title>Gostaria de saber mais?</Title>
        <Description>
          {`acesse o meu github: `}
          <Span onPress={handlePressButtonAsync}>daviddossantos</Span>
        </Description>
      </View>
    </Container>
  );
}
