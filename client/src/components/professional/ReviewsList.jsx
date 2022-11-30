import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { View, Text, TouchableOpacity, ScrollView,TextInput } from 'react-native'
import { getReviews } from '../../slices/reviewsActions'
import { CardReviews } from './CardReviews'
// import { theme } from '../../../theme'

export function ReviewsList() {

  

  const reviews = useSelector(state => state.reviews)
 
  const dispatch = useDispatch()

  useEffect(() => {dispatch(getReviews())}, [])

  const [respuestaReview, setRespuestaReview] = useState("")

const Respuesta=()=> {

   setRespuestaReview("")
    return respuestaReview;

}

  return (
    <View style={{ width: 350,height: 430, marginTop: 20}}>
      <View>
         <ScrollView horizontal={true}>

             {
                reviews.reviews.map( (p,i)=> <CardReviews id={i+1 } review={p.review} CambioRespuesta={Respuesta} key={i} /> )
        }
         </ScrollView>
        <TextInput
                value={respuestaReview}
                style={{
                width: "70%",
                height:20,
                borderColor: "grey",
                 }}
                placeholder="Responder"
                onChangeText={value=>setRespuestaReview(value)}
              />
      </View>
    </View>
  )
}