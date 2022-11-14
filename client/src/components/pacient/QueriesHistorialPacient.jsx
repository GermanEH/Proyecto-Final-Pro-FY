import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import theme from "../../theme";
import {
  SelectList,
} from "react-native-dropdown-select-list";
import { ButtonBlue, ButtonQueries } from "../shared/Button";
import { ListaConsultas } from "./ListaConsultas";

export function QueriesHistorialPacient({ navigation }) {
  
  const [text, onChangeText] = useState("");
  const [modalitie, setModalitie] = useState("");
  const [payment, setPayment] = useState("");
  const [render, setRender] = useState(false)

  const dispatch = useDispatch()
  const queries = useSelector(state => state.queries.queries)
  const modalities = useSelector (state => state.queries.modalities)
  const payments = useSelector (state => state.queries.payments)

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
            <Text style={styles.text}>¿Que tipo de consulta desea?</Text>
            <TextInput
              multiline={true}
              numberOfLines={4}
              onChangeText={onChangeText}
              style={styles.textInput}
              placeholder="Describa su problema"
              value={text}/>
          </View>
          <View style={{ paddingVertical: 15 }}>
            <Text style={styles.text}>Modalidad de consulta:</Text>
            {(modalities.length > 0) ? <SelectList
              boxStyles={{ backgroundColor: "#A8A7A3" }}
              setSelected={(val) => setModalitie(val)}
              data={modalities}
              save="value"
              inputStyles={{ fontSize: 12 }}
            /> : <Text>Loading...</Text>}
          </View>
          <View style={{ paddingVertical: 15 }}>
            <Text style={styles.text}>Modo de pago:</Text>
            { (payments.length > 0) ? <SelectList
              boxStyles={{ backgroundColor: "#A8A7A3" }}
              setSelected={(val) => setPayment(val)}
              data={payments}
              save="value"
              onSelect={() => alert(payment)}
              label="Categories"
              inputStyles={{ fontSize: 12 }}
            /> : <Text>Loading...</Text>}
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
          title="ProfessionalsList"
          onPress={() =>
            navigation.navigate("ProfessionalList", {
              name: "ProfessionalList",
            })
          }
          style={styles.btn}
        >
          </TouchableOpacity>
          <Text
            style={{ textAlign: "center", color: theme.colors.secondaryText }}
          >
            Historial
          </Text>
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
          <View>
            <ListaConsultas navigation={navigation}/>
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
    borderRadius: 10
  }
});
