import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import theme from "../../theme";
import { ButtonQueries, ButtonQueriesDetail } from "../shared/Button";
import { Carousel } from '../Carousel/Carousel'
import { handleFavourite, cleanProfessional } from '../../slices/professionals'
import { getProfessionalById } from "../../slices/professionalsActions";
import { getReviews } from '../../slices/reviewsActions'
import { ReviewsList } from '../professional/ReviewsList'
import { FontAwesome } from "@expo/vector-icons"; 
import { Loading } from "../main/Loading";

export function ProfessionalDetail({ navigation, route }) {

  const [text, onChangeText] = useState("");
  const [render, setRender] = useState(false)

  const professional = useSelector((state) => state.professionals.professional);
  const reviews = useSelector((state) => state.reviews.reviews);
  const dispatch = useDispatch();

  useEffect(() => {dispatch(getProfessionalById(route.params.id))
    return () => {dispatch(cleanProfessional())}}, [dispatch, route.params.id])
  useEffect(() => {dispatch(getReviews()); setRender(true)}, [])
  useEffect(() => {if(render) setRender(false)}, [render])

  return ( 
      <View>
    {(Object.keys(professional).length > 0) ? (
          <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 300 }}>
            <View 
            style={styles.container}
            >
              <View 
              style={styles.imgContainer}
              >
                <Image
                  style={styles.imageStyle}
                  source={{uri:professional.image}}
                />
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    margin: 10,
                    fontSize: 8,
                  }}
                >
            <Text>Dr. {professional?.first_name} {professional?.last_name}</Text>
            <Text>Especialidad: {professional?.specialities}</Text>
            <Text>Matrícula: {professional?.professionalId}</Text>
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
          <Text>Reseñas recibidas:</Text>
        </View>
          <View 
          style={styles.containerComments}
          >
              <ReviewsList/>
          </View>
          <View
          style={styles.containerCarousel}
          >
              <Carousel navigation={navigation}/>
          </View>
        </View>
        </View>
          </ScrollView>
        ) : (
            <View>
              <Loading/>
            </View>
          )}
          </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  imageStyle: {
    height: 210,
    width: "50%",
    zIndex: 1,
    marginLeft: 5,
    marginTop: 5,
    borderRadius: 10,
    marginBottom: 10,
  },
  imgContainer: {
    width: "100%",
    backgroundColor: "white",
    flexDirection: "column",
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
    justifyContent: "center",
  },
  containerComments: {
    width: "100%",
    height: 200,
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
  },
});
