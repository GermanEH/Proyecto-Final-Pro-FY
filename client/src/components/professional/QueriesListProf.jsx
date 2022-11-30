import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native'
import { getQueries } from '../../slices/queriesActions'
// import { theme } from '../../../theme'

export function QueriesListProf() {

  const [render, setRender ] = useState(false)

  const queries = useSelector(state => state.queries.queries)

  const dispatch = useDispatch()

  useEffect(() => {dispatch(getQueries()); setRender(true)}, [])
  useEffect(() => {if(render) setRender(false)}, [render])

  return (
    <View>
      <Text style={{alignText:"center", fontSize:"30", color:"grey"}}>Listado de consultas</Text>
      <View>
        {queries?.map((p, i) => <TouchableOpacity key={i} style={{margin:"20", backgroundColor:"grey", borderRadius:"10", width:"30", height:"20", }}>
          <Text>Hola</Text>
          
        </TouchableOpacity>)}
      </View>
    </View>
  )
}