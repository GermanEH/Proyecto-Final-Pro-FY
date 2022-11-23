import React from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import theme from "../../theme";


export function EditProfile() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <View style={styles.changePicture}>
          <View style={{ backgroundColor: '#ddd', height: 50, width: 50, borderRadius: 25 }}>
          </View>
          <View style={{ paddingLeft: 12 }}>
            <Text style={{ paddingBottom: 4, fontWeight: theme.fontWeights.bold, fontSize: theme.fontSize.secondaryText }}>
              Usuario
            </Text>
            <TouchableOpacity>
              <Text style={{ color: theme.colors.primaryColor }}>
                Cambiar foto de perfil
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.changeName}>
          <Text style={{
            fontSize: theme.fontSize.terciaryText,
            fontWeight: theme.fontWeights.bold,
            paddingBottom: 4
          }}
          >
            Nombre
          </Text>
          <TextInput style={{ backgroundColor: '#ddd', height: 40, paddingLeft: 5 }}>

          </TextInput>
          <Text style={{
            fontSize: 15,
            color: '#aaa',
            paddingTop: 4
          }}
          >
            Nombre de usuario.
          </Text>
        </View>
      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25
  },
  changePicture: {
    paddingTop: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  changeName: {
    paddingTop: 12,
  }
});
