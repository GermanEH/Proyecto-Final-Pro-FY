import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaView, View, Image, StyleSheet } from "react-native";
import { Inicio } from '../screens/Inicio';
import { Notificaciones } from '../screens/Notificaciones';
import { Foro } from '../screens/Foro';
import { Ajustes } from '../screens/Ajustes';

const Menu = createDrawerNavigator()

export function HamburgerMenu() {
  return (
    <SafeAreaView >
      <NavigationContainer>
        <View style={styles.container}>
          {/* <Image style={styles.img} source={require('../../assets/logo.png')} /> */}
          <Menu.Navigator>
            <Menu.Screen name="Inicio" component={Inicio} />
            <Menu.Screen name="Notificaciones" component={Notificaciones} />
            <Menu.Screen name="Foro" component={Foro} />
            <Menu.Screen name="Ajustes" component={Ajustes} />
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
    // flexDirection: 'row-reverse',
    height: 900,


  }
});
