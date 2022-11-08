import { Text, StyleSheet, View } from "react-native";

export function Consultas() {
  return (
    <View style={styles.container}>
      <Text>Contacto</Text>
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
});
