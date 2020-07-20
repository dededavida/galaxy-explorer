import React, { useState } from "react";
import { StyleLoading, Logo, TextLoading } from "./Loading.styled";
import LottieView from "lottie-react-native";

export default function Loading() {
  return (
    <StyleLoading>
      <LottieView
        style={{
          width: 250,
          height: 250,
        }}
        source={require("./../../../assets/animations/astro.json")}
        autoPlay
        loop
      />
    </StyleLoading>
  );
}
