import React from 'react'
import { useEffect } from 'react'
import { View, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getProfessionals, putProfessional, deleteProfessional } from '../../slices/professionalsActions'

export function HomeProfessional({navigation}) {

    const professionals = useSelector(state => state.professionals)
    const dispatch = useDispatch()

    useEffect (() => console.log(professionals), [professionals])

    const updated = {
        // id: 12,
        first_name: 'ttttt',
        last_name: 'rrrrr',
        email: 'asfasd@gmail.com',
        password: '3456634',
        dni: '6345633',
        professionalId: '56783456',
        speciality: 'Odontologo',
        state: 'Buenos Aires',
        city: 'Mar del Plata',
        zip: "7600",
        professionalAdress: 'Siempre viva 123',
        country: 'Medixo',
        schedule: 'por_la_mañana',
        modality: ['presential'],
    }

    return (
        <View>
        <Button
            title='GetProfessionals'
            onPress={() => dispatch(getProfessionals())}/>
        <Button
            title='Consultas'
            onPress={() => navigation.navigate('Consultas', {name: 'Consultas'})}></Button>
        <Button
            title='FormProfessional'
            onPress={() => navigation.navigate('FormProfessional')}></Button>
        <Button
            title='updateData'
            onPress={() => dispatch(putProfessional(updated.id, updated))}/>
        <Button
            title='delete'
            onPress={() => dispatch(deleteProfessional(updated.id))}/>
        </View>
    )
}