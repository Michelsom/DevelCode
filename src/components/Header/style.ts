import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  width: ${Dimensions.get('window').width}px;
  justify-content: center;
  height: 60px;
  elevation: 0.5;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;
export const ButtonContainer = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.Text`
  text-align: center;
  width: 200px;
  font-size: 20px;
  font-family: ${props => props.theme.fonts.poppinsMedium};
  color: ${props => props.theme.colors.secondaryColor};
`;
