import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Splashscreen from '../screens/Splashscreen';
import Firstscreen from '../screens/Firstscreen';
import Quotescreen from '../screens/Quotescreen';


const Navigation = () => {

    const Stack = createNativeStackNavigator()



  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Splash' component={Splashscreen}></Stack.Screen>
        <Stack.Screen name='First' component={Firstscreen}></Stack.Screen>
        <Stack.Screen name='Quote' component={Quotescreen}></Stack.Screen>
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Navigation