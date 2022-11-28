import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  useWindowDimensions,
  KeyboardAvoidingView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Logo from "../../assets/logo.png";
import CustomButtom from "../CustomButton/CustomButton";
// import { auth } from "../../../firebase-config.js";
// import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {useSelector, useDispatch} from 'react-redux'
import { loggedUser } from '../../slices/pacients';
import "expo-dev-client"
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin'
import auth from '@react-native-firebase/auth'
import theme from "../../theme";

// const provider = new GoogleAuthProvider();

export function SignIn({ route }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [initializing, setInitializing] = useState(true)
  const [userLogged, setUserLogged] = useState(null)
  const navigation = useNavigation();

  const loggedU = useSelector((state) => state.pacients.logged)

  const { height } = useWindowDimensions();

  const dispatch = useDispatch()

  const handleSignIn = () => {
    signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Logged in whit", user.email);
        // ...
        if (user && user.emailVerified === false) {
          alert("Correo electronico no verificado");
        }
        if (
          user &&
          user.emailVerified === true &&
          route.params.usertype === "pacient"
        ) {
          navigation.navigate("HamburguerMenu", { usertype: "pacient" });
        } else if (
          user &&
          user.emailVerified === true &&
          route.params.usertype === "professional"
        ) {
          navigation.navigate("HamburguerMenu", { usertype: "professional" });
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

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
  
  // useEffect(()=>{
  //     const unsuscribe = auth.onAuthStateChanged( user => {
  //         if(user && user.emailVerified === 'false') {alert('Correo electronico no verificado')}
  //         if(user && user.emailVerified === 'true' && route.params.usertype === 'pacient') {navigation.navigate("HamburguerMenu", { usertype: "pacient" })
  //     } else if (user && user.emailVerified === 'true' && route.params.usertype === 'professional') {navigation.navigate("HamburguerMenu", { usertype: "professional" })
  //     }
  //     })
  //     return unsuscribe
  // },[auth])

  // const HandleSignInWhitGoogle = () => {
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       // This gives you a Google Access Token. You can use it to access the Google API.
  //       const credential = GoogleAuthProvider.credentialFromResult(result);
  //       const token = credential.accessToken;
  //       // The signed-in user info.
  //       const user = result.user;
  //       // ...
  //       alert(result.user.displayName);
  //     })
  //     .catch((error) => {
  //       // Handle Errors here.
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // The email of the user's account used.
  //       const email = error.customData.email;
  //       // The AuthCredential type that was used.
  //       const credential = GoogleAuthProvider.credentialFromError(error);
  //       // ...
  //     });
  // };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    {(!userLogged) ?
    <View style={styles.signInContainer}>
      <Image source={Logo} style={styles.logo} />

      <View style={styles.inputsButtomsContainer}>

        <TextInput
          onChangeText={(text) => setEmail(text)}
          placeholder="Correo electrónico"
          style={styles.input}
        ></TextInput>

        <TextInput
          onChangeText={(text) => setPassword(text)}
          placeholder="Contraseña"
          style={styles.input}
          secureTextEntry
        ></TextInput>

        <View style={{ width: "85%", paddingTop: 10 }}>
          <CustomButtom text="Ingresar" onPress={handleSignIn} />
        </View>

        {/*  <View style={styles.btnGoogle}>
          <Text style={{ fontSize: theme.fontSize.terciaryText, fontWeight: theme.fontWeights.bold, color: theme.colors.textColor }} >Inicia sesión con Google</Text>
          <TouchableOpacity style={{ padding: 5 }} onPress={HandleSignInWhitGoogle}>
            <View style={styles.iconGoogle} >
              <Image style={{width: 30, height: 30}} source={require("../../assets/googleLogo.png")} />
            </View>
          </TouchableOpacity>
        </View> */}
      </View>
        <GoogleSigninButton
              text="Ingresar con Google" 
              onPress={onGoogleButtonPress}
              style={{width:'87%', marginTop:20}} /> 
        <View style={{ paddingTop: 150, alignItems: 'center'}}>
            <Text style={{ fontSize: theme.fontSize.terciaryText, fontWeight: theme.fontWeights.bold, color: theme.colors.textColor }}>
              ¿No tienes una cuenta?
        </Text>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(
                route.params.usertype === "pacient" ? "SignUp" : "SignInPro"
              )
            }
          >
            <Text
              style={{
                fontSize: theme.fontSize.secondaryText,
                fontWeight: theme.fontWeights.bold,
                color: theme.colors.primaryColor,
              }}
            >
              Registrate
            </Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
      :
      navigation.navigate("HamburguerMenu", { usertype: "pacient" })
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  signInContainer: {
    // flex: 1,
    alignItems: 'center',
    paddingTop: 40,
    backgroundColor: "white",
  },
  logo: {
    height: 150,
    width: 150,
  },
  inputsButtomsContainer: {
    alignItems: "center",
    width: "100%",
  },
  input: {
    ...theme.input,
  },
  btn: {
    ...theme.button,
  },
});
