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
import { Loading } from "../loading/Loading";

export function QueriesDetail({ route }) {
  const [text, onChangeText] = useState("");
  const [render, setRender] = useState(false);

  const query = useSelector((state) => state.queries.query);
  const dispatch = useDispatch();

  // const pacients = useSelector(state => state.pacients.pacients)
  // const professionals = useSelector(state => state.professionals.professionals)

  // let pacient = {}
  // let professional = {}

  /* useEffect(() => {
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
  }, [render]); */
  return (
    <View>
      <ScrollView>
        <View>
          {query ? (
            <View style={styles.container}>
              <View style={{ paddingBottom: 15 }}>
                {/*          <Text>Paciente: {pacient.name}</Text> */}
                <Text style={styles.title}>
                  Fecha de creación de la consulta:
                </Text>
                <Text style={{}}>
                  {query.createdDate &&
                    query.createdDate.substring(
                      0,
                      query.createdDate.indexOf("T")
                    )}
                </Text>
                <Text style={{ ...styles.title }}>Fecha de la consulta:</Text>
                <Text>
                  {query.queryDate && query.queryDate.replace("T", " ")}{" "}
                </Text>
              </View>
              <View style={{ paddingVertical: 10 }}>
                <Text style={styles.title}>Tipo de Consulta:</Text>
                <Text>{query.motive} </Text>
              </View>
              <View style={{ flexDirection: "row", padding: 10 }}>
                {/* <Text>Estado: {query.state[0]}</Text> */}
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
