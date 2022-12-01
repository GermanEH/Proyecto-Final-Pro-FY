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
import { CardPacient } from "./CardPacient";
import theme from "../../theme";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "../Carousel/Carousel";
import { getQueries } from "../../slices/queriesActions";
import { getAuth } from "firebase/auth";
import { ReviewsList } from "./ReviewsList";
import { getProfessionals } from "../../slices/professionalsActions";

export function HomeProfessional({ navigation }) {
  const todayQueries = useSelector((state) => state.queries.todayQueries);
  const tomorrowQueries = useSelector((state) => state.queries.tomorrowQueries);
  const tomorrowAfterQueries = useSelector(
    (state) => state.queries.tomorrowAfterQueries
  );

  const dispatch = useDispatch();

  const payments = useSelector((state) => state.queries.payments);
  const professionals = useSelector((state) => state.professionals);

  const auth = getAuth();
  const user = auth.currentUser;
  useEffect(() => {
    dispatch(getProfessionals());
  }, []);

  useEffect(() => {
    dispatch(getQueries());
  }, []);

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 300 }}>
        <View style={styles.container}>
          <View style={{ paddingVertical: 40 }}>
            <Text
              style={{ fontSize: theme.fontSize.secondaryText, paddingTop: 50 }}
            >
              Hola,
            </Text>
            <Text
              style={{
                fontSize: 20,
                paddingBottom: 10,
              }}
            >
              {user.displayName}
            </Text>
          </View>
          <Text
            style={{
              fontSize: theme.fontSize.secondaryText,
              paddingVertical: 15,
            }}
          >
            Consultas del dia de hoy:
          </Text>
          <View>
            {todayQueries ? (
              todayQueries.map((p, i) => (
                <View key={i} style={{ paddingVertical: 10 }}>
                  <CardPacient navigation={navigation} query={p} />
                </View>
              ))
            ) : (
              <Text>¡No tienes consultas para hoy!</Text>
            )}
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
            {tomorrowQueries?.map((p, i) => (
              <View key={i} style={{ paddingVertical: 10 }}>
                <CardPacient navigation={navigation} query={p} />
              </View>
            ))}
            {tomorrowAfterQueries?.map((p, i) => (
              <View key={i} style={{ paddingVertical: 10 }}>
                <CardPacient navigation={navigation} query={p} />
              </View>
            ))}
          </View>
          <View
            style={{
              alignItems: "center",
              padding: 40,
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
              <Text style={{ color: "white" }}>Listado de Consultas</Text>
            </TouchableOpacity>
          </View>
          <View style={{ paddingTop: 15 }}>
            <Text style={{ fontSize: theme.fontSize.secondaryText }}>
              Reseñas de los pacientes:
            </Text>
          </View>
          <View style={{ paddingBottom: 100 }}>
            <ReviewsList />
          </View>
        </View>
        <View style={styles.containerCarousel}>
          <Carousel navigation={navigation} />
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
    width: "90%",
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
    margin: 20,
  },
});
