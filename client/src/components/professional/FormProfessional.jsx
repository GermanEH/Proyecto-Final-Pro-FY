import React from 'react'
// import { useEffect } from 'react'
import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { postPacient } from '../../slices/postPacientSlice'

export function FormPacient () {

  const dispatch = useDispatch()

  const newProfessional = {
    first_name: Germánicus,
    last_name: Hori,
    password: LoremIpsum,
    matricula: 1231,
    especialidad: 'Odontologo',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    código_postal: 7600,
    dirección: 'Siempre viva 123',
    disponibilidad_horaria: 'Lunes a Viernes de 9 a 12 hs.',
    modalidad_de_consulta: ['Videollamada', 'Presencial']
  }

  return (
    <View>
      <Button
                title='PostPacient'
                onPress={() => dispatch(postPacient(newProfessional))}/>
    </View>
  )
}