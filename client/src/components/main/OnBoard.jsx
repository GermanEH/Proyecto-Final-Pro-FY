import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import theme from "../../theme";
import { Loading } from "../loading/Loading";

export function OnBoard({ navigation }) {
  const payments = useSelector((state) => state.queries.payments);
  return (
    <View style={styles.container}>
      {!payments.length ? (
        <Loading />
      ) : (
        <View style={styles.container}>
          <Image style={styles.img} source={require("../../assets/logo.png")} />
          <TouchableOpacity
            style={styles.btn}
            title="Pacient"
            onPress={() =>
              navigation.navigate("GenerateQuery", { usertype: "GenerateQuery" })
            }
          >
            <Text style={styles.text}>Pacient</Text>
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
            <Text style={styles.text}>Professional</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 300,
    height: 300,
  },
  btn: {
    paddingVertical: 20,
    paddingHorizontal: 50,
    backgroundColor: theme.colors.primaryColor,
    margin: 20,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },
  text: {
    color: "white",
    fontFamily: theme.fonts.main,
  },
});
