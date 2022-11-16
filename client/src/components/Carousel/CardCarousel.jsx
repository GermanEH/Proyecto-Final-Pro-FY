import React from "react";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Image,
  TouchableOpacity,
} from "react-native";

export function CardCarousel({ item }) {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      <Image
        source={item.image}
        style={[styles.image, { width, resizeMode: "contain" }]}
      />
      <View>
        <Text style={styles.title}> {item.title} </Text>
        <Text style={styles.description}> {item.characteristic1} </Text>
        <Text style={styles.description}> {item.characteristic2} </Text>
        <Text style={styles.description}> {item.characteristic3} </Text>
        <Text style={styles.description}> {item.characteristic4} </Text>
        <Text style={styles.price}> {item.price} </Text>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text>GO</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: "#ededed",
    margin: 20,
    borderRadius: 5,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },
  container: {
    display: "flex",
    alignItems: "center",
    margin: 20,
    height: 600,
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
    width: 150,
    height: 150,
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
