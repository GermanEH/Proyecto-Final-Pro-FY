import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import theme from "../../theme";
import { ButtonQueries, ButtonQueriesDetail } from "../shared/Button";
import { Carousel } from '../Carousel/Carousel'
import { handleFavourite } from '../../slices/professionals'
import { getProfessionalById } from "../../slices/professionalsActions";
import { getReviews } from '../../slices/reviewsActions'
import { Review } from './Review'
import { FontAwesome } from "@expo/vector-icons"; 

export function ProfessionalDetail({ navigation, route }) {

  const [text, onChangeText] = useState("");
  const [render, setRender] = useState(false)

  const professional = useSelector((state) => state.professionals.professional);
  const reviews = useSelector((state) => state.reviews.reviews);
  const dispatch = useDispatch();

  useEffect(() => {dispatch(getProfessionalById(route.params.id)); setRender(true)}, [])
  useEffect(() => {dispatch(getReviews()); setRender(true)}, [])
  useEffect(() => {if(render) setRender(false)}, [render])

  return ( 
    <ScrollView>
      <View 
      style={styles.container}
      >
        {(Object.keys(professional).length > 0) ? (
        <View 
        style={styles.imgContainer}
        >
          <Image
            style={styles.imageStyle}
            source={require("../../assets/foto.jpg")}
          />
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              margin: 10,
              fontSize: 8,
            }}
          >
            <Text>{professional?.first_name} {professional?.last_name}</Text>
            <Text>Especialidad: {professional?.specialities.name}</Text>
            <View style={{ flexDirection: "row" }}>
              <Text>Tipos de Consulta: {professional?.modality}</Text>
            </View>
            <TouchableOpacity
        onPress={() => {dispatch(handleFavourite(professional))}}
        >
          <FontAwesome
          style={{ paddingLeft: 5 }}
          name="star-o"
          size={15}
          color="black"
          />
          </TouchableOpacity>
            {/* <Text>Numero de contacto:</Text> */}
            {/* <Text></Text> */}
        </View>
        
        <View 
        style={{ marginTop: 40 }}
        >
          <ButtonQueriesDetail
            text={"Comentar"}
            backgroundColor={theme.colors.primaryColor}
            navigation={navigation}
          />
        </View>
        <View 
        style={{ marginTop: 30 }}
        >
          <Text>Comentarios:</Text>
        </View>

        <ScrollView>
          {reviews?.map((r, i) => <Review review={r} key={i}/>)}
        </ScrollView>
        <ScrollView>
          <View 
          style={styles.containerComments}
          >
              <Carousel />
          </View>
          <View
            style={{
              fontSize: theme.fontSize.primaryText,
              paddingBottom: 10,
              paddingLeft: 10,
            }}
          ></View>
        </ScrollView>
        </View>) : (
            <View>
              <Text> Loading...</Text>
            </View>
          )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  imageStyle: {
    height: 210,
    width: 160,
    zIndex: 1,
    marginLeft: 5,
    marginTop: 5,
    borderRadius: 10,
    marginBottom: 10,
  },
  imgContainer: {
    width: "100%",
    backgroundColor: "white",
    flexDirection: "row",
    borderRadius: 10,
  },
  containerComments: {
    width: "100%",
    height: 300,
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
  },
});
