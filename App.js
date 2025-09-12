// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CalculatorScreen from './src/screens/calculator';
import CurrencyConverterScreen from './src/screens/CurrencyScreen';
import Converter from './src/screens/CurrencyScreen';
// import CurrencyListScreen from './src/screens/CurrencyListScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Calculator">
        <Stack.Screen name="Calculator" component={CalculatorScreen} />
        <Stack.Screen name="CurrencyScreen" component={Converter} />
        {/* <Stack.Screen name="CurrencyList" component={CurrencyListScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
