import React, { useCallback, useState } from 'react';
import { View, StyleSheet, TextInput, Text, SafeAreaView, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import cross from "./../../assets/icons/cross.png";
import { useNavigation } from '@react-navigation/native';
import { debounce } from "lodash"
import axios from 'axios';

export default function Search() {
    const { width } = Dimensions.get('window');
    const Img342 = path => path ? `https://image.tmdb.org/t/p/w342/${path}` : null
    const navigation = useNavigation();

    const movieName = "This is Empire Movie of the Ring";

    const [results, setResults] = useState([]);

    const API_KEY = 'fd95ce3e47294b0a395cdaa0eadbaefe'
    const BASE_URL = 'https://api.themoviedb.org/3/search/movie';

    const handleSearch = async (query) => {
        if (!query || query.length <= 2) {
            setResults([]);
            return;
        }
        try {
            const response = await axios.get(BASE_URL, {
                params: {
                    api_key: API_KEY,
                    query,
                    language: "en-US",
                    page: 1,
                    include_adult: false,
                },
            });
            setResults(response.data.results || []);
            console.log("results :", results);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleTextDebounce = useCallback(
        debounce((value) => handleSearch(value), 400),
        []
    );

    return (
        <SafeAreaView style={styles.SearchContainer}>
            <View style={[styles.searchTop, { width: width * 0.9 }]}>
                <TextInput
                    onChangeText={handleTextDebounce}
                    placeholder="Search Movie"
                    placeholderTextColor="lightgray"
                    style={styles.input}
                />

                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconContainer}>
                    <Image source={cross} style={styles.icon} />
                </TouchableOpacity>
            </View>
            <View style={styles.resultView}>
                <Text style={styles.resultText}>Results: {results.length}</Text>
            </View>
            <ScrollView>
                <View style={styles.gridContainer}>
                    {results.map((item, index) => (
                        <View key={index} style={styles.gridItem}>
                            <Image source={{ uri: Img342(item?.poster_path) }} style={styles.movieImage} />
                            <Text style={styles.movieName}>{item?.title}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    SearchContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#27272a',
        padding: 10
    },
    searchTop: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1e1e1e',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'lightgray',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginTop: 20,
    },
    input: {
        flex: 1,
        color: 'white',
        fontSize: 18,
        paddingHorizontal: 10,
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,

    },
    icon: {
        width: 30,
        height: 30,
        tintColor: 'lightgray',
    },
    resultView: {
        alignItems: "flex-start",
        width: "100%",
        paddingLeft: 20,

    },
    resultText: {
        color: 'white',
        marginVertical: 10,
        fontSize: 18,
        marginTop: 20
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    gridItem: {
        width: '48%',
        backgroundColor: '#1e1e1e',
        borderRadius: 10,
        marginBottom: 10,
        padding: 10,
        alignItems: 'center',
    },
    movieImage: {
        width: "100%",
        height: 250,
        borderRadius: 10,
        marginBottom: 5,
    },
    movieName: {
        color: 'white',
        fontSize: 14,
        textAlign: 'center',
    },
});
