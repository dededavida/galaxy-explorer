import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { between } from "polished";
const { width, height } = Dimensions.get("window");

export const Account = styled.View`
  width: 210px;
  height: 110px;
  background: #fff;
  border-bottom-right-radius: 53px;
  align-items: center;
  justify-content: center;
  justify-content: center;
  flex-direction: row;
`;

export const ImageUser = styled.View`
  width: 50px;
  height: 50px;
  background: #f3779b;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;

export const NameUser = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: #1b1d28;
  margin-left: 10px;
`;
export const TextScreen = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  padding-bottom: 20px;
`;
export const ContainerScreen = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;
export const ScreenSelected = styled.View`
  background: #f3779b;
  width: 4;
  height: 33;
`;
export const TextLogout = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  margin-left: 5px;
`;
export const StyledLogout = styled.TouchableOpacity`
  flex-direction: row;
  align-self: flex-start;
`;
export const StyledLabels = styled.View`
  margin-top: 108px;
`;
export const ContainerOptions = styled.View`
  height: ${height - 150}px;
  margin-left: 20px;
  justify-content: space-between;
`;

export const ContainerUser = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const ButtonClose = styled.View`
  margin-right: 4%;
`;

export const ContainerLogout = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
