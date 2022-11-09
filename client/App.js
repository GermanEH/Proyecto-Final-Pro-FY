// import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { HamburgerMenu } from './src/components/main/HamburgerMenu'
import { OnBoard } from './src/components/main/OnBoard'
import { FormPacient } from './src/components/pacient/FormPacient'
import { FormProfessional } from './src/components/professional/FormProfessional.jsx'
import { HomePacient } from './src/components/pacient/HomePacient'
import { HomeProfessional } from './src/components/professional/HomeProfessional'
import { Consultas } from './src/components/shared/Consultas'
import { Provider } from 'react-redux'
import { store } from './src/store'
/* import { Loading } from './components/loading/Loading'; */
/* import { HamburgerMenu} from './components/menu/HamburgerMenu'; */
import { Intro } from './components/intro/Intro';




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
          </Stack.Navigator>
        </NavigationContainer>
       </Provider>
      // </React.StrictMode>
  );
   /*  <> */
      {/* <HamburgerMenu/> */}
    {/*   <Loading/> */}
   {/*    <Intro/>
    </> */}
;
}



