import React from "react";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Image
} from "react-native";

export function FQCardSlide({ item }) {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      <Image
        source={item.image}
        style={[styles.image, { width, resizeMode: "contain" }]}
      />
      <View>
        <Text style={styles.title}> {item.title} </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    margin: 20,
    height: 200,
    width: 100,
    backgroundColor: "white",
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 50,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontWeight: "900",
    fontSize: 40,
    marginBottom: 10,
    color: "#000000",
  },
  description: {
    fontWeight: "400",
    fontSize: 20,
    margin: 10,
    color: "#000000",
  },
  price: {
    fontWeight: "800",
    fontSize: 40,
    marginTop: 20,
    color: "#000000",
  },
});
