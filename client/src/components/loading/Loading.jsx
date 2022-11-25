import { useRef } from 'react';
import { SafeAreaView, Animated, StyleSheet, View, Image, Button, Text } from 'react-native';

export function Loading({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true
    }).start();
  };

  setTimeout(function () {
    fadeIn()
  }, 0);

  setTimeout(function () {
    navigation.navigate('OnBoard');
  }, 3500);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.fadingContainer,
          { opacity: fadeAnim }
        ]}
      >
        <Image style={styles.img} source={require('../../assets/logo-white.png')} />
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#F0C325"
  },
  img: {
    width: 300,
    height: 300,
  }
})