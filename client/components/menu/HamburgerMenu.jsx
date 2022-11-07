import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import { Consultas } from '../screens/Consultas';
import { Denuncias } from '../screens/Denuncias';
import { Inicio } from '../screens/Inicio';
import { Nosotros } from '../screens/Nosotros';
import { Tarifas } from '../screens/Tarifas';
import { Text, StyleSheet, View, Image, SafeAreaView } from "react-native";
import Stripe from '../Stripe/Stripe';

const Menu = createDrawerNavigator()

export function HamburgerMenu() {
    return (
        <NavigationContainer>
            <View style={styles.container}>
            <Image style={styles.img} source={require('../../assets/logo.png')}/>
            <Menu.Navigator>
                <Menu.Screen name="Inicio" component={Inicio} />
                <Menu.Screen name="Denuncias" component={Denuncias} />
                <Menu.Screen name="Nosotros" component={Nosotros} />
                <Menu.Screen name="Consultas" component={Consultas} />
                <Menu.Screen name="Tarifas" component={Tarifas} />
                {/* <Menu.Screen name="Stripe" component={Stripe} /> */}
            </Menu.Navigator>  
            </View>
      </NavigationContainer>
    );
}


const styles = StyleSheet.create({
    img: {
      width: 80,
      height: 80,
      marginBottom: 30
    }, container: {
        flexDirection: 'row-reverse',
        padding: 20,
        height: 400,

    
    }
  });
