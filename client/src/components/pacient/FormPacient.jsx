import React from 'react'
// import { useEffect } from 'react'
import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { postPacient } from '../../slices/postPacient'

export function FormPacient () {

  const dispatch = useDispatch()

  const newPacient = {
    first_name: Germanicus,
    last_name: Hori,
    DNI: 30213311,
    province: 'Buenos Aires',
    city: 'Mar del Plata',
    postcode: 7600,
    address: 'Siempre viva 123',
    email: 'asfd@gmail.com',
    password: '12m1m2'
  }

  return (
    <View>
      <Button
                title='PostPacient'
                onPress={() => dispatch(postPacient(newPacient))}/>
    </View>
  )
}