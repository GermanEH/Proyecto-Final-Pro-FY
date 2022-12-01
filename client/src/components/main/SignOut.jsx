import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import auth from "@react-native-firebase/auth";
import { auth1 } from "../../../firebase-config.js";
import { View, Text, Image, StyleSheet } from "react-native";

export function SignOut({ navigation, usertype }) {
  const handleSignOut = () => {
    auth()
      .signOut()
      .then(() => {
        navigation.navigate("OnBoard");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View>
        <Image
          source={require("../../assets/logo.png")}
          style={{ width: 300, height: 300 }}
        />
      </View>
      <View>
        <Text style={styles.text}>¿Desea cerrar sesión?</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 50,
          }}
        >
          <TouchableOpacity onPress={handleSignOut}>
            <Text value="Si" style={styles.text}>
              Sí
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text value="Si" style={styles.text}>
              NO
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
  },
});
