import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { useDispatch } from 'react-redux'
import { postPacient } from '../../slices/pacients'
import { useForm, Controller } from 'react-hook-form';
import Constants from 'expo-constants';
//hola
export function FormPacient  ()  {
  const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm({
    defaultValues: {
      first_name: '',
      last_name: '',
      dni: '',
      state:'',
      city:'',
      postcode:'',
      address:'',
      email:'',
      password:''
    }
  });
  const onSubmit = data => {
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
      <Text style={styles.label}>Nombre</Text>
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="first_name"
        rules={{ required: true }}
      />{errors.nombre && <Text>This is required.</Text>}
      <Text style={styles.label}>Apellido</Text>
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="last_name"
        rules={{ required: true }}
      />
      <Text style={styles.label}>D.N.I</Text>
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="DNI"
        rules={{ required: true }}
      />
         <Text style={styles.label}>Provincia</Text>
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="state"
        rules={{ required: true }}
      />

      <Text style={styles.label}>Ciudad</Text>
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="city"
        rules={{ required: true }}
      />

      <Text style={styles.label}>Codigo Postal</Text>
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="postcode"
        rules={{ required: true }}
      />

      <Text style={styles.label}>Direccion</Text>
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="address"
        rules={{ required: true }}
      />
      <Text style={styles.label}>E-mail</Text>
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="email"
        rules={{ required: true }}
      />
    <Text style={styles.label}>Contraseña</Text>
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            secureTextEntry={true}
            value={value}
          />
        )}
        name="password"
        rules={{ required: true }}
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
  label: {
    color: 'black',
    margin: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    color: 'white',
    height: 40,
    backgroundColor: 'orange',
    borderRadius: 4,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    backgroundColor: 'white',
  },
  input: {
    backgroundColor: 'orange',
    borderColor: 'none',
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
});