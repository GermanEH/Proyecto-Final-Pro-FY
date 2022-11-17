import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView,Image,useWindowDimensions} from 'react-native';
import InputConfirmacion from '../InputConfirmacion/InputConfirmacion';
import CustomButton from '../CustomButton/CustomButton'
import Logo from '../../assets/logo.png';
import {useNavigation} from '@react-navigation/core';

export function ConfirmEmailScreen ()  {
  const [code, setCode] = useState()
  const navigation = useNavigation();
  const {height} = useWindowDimensions();

  const onConfirmPressed = () => {
    navigation.navigate('Home');
  };

  const onSignInPress = () => {
    navigation.navigate('FormPacient');
  };

  const onResendPress = () => {
    console.warn('onResendPress');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />

        <Text style={styles.title}>Confirma tu email</Text>
 
       <InputConfirmacion
       placeholder="Codigo"
       value={code}
       setValue={setCode}/>

        <CustomButton text="Confirmar" onPress={onConfirmPressed} />

        <CustomButton
          text="Reenviar el codigo"
          onPress={onResendPress}
          type="SECONDARY"
        />

        <CustomButton
          text="Volver al formulario"
          onPress={onSignInPress}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
});


