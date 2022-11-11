import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet, ScrollView } from 'react-native';
import { CardPacient } from './CardPacient';
import { SelectList, MultipleSelectList } from 'react-native-dropdown-select-list'
const professionals = [
  {
    name: 'Fulano',
    speciality: 'Medico 1',
    country: 'Pais 1',
    phone: '1234567890'
  },
  {
    name: 'Sutano',
    speciality: 'Medico 2',
    country: 'Pais 2',
    phone: '333333333'
  },
  {
    name: 'Sutanejo',
    speciality: 'Medico 3',
    country: 'Pais 3',
    phone: '0987654321'
  },
  {
    name: 'Sutanejo',
    speciality: 'Medico 3',
    country: 'Pais 3',
    phone: '0987654321'
  },
  {
    name: 'Sutanejo',
    speciality: 'Medico 3',
    country: 'Pais 3',
    phone: '0987654321'
  },
  {
    name: 'Sutanejo',
    speciality: 'Medico 3',
    country: 'Pais 3',
    phone: '0987654321'
  },
  {
    name: 'Sutanejo',
    speciality: 'Medico 3',
    country: 'Pais 3',
    phone: '0987654321'
  },
  {
    name: 'Sutanejo',
    speciality: 'Medico 3',
    country: 'Pais 3',
    phone: '0987654321'
  },
  {
    name: 'Sutanejo',
    speciality: 'Medico 3',
    country: 'Pais 3',
    phone: '0987654321'
  },
]

export function ProfessionalList() {

  const [selected, setSelected] = useState("");

  const data = [
    { key: '1', value: 'uno' },
    { key: '2', value: 'dos' },
    { key: '3', value: 'tres' },
    { key: '4', value: 'cuatro' },
  ]

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
          {
            professionals.map((professional, index) => (
              <CardPacient
                key={index}
                {...professional}
              />
            ))
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
});
