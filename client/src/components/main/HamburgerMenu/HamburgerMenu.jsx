import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, StyleSheet } from "react-native";
import { MenuComponent } from "./MenuComponent";
import { HomePacient } from "../../pacient/HomePacient";
import { HomeProfessional } from "../../professional/HomeProfessional";
import { Notifications } from "./Notifications/Notifications";
import { FrequentQuestions } from "./FrequentQuestions/FrequentQuestions";
import { Settings } from "./Settings/Settings";
import { SignOut } from "../SignOut";
import { Loading } from "../Loading";
import { EditProfile } from "../../pacient/EditProfile";
import { ProfessionalsList } from "../../pacient/ProfessionalsList";
import { QueriesHistorialPacient } from "../../pacient/QueriesHistorialPacient";
import { ProfessionalDetail } from "../../pacient/ProfessionalDetail";
import { GenerateQuery } from "../../pacient/GenerateQuery";
import { QueriesListPacient } from "../../pacient/QueriesListPacient";
import { QueryDetailPacient } from "../../pacient/QueryDetailPacient";
import { QueriesListProf } from "../../professional/QueriesListProf";
import { QueryDetailProf } from "../../professional/QueryDetailProf";
import { CardPacient } from "../../professional/CardPacient";
import { PagosUserBasic } from "../../Stripe/Pagos/PagosUserBasic";
import { PagosUserPremium } from "../../Stripe/Pagos/PagosUserPremium";
import { PagosProBasic } from "../../Stripe/Pagos/PagosProBasic";
import { PagosProPremium } from "../../Stripe/Pagos/PagosProPremium";

const Menu = createDrawerNavigator();

export function HamburgerMenu({ route }) {
  return (
    <View style={styles.container}>
      <Menu.Navigator
        initialRouteName={`Home${route.params.usertype}`}
        drawerContent={(props) => (
          <MenuComponent
            {...props}
            usertype={route.params.usertype}
            route={route}
          />
        )}
      >
        <Menu.Screen
          name="HomePacient"
          component={HomePacient}
          options={{ title: "" }}
        />
        <Menu.Screen
          name="HomeProfessional"
          component={HomeProfessional}
          options={{ title: "" }}
        />
        <Menu.Screen name="Notifications" component={Notifications} />
        <Menu.Screen name="FrequentQuestions" component={FrequentQuestions} />

        <Menu.Screen name="Settings" component={Settings} />
        <Menu.Screen
          name="Loading"
          component={Loading}
          options={{ headerShown: false }}
        />
        <Menu.Screen name="EditProfile" component={EditProfile} />
        <Menu.Screen
          name="QueriesHistorialPacient"
          component={QueriesHistorialPacient}
          options={{ title: "" }}
        />
        <Menu.Screen
          name="GenerateQuery"
          component={GenerateQuery}
          options={{ title: "" }}
        />
        <Menu.Screen
          name="ProfessionalsList"
          component={ProfessionalsList}
          options={{ title: "" }}
        />
        <Menu.Screen
          name="ProfessionalDetail"
          component={ProfessionalDetail}
          options={{ title: "" }}
        />
        <Menu.Screen
          name="QueriesListPacient"
          component={QueriesListPacient}
          options={{ title: "" }}
        />
        <Menu.Screen
          name="QueryDetailPacient"
          component={QueryDetailPacient}
          options={{ title: "" }}
        />
        <Menu.Screen
          name="QueriesListProf"
          component={QueriesListProf}
          options={{ title: "" }}
        />
        <Menu.Screen
          name="QueryDetailProf"
          component={QueryDetailProf}
          options={{ title: "" }}
        />
        <Menu.Screen
          name="CardPacient"
          component={CardPacient}
          options={{ title: "" }}
        />
        <Menu.Screen name="PagosUserBasic" component={PagosUserBasic} />
        <Menu.Screen name="PagosUserPremium" component={PagosUserPremium} />
        <Menu.Screen name="PagosProBasic" component={PagosProBasic} />
        <Menu.Screen name="PagosProPremium" component={PagosProPremium} />
        {/* <Menu.Screen name="SignOut" component={SignOut} /> */}
        {route.params.usertype === "Pacient" ? (
          <Menu.Screen
            name="SignOut"
            component={SignOut}
            usertype={"Pacient"}
          />
        ) : (
          <Menu.Screen
            name="SignOut"
            component={SignOut}
            usertype={"Professional"}
          />
        )}
      </Menu.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
