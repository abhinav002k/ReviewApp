import React, { useState, useEffect } from 'react';
import { StatusBar, StyleSheet, View, Platform } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { globalStyles } from './styles/global';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import About from './screens/About';
import 'react-native-gesture-handler';
import HomeStack from './route/HomeStack';
import AboutStack from './route/AboutStack';


const Drawer = createDrawerNavigator();

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'Caveat-regular': require('./assets/fonts/Caveat-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
});



export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    getFonts().then(() => setFontsLoaded(true)).catch((err) => console.warn(err));
  }, []);

  if (fontsLoaded) {
    return (
      <View style={{ flex: 1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
        {/* <NavigationContainer>
          <Drawer.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: '#3E2F5B', // Background color for the header
              },
              headerTintColor: '#fff', // Text color for the header
              headerTitleStyle: {
                fontWeight: 'bold', // Font weight for the header title
              },
            }}
          >
            <Drawer.Screen name="Reviews" component={HomeStack} />
            <Drawer.Screen name="About" component={AboutStack} />
          </Drawer.Navigator>
        </NavigationContainer> */}



        <NavigationContainer>
          <Drawer.Navigator
            screenOptions={{
              headerShown: false, // Hide the drawer header
            }}
          >
            <Drawer.Screen name="Review" component={HomeStack} />
            <Drawer.Screen name="About" component={AboutStack} />
          </Drawer.Navigator>
        </NavigationContainer>


      </View>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={(err) => console.warn(err)}
        
      />
    );
  }
}
