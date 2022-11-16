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
import { getQueryById } from "../../slices/queriesActions";
import { Loading } from "../loading/Loading";


export function QueriesDetail({ route }) {
  const [text, onChangeText] = useState("");
  const [render, setRender] = useState(false);

  const query = useSelector((state) => state.queries.queries.find(q => q._id === route.params._id));
  //const query = useSelector((state) => state.queries.query)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getQueries);
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
                <TextInput
                  multiline={true}
                  numberOfLines={4}
                  onChangeText={onChangeText}
                  style={styles.input}
                  placeholder="Anote aquí lo que considere importante recordar"
                  value={text}
                />
              </View>
            </View>
          ) : (
            <View>
              <Loading />
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
    padding: 20,
  },
  containerObservations: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: theme.colors.secondaryText,
    borderRadius: theme.borderRadius.borderRadiusBotton,
    marginVertical: 40,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  input: {
    borderRadius: 10,
    width: "100%",
    backgroundColor: "#E1E1E2",
    textAlign: "center",
    paddingTop: 5,
  },
  textInput: { padding: 10, margin: 10 },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    paddingVertical: 10,
  },
});
