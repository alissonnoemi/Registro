import 'react-native-gesture-handler';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';


import React from 'react'
import RegisterScreen from './src/screens/SingUp';

const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <View>
      <RegisterScreen/>
    </View>
    </SafeAreaView>
    
  )
}
export default App;

