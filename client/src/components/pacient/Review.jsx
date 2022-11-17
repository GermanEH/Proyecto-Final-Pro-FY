import { View, Text } from 'react-native'
import React from 'react'

export function ReviewDetail ({review}) {
    return (
        <View>
            <View>
                <Text>{review.title}</Text>
            </View>
            <View>
                <Text>{review.content}</Text>
            </View>
            <View>
                <Text>{review.pacient}</Text>
            </View>
        </View>
    )
}