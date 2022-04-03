import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import * as S from './style';
import firestore from '@react-native-firebase/firestore';
import { HeaderHome } from '../../components/Header';

export const Home = () => {
  const {navigate} = useNavigation();
  const [data, setData] = React.useState([]);
  const renderItem = (item: any) => {
    console.log(item);
    return (
      <View style={{padding: 20}}>
        <S.Description
          onPress={() => {
            navigate('Profile' as never, {item: item.item, id:item.id} as never);
          }}>
          <View
            style={{
              width: 104,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={{uri: `data:image/jpeg;base64,${item.item.userImage}`}}
              style={{width: 60, height: 60, borderRadius: 30}}
            />
          </View>
          <View>
            <S.UserName>{item.item.userName}</S.UserName>
            <S.BirthDate>{item.item.userBirthDate}</S.BirthDate>
            <S.UserCode>{item.item.userCode}</S.UserCode>
          </View>
        </S.Description>
      </View>
    );
  };
  function deleteData(id: any) {
    firestore().collection('DataProfile').doc(id).delete();
  }

  useEffect(() => {
    firestore()
      .collection('DataProfile')
      .onSnapshot(query => {
        const list = [] as any;
        query.forEach(doc => {
          list.push({
            ...doc.data(),
            id: doc.id,
          });
        });
        setData(list);
      });
  }, []);
  return (
    <S.Container>
     <HeaderHome text='Usuários'/>
      <FlatList data={data} renderItem={renderItem} />
      <S.Box>
        <S.ButtonAddNewRegister
          onPress={() => {
            navigate('Register' as never);
          }}>
          <Text style={{color: '#fff', fontSize: 28, marginBottom: 5}}>+</Text>
        </S.ButtonAddNewRegister>
      </S.Box>
    </S.Container>
  );
};
