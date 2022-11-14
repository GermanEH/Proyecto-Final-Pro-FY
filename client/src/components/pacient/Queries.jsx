import { View, Button } from 'react-native'
import React from 'react'

export function Queries ({navigation}) {
    return (
        <View>
        <Button
        title="Nueva"/>
        <Button 
        title="ProfessionalsList"
        onPress={() => navigation.navigate('ProfessionalsList')}></Button>
        </View>
    )
}