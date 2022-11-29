import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, StyleSheet, Text } from "react-native";
import { MenuComponent } from "./MenuComponent";
import { HomePacient } from "../../pacient/HomePacient";
import { HomeProfessional } from "../../professional/HomeProfessional";
import { Notifications } from "../../x-tras/Notifications/Notifications";
import { FrequentQuestions } from "../../x-tras/FrequentQuestions/FrequentQuestions";
import { Settings } from "../../x-tras/Settings/Settings";
import { SignOut } from "../SignOut"
import { Loading } from "../../loading/Loading";
import { EditProfile } from "../../pacient/EditProfile";
import { DatingStatuses } from "../../professional/DatingStatuses";
import { DatingStatusesBasic } from "../../professional/DatingStatusesBasic";
import { ProfessionalsList } from "../../pacient/ProfessionalsList";
import { QueriesHistorialPacient } from "../../pacient/QueriesHistorialPacient";
import { ProfessionalDetail } from "../../pacient/ProfessionalDetail";
import { GenerateQuery } from "../../pacient/GenerateQuery";
import { QueriesDetail } from "../../pacient/QueriesDetail";
import { PacientsList } from "../../professional/PacientsList";
import ListaConsultas from "../../pacient/ListaConsultas";
import { PagosUserPremium } from "../../stripe/Pagos/PagosUserPremium";

const Menu = createDrawerNavigator();

export function HamburgerMenu({ route }) {
  return (
    <View style={styles.container}>
      {/* <Text>Hola</Text> */}
      <Menu.Navigator
        initialRouteName="HomePacient"
        drawerContent={(props) => <MenuComponent {...props} usertype={route.params.usertype} route={route} />}
      >
        <Menu.Screen name="HomePacient" component={HomePacient} options={{ title: '' }} />
        {/* <Menu.Screen name="HomeProfessional" component={HomeProfessional} /> */}
        <Menu.Screen name="Notifications" component={Notifications} />
        <Menu.Screen name="FrequentQuestions" component={FrequentQuestions} />
        <Menu.Screen name="Settings" component={Settings} />
        <Menu.Screen name="Loading" component={Loading} options={{ headerShown: false }} />
        <Menu.Screen name="EditProfile" component={EditProfile} />
        <Menu.Screen name="DatingStatuses" component={DatingStatuses} />
        <Menu.Screen name="DatingStatusesBasic" component={DatingStatusesBasic} />
        <Menu.Screen name="ProfessionalsList" component={ProfessionalsList} />
        <Menu.Screen name="QueriesHistorialPacient" component={QueriesHistorialPacient} />
        <Menu.Screen name="ProfessionalDetail" component={ProfessionalDetail} />
        <Menu.Screen name="GenerateQuery" component={GenerateQuery} />
        <Menu.Screen name="QueriesDetail" component={QueriesDetail} />
        <Menu.Screen name="PacientsList" component={PacientsList} />
        <Menu.Screen name="ListaConsultas" component={ListaConsultas} />
        <Menu.Screen name="PagosUserPremium" component={PagosUserPremium} />
        <Menu.Screen name="SignOut" component={SignOut} />
      </Menu.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
});
