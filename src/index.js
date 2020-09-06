import 'react-native-gesture-handler';
import React from 'react';

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Oportunidades from './pages/Oportunidades';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="HOME" component={Home}
            options={{
                title: "UNIAQUI",
                headerTintColor: "#5DCFEE"
            }}
            />
            <Stack.Screen name="Oportunidades"component={Oportunidades}
           options={{
            title: "OPORTUNIDADES DE INGRESSO",
            headerTintColor: "#5DCFEE"
        }} 
        />
        </Stack.Navigator>
    </NavigationContainer>
    
  );
}
