import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity, ScrollView, useWindowDimensions,
    KeyboardAvoidingView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native';
import Logo from '../../assets/logo.png';
import CustomButtom from '../CustomButton/CustomButton'
// import { authF } from "../../../firebase-config.js"
// import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import CustomInput from '../CustomInput/CustomInput';
import {useForm, Controller } from 'react-hook-form'
import "expo-dev-client"
import { loggedUser } from '../../slices/pacients';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin'
import auth from '@react-native-firebase/auth'

// import {loggedUser} from '../../slices/pacients'

// const provider = new GoogleAuthProvider();

export function SignInPro({ route }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState()

    const [initializing, setInitializing] = useState(true)
    const [userLogged, setUserLogged] = useState(null)
    const navigation = useNavigation()

    const {height} = useWindowDimensions();
    const {control, handleSubmit} = useForm()

    const dispatch = useDispatch();
    const loggedU = useSelector((state) => state.pacients.logged)

    const handleSignIn = () => {
        auth().signInWithEmailAndPassword(email, password)
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

    // // useEffect(() => {
    // //     getCurrentUser = async () => {
    // //       const currentUser = await GoogleSignin.getCurrentUser();
    // //       setUser({ currentUser })
    // //     };
    // //   }, []);

    GoogleSignin.configure({
        webClientId:'882289933965-m2vb8le0tsfhbib51bq33tmu02otvscr.apps.googleusercontent.com',
    })

    const onAuthStateChanged = (userL) =>{
        setUserLogged(userL);
        if(userL){
            console.log(userL)
            const loggedUs = {displayName: userL["displayName"], email: userL["email"], emailVerified: userL["emailVerified"]}
            console.log(loggedU)
            dispatch(loggedUser(loggedUs))
            console.log(loggedU)}
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    // return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null;


    const onGoogleButtonPress = async () =>  {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
    }

    // if(!user) {
    //     return (

    //     )
    // }

    // const googleLogin = async () => {
    //     try {
    //         const result = await Expo.Google.logInAsync({
    //         androidClientId: "71db8ccc71419fd1d281c2543bb96afb21189d94",
    //         //iosClientId: YOUR_CLIENT_ID_HERE,  <-- if you use iOS
    //         scopes: ["profile", "email"]
  
    //     })
    //     if (result.type === "success") {
    //         const credential = firebase.auth.GoogleAuthProvider.credential(result.idToken, result.accessToken);
    //         firebase.auth().signInAndRetrieveDataWithCredential(credential).then(function(result){
    //         console.log(result);
    //         });
    //         navigation.navigate('HomePacient');
    // } else {
    //         console.log("cancelled")
    // }
    // } catch (e) {
    //         console.log("error", e)
    //     }
    // }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
            {(!userLogged) ?
            <View>
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

                {/* <View style={styles.container}>
                    <GoogleSigninButton
                    style={{width:300, height:48, marginTop:300}}
                    onPress={onGoogleButtonPress}/>
                </View> */}

                    {/* <TouchableOpacity
                        onPress={handleSignIn}
                        style={styles.btn}>
                        <Text style={styles.textBtn}>Iniciar Sesión</Text>
                    </TouchableOpacity> */}

                </View>
                    <GoogleSigninButton
                    text="Ingresar con Google" 
                    onPress={onGoogleButtonPress} /> 

                    {/* <TouchableOpacity
                        onPress={handleSignUp}
                        style={styles.button}
                    > */}
                        {/* <Text style={styles.text}>Registrate</Text>
                    </TouchableOpacity> */}
                
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
            :
            navigation.navigate("HamburguerMenu", { usertype: "professional" })
            }
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