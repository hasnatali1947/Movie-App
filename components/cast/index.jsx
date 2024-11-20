import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import movie from './../../assets/images/movie.jpg';

export default function Cast({ creditsDetails, castData }) {

 const Img185 = path => path? `https://image.tmdb.org/t/p/w185/${path}` : null

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Top Casts</Text>
            <ScrollView horizontal contentContainerStyle={styles.scrollView}>
                <View style={styles.castRow}>
                {creditsDetails?.cast?.map((item, index) => (
                        <View style={styles.castContainer} key={index}>
                            <View style={styles.castImgView}>
                                {/* If profile_path exists, use it for the image */}
                                <Image 
                                    style={styles.castImages} 
                                    source={{ uri: Img185(item.profile_path) }} 
                                />
                            </View>
                            {/* Show character name and actor's name */}
                            <Text style={styles.CharName}>
                                {item.character?.length > 9 ? item.character.slice(0, 9) + '...' : item.character}
                            </Text>
                            <Text style={styles.perName}>
                                {item.original_name?.length > 9 ? item.original_name.slice(0, 9) + '...' : item.original_name}
                            </Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: "white",
    },
    scrollView: {
        paddingRight: 20,
    },
    castRow: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    castContainer: {
        alignItems: 'center',
        marginBottom: 15,
        marginRight: 12,
    },
    castImgView: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    },
    castImages: {
        width: 70, 
        height: 70, 
        borderRadius: 35, 
        borderWidth: 2,
        borderColor: '#27777a',
    },
    castName: {
        marginTop: 5,
        fontSize: 12,
        textAlign: 'center',
    },
    CharName: {
        fontSize: 15,
        fontWeight: 'bold',
        color: "white",
    },
    perName: {
        fontSize: 14,
        marginBottom: 10,
        color: "white",
    },
});
