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
import { useDispatch, useSelector } from "react-redux";
import theme from "../../theme";
import { Carousel } from "../Carousel/Carousel";
import { Loading } from "../loading/Loading";
import { CardPacient } from "./CardPacient";
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
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              similique, illo expedita et dicta ullam, voluptate animi quasi
              voluptatem, voluptates repellat deserunt dolore atque voluptatibus
              id totam sapiente a incidunt!
            </Text>
            <View style={{ alignItems: "center", padding: 100 }}>
              <ButtonHomePacientQueries navigation={navigation} />
            </View>
            <Text>Favoritos:</Text>
            {/* <CardPacient first_name={first_name} last_name, country, specialty}/> */}
          </View>
        </ScrollView>
      )}
            <View style={styles.containerCarousel}>
              <Carousel />
            </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
  },
  containerBtnForm: {
    alignItems: "center",
    padding: 25,
  },
  containerBtnQueries: {
    alignItems: "center",
    padding: 100,
  },
  btn: {
    backgroundColor: theme.colors.primaryColor,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: theme.borderRadius.borderRadiusBotton,
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
  },
});
