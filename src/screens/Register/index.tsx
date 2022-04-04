import React from 'react';
import {Alert, TouchableOpacity, View} from 'react-native';
import {Input} from '../../components/Input';
import * as S from './style';
import * as ImagePicker from 'react-native-image-picker';
import {GlobalButton} from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import {ImageLibraryOptions} from '../../components/ImagePicker';
import {Header} from '../../components/Header';
import {Pencil} from '../../Assets/Icons';
import { maskDate } from '../../utils/masks';

export const Register = () => {
  const [name, setName] = React.useState('');
  const [code, setCode] = React.useState('');
  const [birthDate, setBirthDate] = React.useState('');
  const [image, setImage] = React.useState<string | undefined>();
  const {navigate, goBack} = useNavigation();
  const options: ImageLibraryOptions = {
    selectionLimit: 1,
    mediaType: 'photo',
    maxWidth: 1000,
    maxHeight: 1000,
    quality: 0.6,
    includeBase64: true,
    includeExtra: false,
  };

  const [loading, setLoading] = React.useState(false);
  const openPicker = () => {
    ImagePicker.launchImageLibrary(options, response => {
      if (response.assets) {
        switch (response) {
          case response.didCancel:
            console.log('Carregamento de image cancelado');
            Alert.alert('Carregamento de imagem cancelado');
            break;
          case response.errorCode:
            Alert.alert('Erro ao carregar imagem');
            break;
          case response.errorMessage:
            Alert.alert('Erro ao carregar imagem');
            break;
          default:
            setImage(response.assets[0].base64);
            break;
        }
      }
    });
  };

  function sendData() {
    setLoading(true);
    firestore()
      .collection('DataProfile')
      .add({
        userBirthDate: birthDate,
        userCode: code,
        userImage: image,
        userName: name,
      })
      .then(() => {
        console.log('User added!');
      })
      .catch(() => {
        console.log('User not added!');
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <S.Container>
      <Header text="Adicionar usuário" />
      <S.Box>
        {image ? (
          <S.ImageProfile
            resizeMode="cover"
            source={{uri: 'data:image/jpeg;base64,' + image}}
          />
        ) : (
          <TouchableOpacity onPress={openPicker}>
            <S.ImageProfileDefault
              resizeMode="cover"
              source={require('../../Assets/Images/profileDefault.png')}
            />
            <S.PencilView>
              <Pencil width={25} height={25} />
            </S.PencilView>
          </TouchableOpacity>
        )}
        <Input
        label={'Nome'}
          type="default"
          value={name}
          placeholder="Ex: Nathan"
          setValue={e => {
            setName(e);
          }}
        />
        <Input
        label={'Data de nascimento'}
          type="decimal"
          value={birthDate}
          placeholder="24/09/1997"
          setValue={e => {
            setBirthDate(maskDate(e));
          }}
        />
        <Input
        label={'Código'}
          value={code}
          type="default"
          placeholder="6870201"
          setValue={e => {
            setCode(e);
          }}
        />
        <GlobalButton
          handleButton={() => {
            if (name && code && birthDate && image) {
              console.log(name, code, birthDate, image);
              sendData();
              navigate('Home' as never);
            } else {
              Alert.alert('Preencha todos os campos');
            }
          }}
          width={100}
          type="solid"
          text={'Cadastrar usuário'}
          color={'secondaryColor'}
          />
        <GlobalButton
          handleButton={() => {
            goBack();
          }}
          width={100}
          type="outline"
          text={'Cancelar'}
          color={'secondaryColor'}
          />
      </S.Box>
    </S.Container>
  );
};
