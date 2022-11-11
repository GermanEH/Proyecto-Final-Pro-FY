import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getProfessionals, getSpecialties } from '../../slices/professionalsActions'
// import { Select, Option } from 'react-native-select-list';
import { handleFilter, setFiltered } from '../../slices/professionals'

export function ProfessionalsList() {

  const professionals = useSelector(state => state.professionals.professionals)
  const filtered = useSelector(state => state.professionals.filtered)
  const specialties = useSelector(state => state.professionals.specialties)
  const dispatch = useDispatch()

  useEffect (() => {dispatch(getProfessionals())}, [])
  useEffect (() => {dispatch(getSpecialties())}, [])
  useEffect (() => {(professionals?.length) ? dispatch(setFiltered(professionals)) : <text>Loading...</text>}, [professionals])
  useEffect (() => {console.log(filtered)}, [filtered])

  return (
    <View>
      <Text>ProfessionalsList</Text>

      <Text>Filtrar por:</Text>
      <Button
      title="Especialidad"
      onPress={() => dispatch(handleFilter('Medico oncologo'))}></Button>
      {/* {/* {/* <View>
        <Text>Especialidad:</Text>
        <Select onSelect={dispatch(handleFilter(e.name))}>
          {especialties?.map(e,i => <Option value={e}>{e.name}</Option>)}
        </Select>
      </View>
      <View>
        <Select onSelect={dispatch(handleFilter(e.name))}>
          {especialties?.map(e,i => <Option value={e}>{e.name}</Option>)}
        </Select>
      </View>
      <View>
        <Select onSelect={dispatch(handleFilter(e.name))}>
          {especialties?.map(e,i => <Option value={e}>{e.name}</Option>)}
        </Select>
      </View> */}
      {filtered?.map((p,i) => {return <View key={i}><Text>{p.first_name}</Text></View>})}
    </View>
  )
}