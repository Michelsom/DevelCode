import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ArrowLeft} from '../../Assets/Icons';
import * as S from './style';

interface textTitle {
  text: string;
}
export const Header = ({text}: textTitle) => {
  const {goBack} = useNavigation();
  return (
    <S.Container>
      <S.ButtonContainer onPress={goBack}>
        <ArrowLeft width={20} height={20} />
      </S.ButtonContainer>
      <S.Title>{text}</S.Title>
      <S.ButtonContainer></S.ButtonContainer>
    </S.Container>
  );
};

export const HeaderHome = ({text}: textTitle) => {
  const {goBack} = useNavigation();
  return (
    <S.Container>
      <S.ButtonContainer onPress={goBack}>
      </S.ButtonContainer>
      <S.Title>{text}</S.Title>
      <S.ButtonContainer></S.ButtonContainer>
    </S.Container>
  );
};