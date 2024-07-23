import { View, Text } from 'react-native'
import React from 'react'
import { NativeBaseProvider } from 'native-base'
import Navigation from './src/navigation/Navigation'

const App = () => {
  return (

   <NativeBaseProvider>
    <Navigation/>
   </NativeBaseProvider>
  )
}

export default App