import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SplashScreen, Stack} from 'expo-router';
import {useEffect} from 'react';
import {useColorScheme} from 'react-native';

import ModalScreen from '../modal';
import TabLayout from './(tabs)/_layout'


// catch any errors thrown by the Layout component.
import ErrorBoundary from '../errorboundary';

const Stack = createNativeStackNavigator();


export const unstable_settings = {
  // ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome,
  });

  // expo router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="(tabs)" component={TabLayout} options={{headerShown: false}} />
          <Stack.Screen name="modal" component={ModalScreen} options={{presentation: 'modal'}} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
