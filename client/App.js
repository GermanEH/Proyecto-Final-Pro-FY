// import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { HamburgerMenu } from './src/components/main/HamburgerMenu'
import { OnBoard } from './src/components/main/OnBoard'
import { FormPacient } from './src/components/pacient/FormPacient'
import { FormProfessional } from './src/components/professional/FormProfessional'
import { HomePacient } from './src/components/pacient/HomePacient'
import { HomeProfessional } from './src/components/professional/HomeProfessional'
import { Consultas } from './src/components/shared/Consultas'
import { Provider } from 'react-redux'
import { store } from './src/store'
import { DatingStatuses } from './src/components/professional/DatingStatuses'
import { ProfessionalList } from './src/components/pacient/ProfessionalsList'
import {  QueriesHistorialPacientBasic } from './src/components/pacient/QueriesHistorialPacientBasic'
/* import { Loading } from './src/components/loading/Loading'; */

const Stack = createStackNavigator()

export default function App() {

  return (
    // <React.StrictMode>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="OnBoard"
              component={OnBoard}/>
            <Stack.Screen
              name="HamburguerMenu"
              component={HamburgerMenu}/>
            <Stack.Screen
              name="FormPacient"
              component={FormPacient}/>
            <Stack.Screen
              name="HomePacient"
              component={HomePacient}/>
            <Stack.Screen
              name="Consultas"
              component={Consultas}/>
            <Stack.Screen
              name="FormProfessional"
              component={FormProfessional}/>
            <Stack.Screen
              name="HomeProfessional"
              component={HomeProfessional}/> 
            <Stack.Screen
              name="DatingStatuses"
              component={DatingStatuses}/>
            <Stack.Screen
              name="ProfessionalList"
              component={ProfessionalList}/> 
            <Stack.Screen
              name="QueriesHistorialPacientBasic"
              component={QueriesHistorialPacientBasic}/> 
          </Stack.Navigator>  
        </NavigationContainer>
      </Provider>
      // </React.StrictMode>
  );
}



