import { NavigationContainer } from '@react-navigation/native'
import { Stack } from 'expo-router'
import React from 'react'
import MovieScreen from '../movieScreen'

export default function AppNavigation() {
  
    return (

        <Stack>
            <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen}/>
            <Stack.Screen name="movie" options={{headerShown: false}} component={MovieScreen}/>
        </Stack>

    )
  }
