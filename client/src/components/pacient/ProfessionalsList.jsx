
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SafeAreaView, View, StyleSheet, ScrollView, Text } from "react-native";
import { CardPacient } from "./CardPacient";
import {
  SelectList,
  MultipleSelectList,
} from "react-native-dropdown-select-list";
import {
  getProfessionals,
  getSpecialties,
} from "../../slices/professionalsActions";
import { handleFilter, setFiltered } from "../../slices/professionals";
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { SafeAreaView, View, StyleSheet, ScrollView, Text } from 'react-native';
import { CardPacient } from './CardPacient';
import { SelectList, MultipleSelectList } from 'react-native-dropdown-select-list'
import { getProfessionals, getSpecialties } from '../../slices/professionalsActions'
import { handleFilter, setFiltered } from '../../slices/professionals'
// const professionals = [
//   {
//     name: 'Fulano',
//     speciality: 'Medico 1',
//     country: 'Pais 1',
//     phone: '1234567890'
//   },
//   {
//     name: 'Sutano',
//     speciality: 'Medico 2',
//     country: 'Pais 2',
//     phone: '333333333'
//   },
//   {
//     name: 'Sutanejo',
//     speciality: 'Medico 3',
//     country: 'Pais 3',
//     phone: '0987654321'
//   },
//   {
//     name: 'Sutanejo',
//     speciality: 'Medico 3',
//     country: 'Pais 3',
//     phone: '0987654321'
//   },
//   {
//     name: 'Sutanejo',
//     speciality: 'Medico 3',
//     country: 'Pais 3',
//     phone: '0987654321'
//   },
//   {
//     name: 'Sutanejo',
//     speciality: 'Medico 3',
//     country: 'Pais 3',
//     phone: '0987654321'
//   },
//   {
//     name: 'Sutanejo',
//     speciality: 'Medico 3',
//     country: 'Pais 3',
//     phone: '0987654321'
//   },
//   {
//     name: 'Sutanejo',
//     speciality: 'Medico 3',
//     country: 'Pais 3',
//     phone: '0987654321'
//   },
//   {
//     name: 'Sutanejo',
//     speciality: 'Medico 3',
//     country: 'Pais 3',
//     phone: '0987654321'
//   },
// ]
export function ProfessionalsList() {
export function ProfessionalsList() {
  const [selected, setSelected] = useState("");

  const data = [
    { key: "1", value: "uno" },
    { key: "2", value: "dos" },
    { key: "3", value: "tres" },
    { key: "4", value: "cuatro" },
  ];

  const professionals = useSelector(
    (state) => state.professionals.professionals
  );
  const filtered = useSelector((state) => state.professionals.filtered);
  const specialties = useSelector((state) => state.professionals.specialties);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfessionals());
  }, []);
  useEffect(() => {
    dispatch(getSpecialties());
  }, []);
  useEffect(() => {
    professionals?.length ? (
      dispatch(setFiltered(professionals))
    ) : (
      <text>Loading...</text>
    );
  }, [professionals]);
  useEffect(() => {
    console.log(filtered);
  }, [filtered]);

  const professionals = useSelector(state => state.professionals.professionals)
  const filtered = useSelector(state => state.professionals.filtered)
  const specialties = useSelector(state => state.professionals.specialties)
  const dispatch = useDispatch()

  useEffect (() => {dispatch(getProfessionals())}, [])
  useEffect (() => {dispatch(getSpecialties())}, [])
  useEffect (() => {(professionals?.length) ? dispatch(setFiltered(professionals)) : <text>Loading...</text>}, [professionals])
  useEffect (() => {console.log(filtered)}, [filtered])

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <SelectList
            setSelected={(val) => setSelected(val)}
            data={data}
            save="value"
          />
          <MultipleSelectList
            setSelected={(val) => setSelected(val)}
            data={data}
            save="value"
            onSelect={() => alert(selected)}
            label="Categories"
          />
          {filtered?.map((p, index) => {
            return (
              <CardPacient
                key={index}
                first_name={p.first_name}
                last_name={p.last_name}
                speciality={p.speciality.name}
                country={p.country}
                // phone={p.phone}
              />
            );
          })}

          {
            filtered?.map((p, index) => {return (
              <CardPacient key={index} first_name={p.first_name} last_name={p.last_name} speciality={p.speciality.name} country={p.country}
                // phone={p.phone}
              />
            )
            })
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
});
