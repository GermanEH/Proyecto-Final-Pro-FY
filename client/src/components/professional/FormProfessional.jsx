import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert,Picker, TextField } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Constants from 'expo-constants';
import { postProfessional  } from '../../slices/professionalsActions'
import { useDispatch } from 'react-redux'
//hola
export function FormProfessional  ()  {
  const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm({
    defaultValues: {
      nombre: '',
      apellido: '',
      contrasena:'',
      numeroTarjeta: '',
      especialidad:'',
      provincia:'',
      ciudad:'',
      cp:'',
      direccion:'',
      disponibilidad:'',
      modalidad:''
    }
  });

  const dispatch = useDispatch()

  const onSubmit = data => {
     console.log('entramos')
     console.log(data)
     //dispatch(postProfessional(data))
  };

  const onChange = arg => {
    return {
      value: arg.nativeEvent.text,
    };
  };

  
 
  //console.log('errors', errors);

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
        name="nombre"
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
        name="apellido"
        rules={{ required: true }}
      />
      <Text style={styles.label}>contraseña</Text>
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            secureTextEntry={true}
          />
        )}
        name="contrasena"
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
        name="numeroTarjeta"
        rules={{ required: true }}
      />
<Text style={styles.label}>Especialidad</Text>
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
        name="especialidad"
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
        name="provincia"
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
        name="ciudad"
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
        name="cp"
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
        name="direccion"
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
        name="disponibilidad"
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
               nombre: '',
              apellido: '',
              contrasena:'',
              numeroTarjeta: '',
              especialidad:'',
              provincia:'',
              ciudad:'',
              cp:'',
              direccion:'',
              disponibilidad:'',
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