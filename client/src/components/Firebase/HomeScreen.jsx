import { useNavigation } from "@react-navigation/native"
import React from "react"
import { TouchableOpacity } from "react-native-gesture-handler"
import { auth } from "../../../../firebase"

export const HomeScreen = ()=>{
    const navigation = useNavigation()

    const handleSingOut = ()=>{
        auth.signOut()
        .then(()=>{
            navigation.replace("Login")
        })
        .catch(error  => alert(error.message))
    }


return (
    <View>
        <Text>Email: {auth.currentUser?.email}</Text>
        <TouchableOpacity
        onPress={handleSingOut}
        >
       </TouchableOpacity>

    </View>



)


}