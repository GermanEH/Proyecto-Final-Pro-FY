import React from "react";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import theme from "../../theme";

export function CardCarousel({ item }) {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width: width*0.75 }]}>
      <Image
        source={item.image}
        style={[styles.image, { width, resizeMode: "contain" }]}
      />
      <View>
        <Text style={[styles.title, {textAlign: 'center'}]}> {item.title} </Text>
        <Text style={styles.description}> ✔︎ {item.characteristic1} </Text>
        <Text style={styles.description}> ✔︎ {item.characteristic2} </Text>
        <Text style={styles.description}> ✔︎ {item.characteristic3} </Text>
        <Text style={styles.description}> ✔︎ {item.characteristic4} </Text>
        <Text style={styles.price}> {item.price} </Text>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text> Ir </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    backgroundColor: "white",
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: .2,
    shadowRadius: 9.11,
    paddingHorizontal: 25,
    paddingVertical: 25
  },
  image: {
    width: 90,
    height: 90,
  },
  title: {
    alignItems: 'center',
    fontSize: theme.fontSize.titleText,
    fontWeight: theme.fontWeights.bold,
    marginBottom: 25,
  },
  description: {
    fontSize: theme.fontSize.terciaryText,
    fontWeight: theme.fontWeights.normal,
    marginBottom: 10,
  },
  price: {
    fontSize: theme.fontSize.titleText,
    fontWeight: theme.fontWeights.bold,
  },
  btn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.primaryColor,
    height: 50,
    width: 90,
    borderRadius: 5,
    marginTop: 25,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: .2,
    shadowRadius: 9.11,
  },
});
