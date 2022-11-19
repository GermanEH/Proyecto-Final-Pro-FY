import  React , {useEffect} from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert, Image,useWindowDimensions, ScrollView,
  SafeAreaView, } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { postProfessional } from '../../slices/professionalsActions'
import { useForm, Controller } from 'react-hook-form';
import Constants from 'expo-constants';
import CustomInput from '../CustomInput/CustomInput'
import CustomButtom from '../CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import Logo from '../../assets/logo.png';
import { getSpecialties } from '../../slices/professionalsActions';
import {SelectList} from 'react-native-dropdown-select-list';
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

export function FormProfessional  ()  {
  const { register, setValue, handleSubmit, watch, control, reset, formState: { errors } } = useForm({
    defaultValues: {
      first_name: '',
      last_name: '',
      email:'',
      password:'',
      /* passswordRepeat:'', */
      dni: '',
      professionalId:'',
      speciality:'',
      country:'',
      state:'',
      city:'',
      zip:'',
      professionalAdress:'',
      schedule:'',
      modality:[]
    }
  });
  
  const [selected, setSelected] = React.useState("")
  const navigation = useNavigation();
  const onSignUpPress = () => {
    navigation.navigate('SignInScreen')
  }
  const onSignInPressed = () => {
    // validate user
    navigation.navigate('Home');
  };
  use
  const pwd = watch('password') // desde aca se accede para ver las coincidencias de las password !
  

 const speciality = useSelector(state => state.professionals.specialtiesNames)
 const specialties = useSelector (state => state.professionals.specialties)
  const {height} = useWindowDimensions();
  const dispatch = useDispatch();
  useEffect(() => {dispatch(getSpecialties())},[]);
  const onSubmit = (data) => {
    const selectedSpecialty = specialties.filter (i =>i.name=== data.speciality)
    data.speciality = selectedSpecialty._id
    console.log('entramos')
    console.log(data)
    dispatch(postProfessional(data))
    navigation.navigate('SignInScreen')
  };
  return (
    <SafeAreaView>
      <ScrollView>

    
    <View style={styles.container}>
      <View style={styles.root}>   
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />
      
      <CustomInput
        name="first_name"
        placeholder="Nombre"
        control={control}
        rules={{
          required: 'Nombre es requerido',
          minLength:{
            value:4,
            message: 'El nombre deberia tener 4 letras como minimo'
          },
          maxLength:{
            value:20,
            message: 'El nombre debe tener como maximo 20 letras'
          }
        }}
      />
      <CustomInput
        name="last_name"
        placeholder="Apellido"
        control={control}
        rules={{
          required: 'Apellido es requerido',
          minLength:{
            value:4,
            message: 'El Apellido deberia tener 4 letras como minimo'
          },
          maxLength:{
            value:20,
            message: 'El apellido debe tener como maximo 20 letras'
          }
        }}
      />
     <CustomInput
      name="password"
      placeholder="Contraseña"
      control={control}
      secureTextEntry
      rules={{
        required: 'Contraseña requerida',
        minLength:{
          value:8,
          message: 'La contraseña deberia tener 8 letras como minimo'
        }
       
      }}
    />
    {/*  <CustomInput
      name="passwordRepeat"
      placeholder="Repetir Contraseña"
      control={control}
      secureTextEntry
    rules={{
      validate: value =>
      value === pwd   || 'Las contraseñas no son iguales'
    }}
    /> */}
       <CustomInput
          name="country"
          placeholder="Pais"
          control={control}
          rules={{required: 'Pais es requerido'}}
        />
      <CustomInput
        name="state"
        placeholder="Provincia"
        control={control}
        rules={{required: 'Provincia es requerida'}}
      />
        <CustomInput
          name="city"
          placeholder="Ciudad"
          control={control}
          rules={{required: 'Ciudad es requerida'}}
      />
      <CustomInput
        name="zip"
        placeholder="P.C"
        control={control}
        rules={{required: 'Codigo Postal es requerido'}}
        
      />

        <SelectList data={speciality} placeholder="Especialidad" setSelected={(value)=>setValue('speciality', value)} />
       <CustomInput
          name="professionalId"
          placeholder="Matricula del profesional"
          control={control}
          rules={{required: 'Matricula del profesional es requerida'}}
        />
      <CustomInput
          name="dni"
          placeholder="D.N.I"
          control={control}
          rules={{required: 'DNI es requerido'}}
        />
         <CustomInput
          name="professionalAdress"
          placeholder="Direccion del profesional"
          control={control}
          rules={{required: 'Direccion del profesional es requerida'}}
        />
         <CustomInput
          name="schedule"
          placeholder="Turnos"
          control={control}
          rules={{required: 'Turnos son requeridos'}}
        />
         <CustomInput
          name="modality"
          placeholder="Modalidad"
          control={control}
          rules={{required: 'Modalidad es requerida'}}
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
    </ScrollView>
    </SafeAreaView>
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

