import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { HamburgerMenu } from './src/components/main/HamburgerMenu'
import { OnBoard } from './src/components/main/OnBoard'
import { FormPacient } from './src/components/pacient/FormPacient'
import { FormProfessional } from './src/components/professional/FormProfessional'
import { HomePacient } from './src/components/pacient/HomePacient'
import { HomeProfessional } from './src/components/professional/HomeProfessional'
import { Consultas } from './src/components/shared/Consultas'

const Stack = createStackNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HamburguerMenu"
          component={HamburgerMenu}/>
        <Stack.Screen
          name="Home"
          component={OnBoard}/>
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
  );
}


