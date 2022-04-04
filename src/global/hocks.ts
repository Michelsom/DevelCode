import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import theme from './styles/theme';

export const GlobalActivityIndicator = styled.ActivityIndicator.attrs({
  size: 50,
  color: theme.colors.secondaryColor,
})`
`;
export const GlobalStyleActivityIndicator = styled.View`
  height: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 100;
  background-color: ${({theme}) => theme.colors.lightColor};
  width: ${Dimensions.get('screen').width}px;
`;
