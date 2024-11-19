import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import movie from "./../../assets/images/movie.jpg"
import { useNavigation } from '@react-navigation/native';

export default function Tranding({ data }) {

    const navigation = useNavigation()

    const handleClick = (item) => {
        console.log('Clicked on item:', item);
        navigation.navigate('movie'); 
    
    };

    var { width, height } = Dimensions.get('window')

    return (
        <View style={styles.Container}>
            <Text style={styles.TrandingText}>Trending</Text>
            <ScrollView
                horizontal
                contentContainerStyle={styles.scrollContainer}
            >
                <View style={styles.imageWrapper}>
                    {data.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => handleClick(item)}
                        >
                            <Image style={[styles.image, { width: width * 0.4, height: height * 0.3 }]} source={movie} />
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        alignItems: 'center',
    },
    TrandingText: {
        color: 'white',
        fontSize: 20,
        marginBottom: 10,
    },
    scrollContainer: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    imageWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    image: {
        marginRight: 10,
        borderRadius: 15,
    },
});
