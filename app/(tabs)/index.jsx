import { StyleSheet, View, Text, SafeAreaView, StatusBar, Image, ScrollView } from 'react-native';
import search from "./../../assets/icons/search.png"
import bar from "./../../assets/icons/bar.png"
import Tranding from '../../components/tranding';
import { useState } from 'react';
import MovieList from '../../components/movieList';
import MovieScreen from '../../components/movieScreen';
// import MovieScreen from '../../components/MovieScreen';
// import { NavigationContainer } from '@react-navigation/native';

export default function Main() {

  // console.log("navigation", navigation);

  const [tranding, setTranding] = useState([1, 2, 3, 4, 5]);

  const [upcoming, setUpcoming] = useState([1, 2, 3, 4, 5, 6, 7, 8])
  const [topRated, setTopRated] = useState([1, 2, 3, 4, 5, 6, 7, 8])

  return (
    // <NavigationContainer>
      <View style={styles.Container}>

        <ScrollView>

          <SafeAreaView>
            <StatusBar style={'light'} />
            <View>

              <View style={styles.header}>
                <Image style={{ height: 28, width: 28 }} source={bar} />
                <Text style={styles.movieText}>
                  <Text style={{ color: '#FFA529' }}>M</Text>ovie
                </Text>
                <Image style={{ height: 28, width: 28 }} source={search} />
              </View>

              {/* tranding */}

              <Tranding data={tranding} />

              {/* Movie List */}

              <MovieList title='Upcoming' data={upcoming} />

              <MovieList title='Top Rated' data={topRated} />

              <MovieScreen />

            </View>
          </SafeAreaView>
        </ScrollView>
      </View>
    // </NavigationContainer>
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


});
