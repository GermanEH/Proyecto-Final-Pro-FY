import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import theme from "../../theme";

export function QueriesDetail() {
  return (
    <View>
      <ScrollView>
        <View>
          <View style={styles.container}>
            <View style={{ padding: 10 }}>
              <Text>Mi Nombre</Text>
              <Text>Fecha de Creación</Text>
            </View>
            <View style={{ padding: 10 }}>
              <Text>Tipo de Consulta</Text>
              <Text>Profesional</Text>
            </View>

            <View style={{ flexDirection: "row", padding: 10 }}>
              <Text>Estado:</Text>
              <Text style={{ color: "blue", padding: 10 }}>Resuelta</Text>
            </View>
            <View style={{ flexDirection: "row", padding: 10 }}>
              <Text>Estado:</Text>
              <Text style={{ color: "#f0c325", padding: 10 }}>Pendiente</Text>
            </View>

            <View style={styles.containerObservations}>
              <View style={styles.observations}>
                <Text>Observasiones</Text>
                <Text>Observasiones</Text>
                <Text>Observasiones</Text>
                <Text>Observasiones</Text>
                <Text>Observasiones</Text>
                <Text>Observasiones</Text>
                <Text>Observasiones</Text>
                <Text>Observasiones</Text>
                <Text>Observasiones</Text>
                <Text>Observasiones</Text>
                <Text>Observasiones</Text>
                <Text>Observasiones</Text>
                <Text>Observasiones</Text>
                <View
                  style={{
                    flexDirection: "column",
                    paddingTop: 30,
                  }}
                >
                  <TextInput
                    style={styles.input}
                    placeholder="Comentarios..."
                  />
                  <TouchableOpacity style={styles.btnObservation}>
                    <Text
                      style={{
                        color: theme.colors.secondaryText,
                        textAlign: "center",
                        fontSize: 12,
                      }}
                    >
                      Observaciones
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.containerBtn}></View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  containerObservations: {},
  observations: {
    paddingVertical: 50,
    paddingHorizontal: 90,
    marginHorizontal: 20,
    backgroundColor: theme.colors.secondaryText,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    borderRadius: theme.borderRadius.borderRadiusBotton,
    marginVertical: 40,
  },
  containerBtn: {
    width: 300,
    alignSelf: "flex-end",
    paddingHorizontal: 50,
  },
  btn: {
    backgroundColor: theme.colors.secondaryColor,
    paddingVertical: 20,
    borderRadius: theme.borderRadius.borderRadiusBotton,
    alignSelf: "flex-end",
    padding: 20,
    marginBottom: 20,
    marginRight: 20,
  },
  btnObservation: {
    backgroundColor: theme.colors.primaryColor,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: theme.borderRadius.borderRadiusBotton,
  },
  input: {
    marginBottom: 20,
    paddingHorizontal: 35,
    paddingVertical: 10,
  },
});
