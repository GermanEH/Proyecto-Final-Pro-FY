import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native'
import { getPacients } from '../../slices/pacientsActions'
// import { theme } from '../../../theme'

export function QueriesListProfessional() {

  const [render, setRender ] = useState(false)

  const queires = useSelector(state => state.queries.queries)

  const dispatch = useDispatch()

  useEffect(() => {dispatch(getPacients()); setRender(true)}, [])
  useEffect(() => {if(render) setRender(false)}, [render])

  return (
    <View>
      <Text style={{alignText:"center", fontSize:"30", color:"grey"}}>Listado de consultas</Text>
      <View>
        {queires?.map((p, i) => <TouchableOpacity key={i} style={{margin:"20", backgroundColor:"grey", borderRadius:"10", width:"30", height:"20", }}>
          <Text>{p.first_name} {p.last_name}</Text>
          <Text>{p.email}</Text>
        </TouchableOpacity>)}
      </View>
    </View>
  )
}