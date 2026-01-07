import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from "expo-font";
import BottomTabs from './navigation/BottomTabs';
import { StatusBar } from 'expo-status-bar';


export default function App() {
  const [loaded] = useFonts({
    Light: require("./assets/fonts/Montserrat-Light.ttf"),
    Regular: require("./assets/fonts/Montserrat-Regular.ttf"),
    Medium: require("./assets/fonts/Montserrat-Medium.ttf"),
    SemiBold: require("./assets/fonts/Montserrat-SemiBold.ttf"),
    Bold: require("./assets/fonts/Montserrat-Bold.ttf"),
  });

  if (!loaded) return null;

  return (
    <SafeAreaProvider>
      <StatusBar style="dark" backgroundColor="#f11885ff" />
      <NavigationContainer>
        <BottomTabs />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
