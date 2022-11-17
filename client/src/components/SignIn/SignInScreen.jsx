import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import Logo from '../../assets/logo.png';
import CustomInput from '../CustomInput/CustomInput'
import CustomButtom from '../CustomButton/CustomButton'

import {useNavigation} from '@react-navigation/native';
import {useForm, Controller } from 'react-hook-form'

export function SignInScreen  ()  {
  const {control, handleSubmit} = useForm()

  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const onSignInPressed = () => {
    // validate user
    navigation.navigate('Home');
  };

  const onForgotPasswordPressed = () => {
  /*   navigation.navigate('ForgotPassword'); */
  console.warn('onForgotPasswordPressed')
  
  };

  const onSignUpPress = () => {
    navigation.navigate('FormPacient');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />

        <CustomInput
            name="name"
            placeholder="Nombre"
            control={control}
            rules={{required: 'El Nombre es requerido'}}
    />
        <CustomInput
            name="password"
            placeholder="Contraseña"
            control={control}
            rules={{required: 'La Contraseña es requerida'}}
            secureTextEntry
        />
       

        <CustomButtom text="Ingresar" onPress={handleSubmit(onSignInPressed)} />

        <CustomButtom
          text="¿Olvidaste tu Contraseña?"
          onPress={onForgotPasswordPressed}
          type="SECONDARY"
        />

     

        <CustomButtom
          text="No tienes una cuenta? Crea una aqui"
          onPress={onSignUpPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
});


