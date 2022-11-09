import React from 'react'
// import { useEffect } from 'react'
import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { postPacient } from '../../slices/postPacient'

export function FormPacient () {

  const dispatch = useDispatch()

  const newPacient = {
    first_name: Germánicus,
    last_name: Hori,
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