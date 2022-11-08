import { View, Button } from 'react-native'
import React from 'react'

export function HomeProfessional({navigation}) {
    return (
        <View>
        <Button
            title='Consultas'
            onPress={() => navigation.navigate('Consultas', {name: 'Consultas'})}></Button>
        </View>
    )
}