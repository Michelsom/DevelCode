import React, {useEffect, useState} from 'react';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';
import {Dimensions, View, BackHandler} from 'react-native';
import * as S from './style';
export function Splash() {
  const [showText, setShowText] = useState(false);
  const {navigate} = useNavigation();

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => true);
    setTimeout(() => {
      setShowText(true);
    }, 900);
  }, []);

  return (
    <S.Container
      style={{
       
      }}>
      <LottieView
        source={require('../../Assets/Splash/splash.json')}
        autoPlay
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('screen').height,
          flex: 1,
        }}
        loop={false}
        onAnimationFinish={() => navigate('Home' as never)}
      />
      {showText ? <S.TextName>Gestor de registro</S.TextName> : null}
    </S.Container>
  );
}
