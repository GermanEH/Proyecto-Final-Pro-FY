import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import Toast from 'react-native-toast-message';


export function Notifications() {
  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'cargando',
      text2: 'This is some something 👋',
      
    });
  }
  return (
    <ScrollView>
      <View>
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
});
