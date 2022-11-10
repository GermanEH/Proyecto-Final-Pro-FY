import React from 'react'
// import { useEffect } from 'react'
import { View, Button } from 'react-native'
import { useDispatch } from 'react-redux'
import { postPacient } from '../../slices/pacients'

export function FormPacient () {

  const dispatch = useDispatch()

  return (
    <View>
      <Button
                title='PostPacient'
                onPress={() => dispatch(postPacient(newPacient))}/>
    </View>
  )
}