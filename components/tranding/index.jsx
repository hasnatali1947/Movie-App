import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { useContext } from 'react';
import { AppContext } from "../../context/themeContext";

export default function Tranding({ trandingMoviesList, navigation }) {
    const Img500 = path => path ? `https://image.tmdb.org/t/p/w500${path}` : null;

    const { handleSimilarMoviesApi, handleCreditsMoviesApi, handleMovieDetailApi, 
        similarMovieDetails, creditsDetails, trandMovieDetails} = useContext(AppContext);

    console.log("user :::: ", handleSimilarMoviesApi, handleCreditsMoviesApi, handleMovieDetailApi, 
    similarMovieDetails, creditsDetails, trandMovieDetails);

    const handleClick = async (item) => {
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
    };

    useEffect(() => {
        if (trandMovieDetails) {
        }
    }, [trandMovieDetails]);

    var { width, height } = Dimensions.get('window')

    return (
        <View style={styles.Container}>

            <Text style={styles.TrandingText}>Trending</Text>
            <ScrollView
                horizontal
                contentContainerStyle={styles.scrollContainer}
            >
                <View style={styles.imageWrapper}>
                    {trandingMoviesList?.map((item, index) => (
                        <TouchableOpacity
                            key={item.id} 
                            onPress={() => handleClick(item)}
                        >
                            <Image
                                style={[styles.image, { width: width * 0.4, height: height * 0.3 }]}
                                source={{
                                    uri: Img500(item?.poster_path) || 'https://via.placeholder.com/500',
                                }}
                                onError={(e) => console.error('Image Load Error:', e.nativeEvent.error)}
                            />
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
        padding: 10
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
