import React, { useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { useSelector } from "react-redux";
import theme from "../../theme";
import { Carousel } from "../Carousel/Carousel";
import { Loading } from "../loading/Loading";
import { CarouselFavorite } from "./CarouselFavorite";
import { ButtonHomePacientQueries } from "../shared/Button";
import { getAuth } from "firebase/auth";

export function HomePacient({ navigation }) {

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
  return (
    <SafeAreaView>
      {(user === null) ? (
        <Loading />
      ) : (
        <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: "white" }}>
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
            <View style={{ alignItems: "center", paddingVertical: 20 }}>
              <ButtonHomePacientQueries navigation={navigation} />
            </View>
            <Text style={styles.textFavorite}>
              Tus profesionales favoritos:
            </Text>
            <View style={{ paddingBottom: 20 }}>
              <CarouselFavorite />
            </View>
            <View style={{ paddingBottom: 20 }}>
              <Carousel />
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25
  },
  holaPencil: {
    paddingTop: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  containerIcon: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 5,
    height: 40,
    width: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textHola: {
    fontSize: theme.fontSize.subtitleText
  },
  textName: {
    fontSize: theme.fontSize.titleText,
    fontWeight: theme.fontWeights.bold
  },
  text: {
    fontSize: theme.fontSize.terciaryText,
    color: theme.colors.terciaryText,
    paddingVertical: 20
  },
  textFavorite: {
    fontSize: theme.fontSize.terciaryText,
    color: theme.colors.terciaryText,
    paddingVertical: 20
  }
});
