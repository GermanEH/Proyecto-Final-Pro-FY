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
            placeholder="Name"
            control={control}
            rules={{required: 'Name is required'}}
    />
        <CustomInput
            name="password"
            placeholder="Password"
            control={control}
            rules={{required: 'Password is required'}}
            secureTextEntry
        />
       

        <CustomButtom text="Sign In" onPress={handleSubmit(onSignInPressed)} />

        <CustomButtom
          text="Forgot password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />

     

        <CustomButtom
          text="Don't have an account? Create one"
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


