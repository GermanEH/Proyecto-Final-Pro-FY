import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import theme from "../../theme";
import {
  SelectList,
  MultipleSelectList,
} from "react-native-dropdown-select-list";

export function QueriesHistorialPacientBasic({ navigation }) {
  const [selected, setSelected] = useState("");

  const data = [
    { key: "1", value: "uno" },
    { key: "2", value: "dos" },
    { key: "3", value: "tres" },
    { key: "4", value: "jhdskjfhkd" },
  ];

  return (
    <ScrollView>
      <View style={styles.containerBtnQueries}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          GENERAR CONSULTAS:
        </Text>

        <View style={{ width: "100%", paddingVertical: 30 }}>
          <View>
            <Text style={styles.text}>¿Que tipo de consulta desea?</Text>
            <SelectList
              boxStyles={{ backgroundColor: "#A8A7A3" }}
              setSelected={(val) => setSelected(val)}
              data={data}
              save="value"
              placeholder="Seleccionar Opción"
              inputStyles={{ fontSize: 12 }}
            />
          </View>
          <View style={{ paddingVertical: 15 }}>
            <Text style={styles.text}>Modalidad de consulta:</Text>
            <SelectList
              boxStyles={{ backgroundColor: "#A8A7A3" }}
              setSelected={(val) => setSelected(val)}
              data={data}
              save="value"
              inputStyles={{ fontSize: 12 }}
            />
          </View>
          <View style={{ paddingVertical: 15 }}>
            <Text style={styles.text}>Modo de pago:</Text>
            <MultipleSelectList
              boxStyles={{ backgroundColor: "#A8A7A3" }}
              setSelected={(val) => setSelected(val)}
              data={data}
              save="value"
              onSelect={() => alert(selected)}
              label="Categories"
              inputStyles={{ fontSize: 12 }}
            />
          </View>
          <View style={{ width: 200, paddingBottom: 40 }}>
            <TouchableOpacity
              title="Consultas"
              onPress={() =>
                navigation.navigate("ProfessionalsList", {
                  name: "ProfessionalsList",
                })
              }
              style={styles.btn}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: theme.colors.secondaryText,
                }}
              >
                Elegir Profesional
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          title="Consultas"
          onPress={() =>
            navigation.navigate("ProfessionalList", {
              name: "ProfessionalList",
            })
          }
          style={styles.btn}
        >
          <Text
            style={{ textAlign: "center", color: theme.colors.secondaryText }}
          >
            Historial
          </Text>
        </TouchableOpacity>
        <ScrollView style={styles.containerHistorial}>
          <View>
            <View
              style={{
                paddingTop: 50,
                paddingHorizontal: 20,
                paddingBottom: 5,
              }}
            >
              <View style={styles.queriesYellow}>
                <TouchableOpacity
                  title="QueriesDetail"
                  onPress={() =>
                    navigation.navigate("QueriesDetail", {
                      name: "QueriesDetail",
                    })
                  }
                >
                  <Text style={styles.textQueries}>Pendiente</Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity>
              <View style={{ paddingVertical: 5, paddingHorizontal: 20 }}>
                <View style={styles.queriesBlue}>
                  <Text style={styles.textQueries}>Resuelta</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={{ paddingVertical: 5, paddingHorizontal: 20 }}>
                <View style={styles.queriesBlue}>
                  <Text style={styles.textQueries}>Resuelta</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
  },
  containerBtnQueries: {
    alignItems: "center",
    padding: 40,
  },
  btn: {
    backgroundColor: theme.colors.primaryColor,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: theme.borderRadius.borderRadiusBotton,
  },

  selectContainer: {
    paddingHorizontal: 200,
    flex: 1,
    paddingVertical: 5,
  },
  text: {
    fontSize: 12,
    fontFamily: theme.fonts.form,
    paddingVertical: 10,
  },
  containerHistorial: {
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
    paddingBottom: 40,
  },
  queriesYellow: {
    backgroundColor: theme.colors.primaryColor,
    width: 200,
    height: 50,
    justifyContent: "center",
    borderRadius: 10,
  },
  queriesBlue: {
    backgroundColor: "blue",
    width: 200,
    height: 50,
    justifyContent: "center",
    borderRadius: 10,
  },
  text: {
    fontWeight: theme.fontWeights.bold,
    padding: 10,
  },
  textQueries: {
    color: "white",
    textAlign: "center",
  },
  textBlue: {
    color: "white",
    textAlign: "center",
  },
});
