import React from 'react'
import { FlatList, View, Text } from 'react-native';
import { CardPacient } from './CardPacient';
import { useSelector } from 'react-redux';
import theme from '../../theme';

export function CarouselFavorite() {

  const favourites = useSelector(state => state.professionals.favourites)

  return (
    <View>
      {
        favourites.length === 0 ?
          <View style={{alignItems: 'center', backgroundColor: 'rgb(245, 245, 245)', borderRadius: 5, padding: 5}}>
            <Text style={{fontSize: theme.fontSize.terciaryText }}> NO TIENES FAVORITOS</Text>
          </View> :
          <FlatList data={favourites} renderItem={({ item }, i) => <CardPacient {...item} key={i} />}
            horizontal
            showsHorizontalScrollIndicator
            pagingEnabled
            bounces={false}
            key={item => item._id}
            keyExtractor={(item) => item._id}
          />
      }
    </View>
  )
}
