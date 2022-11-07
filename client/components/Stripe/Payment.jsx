// import { View, Text } from 'react-native'
// import React from 'react'
// import { useStripe } from '@stripe/stripe-react-native'

// const Payment = () => {
//   const stripe = useStripe();
//   const suscribe = async () => {
//     try {
//       const response = await fetch("http://localhost:3001/api/users/pay",
//         {
//           method: "POST",
//           headres: {
//             "Content-type": "aplication/json"
//           }
//         }

//       )
//       const data = await reponse.json()
//       if(!response.ok)
//       return Alert.alert(data.message);
//       const clientSecret= data.clientSecret;
//       const initSheet = await stripe.initPaymentSheet({
//       paymentIntentClientSecret: clientSecret
//       })
//       if(initSheet.error) return Alert.alert(initSheet.error.message)
//       const presentSheet = await stripe.presentPaymentSheet({
//         clientSecret
//       })
//       if(presentSheet.error) return Alert.alert(presentSheet.error.message)
//       Alert.alert("payment succesfull")

//     } catch (error) {
//       console.log(error)
//       Alert.alert("Something went wrong, please try later")

//     }
//   }

//   return (
//     <View>
//       <Text>Payment</Text>
//       <Button title="Pay"></Button>


//     </View>
//   )
// }

// export default Payment