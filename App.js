import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import NfcManager, {NfcTech} from 'react-native-nfc-manager';
import NavigationScreen from './src/navigation/NavigationScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import NFCScreen from './src/component/test';



// NfcManager.start();
const Stack = createStackNavigator()
function App() {
  return (
<NavigationScreen/>
  );
}
export default App;
