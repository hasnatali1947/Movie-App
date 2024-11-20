import { StyleSheet, View, Text, SafeAreaView, StatusBar, Image, ScrollView, TouchableOpacity } from 'react-native';
import search from "./../assets/icons/search.png"
import emoji from "./../assets/icons/emoji.png"
import Tranding from '../components/tranding';
import { useEffect, useState } from 'react';
import MovieList from '../components/movieList';
import axios from 'axios';

export default function Main({ navigation }) {

  const apiKey = 'fd95ce3e47294b0a395cdaa0eadbaefe'

  const apiBaseUrl = 'https://api.themoviedb.org/3/'

  const trandingMovies = `${apiBaseUrl}trending/movie/day?api_key=${apiKey}`
  const topRatedMovies = `${apiBaseUrl}movie/top_rated?api_key=${apiKey}`
  const upcomingMovies = `${apiBaseUrl}movie/upcoming?api_key=${apiKey}`

  const [trandingMoviesList, setTrandingMoviesList] = useState(null)
  const [topRatedMoviesList, setTopRatedMoviesList] = useState(null)
  const [upComingMoviesList, setUpComingMoviesList] = useState(null)


  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const trendingResponse = await axios.get(trandingMovies);
        setTrandingMoviesList(trendingResponse.data.results);

        const upcomingResponse = await axios.get(upcomingMovies);
        setUpComingMoviesList(upcomingResponse.data.results);

        const topRatedResponse = await axios.get(topRatedMovies);
        setTopRatedMoviesList(topRatedResponse.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <View style={styles.Container}>

      <ScrollView>

        <SafeAreaView>
          <View>

            <View style={styles.header}>
              <Image style={{ height: 28, width: 28 }} source={emoji} />
              <Text style={styles.movieText}>
                <Text style={{ color: '#FFA529' }}>M</Text>ovie
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Search")}>
                <Image style={{ height: 28, width: 28 }} source={search} />
              </TouchableOpacity>

            </View>

            {/* tranding */}

            <Tranding trandingMoviesList={trandingMoviesList} navigation={navigation} />

            {/* Movie List */}

            <View style={styles.upcomingMovies}>
              <MovieList data={upComingMoviesList} title='Upcoming' />
            </View>

            <View style={styles.upcomingMovies}>
              <MovieList data={topRatedMoviesList} title='Top Rated' />
            </View>

          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#27272a',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 16,
    height: 50,
    width: '100%'
  },

  movieText: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold'
  },

  upcomingMovies: {
    paddingHorizontal: 20
  }
});
