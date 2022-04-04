import React from 'react';
import {ActivityIndicator} from 'react-native';
import theme from '../../global/styles/theme';
import * as S from './styles';

interface ButtonProps {
  text: string;
  type: 'solid' | 'outline' | 'transparent';
  color:
    | 'primaryColor'
    | 'secondaryColor'
    | 'disabledColor'
    | 'dangerColor'
    | 'defaultColor';
  loading?: boolean;
  disable?: boolean;
  width?: number;
  transparent?: boolean;
  handleButton: () => void;
}

const colors = [
  {id: 2, name: 'secondaryColor', color: theme.colors.secondaryColor},
  {id: 3, name: 'disabledColor', color: theme.colors.disableColor},
  {id: 5, name: 'defaultColor', color: theme.colors.defaultTextDescription},
];

export const GlobalButton = ({
  color,
  text,
  type,
  loading,
  width,
  handleButton,
  disable,
  transparent,
}: ButtonProps) => {
  return (
    <S.Button
      transparent={transparent}
      disable={disable}
      width={width}
      color={color}
      type={type}
      onPress={() => {
        if (!disable || loading) {
          handleButton();
        }
      }}>
      {loading ? (
        <ActivityIndicator
          color={
            type === 'solid'
              ? theme.colors.lightColor
              : colors.find(e => e.name === color)?.color
          }
        />
      ) : (
        <S.TextButton disable={disable} color={color} type={type}>
          {text}
        </S.TextButton>
      )}
    </S.Button>
  );
};
