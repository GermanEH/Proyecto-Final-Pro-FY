import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { getQueries } from "../../slices/queriesActions";
import theme from "../../theme";
import { getPacients } from "../../slices/pacientsActions";
// import { theme } from '../../../theme'

export function QueriesListProf({ navigation }) {
  const [render, setRender] = useState(false);
  const pacients = useSelector((state) => state.pacients.pacient);
  const queries = useSelector((state) => state.queries.queries);

  //solo para pruebas cuando no haya consuiltas
  /*   const queries = [
    {
      hour: "14:00",
      pacientName: "elvis",
      state: "pendiente",
    },
  ]; */

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQueries(), getPacients());
    setRender(true);
  }, []);
  useEffect(() => {
    if (render) setRender(false);
  }, [render]);

  return (
    <View>
      <Text style={{ alignText: "center", fontSize: 30, color: "grey" }}>
        Listado de consultas
      </Text>
      <View>
        {queries?.map((p, i) => (
          <View
            key={i}
            style={{
              margin: 25,
            }}
          >
            <View
              style={{
                backgroundColor: "#BCBCBC",
                padding: 20,
                borderRadius: 10,
              }}
            >
              <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                  Fecha de la consulta :
                </Text>
                <Text>{p.hour}</Text>
              </View>
              <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                  Nombre del paciente:
                </Text>
                <Text>{p.pacientName}</Text>
              </View>
              <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                  Estado de la Consulta:
                </Text>
                <Text>{p.state}</Text>
              </View>
              <View style={{ paddingTop: 30 }}>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() =>
                    navigation.navigate("QueryDetailProf", {
                      name: "QueryDetailProf",
                    })
                  }
                >
                  <Text style={{ color: "white", textAlign: "center" }}>
                    Detalles deconsultas
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: theme.colors.primaryColor,
    padding: 10,
    borderRadius: 15,
  },
});
