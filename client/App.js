// import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Splash } from './src/components/Splash/Splash'
import { Loading } from './src/components/loading/Loading'
import { HamburgerMenu } from './src/components/main/HamburgerMenu/HamburgerMenu'
import { OnBoard } from './src/components/main/OnBoard'
import { Provider } from 'react-redux'
import { store } from './src/store'
import { SignInScreen } from './src/components/SignIn/SignInScreen'
import Toast from 'react-native-toast-message';
import { toastConfig } from './customNotificationConfig'
import { ConfirmEmailScreen } from './src/components/ConfirmEmailScreen/ConfirmEmailScreen'
import { SignUp } from './src/components/main/SignUp'
import { SignIn } from './src/components/main/SignIn'
import { SignUpProfessional } from './src/components/main/SignUpProfessional'

const Stack = createStackNavigator()

const headerOptions = {
  title: '',
  headerBackTitleVisible: false,
  headerLeftContainerStyle: {
    paddingLeft: 10
  }
}

export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
          <Stack.Screen name="Loading" component={Loading} options={{ headerShown: false }} />
          <Stack.Screen name="OnBoard" component={OnBoard} options={{ headerShown: false }} />
          <Stack.Screen name="SignInScreen" component={SignInScreen} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="SignIn" component={SignIn}  />
          <Stack.Screen name="SignUpProfessional" component={SignUpProfessional} options={headerOptions} />
          <Stack.Screen name="ConfirmEmailScreen" component={ConfirmEmailScreen} />
          <Stack.Screen name="HamburguerMenu" component={HamburgerMenu} options={{ headerShown: false }} />
        </Stack.Navigator>
        <Toast config={toastConfig} />
      </NavigationContainer>
    </Provider>
  );
}



