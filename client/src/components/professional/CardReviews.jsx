import { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import theme from "../../theme";

export function CardReviews({ review, id, onChange, CambioRespuesta }) {
  const [respuestaReview, setRespuestaReview] = useState("");

  const Respuesta = () => {
    let respuesta = CambioRespuesta();
    setRespuestaReview("RTA: " + respuesta);
  };
  return (
    <View style={[styles.container, { paddingBottom: 50, borderRadius: 10 }]}>
      <View style={{ flexDirection: "row", padding: 50 }}>
        <View style={{ justifyContent: "center" }}>
          <Image
            style={styles.imageStyle}
            source={require("../../assets/foto.jpg")}
          />
        </View>
        <View style={{}}>
          <Text
            style={{
              textAlign: "right",
              paddingTop: 10,
              fontWeight: "bold",
              fontSize: 12,
              padding: 5,
            }}
          >
            {id}.{" "}
          </Text>
        </View>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Text
            style={{
              textAlign: "auto",
              paddingTop: 10,
              fontWeight: "bold",
              fontSize: 12,
              width: 150,
              height: 80,
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
              width: 150,
              height: 80,
            }}
          >
            {respuestaReview}
          </Text>
          <View>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                Respuesta();
              }}
            >
              <Text style={{ color: "white" }}>Responder</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 300,
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
    borderRadius: 10,
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: theme.colors.primaryColor,
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
