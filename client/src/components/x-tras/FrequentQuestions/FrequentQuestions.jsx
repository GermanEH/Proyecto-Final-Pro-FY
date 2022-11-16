import {  View, Text, StyleSheet } from "react-native";

export function FrequentQuestions() {
  return (
    <View style={styles.container}>
      <Text>Preguntas Frecuentes</Text>
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
