import React from 'react'
import { FlatList, View } from 'react-native';
import { CardPacient } from './CardPacient';
import { useSelector } from 'react-redux'

export function CarouselFavorite() {

  const favourites = useSelector(state => state.professionals.favourites)

  return (
    <View>
      <FlatList data={favourites} renderItem={({ item }, i) => <CardPacient {...item} key={i} />}
        horizontal
        showsHorizontalScrollIndicator
        pagingEnabled
        bounces={false}
        // key={item => item.id}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}
