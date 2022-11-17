import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { ContainerFQ } from "./ContainerFQ";
import { data } from "./data";

export function FrequentQuestions() {
  return (
    <View style={styles.container}>
      <ScrollView>
      {
        data.map((dat, index) => (
          <ContainerFQ
            key={index}
            index={index}
            {...dat}
          />
        ))
      }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
});
