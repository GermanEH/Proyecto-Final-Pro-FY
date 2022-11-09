import React from 'react'
// import { useEffect } from 'react'
import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { postPacient } from '../../slices/postPacientSlice'

export function FormPacient () {
)
  const dispatch = useDispatch()

  const newPacient = {
    name: Germánicus,
    password: LoremIpsum,
    DNI: 30213311,
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    código_postal: 7600,
    dirección: 'Siempre viva 123',
    email: 'asfd@gmail.com',
    contraseña: '12m1m2'
  }

  return (
    <View>
      <Button
                title='PostPacient'
                onPress={() => dispatch(postPacient(newPacient))}/>
    </View>
  )
}