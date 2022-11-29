import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
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
import { useForm } from "react-hook-form";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
  getAuth
} from "firebase/auth";
import Logo from "../../assets/logo.png";
import CustomButtom from "../CustomButton/CustomButton";
// import { auth } from "../../../firebase-config.js";
import { postPacient } from "../../slices/pacientsActions";
import CustomInput from "../CustomInput/CustomInput";
import { LoadingImage } from "../professional/LoadingImage";

export function SignUp({ navigation }) {
  const { height } = useWindowDimensions();

  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    watch,
    control,
  } = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      /*   passswordRepeat:'', */
      DNI: "",
      country: "",
      state: "",
      postcode: "",
      address: "",
    },
  });

  const dispatch = useDispatch();
  const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const auth = getAuth();
  async function onHandleSubmit(data) {
    //console.log(data)
    try {
      dispatch(postPacient(data));
      await createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          console.log("Account created!");
          // Signed in
          const user = userCredential.user;
          // ...
          console.log("Register whit", user.email);
          if (user && user.emailVerified === false) {
            sendEmailVerification(user);
          }
        })
        .then(() => {
          updateProfile(auth.currentUser, {
            displayName: `${data.first_name} ${data.last_name}`,
          });
        })
        .then(() => {
          navigation.navigate("SignIn", { usertype: "pacient" });
        });
      alert(
        "User Created Successfully. Email verification sent to user (check spam)"
      );
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      alert("User created failed");
      alert(error);
    }
  }

  const onSignUpPress = () => {
    navigation.navigate("SignIn", {usertype: "pacient"});
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, backgroundColor: "white" }}
    >
      <View style={styles.container}>
        <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} />
        <View style={styles.root}>
          <Text style={styles.text}>Nombre</Text>
          <CustomInput
            name="first_name"
            control={control}
            rules={{
              required: "Nombre es requerido",
              minLength: {
                value: 4,
                message: "El nombre deberia tener 4 letras como minimo",
              },
              maxLength: {
                value: 20,
                message: "El nombre debe tener como maximo 20 letras",
              },
            }}
          />
          <Text style={styles.text}>Apellido</Text>
          <CustomInput
            name="last_name"
            control={control}
            rules={{
              required: "Apellido es requerido",
              minLength: {
                value: 4,
                message: "El Apellido deberia tener 4 letras como minimo",
              },
              maxLength: {
                value: 20,
                message: "El apellido debe tener como maximo 20 letras",
              },
            }}
          />
          <Text style={styles.text}>Contraseña</Text>
          <CustomInput
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
          <Text style={styles.text}>País</Text>
          <CustomInput
            name="country"
            control={control}
            rules={{ required: "Pais es requerido" }}
          />
          <Text style={styles.text}>Provincia</Text>
          <CustomInput
            name="state"
            control={control}
            rules={{ required: "Provincia es requerida" }}
          />
          <Text style={styles.text}>Ciudad</Text>
          <CustomInput
            name="city"
            control={control}
            rules={{ required: "Ciudad es requerida" }}
          />
          <Text style={styles.text}>Direccion</Text>
          <CustomInput
            name="address"
            control={control}
            rules={{ required: "Direccion es requerida" }}
            style={styles.button}
            hoverStyle={[styles.button_hover, styles.button]}
            activeStyle={[
              styles.button_active,
              styles.button_hover,
              styles.button,
            ]}
          />
          <Text style={styles.text}>Codigo Postal</Text>
          <CustomInput
            name="postcode"
            control={control}
            rules={{ required: "Codigo Postal es requerido" }}
          />
          <Text style={styles.text}>D.N.I</Text>
          <CustomInput
            name="DNI"
            control={control}
            rules={{ required: "DNI es requerido" }}
          />
          <Text style={styles.text}>Correo electronico</Text>
          <CustomInput
            name="email"
            control={control}
            rules={{
              pattern: { value: EMAIL_REGEX, message: "Email es invalido" },
            }}
          />
          <View style={{ width: "100%", height: 220, paddingVertical: 50 }}>
            <LoadingImage setValue={setValue} image={"Imagen Opcional"} />
          </View>

          <CustomButtom
            text="Crear Usuario"
            onPress={handleSubmit(onHandleSubmit)}
          />
        </View>
        <View style={{ alignItems: "center", margin: 40 }}>
          <Text style={styles.text}>
            Al registrarte confirmas y aceptas nuestros{" "}
            <Text style={styles.link} /* onPress={onTermsOfUsePressed} */>
              Terminos de uso
            </Text>{" "}
            y{" "}
            <Text style={styles.link} /* onPress={onPrivacyPressed} */>
              Politica de privacidad
            </Text>
          </Text>
          <View>
            <CustomButtom
              text="Ya tienes una cuenta? Ingresa Aquí"
              color="orange"
              onPress={onSignUpPress}
              type="TERTIARY"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    color: "#b5b5b5",
  },
  root: {
    padding: 20,
  },
  logo: {
    width: "70%",
    maxWidth: 300,
    maxHeight: 200,
    alignSelf: "center",
  },
  button: {
    marginTop: 40,
    color: "white",
    height: 40,
    backgroundColor: "orange",
    borderRadius: 4,
  },
  text: {
    color: "#989898",
    fontWeight: "700",
  },
  link: {
    color: "#FDB075",
  },
});
