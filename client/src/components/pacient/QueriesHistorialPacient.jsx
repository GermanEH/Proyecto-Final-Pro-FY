import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import theme from "../../theme";
import { SelectList } from "react-native-dropdown-select-list";
import { ButtonBlue, ButtonQueries } from "../shared/Button";
import { QueriesListPacient } from "./QueriesListPacient";
import { Loading } from "../main/Loading";
import { getQueries } from "../../slices/queriesActions";
import {getAuth} from "firebase/auth";
import { getPacients } from '../../slices/pacientsActions'

export function QueriesHistorialPacient({ navigation }) {

  const [id, setId] = useState("")
  const queries = useSelector((state) => state.queries.queries);
  const pacients = useSelector((state) => state.pacients.pacients);
  const auth = getAuth();
  const user = auth.currentUser;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQueries()); 
  }, []);
  useEffect(() => {
    dispatch(getPacients()); 
  }, []);

  let pacient = []
  // useEffect(() => {if(pacients){pacient = pacients.filter(p => p.email === user.email)}}, [pacients])
  useEffect(() => {if(pacients){pacient = pacients.filter(p => p.email === user.email); setId(pacient[0]._id);
  }}, [pacients])

  console.log(id)
  // const idPacient = ""
  // if(pacient.length > 0) {
  //   console.log('OOOO', pacient)
  //   idPacient = pacient[0]._id
  //   setRender(true)
  // }

  // useEffect(() => {if(render) setRender(false)}, [render])

  return (
    <View>
      <ScrollView>
        <View style={{ alignItems: "center" }}>
          <View
            style={{
              width: 200,
              paddingBottom: 20,
              paddingTop: 30,
            }}
          >
            {id !== "" ? 
            <TouchableOpacity
            title="GenerateQuery"
            onPress={() =>
              navigation.navigate("GenerateQuery", {
                _id: id
              })
            }
            style={styles.btn}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
              }}
            >
              GENERAR CONSULTA
            </Text>
          </TouchableOpacity>
          :
          <Text>Loading...</Text>
            }
          </View>
        </View>
        <View style={styles.containerBtnQueries}></View>
        <View>
          <Text
            style={{ textAlign: "center", fontSize: 18, fontWeight: "bold" }}
          >
            Historial de Consultas
          </Text>
        </View>
        {queries.length && queries.length === 0 ? (
          <View style={{ width: "90%" }}>
            <Loading />
          </View>
        ) : (
          <View style={styles.containerHistorial}>
            <ScrollView>
              <View>
                <View
                  style={{
                    paddingTop: 40,
                    paddingBottom: 5,
                  }}
                ></View>
                <View>
                  <QueriesListPacient navigation={navigation} />
                </View>
              </View>
            </ScrollView>
          </View>
        )}
      </ScrollView>
    </View>
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
    marginTop: 100,
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
    margin: 35,
    width: "80%",
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
    marginVertical: 60,
    paddingBottom: 20,
  },
  text: {
    fontWeight: theme.fontWeights.bold,
    padding: 10,
    color: "white",
  },
  // textInput: {
  //   backgroundColor: "#A8A7A3",
  //   borderRadius: 10,
  // },
});
