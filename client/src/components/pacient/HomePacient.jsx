import React from 'react'
import { useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getPacients } from '../../slices/getPacients'


export function HomePacient ({navigation}) {

    const pacients = useSelector(state => state.pacients)
    const dispatch = useDispatch()

    useEffect (() => console.log(pacients), [pacients])

    return (
        <View>
            <Text>Hola,</Text>
            <Text>fulana</Text>
            <Button
            title='Formulario de creacion'
            onPress={() => navigation.navigate('FormPacient', {name :'FormPacient'})}/>
            <Button
            title='GetPacients'
            onPress={() => dispatch(getPacients())}/>
            <Button
            title='Consultas'
            onPress={() => navigation.navigate('Consultas', {name: 'Consultas'})}></Button>
        </View>
    )
}