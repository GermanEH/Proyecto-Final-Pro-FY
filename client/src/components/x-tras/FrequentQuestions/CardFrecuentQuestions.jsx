import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AboutUs, WhyUs, HowItWorks } from "./FQComponents";
import theme from '../../../theme'

const obj = {
  who: <AboutUs />,
  why: <WhyUs />,
  how: <HowItWorks />,
}

export function CardFrecuentQuestions({ title, component, index }) {

  const [currentIndex, setCurrentIndex] = useState(null)

  return (
    <View>
      <TouchableOpacity style={styles.cardTitle}
        onPress={() => {
          setCurrentIndex(index === currentIndex ? null : index)
        }} >
        <Text style={styles.title}> {title} </Text>
        <Text> v </Text>
      </TouchableOpacity>
      {
        index === currentIndex && (
          <View style={styles.cardDescription}>
            <Text style={styles.description}> {obj[component]} </Text>
          </View>
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  cardTitle: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: 400,
    height: 60,
    backgroundColor: "white",
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
    padding: 10,
    margin: 10
  },
  cardDescription: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  title: {
    fontSize: theme.fontSize.primaryText,
    fontWeight: theme.fontWeights.bold,
  },
  description: {
    fontSize: theme.fontSize.primaryText,
    fontWeight: theme.fontWeights.normal,
  }
});
