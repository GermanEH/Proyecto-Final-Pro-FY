import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import theme from "../../theme";
import { Loading } from "../loading/Loading";

export function OnBoard({ navigation }) {
  const payments = useSelector((state) => state.queries.payments);
  return (
    <View style={styles.onBoardContainer}>
      {!payments.length ? (
        <Loading />
      ) : (
        <View style={styles.internalContainer}>
          <Image style={styles.img} source={require("../../assets/logo.png")} />
          <TouchableOpacity
            style={styles.btn}
            title="Pacient"
            onPress={() =>
              navigation.navigate("SignIn", { usertype: "pacient" })
            }
          >
            <Text style={styles.text}>Paciente</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            title="Professional"
            onPress={() =>
              navigation.navigate("SignInPro", {
                usertype: "professional",
              })
            }
          >
            <Text style={styles.text}>Profesional</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  onBoardContainer: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  internalContainer: {
    alignItems: 'center',
    width: '100%'
  },
  img: {
    width: 200,
    height: 200,
  },
  btn: {
    ...theme.button,
  },
  text: {
    color: 'white',
    fontSize: theme.fontSize.terciaryText,
    fontWeight: theme.fontWeights.bold
  },
});
