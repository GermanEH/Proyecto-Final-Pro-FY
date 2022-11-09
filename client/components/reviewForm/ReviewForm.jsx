import React from "react";
import {StyleSheet , Button, TextInput, View, Text} from "react-native";
import { Formik } from 'formik';

export default function ReviewForm (){
    return (
        <View>
            <Formik 
            initialValues={{nombre : '', apellido: '', dni: '', provincia:'', ciudad:'',cp:'',direccion:'',email:'', contraseña:''}}
            onSubmit={(values)=>{

            }}
            >
                {(props)=>(
                    <View>
                       <TextInput
                        placeholder="Nombre"
                        onChangeText={props.handleChange('nombre')}
                        value={props.values.name}
                       />

                        <TextInput
                        placeholder="Apellido"
                        onChangeText={props.handleChange('apellido')}
                        value={props.values.apellido}
                       />

                        <TextInput
                        placeholder="D.N.I"
                        onChangeText={props.handleChange('dni')}
                        value={props.values.dni}
                       />

                        <TextInput
                        placeholder="Provincia"
                        onChangeText={props.handleChange('provincia')}
                        value={props.values.provincia}
                       />   

                        <TextInput
                        placeholder="Ciudad"
                        onChangeText={props.handleChange('ciudad')}
                        value={props.values.ciudad}
                       />

                        <TextInput
                        placeholder="E-mail"
                        onChangeText={props.handleChange('email')}
                        value={props.values.email}
                       />

                        <TextInput
                        placeholder="Codigo Postal"
                        onChangeText={props.handleChange('cp')}
                        value={props.values.cp}
                       />

                        <TextInput
                        placeholder="Contraseña"
                        onChangeText={props.handleChange('contraseña')}
                        value={props.values.contraseña}
                       />

                        <Button title="submit"color='maroon' onPress={props.handleSubmit}/>

                    </View>
                )}

            </Formik>
        </View>
    )
}