import React, { useEffect, useState } from 'react'
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity, ScrollView, useWindowDimensions,
    KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import Logo from '../../assets/logo.png';
import CustomButtom from '../CustomButton/CustomButton'
import { auth } from "../../../firebase-config.js"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import CustomInput from '../CustomInput/CustomInput';
import {useForm, Controller } from 'react-hook-form'


const provider = new GoogleAuthProvider();

export function SignInPro({ route }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigation = useNavigation()

    const {height} = useWindowDimensions();
    const {control, handleSubmit} = useForm()
    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("Logged in whit", user.email)
            // ...
            if(user && user.emailVerified === false) {alert('Correo electronico no verificado')}
            if(user && user.emailVerified === true && route.params.usertype === 'pacient') {navigation.navigate("HamburguerMenu", { usertype: "pacient" })
        } else if (user && user.emailVerified === true && route.params.usertype === 'professional') {navigation.navigate("HamburguerMenu", { usertype: "professional" })}
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        })
    }

    useEffect(()=>{
        const unsuscribe = auth.onAuthStateChanged( user => {
            console.log("user",user)
            console.log(user.emailVerified)
            if(user && user.emailVerified === 'false') {alert('Correo electronico no verificado')}
            if(user && user.emailVerified === 'true' && route.params.usertype === 'pacient') {navigation.navigate("HamburguerMenu", { usertype: "pacient" })
        } else if (user && user.emailVerified === 'true' && route.params.usertype === 'professional') {navigation.navigate("HamburguerMenu", { usertype: "professional" })
        }
        })
        return unsuscribe
    },[auth])

    const HandleSignInWhitGoogle = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
            alert(result.user.displayName)
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image
                    source={Logo}
                    style={[styles.logo, {height: height * 0.3}]}
                    resizeMode="contain"
                />

                <View styles={styles.container}>
                <Text>
                        Correo electrónico
                    </Text>
                <TextInput
                        onChangeText={(text) => setEmail(text)}
                       /*  placeholder="correo " */
                        styles={styles.input}>
                    </TextInput>
                    <Text>
                        Contraseña
                    </Text>
                    <TextInput
                        onChangeText={(text) => setPassword(text)}
                     /*    placeholder="contraseña" */
                        style={styles.input}
                        secureTextEntry>
                    </TextInput>

                    <View styles={styles.container}>
                        <CustomButtom 
                        text="Ingresar" 
                        onPress={handleSubmit(handleSignIn)} />

                        {/* <TouchableOpacity
                            onPress={handleSignIn}
                            style={styles.btn}>
                            <Text style={styles.textBtn}>Iniciar Sesión</Text>
                        </TouchableOpacity> */}


                        <CustomButtom 
                        text="Ingresar con Google" 
                        onPress={HandleSignInWhitGoogle} />
                        {/* <TouchableOpacity
                            onPress={handleSignUp}
                            style={styles.button}
                        > */}
                            {/* <Text style={styles.text}>Registrate</Text>
                        </TouchableOpacity> */}
                    </View>
                        <View>
                            
                        <Text style={styles.text}>
                            ¿No tienes una cuenta?{" "}
                            <Text style={styles.link} /* onPress={onTermsOfUsePressed} */>
                            Presiona en el boton
                            </Text>{" "}
                            Registrarse{" "}
                            <Text style={styles.link} /* onPress={onPrivacyPressed} */>
                            para crear una nueva
                        </Text>
                    </Text>
                    </View>
                    <View
                        style={styles.container}>
                            <CustomButtom 
                                text="Registrarse" 
                                onPress={() => navigation.navigate('SignUpProfessional')} />
                    </View>
                </View>
            </View>
        </ScrollView>
        // <KeyboardAvoidingView
        //     styles={styles.container}
        //     behavior="padding">
        // </KeyboardAvoidingView>
    )
}

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
    container: {
        backgroundColor: 'white',
        width: '100%',
    
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
    
        paddingHorizontal: 10,
        marginVertical: 5,
      },
    input: {},
    text: {
        color: "gray",
        marginVertical: 10,
      },
    link: {
        color: "#303030",
      },
})