import { shade, backgrounds, between } from "polished";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");

export const ButtonTouchId = styled.TouchableHighlight`
  background: rgba(240, 141, 190, 0.1);
  width: 90%;
  height: 50px;
  border-radius: 10px;
  opacity: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;

export const ButtonFaceId = styled.TouchableHighlight`
  background: #f08dbe;
  width: 150px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;
export const TextFaceId = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  margin-left: 5px;
`;
export const ContainerButtonTouchId = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const TextTouchId = styled(TextFaceId)`
  color: #f08dbe;
  font-size: 16px;
  font-weight: 600;
`;

export const ContainerButtons = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 20px;
  width: 100%;
  margin-left: 30px;
  margin-right: 30px;
  flex: 1;
`;

export const ContainerInfo = styled.View`
  width: 100%;
  margin-left: 30px;
  flex: 1;
  justify-content: center;
`;
export const TextGoogle = styled.Text`
  color: #fff;
  font-size: 12px;
  font-weight: 500;
`;

export const Description = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  line-height: 20px;
  width: 60%;
`;
export const Subtitle = styled.Text`
  margin-bottom: 20px;
  font-size: 38px;
  font-weight: bold;
  color: #f3779b;
`;
export const Title = styled.Text`
  margin-bottom: 4px;
  font-size: 20px;
  font-weight: normal;
  color: #f3779b;
`;
export const StyeldSignIn = styled.View`
  flex: 1;
  background-color: #3a363f;
  align-items: center;
  justify-content: space-between;
`;
