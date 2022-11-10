import {  View, Text, StyleSheet } from "react-native";

export function Notificaciones() {
  return (
    <View style={styles.container}>
      <Text>Notificaciones</Text>
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
