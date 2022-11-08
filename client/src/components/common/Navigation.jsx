import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";


//screens
import { Inicio } from "../x-tras/Inicio";
import { Tarifas } from '../x-tras/Tarifas'
import { Consultas } from '../x-tras/Notificaciones'
import { Denuncias} from '../x-tras/Denuncias'

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      screenOptions={{
        tabBarActiveTintColor: 'orange',
      }}
    >
      <Tab.Screen name="inicio" component={Inicio} />
      <Tab.Screen name="tarifas" component={Tarifas} />
      <Tab.Screen name="consultas" component={Consultas} />
      <Tab.Screen name="denuncias" component={Denuncias} />
    </Tab.Navigator>
  )
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  )
}


