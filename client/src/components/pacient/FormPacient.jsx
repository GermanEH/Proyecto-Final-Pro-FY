import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  Image,
  useWindowDimensions,
  SafeAreaView,
 ScrollView,
} from "react-native";
import { useDispatch } from "react-redux";
import { postPacient } from "../../slices/pacientsActions";
import { useForm } from "react-hook-form";
/* import Constants from "expo-constants"; */
import CustomInput from "../CustomInput/CustomInput";
import CustomButtom from "../CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";
import Logo from "../../assets/logo.png";
import { LoadingImage } from "../professional/LoadingImage";

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export function FormPacient() {
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors },
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
      image: "",
    },
  });
  const navigation = useNavigation();
  const onSignUpPress = () => {
    navigation.navigate("ConfirmEmailScreen");
  };
  /*  const onSignInPressed = () => {
    // validate user
    navigation.navigate("Home");
  }; */
  const pwd = watch("password"); // desde aca se accede para ver las coincidencias de las password !
  const onSubmit = (data) => {
    console.log("entramos");
    console.log(data);
    dispatch(postPacient(data));
    navigation.navigate("ConfirmEmailScreen");
  };

  const onChange = (arg) => {
    return {
      value: arg.nativeEvent.text,
    };
  };
  const { height } = useWindowDimensions();
  const dispatch = useDispatch();

  return (

    <SafeAreaView>
      <ScrollView>
    <View style={styles.container}>
      <View style={styles.root}>
        <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} />
        <CustomInput
          name="first_name"
          placeholder="Nombre"
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
        <CustomInput
          name="last_name"
          placeholder="Apellido"
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
        <CustomInput
          name="password"
          placeholder="Contraseña"
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
        {/*  <CustomInput
      name="passwordRepeat"
      placeholder="Repetir Contraseña"
      control={control}
      secureTextEntry
    rules={{
      validate: value =>
      value === pwd   || 'Las contraseñas no son iguales'
    }}
    /> */}

        <CustomInput
          name="country"
          placeholder="Pais"
          control={control}
          rules={{ required: "Pais es requerido" }}
        />
        <CustomInput
          name="state"
          placeholder="Provincia"
          control={control}
          rules={{ required: "Provincia es requerida" }}
        />
        <CustomInput
          name="city"
          placeholder="Ciudad"
          control={control}
          rules={{ required: "Ciudad es requerida" }}
        />
        <CustomInput
          name="address"
          placeholder="Direccion"
          control={control}
          rules={{ required: "Direccion es requerida" }}
        />
        <CustomInput
          name="postcode"
          placeholder="P.C"
          control={control}
          rules={{ required: "Codigo Postal es requerido" }}
        />
        <CustomInput
          name="DNI"
          placeholder="D.N.I"
          control={control}
          rules={{ required: "DNI es requerido" }}
        />
        <CustomInput
          name="email"
          placeholder="E-mail"
          control={control}
          rules={{
            pattern: { value: EMAIL_REGEX, message: "Email es invalido" },
          }}
        />
        <View style={{ width: "100%", height: 200, paddingTop: 60 }}>
          <LoadingImage setValue={setValue} />
        </View>

        <CustomButtom text="Crear Usuario" onPress={handleSubmit(onSubmit)} />
      </View>
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

      </ScrollView>
    </SafeAreaView>

    </View>

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
  button: {
    marginTop: 40,
    color: "white",
    height: 40,
    backgroundColor: "orange",
    borderRadius: 4,
  },
  text: {
    color: "gray",
    marginVertical: 10,
  },
  link: {
    color: "#FDB075",
  },
});
