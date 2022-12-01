import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, TouchableOpacity, Button } from "react-native";
import { getQueries } from "../../slices/queriesActions";
// import { theme } from '../../../theme'

export function QueriesListProf({ navigation }) {
  const [render, setRender] = useState(false);

  const queries = useSelector((state) => state.queries.queries);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQueries());
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
              <Text>{p.description}</Text>
            </View>
            <Text>{p.doctorName.email}</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("QueryDetailProf", {
                  name: "QueryDetailProf",
                })
              }
            >
              <Text>Detalles deconsultas</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
}
