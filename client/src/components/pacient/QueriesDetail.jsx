import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import theme from "../../theme";
// import { getQueriesById } from "../../slices/queriesActions";
import { getQueries } from "../../slices/queriesActions";

export function QueriesDetail({ route }) {
  const [text, onChangeText] = useState("");
  const [render, setRender] = useState(false);

  const query = useSelector((state) => state.queries.queries.find(q => q._id === route.params._id));
  // const query = useSelector((state) => state.queries.query);
  const dispatch = useDispatch();

  console.log(query)

  useEffect(() => {
    dispatch(getQueries());
    setRender(true);
  }, []);
  useEffect(() => {
    if (query) setRender(true);
  }, [query]);
  useEffect(() => {
    if (render) setRender(false);
  }, [render]);

  return (
    <View>
      <ScrollView>
        <View>
            {query ? (<View style={styles.container}>
              <View style={{ padding: 10 }}>
                <Text>Paciente: {query?.pacientName}</Text>
                <Text>
                  Fecha de creación de la consulta: {query?.created.slice(0, 10)}
                </Text>
                <Text>Fecha de la consulta: {query?.date.slice(0, 10)}</Text>
              </View>
              <View style={{ padding: 10 }}>
                <Text>Tipo de Consulta: {query?.description}</Text>
                <Text>Profesional: {query?.doctorName}</Text>
              </View>
              <View style={{ flexDirection: "row", padding: 10 }}>
                <Text>Estado: {query?.state[0]}</Text>
              </View>
              <View style={styles.containerObservations}>
                <View style={styles.observations}>
                  <View
                    style={{
                      flexDirection: "column",
                      paddingTop: 30,
                    }}
                  >
                    <TextInput
                      multiline={true}
                      numberOfLines={4}
                      onChangeText={onChangeText}
                      style={styles.textInput}
                      placeholder="Anote aquí lo que considere importante recordar"
                      value={text}
                    />
                  </View>
                </View>
              </View>
            </View>
          ) : (
            // <View style={styles.containerBtn}>
            // </View>
            <View>
              <Text> Loading...</Text>
            </View>
          )}
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
  textInput: {
    backgroundColor: "#A8A7A3",
    borderRadius: 10,
    alignItems: "center",
  },
});
