import 'react-native-gesture-handler';
import React from 'react';

import Home from './pages/Home';
import Oportunidades from './pages/Oportunidades';
import Ingresso from './pages/Oportunidades/Ingressos';
import CuideDaAnsiedade from './pages/Como-voce-estar/Cuide-da-ansiedade';
import MantenhaOEquilibrio from './pages/Como-voce-estar/Mantenha-o-equilibrio';
import UniParticulares from './pages/Vagas/UniParticulares';
import Dicas from './pages/Dicas';
import ComoVoceEsta from './pages/Como-voce-estar';
import Vagas from './pages/Vagas';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UniPublicas from './pages/Vagas/UniPublicas';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="HOME" component={Home}
            options={{
                title: "UNIAQUI",
                headerTintColor: "#6EC7DE"
            }}
            />
            <Stack.Screen name="Oportunidades"component={Oportunidades}
           options={{
            title: "OPORTUNIDADES DE INGRESSO",
            headerTintColor: "#6EC7DE"
        }} 
        />

            <Stack.Screen name="Ingresso"component={Ingresso}
           options={{
            title: "OPORTUNIDADES DE INGRESSO",
            headerTintColor: "#6EC7DE"
              }} 
            />

<Stack.Screen name="Vagas"component={Vagas}
           options={{
            title: "VAGAS NAS UNIVERSIDADES",
            headerTintColor: "#6EC7DE"
              }} 
            />

<Stack.Screen name="ComoVoceEsta"component={ComoVoceEsta}
           options={{
            title: "COMO VOCÊ ESTÁ?",
            headerTintColor: "#6EC7DE"
              }} 
            />

<Stack.Screen name="CuideDaAnsiedade"component={CuideDaAnsiedade}
           options={{
            title: "COMO VOCÊ ESTÁ?",
            headerTintColor: "#6EC7DE"
              }} 
            />

<Stack.Screen name="MantenhaOEquilibrio"component={MantenhaOEquilibrio}
           options={{
            title: "COMO VOCÊ ESTÁ?",
            headerTintColor: "#6EC7DE"
              }} 
            />

<Stack.Screen name="Dicas"component={Dicas}
           options={{
            title: "DICAS DO UNIAQUI",
            headerTintColor: "#6EC7DE"
              }} 
            />
      
      <Stack.Screen name="UniParticulares"component={UniParticulares}
           options={{
            title: "VAGAS NAS UNIVERSIDADES",
            headerTintColor: "#6EC7DE"
              }} 
            />

<Stack.Screen name="UniPublicas"component={UniPublicas}
           options={{
            title: "VAGAS NAS UNIVERSIDADES",
            headerTintColor: "#6EC7DE"
              }} 
            />
        </Stack.Navigator>
    </NavigationContainer>
    
  );
}
