// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListaProdutosScreen from './components/ListaProdutosScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='ListaProduto'>
        <Stack.Screen name="ListaProduto" component={ListaProdutosScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;