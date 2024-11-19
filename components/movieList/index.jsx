import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import movie from "./../../assets/images/movie.jpg"

export default function MovieList({ data, title }) {

    var { width, height } = Dimensions.get('window')

    let movieName = "The age of empires The age of empires"


    return (
        <View style={styles.Container}>
            <View style={styles.movieListView}>
                <Text style={styles.UpComingText}>{title}</Text>
                <TouchableOpacity>
                    <Text style={styles.seeAll}>
                        See All
                    </Text>
                </TouchableOpacity>
            </View>
            <ScrollView
                horizontal
                contentContainerStyle={styles.scrollContainer}
            >
                {data.map((item, index) => (
                    <View key={index}>
                        <Image style={[styles.image, { width: width * 0.2, height: height * 0.18 }]} source={movie} />
                        <Text style={{ color: 'white', fontSize: 16 }}>
                            {movieName.length > 13 ? movieName.slice(0, 13) + '...' : movieName}
                        </Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        alignItems: 'center',
    },
    movieListView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginTop: 16,
        height: 50,
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
    },
    UpComingText: {
        color: 'white',
        fontSize: 24
    },

    seeAll: {
        color: '#FFA529',
        fontSize: 24
    },

    image: {
        marginRight: 10,
        borderRadius: 15,
    },
    scrollContainer: {
        paddingLeft: 20,
        paddingRight: 20,
    },

});
