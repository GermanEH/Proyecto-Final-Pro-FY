import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { auth } from '../../../../firebase'

export default function LoginScreen() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigation = useNavigation()

    useEffect(()=>{
        const unsuscribe = auth.onAuthStateChanged(user =>{
            if(user)
            navigation.replace("Home")
        })
        return unsuscribe
    },[])
    
    const handleSingUp = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredential =>{
                const user = userCredential.user
                console.log("Register whit", user.email)
                }).catch(error => alert(error.message))

    }
const handleLogin = ()=>{

    auth.singInWhitEmailAndPassword(email,password)
    .then(userCredential =>{
        const user = userCredential.user
        console.log("Logged in whit", user.email)
        }).catch(error => alert(error.message))
}


    return (

        <KeyboardAvoidingView
            styles={styles.container}
            behavior="padding">

            <View styles={styles.inputContainer}>
                <TextInput
                    placeholder="email"
                    styles={styles.input}>
                </TextInput>

                <TextInput
                    placeholder="Password"
                    style={styles.input}
                    secureTextEntry>
                </TextInput>

                <View styles={buttonContainer}>
                    <TouchableOpacity
                        onPress={handleLogin}
                        style={styles.buttonText}>
                        <Text>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={handleSingUp}
                        style={styles.button}
                    >
                        <Text>Register</Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={styles.cuttonContainer}>
                </View>

            </View>


        </KeyboardAvoidingView>

    )
}
const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        },




    }

)