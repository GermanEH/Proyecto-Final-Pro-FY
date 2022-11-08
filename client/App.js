import { View } from 'react-native';
import { HamburgerMenu } from './src/components/menu/HamburgerMenu'
// import { Navigation }from './src/components/menu/Navigation';

/* import { store } from './store'
import { Provider } from 'react-redux' */



export default function App() {
  //aqui va redux 99% seguro
  return (
    <View>
      <HamburgerMenu />
      {/* <Navigation /> */}
    </View>
  );
}


