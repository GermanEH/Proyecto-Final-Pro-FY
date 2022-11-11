import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { useDispatch } from 'react-redux'
import { postProfessional } from '../../slices/professionals'
import { useForm, Controller } from 'react-hook-form';
import Constants from 'expo-constants';

export function FormProfessional  ()  {
  const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm({
    defaultValues: {
      first_name: '',
      last_name: '',
      professionalId: '',
      dni:'',
      state:'',
      city:'',
      postcode:'',
      professionalAddress:'',
      country:'',
      schedule:'',
      modality:''
    }
  });
  const onSubmit = data => {
    dispatch(postProfessional(data))
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
      />
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
      <Text style={styles.label}>Matricula</Text>
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
        name="professionalId"
        rules={{ required: true }}
      />
{/* <Text style={styles.label}>Especialidad</Text>
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
        name="speciality"
        rules={{ required: true }}
      /> */}

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
      <Text style={styles.label}>Disponibilidad Horaria</Text>
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
        name="schedule"
        rules={{ required: true }}
      />
    <Text style={styles.label}>Modalidad de Consulta</Text>
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
        name="modality"
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
    color: 'white',
    margin: 20,
    marginLeft: 0,
  },
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
    padding: 10,
    borderRadius: 4,
  },
});