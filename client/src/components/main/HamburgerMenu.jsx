import { createDrawerNavigator } from "@react-navigation/drawer";
import { SafeAreaView, View, Image, StyleSheet } from "react-native";
import { HomePacient } from "../pacient/HomePacient";
import { HomeProfessional } from "../professional/HomeProfessional";
import { HomeProfessionalBasic } from "../professional/HomeProfessionalBasic";
import { Notifications } from "../x-tras/Notifications/Notifications";
import { FrequentQuestions } from "../x-tras/FrequentQuestions/FrequentQuestions";
import { Settings } from "../x-tras/Settings/Settings";

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
            <Menu.Screen name="Home" component={HomeProfessional} />
          )}
          <Menu.Screen name="Notificaciones" component={Notifications} />
          <Menu.Screen name="Frequent Questions" component={FrequentQuestions} />
          <Menu.Screen name="Settings" component={Settings} />
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
