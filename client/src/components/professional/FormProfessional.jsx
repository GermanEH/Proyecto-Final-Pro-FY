import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert, Image,useWindowDimensions } from 'react-native';
import { useDispatch } from 'react-redux'
import { postPacient } from '../../slices/pacientsActions'
import { useForm, Controller } from 'react-hook-form';
import Constants from 'expo-constants';
import CustomInput from '../CustomInput/CustomInput'
import CustomButtom from '../CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import Logo from '../../assets/logo.png';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

export function FormProfessional  ()  {
  const { register, setValue, handleSubmit,watch, control, reset, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      lastname: '',
      email:'',
      password:'',
      passswordRepeat:'',
      dni: '',
      professionalId:'',
      speciality:'',
      country:'',
      state:'',
      city:'',
      zip:'',
      professionalAdress:'',
      schedule:'',
      modality:''
    }
  });
  const navigation = useNavigation();
  const onSignUpPress = () => {
    navigation.navigate('SignInScreen')
  }
  const onSignInPressed = () => {
    // validate user
    navigation.navigate('Home');
  };
  const pwd = watch('password') // desde aca se accede para ver las coincidencias de las password !
  const onSubmit = data => {
    console.log('entramos')
    console.log(data)
    dispatch(postPacient(data))
  };

  const onChange = arg => {
    return {
      value: arg.nativeEvent.text,
    };
  };
  const {height} = useWindowDimensions();
  const dispatch = useDispatch()

  return (
    <View style={styles.container}>
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
        rules={{
          required: 'Name is required',
          minLength:{
            value:4,
            message: 'Name should be minimum 4 characters long'
          },
          maxLength:{
            value:20,
            message: 'Name should be max 20 characters long'
          }
        }}
      />
      <CustomInput
        name="lastname"
        placeholder="Last name"
        control={control}
        rules={{
          required: 'Lastname is required',
          minLength:{
            value:4,
            message: 'Lastname should be minimum 4 characters long'
          },
          maxLength:{
            value:20,
            message: 'Lastname should be max 20 characters long'
          }
        }}
      />
     <CustomInput
      name="password"
      placeholder="Password"
      control={control}
      secureTextEntry
      rules={{
        required: 'Password is required',
        minLength:{
          value:8,
          message: 'Password must be at least 8 characters long'
        },
       
      }}
    />
     <CustomInput
      name="passwordRepeat"
      placeholder="Repeat Password"
      control={control}
      secureTextEntry
    rules={{
      validate: value =>
      value === pwd   || 'Password do not match'
    }}
    />
       <CustomInput
          name="country"
          placeholder="Country"
          control={control}
          rules={{required: 'Country is required'}}
        />
      <CustomInput
        name="state"
        placeholder="State"
        control={control}
        rules={{required: 'State is required'}}
      />
        <CustomInput
          name="city"
          placeholder="City"
          control={control}
          rules={{required: 'City is required'}}
      />
      <CustomInput
        name="zip"
        placeholder="P.C"
        control={control}
        rules={{required: 'Zip code is required'}}
        
      />
       <CustomInput
          name="professionalId"
          placeholder="Professional ID"
          control={control}
          rules={{required: 'Professional ID is required'}}
        />
      <CustomInput
          name="dni"
          placeholder="D.N.I"
          control={control}
          rules={{required: 'DNI is required'}}
        />
         <CustomInput
          name="professionalAdress"
          placeholder="Professional Adress "
          control={control}
          rules={{required: 'Professional Adress is required'}}
        />
         <CustomInput
          name="schedule"
          placeholder="Schedule"
          control={control}
          rules={{required: 'Schedule is required'}}
        />
         <CustomInput
          name="modalty"
          placeholder="Modality"
          control={control}
          rules={{required: 'Modality is required'}}
        />
      <CustomInput
          name="email"
          placeholder="E-mail"
          control={control}
          rules={{pattern: {value: EMAIL_REGEX, message: 'Email is invalid'}}}
      />


      <View style={styles.button}>
        <Button
          style={styles.buttonInner}
          color
          title="Crear usuario"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
      
      <View>
      <CustomButtom
          text="Ya tienes una cuenta? Ingresa Aquí"
          onPress={onSignUpPress}
          type="TERTIARY"
        />
      </View>
      </View>
    </View>
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
  button: {
    marginTop: 40,
    color: 'white',
    height: 40,
    backgroundColor: 'orange',
    borderRadius: 4,
  },
});

