import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import pfp from '../assets/desktop-design-dark.jpg'
import React from 'react'

const StoriesComponent = () => {
    return (
        <ScrollView horizontal style={Styles.ScrollStyle}>
            <Image source={pfp} style={Styles.ImageStyle} />
            <Image source={pfp} style={Styles.ImageStyle} />
            <Image source={pfp} style={Styles.ImageStyle} />
            <Image source={pfp} style={Styles.ImageStyle} />
            <Image source={pfp} style={Styles.ImageStyle} />
            <Image source={pfp} style={Styles.ImageStyle} />
            <Image source={pfp} style={Styles.ImageStyle} />
            <Image source={pfp} style={Styles.ImageStyle} />
        </ScrollView>
    )
}

const Styles = StyleSheet.create({
    ImageStyle: {
        height: 80,
        width: 80,
        borderRadius: 50,
        marginRight: 20,
    },
    ScrollStyle: {
        paddingTop: 10,
        paddingBottom: 5,

    }


})

export default StoriesComponent

