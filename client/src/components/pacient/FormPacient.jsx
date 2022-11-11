import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { useDispatch } from 'react-redux'
import { postPacient } from '../../slices/pacientsActions'
import { useForm, Controller } from 'react-hook-form';
import Constants from 'expo-constants';
import CustomInput from '../CustomInput/CustomInput'

export function FormPacient  ()  {
  const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm({
    defaultValues: {

      name: '',
      lastname: '',
      email:'',
      password:'',
      dni: '',
      country:'',
      state:'',
      ciudad:'',
      zip:'',
      adress:'',

    }
  });
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

  const dispatch = useDispatch()

  return (
    <View style={styles.container}>

      
      <CustomInput
        name="name"
        placeholder="Name"
        control={control}
        rules={{required: 'First name is required'}}
       

      />
      <CustomInput
        name="lastname"
        placeholder="Last name"
        control={control}

        rules={{required: 'Last name is required'}}
      


      />
        <CustomInput
        name="password"
        placeholder="Password"
        control={control}

        secureTextEntry
        rules={{required: 'Password is required'}}

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
          name="dni"
          placeholder="D.N.I"
          control={control}
          rules={{required: 'DNI is required'}}
        />
        <CustomInput
          name="email"
          placeholder="E-mail"
          control={control}
          rules={{required: 'E-mail is required'}}
      
      />
    


  



      <View style={styles.button}>
        <Button
          style={styles.buttonInner}
          color
          title="Crear usuario"
          onPress={handleSubmit(onSubmit)}
        />
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
