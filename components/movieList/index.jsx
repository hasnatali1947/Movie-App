import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { AppContext } from "../../context/themeContext";


export default function MovieList({ title, hideBtn, data }) {
    const {
        handleSimilarMoviesApi, handleCreditsMoviesApi, handleMovieDetailApi,
        similarMovieDetails, creditsDetails, trandMovieDetails
        } = useContext(AppContext);

    const navigation = useNavigation();
    var { width, height } = Dimensions.get('window')

    let movieName = "The age of empires The age of empires"

    const Img185 = path => path ? `https://image.tmdb.org/t/p/w185/${path}` : null

    const goToMovieScreen = async (item) => {
        const id = item.id;
        await Promise.all([
            handleMovieDetailApi(id),
            handleCreditsMoviesApi(id),
            handleSimilarMoviesApi(id),
        ]);
        navigation.navigate('Movie', {
            movieDetails: item,
            creditsDetails,
            similarMovieDetails,
        });
    }

    return (
        <View style={styles.Container}>
            <View style={styles.movieListView}>
                <Text style={[styles.UpComingText, hideBtn && { textAlign: 'left', flex: 1 }]}>{title}</Text>
                {!hideBtn &&
                    <TouchableOpacity>
                        <Text style={styles.seeAll}>
                            See All
                        </Text>
                    </TouchableOpacity>
                }
            </View>
            <ScrollView
                horizontal
                contentContainerStyle={styles.scrollContainer}
            >
                {data?.map((item, index) => (
                    <TouchableOpacity onPress={() => goToMovieScreen(item)}>

                        <View key={index}>
                            <Image style={[styles.image, { width: width * 0.2, height: height * 0.18 }]} source={{
                                uri: Img185(item?.poster_path) || 'https://via.placeholder.com/500',
                            }} />
                            <Text style={{ color: 'white', fontSize: 16 }}>
                                {item.title.length > 13 ? movieName.slice(0, 13) + '...' : item.title}
                            </Text>
                        </View>
                    </TouchableOpacity>
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
        marginTop: 16,
        height: 50,
        width: '100%',

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
});
