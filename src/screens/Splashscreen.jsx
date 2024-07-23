import { View } from 'react-native'
import { useEffect } from 'react'
import React from 'react'
import { Box , Text } from 'native-base'


const Splashscreen = ({navigation}) => {

    useEffect(() => {
        const checkLog = async () => {
          const timer = setTimeout(() => {
           
              navigation.navigate('First');
            
          }, 2000);
    
          return () => clearTimeout(timer);
        };
        checkLog()
    },[])
  return (
  <Box width={'100%'} height={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'} background={'#FFFFFF'}>

    <Text fontSize={'3xl'} fontWeight={'600'}>Quotes App</Text>

  </Box>
  )
}

export default Splashscreen