import React from 'react'
import { View, Text, Button } from 'react-native'
import { HamburgerMenu } from '../main/HamburgerMenu'

export function HomePacient ({navigation}) {
    return (
        <View>
            <Text>Hola,</Text>
            <Text>fulana</Text>
            <Button
            title='Consultas'
            onPress={() => navigation.navigate('Consultas', {name: 'Consultas'})}></Button>
        </View>
    )
}