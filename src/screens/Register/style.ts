import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: ${Dimensions.get('window').width}px;
  height: ${Dimensions.get('screen').height}px;
  background: #fff;
  align-items: center;
  flex-direction: column;
`;
export const Box = styled.View`
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 30px;
`;
export const Title = styled.Text`
  font-size: 20px;
  margin: 20px;
  color: #333;
`;
export const Input = styled.TextInput``;

export const ImageProfile = styled.Image`
  width: 120px;
  height: 120px;
  z-index: 1;
  border: 5px solid ${props => props.theme.colors.secondaryColor};
  border-radius: 90px;
  align-items: center;
  justify-content: center;
`;
export const ImageProfileDefault = styled.Image`
  width: 120px;
  height: 120px;
  z-index: 1;
  border: 5px solid ${props => props.theme.colors.secondaryColor};
  border-radius: 90px;
  align-items: center;
  justify-content: center;
`;
export const TextImageDescription = styled.Text`
  position: absolute;
  z-index: 2;
  color: #000;
  top: 85%;
  width: 200px;
  border: solid 0.5px #bbb;
  background: #eee;
  border-radius: 15px;
  text-align: center;
  font-size: 15px;
`;

export const PencilView = styled.View`
  background: ${props => props.theme.colors.backgroundColorSecondary};
  width: 50px;
  height: 50px;
  position: absolute;
  z-index: 1;
  top: 63%;
  left: 27%;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
`;
