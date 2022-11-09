import React from 'react'
import { useEffect } from 'react'
import { View, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getProfessionals } from '../../slices/getPacients'

export function HomeProfessional({navigation}) {

    const professionals = useSelector(state => state.professionals)
    const dispatch = useDispatch()

    useEffect (() => console.log(professionals), [professionals])

    return (
        <View>
        <Button
            title='GetPacients'
            onPress={() => dispatch(getProfessionals())}/>
        <Button
            title='Consultas'
            onPress={() => navigation.navigate('Consultas', {name: 'Consultas'})}></Button>
        </View>
    )
}