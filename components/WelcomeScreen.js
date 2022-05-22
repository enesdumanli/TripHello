import React, { useEffect } from 'react'
import { StyleSheet, Text, ImageBackground, View } from 'react-native'
import Triphello from '../utils/triphello.svg'
const WelcomeScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('MainPage')
        }, 2000)
    }, [])

    return (
        <View
            style={{
                height: '100%',
                flex: 1,
            }}
        >
            <ImageBackground
                style={{
                    flex: 1,
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
                source={require('../utils/wallpaper.jpg')}
            >
                {/* <Triphello /> */}
                <Text
                    style={{
                        color: 'rgb(128, 159, 209)',
                        textAlign: 'center',
                        top: 100,
                        fontSize: 36,
                        fontWeight: 'bold',
                        fontFamily: 'sans-serif-condensed',
                    }}
                >
                    TripHello
                </Text>
                <Triphello style={{ bottom: '55%' }} width={140} height={140} />
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 140,
        left: 20,
        height: 140,
        marginTop: 50,
        marginBottom: 50,
        borderRadius: 250,
    },
})

export default WelcomeScreen
