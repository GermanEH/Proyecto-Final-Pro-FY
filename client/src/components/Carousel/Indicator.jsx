import React from "react";
import { View, StyleSheet, Text, Animated, useWindowDimensions } from "react-native";
import theme from "../../theme";

export function Indicator({ data, scrollX }) {

  const { width } = useWindowDimensions()

  return (
    <View style={{
      flexDirection: 'row', height: 40, alignItems: 'center', justifyContent: 'center'
    }}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const doWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: 'clamp',
        })

        return <Animated.View style={[style.dot, { width: doWidth }]} key={i.toString()} />
      })}
    </View>
  )
}

const style = StyleSheet.create({
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: theme.colors.primaryColor,
    marginHorizontal: 8
  }
})
