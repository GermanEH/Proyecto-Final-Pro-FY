import { View, StyleSheet, ScrollView } from "react-native";
import { CardFrecuentQuestions } from "./CardFrecuentQuestions";
import { dataFrecuentQuestions } from "./dataFrecuentQuestions";

export function FrequentQuestions() {
  return (
    <View style={styles.container}>
      <ScrollView>
        {
          dataFrecuentQuestions.map((data, index) => (
            <CardFrecuentQuestions
              key={index}
              index={index}
              {...data}
            />
          ))
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
