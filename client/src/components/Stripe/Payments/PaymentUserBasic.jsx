import { View, Text, Button, StyleSheet, Alert } from 'react-native'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { CardField, useStripe, useConfirmPayment } from '@stripe/stripe-react-native'
import { TextInput } from 'react-native-gesture-handler'
import { getAuth } from "firebase/auth";

const PaymentUserBasic = ({ navigation }) => {
  const auth = getAuth();
  const user = auth.currentUser
  const [email, setEmail] = useState("");

  const stripe = useStripe();
  const { confirmPayment, loading } = useConfirmPayment();
  const [CardDetails, setCardDetails] = useState();

  useEffect(() => {
   
      setEmail(user.email)
    
  }, [])
  const suscribe = async () => {
    

    try {
      const response = await axios.post(`https://api-pro-fy-production.up.railway.app/api/users/payUserBasic`, email)
      const clientSecret = response.data.clientSecret;
      const message = response.data.message;
      console.log(clientSecret, message)
      return { clientSecret, message }
    }
    catch (error) {
      console.log(error.message)
    }

  }
  const handlePayPress = async () => {

    //  if(!CardDetails?.complete || !email ){
    //         Alert.alert("Por favor ingrese datos de la tarjeta completos")
    //         return;
    // }
    const billingDetails = {
      email: email
    }
    try {

      const { clientSecret, message } = await suscribe();
      const { paymentIntent, error } = await confirmPayment(clientSecret, {
        paymentMethodType: "Card",
        billingDetails: billingDetails,

      });

      if (error) {
        Alert.alert(`error en el pago ${error.message}`)
      } else if (paymentIntent) {

        Alert.alert(`Pago completado su consulta ha sido agendada`)
        // navigation.navigate('QueriesHistorialPacient')
      }
    }
    catch (error) {
      console.log(error)
      // Alert.alert("Something went wrong, please try later")

    }
  }
  return (
    <View style={styles.container}>
      <CardField
        postalCodeEnabled={true}
        placeholders={{ number: "4242 4242 4242", }}
        CardStyle={styles.Card}
        style={styles.cardContainer}
        onCardChange={value => setCardDetails(CardDetails)}
      />

      <Button
        onPress={handlePayPress}
        title="Pay"
        disabled={loading}
      />
    </View>
  )
}

export default PaymentUserBasic

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
    margin: 20

  },
  input: {
    backgroundColor: "#efefefef",
    borderRadius: 8,
    fontSize: 20,
    height: 50,
    padding: 10,


  },



});