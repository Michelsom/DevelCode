import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import {GlobalButton} from '../../components/Button';
import {Header} from '../../components/Header';
import * as S from './style';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import {Input} from '../../components/Input';
import {Pencil} from '../../Assets/Icons';
import {ImageLibraryOptions, openPicker} from '../../components/ImagePicker';
import * as ImagePicker from 'react-native-image-picker';

export const Profile = ({route}: any) => {
  const [data, setData] = useState(route.params.item);
  const [update, setUpdate] = useState(false);
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
  function updateData(id: any) {
    console.log(birthDate, code, name, image);
    firestore()
      .collection('DataProfile')
      .doc(id)
      .update({
        userBirthDate: birthDate,
        userCode: code,
        userImage: image,
        userName: name,
      })
      .then(() => {
        console.log('User updated!');
        navigate('Home' as never);
      });
  }
  function removeData(id: any) {
    firestore()
      .collection('DataProfile')
      .doc(id)
      .delete()
      .then(() => {
        console.log('User deleted!');
        navigate('Home' as never);
      });
  }
  return (
    <S.Container>
      <Header text="Perfil do usuário" />
      {update ? (
        <View
          style={{
            paddingLeft: 20,
            paddingRight: 20,
            justifyContent: 'center',
          }}>
          <TouchableOpacity onPress={openPicker} style={{alignItems: 'center'}}>
            <S.ImageProfileDefault
              resizeMode="cover"
              source={{uri: `data:image/jpeg;base64,${data.userImage}`}}
            />
            <S.PencilView>
              <Pencil width={25} height={25} />
            </S.PencilView>
          </TouchableOpacity>
          <Input
            label={'Nome'}
            type="default"
            value={name}
            placeholder={data.userName}
            setValue={e => {
              setName(e);
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Input
              width={45}
              label={'Data de nascimento'}
              type="decimal"
              value={birthDate}
              placeholder={data.userBirthDate}
              setValue={e => {
                setBirthDate(e);
              }}
            />
            <Input
              width={45}
              label={'Código'}
              value={code}
              type="default"
              placeholder={data.userCode}
              setValue={e => {
                setCode(e);
              }}
            />
          </View>
        </View>
      ) : (
        <S.Box>
          <S.UserImage
            source={{uri: `data:image/jpeg;base64,${data.userImage}`}}
          />
          <S.Label>Nome de Usuário</S.Label>
          <S.UserName>{data.userName}</S.UserName>
          <S.Label>Data de nascimento</S.Label>
          <S.BirthDate>{data.userBirthDate}</S.BirthDate>
          <S.Label>Código do usuário</S.Label>
          <S.UserCode>{data.userCode}</S.UserCode>
        </S.Box>
      )}
      <S.BoxButton>
        {update ? (
          <>
            <GlobalButton
              text="Salvar alterações"
              type="solid"
              color="secondaryColor"
              handleButton={() => {
                if(image && name && code && birthDate){
                updateData(data.id);}
                else{
                  Alert.alert('Preencha todos os campos');
                }
              }}
              width={45}
            />
            <GlobalButton
              text="Cancelar"
              type="transparent"
              width={45}
              color="secondaryColor"
              handleButton={() => {
                setUpdate(!update);
              }}
            />
          </>
        ) : (
          <>
            <GlobalButton
              text="Editar Perfil"
              type="solid"
              color="secondaryColor"
              handleButton={() => {
                setUpdate(!update);
              }}
              width={45}
            />
            <GlobalButton
              text="Excluir Perfil"
              type="solid"
              width={45}
              color="secondaryColor"
              handleButton={() => {
                removeData(route.params.item.id);
              }}
            />
          </>
        )}
      </S.BoxButton>
    </S.Container>
  );
};
