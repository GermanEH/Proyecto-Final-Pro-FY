import React from 'react'
import { useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getPacients, putPacients, deletePacient } from '../../slices/pacientsActions'

export function HomePacient ({navigation}) {

    const pacients = useSelector(state => state.pacients)
    const dispatch = useDispatch()

    useEffect (() => console.log(pacients), [pacients])

    const updated = {
        // id: 12,
        first_name: 'Yaileen',
        last_name: 'Manjarrest',
        email: 'gsadsdfasdf@gmail.com',
        password: 'dgfhsfd',
        DNI: 154314,
        province: 'asdfasfd',
        city: 'gfdhdfhdf',
        postcode: 75658,
        address: 'tyururu 1234123'
    }

    return (
        <View>
            <Text>Hola,</Text>
            <Text>fulana</Text>
            <Button
                title='GetPacients'
                onPress={() => dispatch(getPacients())}/>
            <Button
                title='Consultas'
                onPress={() => navigation.navigate('Consultas', {name: 'Consultas'})}></Button>
            <Button
                title='FormPacient'
                onPress={() => navigation.navigate('FormPacient')}/>
            <Button
                title='updateData'
                onPress={() => dispatch(putPacients(updated.id, updated))}/>
            <Button
                title='delete'
                onPress={() => dispatch(deletePacient(updated.id))}/>
        </View>
    )
}