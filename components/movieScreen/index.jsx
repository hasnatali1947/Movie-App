
import React from 'react'
import { useState } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, Platform, SafeAreaView, ScrollView } from 'react-native'
import back from "./../../assets/icons/back.png"
import heart from "./../../assets/icons/heart.png"
import heart2 from "./../../assets/icons/heart2.png"
import { LinearGradient } from 'expo-linear-gradient';
import Cast from '../cast'
import MovieList from '../movieList'
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';


export default function MovieScreen() {

  const navigation = useNavigation();
  const route = useRoute();
  const Img500 = path => path ? `https://image.tmdb.org/t/p/w500${path}` : null;

  const { movieDetails, creditsDetails, similarMovieDetails } = route.params;

  var { width, height } = Dimensions.get('window')
  const ios = Platform.OS === 'ios'

  const [fav, setFav] = useState(false)
  const [castData, setCastData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 9,])
  const [hideBtn, setHideBtn] = useState(true)

  return (
    <ScrollView>
      <View style={styles.movieScreenContainer}>

        <SafeAreaView style={[
          styles.movieListHeader,
          !ios && styles.topMargin,
        ]}>

          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.icons} source={back} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setFav(!fav)}>
            {fav ? (
              <Image style={styles.Hearticon} source={heart2} />
            ) : (
              <Image style={styles.Hearticon} source={heart} />
            )}
          </TouchableOpacity>
        </SafeAreaView>

        <View style={styles.container}>
          <View>
            <Image style={{ width, height: height * 0.75 }} source={{ uri: Img500(movieDetails?.poster_path) }} />
          </View>
          <LinearGradient
            colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23, 1)']}
            style={[styles.linear, { width, height: height * 0.40 }]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
          >
          </LinearGradient>
        </View>

        <View style={[styles.textView, { marginTop: -(height * 0.08) }]}>

          <Text style={styles.movieName}>
            {movieDetails?.title}
          </Text>
          <Text style={styles.movieRdate}>
            Released . {movieDetails?.release_date.split('-')[0]} . {movieDetails?.runtime} min
          </Text>


          <Text style={styles.movieDes}>
            {movieDetails?.overview}
          </Text>
          <Cast castData={castData} creditsDetails={creditsDetails}/>
          <MovieList hideBtn={hideBtn} data={similarMovieDetails?.results} title={"Similar Movies"} />
        </View>

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  movieScreenContainer: {
    position: "relative",
    flex: 1,
    backgroundColor: '#27272a',
    paddingBottom: 20
  },
  movieListHeader: {
    position: 'absolute',
    zIndex: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 30,
    width: "100%"
  },
  icons: {
    height: 40,
    width: 40,
  },
  Hearticon: {
    height: 40,
    width: 40,
    right: 0,
    position: "absolute"
  },
  topMargin: {
    marginTop: 12,
  },
  linear: {
    position: 'absolute',
    bottom: 0
  },

  textView: {
    width: '100%',
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },

  movieName: {
    fontSize: 36,
    fontWeight: 'bold',
    color: "white"
  },

  movieRdate: {
    fontSize: 18,
    fontWeight: 'condensed',
    color: "rgba(255, 255, 255, 0.7)",
    marginTop: 10,
  },

  movieOptions: {
    fontSize: 18,
    fontWeight: 'condensed',
    color: "rgba(255, 255, 255, 0.7)",
    marginTop: 10,
  },

  movieDes: {
    fontSize: 16,
    fontWeight: 'condensed',
    color: "rgba(255, 255, 255, 0.7)",
    marginTop: 16,
  }

})
