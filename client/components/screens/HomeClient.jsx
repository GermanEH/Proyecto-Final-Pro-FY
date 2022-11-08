import { View, Text, Button } from 'react-native'

import React from 'react'

const HomeClient = ({navigation}) => {
    return (
        <View>
            <Text>Hola,</Text>
            <Text>{props.name}</Text>
            <Button
            title={props.name} 
            onPress={() => navigation.navigate('Consultas', {name: `${props.name}`})}>Consultas</Button>
        </View>
    )
}

export default HomeClient