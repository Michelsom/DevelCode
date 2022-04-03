import React from 'react';
import {useState} from 'react';
import {
  ReturnKeyTypeOptions,
  TextInputProps,
  TouchableOpacity,
} from 'react-native';
import * as S from './styles';

interface InputProps extends TextInputProps {
  label?: string;
  type:
    | 'password'
    | 'default'
    | 'number'
    | 'email-address'
    | 'phone'
    | 'decimal';
  placeholder: string;
  keyLabel?: string;
  width?: number;
  returnKeyType?: ReturnKeyTypeOptions;
  setValue: (value: string) => void;
  keyButtonAction?: () => void;
  maxLength?: number;
  error?: boolean;
  enable?: boolean;
  nativeID?: string;
  value?: string;
  textError?: string;
}

export const Input = ({
  value,
  type,
  label,
  placeholder,
  width,
  setValue,
  enable,
  maxLength,
  error,
  keyButtonAction,
  keyLabel,
  returnKeyType,
  textError,
  ...rest
}: InputProps) => {
  const [showPass, setShowPass] = useState(type !== 'password');
  const [focus, setFocus] = useState(false);

  return (
    <S.Container width={width}>
      {label && <S.Label>{label}</S.Label>}
      <S.BoxInput enable={enable} focus={focus} error={error}>
        <S.InputText
          value={value}
          nativeID={rest.nativeID}
          type={type}
          onChangeText={text => {
            setValue(text);
          }}
          editable={enable}
          secureTextEntry={!showPass && type === 'password'}
          keyboardType={
            type === 'number'
              ? 'number-pad'
              : type === 'email-address'
              ? 'email-address'
              : type === 'phone'
              ? 'phone-pad'
              : type === 'decimal'
              ? 'numbers-and-punctuation'
              : 'default'
          }
          textContentType={
            type === 'email-address'
              ? 'emailAddress'
              : type === 'phone'
              ? 'telephoneNumber'
              : type === 'decimal'
              ? 'sublocality'
              : 'none'
          }
          autoCompleteType={
            type === 'email-address'
              ? 'email'
              : type === 'phone'
              ? 'tel'
              : 'off'
          }
          placeholder={placeholder}
          onBlur={() => {
            setFocus(false);
          }}
          autoCapitalize={
            type === 'email-address' || type === 'password' ? 'none' : 'words'
          }
          onSubmitEditing={keyButtonAction}
          returnKeyLabel={keyLabel}
          onFocus={e => {
            if (e.currentTarget) {
              setFocus(true);
            }
          }}
          returnKeyType={returnKeyType}
          maxLength={maxLength}
          selectionColor="#FA641E"
        />
      </S.BoxInput>
      {error && <S.LabelError>{error ? textError : ''}</S.LabelError>}
    </S.Container>
  );
};
