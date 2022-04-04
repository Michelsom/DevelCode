import {BackHandler, FlatList, Image, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';

import * as Global from '../../global/hocks';
import * as S from './style';

import {HeaderHome} from '../../components/Header';

import firestore from '@react-native-firebase/firestore';

export const Home = () => {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  const {navigate} = useNavigation();

  const renderItem = (item: any) => {
    return (
      <S.ContainerFlatList>
        <S.Description
          onPress={() => {
            navigate(
              'Profile' as never,
              {item: item.item, id: item.id} as never,
            );
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
            <S.UserName numberOfLines={1}>{item.item.userName}</S.UserName>
            <S.BirthDate>{item.item.userBirthDate}</S.BirthDate>
            <S.UserCode>{item.item.userCode}</S.UserCode>
          </View>
        </S.Description>
      </S.ContainerFlatList>
    );
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => true);
  }, []);

  useEffect(() => {
    function getData() {
      setLoading(true);
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
    }
    getData();
    setLoading(false);
  }, []);
  return (
    <S.Container>
      <HeaderHome text="Usuários" />
      {loading ? (
        <Global.GlobalStyleActivityIndicator>
          <Global.GlobalActivityIndicator />
          <Text>Carregando...</Text>
        </Global.GlobalStyleActivityIndicator>
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          ListFooterComponent={() => {
            return <View style={{height: 70}}></View>;
          }}
        />
      )}
      <S.Box>
        <S.ButtonAddNewRegister
          onPress={() => {
            navigate('Register' as never);
          }}>
          <Text style={{color: '#fff', fontSize: 38, marginBottom: 5}}>+</Text>
        </S.ButtonAddNewRegister>
      </S.Box>
    </S.Container>
  );
};
