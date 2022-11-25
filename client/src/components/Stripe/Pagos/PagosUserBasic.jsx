import React from 'react'
import {StripeProvider} from "@stripe/stripe-react-native"
 import { View, StyleSheet} from 'react-native'
import PaymentUserBasic from "../Payments/PaymentUserBasic"


 export  function PagosUserBasic() {
   return (
     <View styles={styles.container}>
       <StripeProvider publishableKey="pk_test_51M1JrQAukWARZaFZB3mVR3FTNZlaqEyE519RHwDrP9t4lE57yZQenxQHHendlzKyy7pklrR9xMV1CbAeoqkrX0JJ00vZtb6WEP">
         <PaymentUserBasic/>
       </StripeProvider> 
        
     </View>

 )
 }
 const styles = StyleSheet.create({
   img: {
     width: 80,
     height: 80,
     marginBottom: 30
   }, container: {
       flexDirection: 'row-reverse',
       padding: 20,
       height: 400,

  
   }
 });