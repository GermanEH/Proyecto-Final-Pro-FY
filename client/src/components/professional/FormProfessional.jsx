import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert, TextField } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Constants from 'expo-constants';
import {Picker} from '@react-native-picker/picker';
import { postProfessional  } from '../../slices/professionalsActions'
import { useDispatch } from 'react-redux'

export function FormProfessional  ()  {

  const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm({
    defaultValues: {
      first_name: '',
      last_name: '',
      email:'',
      password:'',
      professionalId: '',
      dni:'',
      country:'',
      state:'',
      city:'',
      postcode:'',
      professionalAdress:'',
      schedule:'',
      modality:''
    }
  });

  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(postProfessional(data))
  };

  const onChange = arg => {
    return {
      value: arg.nativeEvent.text,
    };
  };

  return (
    <View style={styles.container}>
      
      <Controller
          control={control}
          render={({field: { onChange, onBlur, value },fieldState:{error}}) => (
            <View style={styles.campo} >
            <TextInput
                placeholder='Nombre'
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
            />
            </View>
          )}
          name="first_name"
          rules={{ required: true }}
      />

      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
            placeholder='Apellido'
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="last_name"
        rules={{ required: true }}
      />
     
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
          placeholder='email'
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="email"
        rules={{ required: true }}
      />

      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
          placeholder='Password'
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            secureTextEntry={true}
          />
        )}
        name="password"
        rules={{ required: true }}
      />
      
    
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
            placeholder='dni'
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="dni"
        rules={{ required: true }}
      />

       
      <Controller
        control={control}
        
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
          placeholder='Matricula'
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="professionalId"
        rules={{ required: true }}
      />
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
          placeholder='Pais'
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="country"
        rules={{ required: true }}
      />

  
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
          placeholder='Estado'
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="state"
        rules={{ required: true }}
      />

       <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
          placeholder='Ciudad'
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="city"
        rules={{ required: true }}
      />


     
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
            placeholder='Codigo Postal'
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="zip"
        rules={{ required: true }}
      />

      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
            placeholder='Direccion'
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="professionalAdress"
        rules={{ required: true }}
      />

      
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
           placeholder='Disponibilidad Horaria'
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="schedule"
        rules={{ required: true }}
      />

      <Text style={styles.label}>Modalidad de Consulta</Text>
      <Picker
        //selectedValue={modalidad}
        style={{ height: 50, width: 150 }}
        //name="modalidad"
        onValueChange={(itemValue, itemIndex) =>setValue("modalidad",itemValue)}
      >
        <Picker.Item label="Teleconsulta" value="remote" />
        <Picker.Item label="Presencial" value="presential" />
      
      </Picker>

      <View style={styles.button}>
        <Button
          style={styles.buttonInner}
          color
          title="Reset"
          onPress={() => {
            reset({
                first_name: '',
                last_name: '',
                email:'',
                password:'',
                professionalId: '',
                dni:'',
                country:'',
                state:'',
                city:'',
                zip:'',
                professionalAdress:'',
                schedule:'',
                modalidad:''
            })
          }}
        />
      </View>

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
 
  button: {
    marginTop: 40,
    color: 'white',
    height: 40,
    backgroundColor: '#ec5990',
    borderRadius: 4,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    backgroundColor: '#0e101c',
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'none',
    height: 40,
    padding: 20,
    marginBottom:30,
    borderRadius: 4,
    top:20
  },
  campo:{
       
      
       

  },
});