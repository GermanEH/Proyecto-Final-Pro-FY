import React from 'react'
import { SafeAreaView, FlatList } from 'react-native';

import { CardCarousel } from './CardCarousel';
import { slides } from '../slides';

export function Carousel() {

  return (
    <SafeAreaView>
        <FlatList data={slides} renderItem={({ item }) => <CardCarousel  item={item} /> } 
        horizontal
        showsHorizontalScrollIndicator
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id}
        />
    </SafeAreaView>
  )
}


