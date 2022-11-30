import { useState } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity, Button} from "react-native";
import theme from "../../theme";

export function CardReviews({  review,id,onChange,CambioRespuesta}) {
  
    const [respuestaReview, setRespuestaReview] =useState("");

    const Respuesta=()=> {
    
        let respuesta=CambioRespuesta();
        setRespuestaReview("RTA: "+respuesta)
       

    }
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Image   style={styles.imageStyle}     
                   source={require("../../assets/foto.jpg")}
        />
         <Text
            style={{
              textAlign: "right",
              paddingTop: 10,
              fontWeight: "bold",
              fontSize: 12,
              padding:5
            }}
          >
             {id}.  </Text>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
         
           <Text
            style={{
              textAlign: "auto",
              paddingTop: 10,
              fontWeight: "bold",
              fontSize: 12,
              width:150,
              height:80
            }}
          >
            {review}
          </Text>
            <Text
            style={{
              textAlign: "auto",
              paddingTop: 10,
              fontWeight: "bold",
              fontSize: 12,
              width:150,
              height:80
            }}
          >
            {respuestaReview}
          </Text>
          <Button style={{ alignItems: "center" }} title="Responder" onPress={()=>{ Respuesta(); }}></Button>
          
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 280,
    height: 220,
    backgroundColor: "white",
    borderRadius: 10,
    
    shadowOffset: {
      width: 0,
      height: 7,
      
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },
  imageStyle: {
    height: 100,
    width: 100,
    zIndex: 1,
    marginLeft: 5,
    marginTop: 5,
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: theme.colors.primaryColor,
    margin: 20,
    borderRadius: theme.borderRadius.borderRadiusBotton,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },
  text: {
    fontFamily: theme.fonts.main,
    fontSize: theme.fontSize.secondaryText,
  },
});
