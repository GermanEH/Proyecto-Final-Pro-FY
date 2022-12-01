import React from "react";
import { FlatList, View, Text, Button, TouchableOpacity } from "react-native";
import { CardProfessional } from "./CardProfessional";
import { useSelector } from "react-redux";
import theme from "../../theme";

export function CarouselFavorite({ navigation }) {
  const favourites = useSelector((state) => state.professionals.favourites);

  return (
    <View>
      {favourites.length === 0 ? (
        <View
          style={{
            alignItems: "center",

            padding: 5,
          }}
        >
          <TouchableOpacity
            style={{
              padding: 15,
              backgroundColor: theme.colors.primaryColor,
              borderRadius: 10,
            }}
            onPress={() =>
              navigation.navigate("ProfessionalsList", {
                /*  parent: "HomePacient", */
              })
            }
          >
            <Text style={{ color: "white" }}>
              Elegir profesionales de confianza
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={favourites}
          renderItem={({ item }, index) => (
            <CardProfessional {...item} key={index} navigation={navigation} />
          )}
          horizontal
          showsHorizontalScrollIndicator
          pagingEnabled
          bounces={false}
          key={(item) => item._id}
          keyExtractor={(item) => item._id}
        />
      )}
    </View>
  );
}
