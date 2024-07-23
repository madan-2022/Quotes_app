import React, { useState } from 'react';
import { Alert } from 'react-native';
import {
  Center,
  VStack,
  FormControl,
  Input,
  Button,
  Box,
  Heading,
} from 'native-base';
import axios from 'axios';

const Firstscreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    if (!username || !password) {
      Alert.alert('Error', 'Please fill in all fields.');
      return false;
    }
  
    return true;
  };

  const handleLogin = async () => {
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const response = await axios.get('http://ptcorp.tranzol.com/MobileApp/MobileUsers/Authenticate?', {
        params: {
          UserName: username,
          Password: password,
        },
      });
      console.log(response.data)

      if (response.data.result.Status) {
        console.log(response.data)
        navigation.navigate('Quote');
      } else {
        Alert.alert('Login Failed', 'Invalid username or password.');
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Center w="100%" background="#FFFFFF" height="100%" justifyContent="start">
      <Box safeArea p="2" w="90%" py="8" marginTop="10">
        <Heading size="xl" color="#0C0C95" fontWeight="bold">
          Login
        </Heading>
        <Heading
          mt="1"
          color="coolGray.600"
          width="75%"
          _dark={{ color: 'warmGray.200' }}
          fontWeight="light"
          size="sm"
        >
          Discover quotes that resonate with your mood and inspire you!
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label _text={{ color: 'black' }}>Username</FormControl.Label>
            <Input
              focusOutlineColor="blue.700"
              value={username}
              onChangeText={setUsername}
              keyboardType="default"
            />
          </FormControl>

          <FormControl>
            <FormControl.Label _text={{ color: 'black' }}>Your Password</FormControl.Label>
            <Input
              type="password"
              focusOutlineColor="blue.700"
              value={password}
              onChangeText={setPassword}
            />
          </FormControl>
          <Button
            mt="2"
            colorScheme="indigo"
            bg="#0D0D93"
            isLoading={isLoading}
            onPress={handleLogin}
          >
            LOGIN
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default Firstscreen;
