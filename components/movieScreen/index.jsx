
import React from 'react'
import { useState } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, Platform, SafeAreaView } from 'react-native'
import back from "./../../assets/icons/back.png"
import heart from "./../../assets/icons/heart.png"
import heart2 from "./../../assets/icons/heart2.png"
import movie from "./../../assets/images/movie.jpg"
import { LinearGradient } from 'expo-linear-gradient';

export default function MovieScreen() {
  var { width, height } = Dimensions.get('window')
  const ios = Platform.OS === 'ios'
  const topMargin = ios ? '' : ' mt-3'

  const movieName = "this is empire"

  const [fav, setFav] = useState(false)

  return (
    <View style={styles.movieScreenContainer}>

      <SafeAreaView style={[
        styles.movieListHeader,
        !ios && styles.topMargin,
      ]}>
        <Image style={styles.icons} source={back} />
        <TouchableOpacity onPress={() => setFav(!fav)}>
          {fav ? (
            <Image style={styles.icons} source={heart2} />
          ) : (
            <Image style={styles.icons} source={heart} />
          )}
        </TouchableOpacity>
      </SafeAreaView>

      <View style={styles.container}>
          <View>
            <Image style={{ width, height: height * 0.65 }} source={movie} />
          </View>
        <LinearGradient
          colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23, 1)']}
          style={[ styles.linear, { width, height: height * 0.40 }]}
          start={{x: 0.5, y: 0}}
          end={{x: 0.5, y: 1}}
          >
        </LinearGradient>
      </View>

      <View style={[styles.textView, { marginTop: -(height * 0.08) }]}>

            <Text style={styles.movieName}>
              {movieName}
            </Text>
            <Text style={styles.movieRdate}>
              Released . 2020 . 170 min
            </Text>
            <Text style={styles.movieOptions}>
              Action {" "} . {" "} Thrill {" "} . {" "} Comedy
            </Text>
            <Text style={styles.movieDes}>
              Super Hero movie is very best and this is action movie for a log time.
              Super Hero movie is very best and this is action movie for a log time.
              Super Hero movie is very best and this is action movie for a log time.
              Super Hero movie is very best and this is action movie for a log time.
              Super Hero movie is very best and this is action movie for a log time.
              Super Hero movie is very best and this is action movie for a log time.
            </Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  movieScreenContainer: {
    flex: 1,
    backgroundColor: '#27272a',
  },
  movieListHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 30,
  },
  icons: {
    height: 40,
    width: 40
  },
  topMargin: {
    marginTop: 12,
  },


  linear: {
    position: 'absolute',
    bottom: 0
  },

  textView:{
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
    color: "white",
    marginTop: 10,
  },

  movieOptions: {
    fontSize: 18,
    fontWeight: 'condensed',
    color: "white",
    marginTop: 10,
  },

  movieDes: {
    fontSize: 16,
    fontWeight: 'condensed',
    color: "white",
    marginTop: 16,
  },
})
