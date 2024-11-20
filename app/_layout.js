import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from "./index"
import Movie from "./movie"
import Search from "../components/searchScreen/index"
import { useColorScheme } from '@/hooks/useColorScheme';
import { AppProvider } from '../context/themeContext';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <AppProvider>

      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack.Navigator >
          <Stack.Screen
            name="Tranding"
            component={Main}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Movie"
            component={Movie}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Search"
            component={Search}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
        <StatusBar style="light" />
      </ThemeProvider>
    </AppProvider>
  );
}
