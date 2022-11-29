import React from "react"
import { TouchableOpacity } from "react-native-gesture-handler"
import auth from '@react-native-firebase/auth';
// import { auth } from "../../../firebase-config.js"
import { View, Text } from "react-native"

export function SignOut ({navigation}) {

    const handleSignOut = ()=>{
        auth().signOut()
        .then(()=>{
            navigation.navigate("OnBoard")
        })
        .catch(error  => alert(error.message))
    }

return (
    <View>
        <Text>¿Desea cerrar sesión?</Text>
        <TouchableOpacity
        onPress={handleSignOut}
        >
        <Text>Sí</Text>
    </TouchableOpacity>
    </View>
)
}