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
import { auth } from "../../../firebase-config.js";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

export function SignIn({ route }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const { height } = useWindowDimensions();

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
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

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((user) => {
      // console.log(user.emailVerified)
      if (user && user.emailVerified === "false") {
        alert("Correo electronico no verificado");
      }
      if (
        user &&
        user.emailVerified === "true" &&
        route.params.usertype === "pacient"
      ) {
        navigation.navigate("HamburguerMenu", { usertype: "pacient" });
      } else if (
        user &&
        user.emailVerified === "true" &&
        route.params.usertype === "professional"
      ) {
        navigation.navigate("HamburguerMenu", { usertype: "professional" });
      }
    });
    return unsuscribe;
  }, [auth]);

  const HandleSignInWhitGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
        alert(result.user.displayName);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, { height: height * 0.3 }]}
          resizeMode="contain"
        />

        <View styles={styles.container}>
          <TextInput
            onChangeText={(text) => setEmail(text)}
            placeholder="correo electrónico"
            styles={styles.input}
          ></TextInput>

          <TextInput
            onChangeText={(text) => setPassword(text)}
            placeholder="contraseña"
            style={styles.input}
            secureTextEntry
          ></TextInput>

          <View styles={styles.container}>
            <CustomButtom text="Ingresar" onPress={handleSignIn} />

            {/* <TouchableOpacity
                            onPress={handleSignIn}
                            style={styles.btn}>
                            <Text style={styles.textBtn}>Iniciar Sesión</Text>
                        </TouchableOpacity> */}

            <TouchableOpacity
              style={styles.btnGoogle}
              onPress={HandleSignInWhitGoogle}
            >
              <Text>Inicia sesión con Google</Text>
            </TouchableOpacity>

            {/* <TouchableOpacity
                            onPress={handleSignUp}
                            style={styles.button}
                        > */}
            {/* <Text style={styles.text}>Registrate</Text>
                        </TouchableOpacity> */}
          </View>
          <View>
            <Text>¿No tienes una cuenta?</Text>
          </View>
          <View style={styles.container}>
            <CustomButtom
              text="Registrarse"
              onPress={() => navigation.navigate("FormPacient")}
            />
          </View>
        </View>
      </View>
    </ScrollView>
    // <KeyboardAvoidingView
    //     styles={styles.container}
    //     behavior="padding">
    // </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: "70%",
    maxWidth: 300,
    maxHeight: 200,
  },
  input: {},
});
