import React from 'react'
// import { useEffect } from 'react'
import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { postPacient } from '../../slices/postPacientSlice'

export function FormPacient () {

  const dispatch = useDispatch()

  const newProfessional = {
    first_name: Germanicus,
    last_name: Hori,
    password: LoremIpsum,
    matricula: 1231,
    specialties: 'Odontologo',
    province: 'Buenos Aires',
    city: 'Mar del Plata',
    postcode: 7600,
    address: 'Siempre viva 123',
    time_availability: 'Lunes a Viernes de 9 a 12 hs.',
    query_modality: ['Videollamada', 'Presencial']
  }

  return (
    <View>
      <Button
                title='PostPacient'
                onPress={() => dispatch(postPacient(newProfessional))}/>
    </View>
  )
}