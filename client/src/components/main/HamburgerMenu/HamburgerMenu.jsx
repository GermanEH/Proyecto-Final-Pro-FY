import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, StyleSheet } from "react-native";
import { MenuComponent } from "./MenuComponent";
import { HomePacient } from "../../pacient/HomePacient";
import { HomeProfessional } from "../../professional/HomeProfessional";
import { Notifications } from "../../HamburguerMenu/Notifications/Notifications";
import { FrequentQuestions } from "../../HamburguerMenu/FrequentQuestions/FrequentQuestions";
import { Settings } from "../../HamburguerMenu/Settings/Settings";
import { SignOut } from "../SignOut"
import { Loading } from "../../loading/Loading";
import { EditProfile } from "../../pacient/EditProfile";
import { QueryDetailProfessional } from "../../professional/QueryDetailProfessional";
import { ProfessionalsList } from "../../pacient/ProfessionalsList";
import { QueriesHistorialPacient } from "../../pacient/QueriesHistorialPacient";
import { ProfessionalDetail } from "../../pacient/ProfessionalDetail";
import { GenerateQuery } from "../../pacient/GenerateQuery";
import { QueryDetailPacient } from "../../pacient/QueryDetailPacient";
import { QueriesListProf } from "../../professional/QueriesListProf";
import { QueriesListPacient } from "../../pacient/QueriesListPacient";
import { PagosUserPremium } from "../../stripe/Pagos/PagosUserPremium";

const Menu = createDrawerNavigator();

export function HamburgerMenu({ route }) {
  return (
    <View style={styles.container}>
      <Menu.Navigator
        initialRouteName="HomePacient"
        drawerContent={(props) => <MenuComponent {...props} usertype={route.params.usertype} route={route} />}
      >
        <Menu.Screen name="HomePacient" component={HomePacient} options={{ title: '' }} />
        <Menu.Screen name="HomeProfessional" component={HomeProfessional} />
        <Menu.Screen name="Notifications" component={Notifications} />
        <Menu.Screen name="FrequentQuestions" component={FrequentQuestions} />
        <Menu.Screen name="Settings" component={Settings} />
        <Menu.Screen name="Loading" component={Loading} options={{ headerShown: false }} />
        <Menu.Screen name="EditProfile" component={EditProfile} />
        <Menu.Screen name="QueriesHistorialPacient" component={QueriesHistorialPacient} />
        <Menu.Screen name="QueriesListPacient" component={QueriesListPacient} />
        <Menu.Screen name="QueryDetailPacient" component={QueryDetailPacient} />
        <Menu.Screen name="GenerateQuery" component={GenerateQuery} />
        <Menu.Screen name="ProfessionalsList" component={ProfessionalsList} />
        <Menu.Screen name="ProfessionalDetail" component={ProfessionalDetail} />
        <Menu.Screen name="QueriesListProfessional" component={QueriesListProf} />
        <Menu.Screen name="QueryDetailProfessional" component={QueryDetailProfessional} />
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
