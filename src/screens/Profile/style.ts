import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
export const Container = styled.SafeAreaView`
  height: ${Dimensions.get('window').height};
  align-items: center;
  background-color: ${props => props.theme.colors.lightColor};
`;
export const UserName = styled.Text`
  color: ${props => props.theme.colors.secondaryColor};
  font-family: ${props => props.theme.fonts.poppinsMedium};
  font-size: 30px;
  width: 100%;
`;
export const BirthDate = styled.Text`
  color: ${props => props.theme.colors.secondaryColor};
  font-family: ${props => props.theme.fonts.poppinsSemiBold};
  width: 100%;
  font-size: 18px;
  border-radius: 5px;
`;
export const UserCode = styled.Text`
  color: ${props => props.theme.colors.secondaryColor};
  font-family: ${props => props.theme.fonts.poppinsSemiBold};
  font-size: 20px;
  width: 100%;
  border-radius: 5px;
`;
export const UserImage = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  margin-bottom: 15px;
`;

export const Title = styled.Text`
  color: #000;
  height: 60px;
  width: 100%;
  text-align: center;
  font-size: 18px;
`;
export const Label = styled.Text`
  color: #bbb;
  font-family: ${props => props.theme.fonts.poppinsLight};
  width: 100%;
  padding: 5px 0;
  font-size: 13px;
`;
export const BoxButton = styled.View`
  align-items: center;
  padding:  0 20px;
  justify-content: space-around;
  width: 100%;
`;

export const Box = styled.View`
  padding: 0 20px;
  margin-bottom: 32px;
  align-items: center;
  width: 100%;
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
export const PencilView = styled.View`
  background: ${props => props.theme.colors.backgroundColorSecondary};
  width: 50px;
  height: 50px;
  position: absolute;
  z-index: 1;
  top: 63%;
  left: 57%;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
`;
