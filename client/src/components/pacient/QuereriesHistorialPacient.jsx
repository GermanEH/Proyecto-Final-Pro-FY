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
import { ButtonBlue, ButtonQueries } from "../shared/Button";

export function QueriesHistorialPacient({ navigation }) {
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
              title="ProfessionalsList"
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
                paddingBottom: 5,
              }}
            >
              <ButtonQueries
                navigation={navigation}
                backgroundColor={theme.colors.primaryColor}
                text={"Pendiente"}
              />
              <ButtonQueries
                navigation={navigation}
                backgroundColor={"blue"}
                text={"Resuelta"}
              />
              <ButtonQueries
                backgroundColor={"red"}
                text={"Cancelar"}
                navigation={navigation}
              />
              <ButtonQueries
                backgroundColor={"green"}
                text={"Confirmada"}
                navigation={navigation}
              />
            </View>
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
  text: {
    fontWeight: theme.fontWeights.bold,
    padding: 10,
  },
});
