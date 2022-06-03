import React from 'react'
import {
    StyleSheet,
    Text,
    ImageBackground,
    View,
    TouchableOpacity,
} from 'react-native'
import Slider from '@ptomasroos/react-native-multi-slider'
import FilterBox from './FilterBox'
import Triphello from '../utils/triphello.svg'

const MainPage = () => {
    const filters = ['Pricing', 'Safety', 'Healthcare', 'Traffic', ' Pollution']
    return (
        <View
            style={{
                height: '100%',
                flex: 1,
            }}
        >
            <ImageBackground
                style={{
                    opacity: 0.35,
                    flex: 1,
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                source={require('../utils/wallpaper.jpg')}
            >
                <Triphello width={140} height={140} />

                <Text
                    style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}
                >
                    Move the slider to set your budget
                </Text>
                <Slider values={[0, 10000]} />
                <Text
                    style={{
                        color: 'black',
                        fontSize: 16,
                        fontWeight: 'bold',
                    }}
                >
                    Move the boxes upwards as you find important
                </Text>
                <FilterBox name={'Pricing'} />
                <FilterBox name={'Safety'} />
                <FilterBox name={'Healthcare'} />
                <FilterBox name={'Traffic'} />
                <FilterBox name={'Pollution'} />
                <TouchableOpacity style={styles.button}>
                    <Text
                        style={{
                            fontWeight: 'bold',
                            fontSize: 16,
                            textAlign: 'center',
                        }}
                    >
                        Done!
                    </Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '3%',
        flexDirection: 'row',
        paddingVertical: 8,
        paddingHorizontal: 15,
        backgroundColor: 'aqua',
        borderRadius: 20,
        width: '30%',
    },
})

export default MainPage
