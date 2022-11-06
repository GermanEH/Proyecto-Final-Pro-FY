import { Text, StyleSheet, View, Image, SafeAreaView } from "react-native";

export function Inicio() {
  return (
      <View style={styles.container}>
        <Image style={styles.img} source={require('../../assets/logo.png')}/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 300,
    height: 300,
  }
});
