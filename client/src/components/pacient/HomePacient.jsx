import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useSelector, useDispatch } from "react-redux";
import theme from "../../theme";
import { Carousel } from "../Carousel/Carousel";
import { Loading } from "../loading/Loading";
import { CarouselFavorite } from "./CarouselFavorite";
import { ButtonHomePacientQueries } from "../shared/Button";
import { getAuth } from "firebase/auth";
import { getProfessionalById } from '../../slices/professionalsActions'
import { handleFavourite } from '../../slices/professionals'

export function HomePacient({ navigation, route }) {

    const auth = getAuth();
    const user = auth.currentUser;
    const dispatch = useDispatch()

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
    }, []);

    useEffect(() => {
      if(route.params !== undefined) {
        dispatch(getProfessionalById(route.params.id))
        .then((professional) => 
            dispatch(handleFavourite(professional.payload)))
      }
    }, 
    [])

    return (
      <SafeAreaView>
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

              <Text style={styles.textName}>{user.displayName}</Text>
              <Text style={styles.text}>
                Ya eres parte de la comunidad PRO-FY, estás listo para conectarte
                con profesionales de la medicina.
              </Text>
              <View style={{ alignItems: "center", paddingVertical: 20 }}>
                <ButtonHomePacientQueries navigation={navigation} />
              </View>
              <Text style={styles.textFavorite}>
                Tus profesionales de confianza:
              </Text>
              <View style={{ paddingBottom: 20 }}>
                <CarouselFavorite navigation={navigation} />
              </View>
              <View style={{ paddingBottom: 20 }}>
                <Carousel role="pacient" navigation={navigation} />
              </View>
            </View>
          </ScrollView>
        )}
      </SafeAreaView>
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
  });
