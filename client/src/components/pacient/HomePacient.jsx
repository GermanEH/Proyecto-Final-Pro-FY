import React from 'react'
import { useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getPacients, putPacient, deletePacient } from '../../slices/pacientsActions'

export function HomePacient ({navigation}) {

    const pacients = useSelector(state => state.pacients)
    const dispatch = useDispatch()

    useEffect (() => console.log(pacients), [pacients])

    const updated = {
        _id: '636e8e4100414c3752e3f88d',
        first_name: "Jorge",
        last_name: "Otamendi",
        DNI: 5124124,
        state: "Buenos Aires",
        city: "Mar del Plata",
        postcode: "7600",
        address: "San Martin 123",
        email: "ityiutyi@gmail.com",
        password: "tyuityit"
    }

    return (
        <View>
            <Text>Hola,</Text>
            <Text>fulana</Text>
            <Button
            title='Formulario Usuario'
            onPress={() => navigation.navigate('FormPacient', {name: 'FormPacient'})}></Button>
            <Button
                title='Consultas'
                onPress={() => navigation.navigate('Queries')}/>
            <Button
                title='updateData'
                onPress={() => dispatch(putPacient(updated._id, updated))}/>
        </View>
    )
}