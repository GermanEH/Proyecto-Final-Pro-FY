import React from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
} from "react-native";
import theme from "../../theme";


export function EditProfile() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>
          E-mail
        </Text>
        <TextInput style={styles.input} placeholder='E-mail'>
        </TextInput>
        <Text>
          Celular
        </Text>
        <TextInput style={styles.input} placeholder='Celular'>
        </TextInput>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  input: {
    height: 60,
    width: 390,
    backgroundColor: '#ededed',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    fontSize: theme.fontSize.secondaryText
  },
});

