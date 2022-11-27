import React, { useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  useWindowDimensions,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { postProfessional } from "../../slices/professionalsActions";
import { useForm, Controller } from "react-hook-form";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import CustomInput from "../CustomInput/CustomInput";
import CustomButtom from "../CustomButton/CustomButton";
import Logo from "../../assets/logo.png";
import { getSpecialties } from "../../slices/professionalsActions";
import { SelectList } from "react-native-dropdown-select-list";
import { auth } from "../../../firebase-config.js";
import { LoadingImage } from "../professional/LoadingImage";
import theme from "../../theme";
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export function SignUpProfessional({ navigation }) {
  const {
    setValue,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      /* passswordRepeat:'', */
      dni: "",
      professionalId: "",
      specialities: "",
      country: "",
      state: "",
      city: "",
      zip: "",
      professionalAdress: "",
      schedule: "",
      day: "",
      modality: "",
    },
  });
  const dias = [
    "Lunes a Viernes",
    "Martes a Sabado",
    "Miercoles a lunes",
    "Jueves a Martes",
    "Viernes a jueves",
  ];
  const modalidad = ["presential", "remote"];
  const turnos = ["8:00 a 18:00", "10:00 a 20:00", "12:00 a 22:00"];
  async function onHandleSubmit(data) {
    console.log(data);
    try {
      const selectedSpecialty = specialties.filter(
        (i) => i.name === data.specialities
      );
      data.specialities = selectedSpecialty[0]._id;
      console.log(selectedSpecialty[0]._id);

      dispatch(postProfessional(data));
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
          navigation.navigate("SignInPro", { usertype: "professional" });
        });
      alert(
        "El Usuario Professional ha sido registrado correctamente, Por favor verifique su correo electronico (checkea spam)"
      );
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      alert(
        "La creacion de User Professional ha fallado, Por favor verifique que todo este correcto."
      );
      alert(error);
    }
  }
  const [selected, setSelected] = React.useState("");
  /* const navigation = useNavigation(); */
  const speciality = useSelector(
    (state) => state.professionals.specialtiesNames
  );
  const specialties = useSelector((state) => state.professionals.specialties);

  const onSignUpPress = () => {
    navigation.navigate("SignInPro");
  };
  const onSignInPressed = () => {
    // validate user
    navigation.navigate("Home");
  };

  const pwd = watch("password"); // desde aca se accede para ver las coincidencias de las password !

  const { height } = useWindowDimensions();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSpecialties());
  }, []);
  const onSubmit = (data) => {
    /*   const selectedSpecialty = specialties.filter (i =>i.name=== data.speciality)
    data.speciality = selectedSpecialty._id */ ///esto no funciona o no entendí
    console.log("entramos");
    console.log(data);
    dispatch(postProfessional(data));
    navigation.navigate("SignInPro");
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ alignItems: "center" }}>
          <Image
            source={Logo}
            style={[styles.logo, { height: height * 0.2 }]}
            resizeMode="contain"
          />
        </View>
        <View>
          <View style={styles.root}>
            <Text style={styles.text}>Nombre</Text>
            <CustomInput
              name="first_name"
              /*  placeholder="Nombre" */
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
            <Text style={styles.text}>Pais</Text>
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
            <Text style={styles.text}>Codigo Postal</Text>
            <CustomInput
              name="zip"
              control={control}
              rules={{ required: "Codigo Postal es requerido" }}
            />
            <Text style={styles.text}>Matricula del profesiona</Text>
            <CustomInput
              name="professionalId"
              control={control}
              rules={{ required: "Matricula del profesional es requerida" }}
            />
            <Text style={styles.text}>D.N.I</Text>

            <CustomInput
              name="dni"
              control={control}
              rules={{ required: "DNI es requerido" }}
            />
            <Text style={styles.text}>Direccion del profesional</Text>
            <CustomInput
              name="professionalAdress"
              control={control}
              rules={{ required: "Direccion del profesional es requerida" }}
            />
            <Text style={styles.text}>E-mail</Text>
            <CustomInput
              name="email"
              control={control}
              rules={{
                pattern: { value: EMAIL_REGEX, message: "Email is invalid" },
              }}
            />
            <View style={{ padding: 30, width: "90%" }}>
              <SelectList
                data={dias}
                placeholder="Dias"
                setSelected={(value) => setValue("day", value)}
              />
              <View style={{ paddingTop: 10 }}>
                <SelectList
                  data={modalidad}
                  placeholder="Modalidad"
                  setSelected={(value) => setValue("modality", value)}
                />
              </View>
              <View style={{ paddingVertical: 10 }}>
                <SelectList
                  data={turnos}
                  placeholder="Turnos"
                  setSelected={(value) => setValue("schedule", value)}
                />
              </View>
              <SelectList
                data={specialties.map((m) => m.name)}
                placeholder="Especialidad"
                setSelected={(value) => setValue("specialities", value)}
              />
            </View>
            <View style={{ width: "100%", height: 150, paddingVertical: 30 }}>
              <LoadingImage setValue={setValue} image={"Imagen"} />
            </View>
            <View style={{ alignItems: "center", padding: 30, width: "100%" }}>
              <View style={{ width: "100%", paddingBottom: 30 }}>
                <TouchableOpacity
                  style={styles.buttonInner}
                  color
                  title="Crear usuario"
                  onPress={handleSubmit(onHandleSubmit)}
                >
                  <Text style={{ color: "white", textAlign: "center" }}>
                    Crear Usuario
                  </Text>
                </TouchableOpacity>
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
                  onPress={onSignUpPress}
                  type="TERTIARY"
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: "flex-start",
    paddingHorizontal: 10,
  },
  logo: {
    width: "70%",
    maxWidth: 300,
    maxHeight: 200,
    alignItems: "center",
  },
  button: {
    marginTop: 10,
    color: "white",
    height: 40,
    backgroundColor: "orange",
    borderRadius: 4,
  },
  buttonInner: {
    paddingVertical: 15,

    backgroundColor: theme.colors.primaryColor,
    borderRadius: 10,
  },
  text: {
    color: "#989898",
    fontWeight: "700",
    paddingTop: 8,
  },
  link: {
    color: "#FDB075",
  },
});
