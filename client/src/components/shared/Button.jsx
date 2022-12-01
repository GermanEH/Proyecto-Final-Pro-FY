import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import theme from "../../theme";

export function ButtonDating(props) {
  return (
    <TouchableOpacity
      style={{ ...styles.btn, backgroundColor: `${props.backgroundColor}` }}
    >
      <Text style={{ color: `${props.color}` }}>{props.text}</Text>
    </TouchableOpacity>
  );
}

export function ButtonGenerateQuery(props) {
  return (
    <TouchableOpacity
      onPress={() =>
        props.navigation.navigate("ProfessionalsList", {
          name: "ProfessionalsList",
        })
      }
      style={{ ...styles.btn, backgroundColor: `${props.backgroundColor}` }}
    >
      <Text style={{ color: `${props.color}` }}>{props.text}</Text>
    </TouchableOpacity>
  );
}

export function ButtonQueries(props) {
  return (
    // <TouchableOpacity
    //   onPress={() =>
    //     props.navigation.navigate("DatingStatuses", {
    //       name: "DatingStatuses",
    //     })
    //   }
    // >
    <View style={{ paddingVertical: 5, paddingHorizontal: 20 }}>
      <View
        style={{
          ...styles.btnQueries,
          backgroundColor: `${props.backgroundColor}`,
        }}
      >
        <Text style={styles.textQueries}>{props.text}</Text>
      </View>
    </View>
    // </TouchableOpacity>
  );
}
export function ButtonQueriesDetail(props) {
  return (
    <TouchableOpacity
      onPress={() =>
        props.navigation.navigate("QueriesHistorialPacient", {
          name: "QueriesHistorialPacient",
        })
      }
    >
      <View style={{ paddingVertical: 5, paddingHorizontal: 20 }}>
        <View
          style={{
            ...styles.btnQueries,
            backgroundColor: `${props.backgroundColor}`,
          }}
        >
          <Text style={styles.textQueries}>{props.text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export function ButtonHomePacientQueries(props) {
  return (
    <TouchableOpacity
      title="QueriesHistorialPacient"
      onPress={() =>
        props.navigation.navigate("QueriesHistorialPacient", {
          name: "QueriesHistorialPacien",
        })
      }
      style={styles.btnCenter}
    >
      <Text style={{ textAlign: "center", color: "white" }}>Consultas</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 15,
    borderRadius: theme.borderRadius.borderRadiusBotton,
    alignSelf: "flex-end",
    padding: 20,
    marginBottom: 20,
    marginRight: 20,
  },

  btnQueries: {
    backgroundColor: "blue",
    width: 200,
    height: 50,
    justifyContent: "center",
    borderRadius: theme.borderRadius.borderRadiusBotton,
  },

  textQueries: {
    color: "white",
    textAlign: "center",
  },
  btnCenter: {
    backgroundColor: theme.colors.primaryColor,
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: theme.borderRadius.borderRadiusBotton,
  },
});
