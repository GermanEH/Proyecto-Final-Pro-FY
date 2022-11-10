import React from 'react'
// import { useEffect } from 'react'
import { View, Button } from 'react-native'
import { useDispatch } from 'react-redux'
import { postProfessional } from '../../slices/professionals'

export function FormProfessional () {

  const dispatch = useDispatch()

  return (
    <View>
      <Button
                title='PostProfessional'
                onPress={() => dispatch(postProfessional(newProfessional))}/>
    </View>
  )
}