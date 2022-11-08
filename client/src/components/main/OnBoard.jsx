import { View, Text, Image, StyleSheet, Button } from "react-native";

export function OnBoard({navigation}) {
  return (
      <View style={styles.container}>
        <Image style={styles.img} source={require('../../../assets/logo.png')}/>
        <Button 
          title="Pacient"
          onPress={() => navigation.navigate('HomePacient')}></Button>
        <Button 
          title="Professional"
          onPress={() => navigation.navigate('HomeProfessional')}></Button>
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
