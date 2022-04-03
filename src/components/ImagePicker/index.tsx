import React from 'react';
import {Alert} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

export declare type PhotoQuality =
  | 0
  | 0.1
  | 0.2
  | 0.3
  | 0.4
  | 0.5
  | 0.6
  | 0.7
  | 0.8
  | 0.9
  | 1;
export declare type CameraType = 'back' | 'front';
export declare type MediaType = 'photo' | 'video' | 'mixed';
export declare type AndroidVideoOptions = 'low' | 'high';
export declare type iOSVideoOptions = 'low' | 'medium' | 'high';
export declare type ErrorCode = 'camera_unavailable' | 'permission' | 'others';

export interface ImageLibraryOptions {
  selectionLimit?: number;
  mediaType: string;
  maxWidth?: number;
  maxHeight?: number;
  quality?: PhotoQuality;
  videoQuality?: AndroidVideoOptions | iOSVideoOptions;
  includeBase64?: boolean;
  includeExtra?: boolean;
}

export const openPicker = () => {
  const options: ImageLibraryOptions = {
    selectionLimit: 1,
    mediaType: 'photo',
    maxWidth: 1000,
    maxHeight: 1000,
    quality: 0.6,
    includeBase64: true,
    includeExtra: false,
  };

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
          return response.assets[0].base64;
      }
    }
  });
};
