import { View, Text, Button, StyleSheet, Alert } from "react-native";
import { getAuth } from "firebase/auth";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import {
  CardField,
  useStripe,
  useConfirmPayment,
} from "@stripe/stripe-react-native";
import { TextInput } from "react-native-gesture-handler";

const PaymentUserPremium = ({ navigation }) => {
  const auth = getAuth();
  const user = auth.currentUser;
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
    console.log("email", email);
  }, []);

  const [name, setName] = useState("");
  const stripe = useStripe();
  const [email, setEmail] = useState();
  const { confirmPayment, loading } = useConfirmPayment();
  const [CardDetails, setCardDetails] = useState();

  const suscribe = async () => {
    try {
      const response = await axios.post(
        `https://api-pro-fy-production.up.railway.app/api/users/payUserPremium`,
        email,
        id
      );
      const clientSecret = response.data.clientSecret;
      const message = response.data.message;
      console.log(clientSecret, message);
      return { clientSecret, message };
    } catch (error) {
      console.log(error.message);
    }

    // return {clientSecret,error} ;
  };

  const handlePayPress = async () => {
    //  if(!CardDetails?.complete || !email ){
    //         Alert.alert("Por favor ingrese datos de la tarjeta completos")
    //         return;
    // }
    const billingDetails = {
      email: email,
    };

    try {
      const { clientSecret, message } = await suscribe();

      const { paymentIntent, error } = await confirmPayment(clientSecret, {
        paymentMethodType: "Card",
        billingDetails: billingDetails,
      });

      if (error) {
        Alert.alert(`error en el pago ${error.message}`);
      } else if (paymentIntent) {
        Alert.alert(`Pago completado su consulta ha sido agendada`);
        // navigation.navigate('QueriesHistorialPacient')
      }
    } catch (error) {
      console.log(error);
      // Alert.alert("Something went wrong, please try later")
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        placeholder="E-mail"
        keyboardType="email-address"
        onChange={(value) => setEmail(value.nativeEvent.text)}
        style={styles.input}
      />
      <CardField
        postalCodeEnabled={true}
        placeholders={{ number: "4242 4242 4242" }}
        CardStyle={styles.Card}
        style={styles.cardContainer}
        onCardChange={(value) => setCardDetails(CardDetails)}
      />

      <Button onPress={handlePayPress} title="Pay" disabled={loading} />
    </View>
  );
};

export default PaymentUserPremium;

const styles = StyleSheet.create({
  Card: {
    backgroundColor: "#efefefef",
  },
  cardContainer: {
    height: 50,
    marginVertical: 30,
  },
  container: {
    justifyContent: "center",
    margin: 20,
  },
  input: {
    backgroundColor: "#efefefef",
    borderRadius: 8,
    fontSize: 20,
    height: 50,
    padding: 10,
  },
});
