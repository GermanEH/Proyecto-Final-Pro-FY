import React, { useRef, useState } from "react";
import { FlatList, View, Animated } from "react-native";

import { CardCarousel } from "./CardCarousel";
import { Indicator } from "./Indicator";
import { slidesPacient, slidesProfessional } from "./slides";

export function Carousel({ role, navigation, planUser }) {
  const data = role === "pacient" ? slidesPacient : slidesProfessional;
  const slidesCarousel = data;
  if (planUser === "basic") {
    slidesCarousel = data.filter((slide) => slide.title === "Premium");
  }

  const scrollX = useRef(new Animated.Value(0)).current;
  const slideRef = useRef(null);

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <View>
      <FlatList
        data={slidesCarousel}
        renderItem={({ item }) => (
          <CardCarousel navigation={navigation} item={item} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={32}
        viewabilityConfig={viewConfig}
        ref={slideRef}
      />
      <Indicator data={data} scrollX={scrollX} />
    </View>
  );
}
