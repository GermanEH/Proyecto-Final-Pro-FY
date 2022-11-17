import { StyleSheet, View, Text, TextInput, } from "react-native";
import theme from "../../../theme";

export const Name = () => (
  <View style={styles.container}>
    <Text>
      Nombre
    </Text>
    <TextInput style={styles.input} placeholder='Nombre'>
    </TextInput>
  </View>
)

export const Location = () => (
  <View style={styles.container}>
    <Text>
      Dirección
    </Text>
    <TextInput style={styles.input} placeholder='Dirección'>
    </TextInput>
  </View>
)

export const EmailPhone = () => (
  <View style={styles.container}>
    <Text>
      E-mail
    </Text>
    <TextInput style={styles.input} placeholder='E-mail'>
    </TextInput>
    <Text>
      Celular
    </Text>
    <TextInput style={styles.input} placeholder='Celular'>
    </TextInput>
  </View>
)

export const Password = () => (
  <View style={styles.container}>
    <Text>
      Contraseña
    </Text>
    <TextInput style={styles.input} placeholder='E-Contraseña'>
    </TextInput>
    <Text>
    Confirmar contraseña
    </Text>
    <TextInput style={styles.input} placeholder='Confirmar contraseña'>
    </TextInput>
  </View>
)
export const Image = () => (
  <View style={styles.container}>
    <Text>
      Imagen
    </Text>
    <TextInput style={styles.input}>
    </TextInput>
  </View>
)

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  input: {
    height: 60,
    width: 390,
    backgroundColor: '#ededed',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    fontSize: theme.fontSize.secondaryText
  },
});