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

export function CardCarousel({ item, navigation }) {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width: width * 0.75 }]}>
      <Image
        source={item.image}
        style={[styles.image, { width, resizeMode: "contain" }]}
      />
      <View>
        <Text style={[styles.title, { textAlign: "center" }]}>
          {" "}
          {item.title}{" "}
        </Text>
        {item.characteristics.map((characteristic, index) => (
          <Text key={index} style={styles.description}>
            {" "}
            ✔︎ {characteristic}{" "}
          </Text>
        ))}
        <Text style={[styles.price, { textAlign: "center" }]}>
          {" "}
          {item.price}{" "}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("PagosUserPremium")}
        style={styles.btn}
      >
        <Text> Ir </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    backgroundColor: "white",
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.2,
    shadowRadius: 9.11,
    paddingHorizontal: 25,
    paddingVertical: 25,
  },
  image: {
    width: 90,
    height: 90,
  },
  title: {
    alignItems: "center",
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
    shadowOpacity: 0.2,
    shadowRadius: 9.11,
  },
});
