import { Text, StyleSheet, View, Image, ScrollView } from "react-native";
import theme from "../../theme";
import { ButtonQueries } from "../shared/Button";

export function ProfessionalDetail() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.imageStyle}
            source={require("../../assets/foto.jpg")}
          />
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              margin: 10,
              fontSize: 8,
            }}
          >
            <Text>Armando Paredes</Text>
            <Text>Medico de weyes</Text>
            <View style={{ flexDirection: "row" }}>
              <Text>Tipo de Consulta:</Text>
              <Text>En casa</Text>
            </View>
            <Text>Numero de contacto:</Text>
            <Text>55555555555</Text>
          </View>
        </View>
        <View style={{ marginTop: 40 }}>
          <ButtonQueries
            text={"Consulta"}
            backgroundColor={theme.colors.primaryColor}
          />
        </View>
        <View style={{ marginTop: 30 }}>
          <Text>Comentarios:</Text>
        </View>
        <ScrollView>
          <View style={styles.containerComments}>
            <Text style={{ textAlign: "center" }}>
              CARRUSEL DE LA CONTRATACION
            </Text>
          </View>
          <View
            style={{
              fontSize: theme.fontSize.primaryText,
              paddingBottom: 10,
              paddingLeft: 10,
            }}
          ></View>
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  imageStyle: {
    height: 210,
    width: 160,
    zIndex: 1,
    marginLeft: 5,
    marginTop: 5,
    borderRadius: 10,
    marginBottom: 10,
  },
  imgContainer: {
    width: "100%",
    backgroundColor: "white",
    flexDirection: "row",
    borderRadius: 10,
  },
  containerComments: {
    width: "100%",
    height: 300,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    borderRadius: 10,
    marginVertical: 40,
    justifyContent: "center",
    paddingBottom: 40,
  },
});
