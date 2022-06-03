import React from 'react'
import { Text, View } from 'react-native'
const FilterBox = ({ name }) => {
    return (
        <View
            style={{
                backgroundColor: 'red',
                padding: 10,
                width: '70%',
                alignItems: 'center',
                marginTop: 10,
            }}
        >
            <Text
                style={{
                    fontSize: 20,
                    fontFamily: 'monospace',
                    fontWeight: 'bold',
                }}
            >
                {name}
            </Text>
        </View>
    )
}

export default FilterBox
