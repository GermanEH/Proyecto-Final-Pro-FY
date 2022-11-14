import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import theme from "../../theme";
import { SelectList } from "react-native-dropdown-select-list";
import { ButtonBlue, ButtonQueries } from "../shared/Button";

export function QueriesHistorialPacient({ navigation }) {
  return (
    <ScrollView>
      <View style={{ alignItems: "center" }}>
        <View
          style={{
            width: 200,
            paddingBottom: 20,
            paddingTop: 30,
          }}
        >
          <TouchableOpacity
            title="GenerateQuery"
            onPress={() =>
              navigation.navigate("GenerateQuery", {
                name: "GenerateQuery",
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
              GENERAR CONSULTA
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.containerBtnQueries}></View>
      <View>
        <Text style={{ textAlign: "center", fontSize: 18, fontWeight: "bold" }}>
          Historial de Consultas
        </Text>
      </View>
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
  textInput: {
    backgroundColor: "#A8A7A3",
    borderRadius: 10,
  },
});
