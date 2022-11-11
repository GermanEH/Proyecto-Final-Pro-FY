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
    }
  });

  const dispatch = useDispatch();

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

     <Text style={styles.label}>email</Text>
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
        name="password"
        rules={{ required: true }}
      />
      
    <Text style={styles.label}>dni</Text>
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
        name="dni"
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
<Text style={styles.label}>Pais</Text>
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
        name="country"
        rules={{ required: true }}
      />

  <Text style={styles.label}>Estado</Text>
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
        name="zip"
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
        name="professionalAdress"
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