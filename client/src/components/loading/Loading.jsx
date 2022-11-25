import { StyleSheet, Image, View } from 'react-native';
import theme from '../../theme';

export function Loading() {

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('../../assets/loading-gif.gif')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  img: {
    width: '100%',
    height: '100%',
  }
})