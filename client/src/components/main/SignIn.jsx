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
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import Logo from "../../assets/logo.png";
import CustomButtom from "../CustomButton/CustomButton";
/* import { auth1 } from "../../../firebase-config.js"; */
import CustomInput from "../CustomInput/CustomInput";
import { useSelector, useDispatch } from "react-redux";
import { loggedUser } from "../../slices/pacients";
import "expo-dev-client";
import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import theme from "../../theme";
import { useForm, Controller } from "react-hook-form";
import { CustomInputLoging } from "../CustomInput/CustomInputLoging";

// const provider = new GoogleAuthProvider();

export function SignIn({ route, navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {control, handleSubmit,formState: {errors}} = useForm({ email: "",
  password: "",})
  const [initializing, setInitializing] = useState(true)
  const [userLogged, setUserLogged] = useState(null)
  const auth1 = getAuth()
  const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const loggedU = useSelector((state) => state.pacients.logged)

  const { height } = useWindowDimensions();

  const dispatch = useDispatch();

  const handleSignIn = (data) => {
    signInWithEmailAndPassword(auth1, data.email, data.password)
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
          route.params.usertype === "Pacient"
        ) {
          navigation.navigate("HamburguerMenu", { usertype: "Pacient" });
        } else if (
          user &&
          user.emailVerified === true &&
          route.params.usertype === "Professional"
        ) {
          navigation.navigate("HamburguerMenu", { usertype: "Professional" });
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  GoogleSignin.configure({
    webClientId:
      "882289933965-m2vb8le0tsfhbib51bq33tmu02otvscr.apps.googleusercontent.com",
  });

  const onAuthStateChanged = (userL) => {
    setUserLogged(userL);
    if (userL) {
      const loggedUs = {
        displayName: userL["displayName"],
        email: userL["email"],
        emailVerified: userL["emailVerified"],
      };
      dispatch(loggedUser(loggedUs));
    }
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    // return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  const onGoogleButtonPress = async () => {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    auth().signInWithCredential(googleCredential);

    route.params.usertype === "Pacient"
      ? navigation.navigate("HamburguerMenu", { usertype: "Pacient" })
      : navigation.navigate("HamburguerMenu", { usertype: "Professional" });
  };

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

      {/* {(!userLogged) ? */}
      <View style={styles.signInContainer}>
        <Image source={Logo} style={styles.logo} />

        <View style={{ width: "100%", paddingLeft: 40 }}>
          <CustomInputLoging
            onChangeText={(text) => setEmail(text)}

            placeholder="Correo Electronico"
            name="email"
            control={control}
            rules={{

              required: "El correo electronico es requerido",
              pattern: { value: EMAIL_REGEX, message: "Email es invalido" },
            }}
          />
          <CustomInputLoging
            style={styles.inputsButtomsContainer}
            onChangeText={(text) => setPassword(text)}
            placeholder="Contraseña"
            name="password"
            control={control}
            secureTextEntry
            rules={{
              required: "Contraseña requerida",
              minLength: {
                value: 8,
                message: "La contraseña deberia tener 8 letras como minimo",
              },
            }}
          />

        <View style={{ width: "85%", paddingTop: 10 }}>
          <CustomButtom text="Ingresar" onPress={handleSubmit(handleSignIn)} />
          </View>
          {/* <TouchableOpacity
            style={styles.btn}
            title="Ingresar"
            onPress={}
          >
            <Text style={styles.text}>Ingresar</Text>
          </TouchableOpacity> */}
        <GoogleSigninButton
          text="Ingresar con Google"
          onPress={onGoogleButtonPress}
          style={{ width: "87%", marginTop: 20 }}
        />
        <View style={{ paddingTop: 150, alignItems: "center" }}>
          <Text
            style={{
              fontSize: theme.fontSize.terciaryText,
              fontWeight: theme.fontWeights.bold,
              color: theme.colors.textColor,
            }}
          />
        </View>
        <View style={styles.inputsButtomsContainer}>
            {/* <View
              style={{ width: "100%", paddingTop: 10, alignItems: "center" }}
            >
              <TouchableOpacity
                onPress={handleSubmit(handleSignIn)}
                style={styles.btn}
              >
                <Text style={{ color: "white" }}>Ingresar</Text>
              </TouchableOpacity>
            </View> */}
            <View style={{alignItems: "center" }}>
              <Text
                style={{
                  fontSize: theme.fontSize.terciaryText,
                  fontWeight: theme.fontWeights.bold,
                  color: theme.colors.textColor,
                }}
              >
                ¿No tienes una cuenta?
              </Text>
              <View style={styles.container}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate(
                      route.params.usertype === "Pacient"
                        ? "SignUpPacient"
                        : "SignUpProfessional"
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
      </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  signInContainer: {
    alignItems: "center",
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
  container: {
    paddingBottom: 115,
  },
});
