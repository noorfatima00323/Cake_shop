import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from "expo-font";
import BottomTabs from './navigation/BottomTabs';
import LoginScreen from './screens/LoginScreen';
import { UserProvider } from './context/UserContext';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();


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
      <UserProvider>
        <StatusBar style="dark"  />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Main" component={BottomTabs} />
          </Stack.Navigator>
        </NavigationContainer>
      </UserProvider>
    </SafeAreaProvider>
  );
}
