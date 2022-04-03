import styled from 'styled-components/native';
import { actuatedNormalize } from '../../utils/font-size';

interface ContainerProps {
  width?: number;
}

export const Container = styled.View<ContainerProps>`
  margin-top: 5px;
  width: ${(props) => (props.width ? props.width : 100)}%;
`;

export const Label = styled.Text`
  font-size: ${actuatedNormalize(11)}px;
  font-family: ${({ theme }) => theme.fonts.poppinsRegular};
  color: ${({ theme }) => theme.colors.defaultTextDescription};
  margin-left: 5px;
  margin-bottom: 5px;
`;

export const LabelError = styled.Text`
  font-size: ${actuatedNormalize(11)}px;
  font-family: ${({ theme }) => theme.fonts.poppinsRegular};
  color: ${({ theme }) => theme.colors.errorLight};
  margin-left: 5px;
  margin-bottom: 5px;
`;

interface BoxInputProps {
  focus: boolean;
  error: boolean | undefined;
  enable?: boolean;
}

export const BoxInput = styled.View<BoxInputProps>`
  height: 48px;
  width: 100%;
  margin-bottom: 10px;
  border-radius: 10px;
  flex-direction: row;
  padding: 3px 15px 0 15px;
  align-items: center;
  justify-content: space-between;
  border-width: 1px;
  background-color: ${(props) =>
    props.enable == false
      ? ({ theme }) => theme.colors.background
      : props.error
      ? ({ theme }) => theme.colors.background
      : ({ theme }) => theme.colors.lightColor};
  border-color: ${({ error, focus, enable, theme }) =>
    error
      ? enable === false
        ? theme.colors.disableColor
        : theme.colors.errorLight
      : focus
      ? theme.colors.primaryColorLight
      : theme.colors.disableColor};
`;

interface InputProps {
  type: 'password' | 'default' | 'number' | 'email-address' | 'phone' | 'decimal';
}

export const InputText = styled.TextInput<InputProps>`
  height: 50px;
  font-family: ${({ theme }) => theme.fonts.poppinsRegular};
  width: ${(props) => (props.type === 'password' ? 80 : 100)}%;
`;


