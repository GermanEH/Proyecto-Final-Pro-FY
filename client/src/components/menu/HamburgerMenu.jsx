import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Consultas } from '../screens/Consultas';
import { Denuncias } from '../screens/Denuncias';
import { Inicio } from '../screens/Inicio';
import { Nosotros } from '../screens/Nosotros';
import { Tarifas } from '../screens/Tarifas';
import { StyleSheet, View, Image, SafeAreaView } from "react-native";

const Menu = createDrawerNavigator()

export function HamburgerMenu() {
  return (
    <SafeAreaView >
      <NavigationContainer>
        <View style={styles.container}>
          {/* <Image style={styles.img} source={require('../../assets/logo.png')} /> */}
          <Menu.Navigator>
            <Menu.Screen name="Inicio" component={Inicio} />
            <Menu.Screen name="Denuncias" component={Denuncias} />
            <Menu.Screen name="Nosotros" component={Nosotros} />
            <Menu.Screen name="Consultas" component={Consultas} />
            <Menu.Screen name="Tarifas" component={Tarifas} />
          </Menu.Navigator>
        </View>
      </NavigationContainer>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  img: {
    width: 50,
    height: 50,
    marginBottom: 30
  }, 
  container: {
    flexDirection: 'row-reverse',
    height: 1000,


  }
});
