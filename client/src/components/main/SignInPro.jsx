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
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import Logo from "../../assets/logo.png";
import CustomButtom from "../CustomButton/CustomButton";
import { auth } from "../../../firebase-config.js";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useForm, Controller } from "react-hook-form";
import theme from "../../theme";

const provider = new GoogleAuthProvider();

export function SignInPro({ route }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const { height } = useWindowDimensions();
  const { control, handleSubmit } = useForm();
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
      console.log("user", user);
      console.log(user.emailVerified);
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

          <View styles={styles.container}>
            <CustomButtom
              text="Ingresar"
              onPress={handleSubmit(handleSignIn)}
            />

            {/* <TouchableOpacity
                            onPress={handleSignIn}
                            style={styles.btn}>
                            <Text style={styles.textBtn}>Iniciar Sesión</Text>
                        </TouchableOpacity> */}

            <CustomButtom
              text="Ingresar con Google"
              onPress={HandleSignInWhitGoogle}
            />
          </View>
          <View style={{ alignItems: "center", paddingTop: 180 }}>
            <Text
              style={{
                fontSize: theme.fontSize.terciaryText,
                fontWeight: theme.fontWeights.bold,
                color: theme.colors.textColor,
              }}
            >
              ¿No tienes una cuenta?
            </Text>
            <View>
              <TouchableOpacity
                style={{ backgroundColor: "no color" }}
                onPress={() =>
                  navigation.navigate(
                    route.params.usertype === "pacient"
                      ? "SignUp"
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 30,
  },
  logo: {
    width: "70%",
    maxWidth: 300,
    maxHeight: 200,
  },
  container: {},
  input: {
    backgroundColor: "#DEDEDE",
    borderRadius: 10,
    paddingVertical: 15,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  text: {
    color: "red",
    marginVertical: 10,
    textAlign: "center",
  },
  link: {
    color: "#303030",
  },
  inputsButtomsContainer: {
    width: "100%",
  },
});
