
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import { getReviews } from '../../slices/reviewsActions'
import { CardReviews } from './CardReviews'
// import { theme } from '../../../theme'

export function ReviewsList() {
  const reviews = useSelector((state) => state.reviews);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviews());
  }, []);
  const [respuestaReview, setRespuestaReview] = useState("");
  const Respuesta = () => {
    setRespuestaReview("");
    return respuestaReview;
  };

  return (
    <View>
      <View
        style={{
          width: 350,
          height: 300,
          marginTop: 20,
          backgroundColor: "white",
        }}
      >
        <View>
          <ScrollView horizontal={true}>
            <View style={{ flexDirection: "row" }}>
              {reviews.reviews.map((p, i) => (
                <CardReviews
                  id={i + 1}
                  review={p.review}
                  CambioRespuesta={Respuesta}
                  key={i}
                />
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
      <View style={{ paddingTop: 10 }}>
        <TextInput
          value={respuestaReview}
          style={{
            width: "70%",
            height: 20,
            backgroundColor: "#BCBCBC",
            height: 40,
            borderRadius: 10,
          }}
          placeholder="Coloque su respuesta aqui"
          onChangeText={(value) => setRespuestaReview(value)}
        />
      </View>
    </View>
  );
}
