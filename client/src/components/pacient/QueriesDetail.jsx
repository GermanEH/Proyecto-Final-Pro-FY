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
import { getPacients } from "../../slices/pacientsActions";
import { getProfessionals } from "../../slices/professionalsActions";

export function QueriesDetail({ route }) {
  const [text, onChangeText] = useState("");
  const [render, setRender] = useState(false);

  const query = useSelector((state) => state.queries.query);
  const dispatch = useDispatch();

  // const pacients = useSelector(state => state.pacients.pacients)
  // const professionals = useSelector(state => state.professionals.professionals)

  // let pacient = {}
  // let professional = {}

  useEffect(() => {
    dispatch(getQueryById(route.params.id));
    setRender(true);
  }, []);
  useEffect(() => {
    if (query) setRender(true);
  }, [query]);
  // useEffect(() => {dispatch(getPacients())}, [])
  // useEffect(() => {dispatch(getProfessionals())}, [])
  // useEffect(() => {if(pacients && query) pacient = pacients.find(p => p._id === query.userId); setRender(true)}, [pacients])
  // useEffect(() => {if(professionals && query) professional = professionals.find(p => p.id === query.professionalId); setRender(true)}, [professionals])
  useEffect(() => {
    if (render) setRender(false);
  }, [render]);

  console.log(query);

  return (
    <View>
      <ScrollView>
        <View>
          {query ? (
            <View style={styles.container}>
              <View style={{ padding: 10 }}>
                {/* <Text>Paciente: {pacient.name}</Text> */}
                <Text>
                  Fecha de creación de la consulta:{" "}
                  {query.createdDate &&
                    query.createdDate.substring(
                      0,
                      query.createdDate.indexOf("T")
                    )}
                </Text>
                <Text>Fecha de la consulta: {query.queryDate}</Text>
              </View>
              <View style={{ padding: 10 }}>
                <Text>Tipo de Consulta: {query.motive}</Text>
                {/* <Text>Profesional: {professional.last_name}</Text> */}
              </View>
              <View style={{ flexDirection: "row", padding: 10 }}>
                {/* <Text>Estado: {query.state[0]}</Text> */}
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
