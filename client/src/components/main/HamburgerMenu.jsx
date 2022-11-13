import { createDrawerNavigator } from "@react-navigation/drawer";
import { SafeAreaView, View, Image, StyleSheet } from "react-native";
import { HomePacient } from "../pacient/HomePacient";
import { HomeProfessional } from "../professional/HomeProfessional";
import { HomeProfessionalBasic } from "../professional/HomeProfessionalBasic";
import { Notificaciones } from "../x-tras/Notificaciones";
import { Foro } from "../x-tras/Foro";
import { Ajustes } from "../x-tras/Ajustes";

const Menu = createDrawerNavigator();

export function HamburgerMenu({ route }) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* <Image style={styles.img} source={require('../../assets/logo.png')} /> */}
        <Menu.Navigator initialRouteName="HomePacient">
          {route.params.usertype === "pacient" ? (
            <Menu.Screen name="Home" component={HomePacient} />
          ) : (
            <Menu.Screen name="Home" component={HomeProfessionalBasic} />
          )}
          <Menu.Screen name="Notificaciones" component={Notificaciones} />
          <Menu.Screen name="Foro" component={Foro} />
          <Menu.Screen name="Ajustes" component={Ajustes} />
        </Menu.Navigator>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 50,
    height: 50,
    marginBottom: 30,
  },
  container: {
    // flexDirection: 'row-reverse',
    height: 900,
  },
});
