import styled from 'styled-components/native';
import theme from '../../global/styles/theme';
import {actuatedNormalize} from '../../utils/font-size';
interface ButtonProps {
  type: 'solid' | 'outline' | 'transparent';
  color:
    | 'primaryColor'
    | 'secondaryColor'
    | 'disabledColor'
    | 'dangerColor'
    | 'defaultColor';
  width?: number;
  disable?: boolean;
  transparent?: boolean;
}

const colors = [
  {id: 2, name: 'secondaryColor', color: theme.colors.secondaryColor},
  {id: 5, name: 'defaultColor', color: theme.colors.defaultTextDescription},
];

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})<ButtonProps>`
  height: 52px;
  justify-content: center;
  align-items: center;
  width: ${props => (props.width ? props.width : 100)}%;
  margin: 10px 0;
  overflow: hidden;
  border-radius: 8px;
  border-width: ${props => (props.type === 'outline' ? 1 : 0)}px;
  border-color: ${props =>
    props.type === 'outline'
      ? colors.find(e => e.name === props.color)?.color
      : 'transparent'};
  background-color: ${props =>
    !props.disable
      ? props.type === 'solid'
        ? colors.find(e => e.name === props.color)?.color
        : props.type === 'outline'
        ? theme.colors.lightColor
        : props.type === 'transparent'
        ? 'transparent'
        : theme.colors.lightColor
      : props.type === 'transparent'
      ? 'transparent'
      : theme.colors.disableColor};
`;

export const TextButton = styled.Text<ButtonProps>`
  font-size: ${actuatedNormalize(15)}px;
  font-family: ${theme.fonts.poppinsMedium};
  color: ${props =>
    props.type === 'solid'
      ? props.disable
        ? theme.colors.defaultTextDescription
        : theme.colors.lightColor
      : props.type === 'outline'
      ? theme.colors.defaultTextDescription
      : props.disable
      ? theme.colors.defaultTextDescription
      : colors.find(e => e.name === props.color)?.color};
`;
