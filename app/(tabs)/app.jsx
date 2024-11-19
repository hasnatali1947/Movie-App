import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MovieScreen from '../../components/movieScreen';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="movie"
          component={MovieScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={MovieScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};