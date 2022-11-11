import React from 'react'
import { View, SafeAreaView, StyleSheet, Text, Image } from 'react-native';
import theme from '../../theme';
import { FontAwesome } from '@expo/vector-icons';


export function CardPacient({ name, speciality, country, phone }) {
  return (
    <SafeAreaView>
      <View >
        <View style={styles.container}>
          <View>
            <Image style={styles.image} source={require('../../assets/foto.jpg')} />
          </View>
          <View style={styles.description}>
            <Text style={styles.name}>{name}
            </Text>
            <Text style={styles.speciality}>{speciality}
            </Text>
            <Text style={styles.location}>{country}
            </Text>
            <Text style={styles.phone}>{phone}
            </Text>
            <View style={styles.star}>
              <FontAwesome style={{paddingLeft: 5}} name="star-o" size={15} color="black" />
              <FontAwesome style={{paddingLeft: 5}} name="star-o" size={15} color="black" />
              <FontAwesome style={{paddingLeft: 5}} name="star-o" size={15} color="black" />
              <FontAwesome style={{paddingLeft: 5}} name="star-o" size={15} color="black" />
              <FontAwesome style={{paddingLeft: 5}} name="star-o" size={15} color="black" />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    margin: 5,
    width: 320,
    height: 130,
    backgroundColor: "white",
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },
  image: {
    height: 120,
    width: 100,
    marginLeft: 5,
    marginTop: 5
  },
  description: {
    marginTop: 5,
    width: 200,
    height: 100,
  },
  name: {
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSize.primaryText,
  },
  speciality: {
    fontWeight: theme.fontWeights.normal,
    fontSize: theme.fontSize.secondaryText,
  },
  location: {
    fontWeight: theme.fontWeights.light,
    fontSize: theme.fontSize.secondaryText,
  },
  phone: {
    fontWeight: theme.fontWeights.light,
    fontSize: theme.fontSize.secondaryText,
  },
  star: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 5
  }
})
