import React from 'react'
import { useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getQueries, getQuerie, postQuerie, putQuerie, deleteQuerie  } from '../../slices/queriesActions'

export function HomePacient ({navigation}) {

    const pacients = useSelector(state => state.pacients)
    const dispatch = useDispatch()

    useEffect (() => console.log(pacients), [pacients])

    const updated = {
        _id: '636ed79bb7ca887031f3da81',
        first_name: "Lorenzo",
        last_name: "Bernal",
        DNI: 5124124,
        state: "Buenos Aires",
        city: "Mar del Plata",
        postcode: 7600,
        address: "San Martin 123",
        email: "asdfasfsfgh@gmail.com",
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
                title='getQueries'
                onPress={() => dispatch(getQueries())}/>
            <Button
                title='getQuerie'
                onPress={() => dispatch(getQuerie(newQuerie._id))}/>
            <Button
                title='postQuerie'
                onPress={() => dispatch(postQuerie(newQuerie))}/>
            <Button
                title='putQuerie'
                onPress={() => dispatch(putQuerie(modQuerie))}/>
            <Button
                title='deleteQuerie'
                onPress={() => dispatch(deleteQuerie(querie._id))}/>
        </View>
    )
}