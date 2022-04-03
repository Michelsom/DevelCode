import styled from 'styled-components/native';
export const Container = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  background-color: #fff;
  flex-direction: column;
`;
export const Box = styled.View`
  padding: 10px 20px;
`;
export const TextTitle = styled.Text`
  font-size: 20px;
  padding: 20px 0;
  width: 100%;
`;
export const Description = styled.TouchableOpacity`
  width: 100%;
  height: 100px;
  border-radius: 16px;
  elevation: 3;
  background: ${props => props.theme.colors.backgroundColor};
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;
export const ImagePeople = styled.Image`
  width: 300px;
  height: 200px;
  border-radius: 30px;
`;
export const ButtonsContainer = styled.View`
  width: 100%;
  margin-top: 30px;
  padding: 10px 0px;
`;
export const UserName = styled.Text`
  color: ${props => props.theme.colors.secondaryColor};
  font-size: 25px;
  font-family: ${props => props.theme.fonts.poppinsSemiBold};
  width: 200px;
  padding: 0 5px;
  border-radius: 5px;
`;
export const BirthDate = styled.Text`
  color: ${props => props.theme.colors.colorPrimaryText};

  font-size: 15px;
  width: 200px;

  padding: 0 5px;
  border-radius: 5px;
`;
export const UserCode = styled.Text`
  color: ${props => props.theme.colors.colorPrimaryText};

  font-size: 15px;
  width: 200px;

  padding: 0 5px;
  border-radius: 5px;
`;
export const ButtonAddNewRegister = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  elevation: 3;
  border-radius: 30px;
  background: ${props => props.theme.colors.secondaryColor};
  align-items: center;
  justify-content: center;
`;
export const TitleText = styled.Text`
  text-align: center;
  width: 100%;
  font-size: 20px;
  color: ${props => props.theme.colors.secondaryColor};
`;
