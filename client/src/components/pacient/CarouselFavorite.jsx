import React from 'react'
import { FlatList, View, Text, Button } from 'react-native';
import { CardPacient } from './CardPacient';
import { useSelector } from 'react-redux';
import theme from '../../theme';

export function CarouselFavorite({navigation}) {

  const favourites = useSelector(state => state.professionals.favourites)
  console.log(favourites.length)
  console.log(favourites)

  return (
    <View>
      {
        favourites.length === 0 ?
          <View style={{alignItems: 'center', backgroundColor: 'rgb(245, 245, 245)', borderRadius: 5, padding: 5}}>
            {/* <Text style={{fontSize: theme.fontSize.terciaryText }}> ELIGE TUS PROFESIONALES DE CONFIANZA</Text> */}
            <Button
            onPress={() =>
              navigation.navigate("ProfessionalsList", {parent: 'HomePacient'})}
            title="Elegir profesionales de confianza"
            />
          </View> :
          <FlatList data={favourites} renderItem={({ item }, index) => <CardPacient {...item} key={index} navigation={navigation} />}
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
