import React from 'react'
import { FlatList, View } from 'react-native';
import { CardPacient } from './CardPacient';

const arrayFavoritos = [
  {
    first_name: 'Pepito',
    last_name: 'Perez',
    country: 'De allá',
    specialty: 'Doctor',
  },
  {
    first_name: 'Pepito2',
    last_name: 'Perez2',
    country: 'De allá',
    specialty: 'Doctor',
  },
]


export function CarouselFavorite() {

  return (
    <View>
      <FlatList data={arrayFavoritos} renderItem={({ item }) => <CardPacient {...item} />}
        horizontal
        showsHorizontalScrollIndicator
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}
