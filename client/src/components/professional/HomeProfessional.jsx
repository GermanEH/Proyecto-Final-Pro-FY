import {
  View,
  Button,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import { CardProfessional } from"../pacient/CardProfessional";
import theme from "../../theme";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "../Carousel/Carousel";
import { getQueries } from "../../slices/queriesActions";
import { getAuth } from "firebase/auth";
import {ReviewsList} from "./ReviewsList"


export function HomeProfessional({ navigation }) {
  const todayQueries = useSelector((state) => state.queries.todayQueries);
  const tomorrowQueries = useSelector((state) => state.queries.tomorrowQueries);
  const tomorrowAfterQueries = useSelector(
    (state) => state.queries.tomorrowAfterQueries
  );

  const dispatch = useDispatch();
  
  const payments = useSelector((state) => state.queries.payments);
  const pacients = useSelector((state) => state.pacients);

  const auth = getAuth();
  const user = auth.currentUser
  useEffect(() => {
    if (user !== null) {
      // The user object has basic properties such as display name, email, etc.
      // displayName = user.displayName;
      const email = user.email;
      const photoURL = user.photoURL;
      const emailVerified = user.emailVerified;
      // The user's ID, unique to the Firebase project. Do NOT use
      // this value to authenticate with your backend server, if
      // you have one. Use User.getToken() instead.
      const uid = user.uid;
    }
  }, [])

  useEffect(() => {
    dispatch(getQueries());
  }, []);

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 300 }}>
        <View style={styles.container}>
          <Text
            style={{ fontSize: theme.fontSize.secondaryText, paddingTop: 15 }}
          >
            Hola,
          </Text>
          <Text
            style={{
              fontSize: theme.fontSize.primaryText,
              paddingBottom: 10,
              paddingLeft: 10,
            }}
          >
             {user.displayName}
          </Text>
          <Text
            style={{
              fontSize: theme.fontSize.secondaryText,
              paddingVertical: 15,
            }}
          >
            Consultas del dia de hoy:
          </Text>
          <View>
            {todayQueries?.map((p, i) =>
              <View key={i} style={{ paddingVertical: 10 }}>
                <CardProfessional navigation={navigation} query={p} />
              </View>)}
          </View>
          <View>
            <Text
              style={{
                fontSize: theme.fontSize.secondaryText,
                paddingVertical: 15,
              }}
            >
              Proximas Consultas:
            </Text>
            {tomorrowQueries?.map((p, i) =>
              <View key={i} style={{ paddingVertical: 10 }}>
                <CardProfessional navigation={navigation} query={p} />
              </View>)}
            {tomorrowAfterQueries?.map((p, i) =>
              <View key={i} style={{ paddingVertical: 10 }}>
                <CardProfessional navigation={navigation} query={p} />
              </View>)}
          </View>
          <View
            style={{
              alignItems: "center",
              padding: 20,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: theme.colors.primaryColor,
                justifyContent: "center",
                padding: 15,
                borderRadius: 10,
              }}
              title="Lista de consultas"
              onPress={() =>
                navigation.navigate("QueriesListProf", {
                  name: "QueriesListProf",
                })
              }
            >
              
              <Text style={{ color: theme.colors.secondaryText }}>
                Listado de Consultas
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ paddingTop: 15 }}>
            <Text style={{ fontSize: theme.fontSize.secondaryText }}>
              Consultas de los Pacientes:
            </Text>
          </View>
          <ReviewsList/>
          {/* <View style={styles.containerComments}>
            <ScrollView>
              <View style={styles.comments}>
                <Text>COMENTARIOS</Text>
                <Text>COMENTARIOS</Text>
                <Text>COMENTARIOS</Text>
                <Text>COMENTARIOS</Text>
                <Text>COMENTARIOS</Text>
                <Text>COMENTARIOS</Text>
                <Text>COMENTARIOS</Text>
                <Text>COMENTARIOS</Text>
                <Text>COMENTARIOS</Text>
                <Text>COMENTARIOS</Text>
                <Text>COMENTARIOS</Text>
              </View>
              
            </ScrollView>
            <View
              style={{ flexDirection: "row", paddingTop: 15, margin: 15 }}
            >
              <TextInput
                style={styles.input}
                placeholder="Responder Reviews"
              />
              <View style={{ justifyContent: "space-around" }}>
                <TouchableOpacity style={styles.btn}>
                  <Text style={{ textAlign: "center", color: "white" }}>
                    Responder
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View> */}
        </View>
        <View style={styles.containerCarousel}>
          <Carousel navigation={navigation}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
  },
  containerComments: {
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
  },
  comments: {
    paddingBottom: 40,
    borderColor: "red",
    margin: 20,
  },
  btn: {
    backgroundColor: theme.colors.primaryColor,
    padding: theme.padding.padding10,
    borderRadius: theme.borderRadius.borderRadiusBotton,
    justifyContent: "flex-start",
  },
  input: {
    backgroundColor: theme.colors.secondaryText,
    width: "70%",
    padding: theme.padding.padding10,
    borderColor: "grey",
  },
  containerCarousel: {
    width: "100%",
    height: 670,
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
    justifyContent: "center",
    paddingBottom: 40,
  },
});
