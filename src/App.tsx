import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './pages/Home';
import { AppHeader } from './components/header';
import { useEffect, useState } from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';
import { useFonts } from 'expo-font';
import { IBMPlexSansThai_400Regular, IBMPlexSansThai_700Bold } from '@expo-google-fonts/ibm-plex-sans-thai';

const Stack = createNativeStackNavigator();

export default function App() {

  let [fontsLoaded] = useFonts({IBMPlexSansThai_700Bold, IBMPlexSansThai_400Regular});

  // FIXME: landscape dont work in ipad emulator
  const [orientation, setOrientation] = useState(1);
  useEffect(() => {
    lockOrientation();
  }, []);
  const lockOrientation = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
    );
    const o = await ScreenOrientation.getOrientationAsync();
    setOrientation(o);
  };

  if (!fontsLoaded) {
    return null
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        header: ({ navigation }) => <AppHeader />,
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
