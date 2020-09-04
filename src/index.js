import 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';

import Home from './pages/Home';
import Sobre from './pages/Sobre';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName = "Home">
            <Stack.Screen 
            name="HOME"
            component={Home}
            options={{
                title: "UNIAQUI"
            }}
            />
            <Stack.Screen name="SOBRE"component={Sobre} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
