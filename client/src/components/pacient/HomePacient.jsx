import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useSelector } from "react-redux";
import theme from "../../theme";
import { Carousel } from "../Carousel/Carousel";
import { Loading } from "../main/Loading";
import { CarouselFavorite } from "./CarouselFavorite";
import { ButtonHomePacientQueries } from "../shared/Button";
import { getAuth } from "firebase/auth";

import { getPacients } from "../../slices/pacientsActions";

export function HomePacient({ navigation }) {
  const [image, setImage] = useState("../../assets/usuario.png");
  const [render, setRender] = useState(false);
  const payments = useSelector((state) => state.queries.payments);
  const pacients = useSelector((state) => state.pacients);

  const [planPacient, setPlanPacient] = useState("noSuscription");
  // const pacient = pacients.filter(p => p.email === user.email)
  

  const auth = getAuth();
  const user = auth.currentUser;
  const dispatch = useDispatch();

  // let pacient = []
  // useEffect(() => {if(pacients) {pacient = pacients.filter(p => p.email === user.email)}}, [pacients])
  

  useEffect(() => {
    if (user !== null) {
      const email = user.email;
      const photoURL = user.photoURL;
      const emailVerified = user.emailVerified;
      const uid = user.uid;
    }
    dispatch(getPacients());
  }, []);

  useEffect(() => {
    if (pacients.length) {
      const pacient = pacients.find((p) => p.email === user.email);
      if (pacient) {
        setPlanPacient(pacient.plan);
      }
    }
    console.log("paciemtes useefect");
  }, [pacients]);

  return (
    <View>
      {user === null ? (
        <Loading />
      ) : (
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, backgroundColor: "white" }}
        >
          <View style={styles.container}>
            <View style={styles.holaPencil}>
              <Text style={styles.textHola}>Hola,</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("EditProfile", {});
                }}
                style={styles.containerIcon}
              >
                <Icon name="pencil" size={20} color="" />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingTop: 30,
              }}
            >
              <View style={{ justifyContent: "center" }}>
                <Text style={styles.textName}>{user.displayName}</Text>
              </View>
              <View style={styles.containerImage}>
                <Image
                  style={{ width: 100, height: 100 }}
                  source={{ uri: image }}
                />
              </View>
            </View>
            <Text style={styles.text}>
              Ya eres parte de la comunidad PRO-FY, estás listo para conectarte
              con profesionales de la medicina.
            </Text>
            <View style={{ alignItems: "center", paddingVertical: 60 }}>
              <ButtonHomePacientQueries navigation={navigation} />
            </View>
            <Text style={styles.textFavorite}>
              Sus profesionales de confianza:
            </Text>
            <View style={{ paddingTop: 15, paddingBottom: 30 }}>
              <CarouselFavorite navigation={navigation} />
            </View>
            {planPacient !== "Premium" && (
              <View style={styles.containerCarousel}>
                <Carousel
                  role="pacient"
                  navigation={navigation}
                  planUser={planPacient}
                />
              </View>
            )}
          </View>
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
  },
  holaPencil: {
    paddingTop: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  containerIcon: {
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 5,
    height: 40,
    width: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  textHola: {
    fontSize: theme.fontSize.secondaryText,
  },
  textName: {
    fontSize: theme.fontSize.titleText,
    fontWeight: theme.fontWeights.bold,
  },
  text: {
    fontSize: theme.fontSize.terciaryText,
    color: theme.colors.terciaryText,
    paddingVertical: 20,
  },
  textFavorite: {
    fontSize: theme.fontSize.terciaryText,
    color: theme.colors.terciaryText,
    paddingVertical: 20,
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
  containerImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "gray",
  },
});
