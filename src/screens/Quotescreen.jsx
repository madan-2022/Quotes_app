import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
import { Center, Button, Box } from 'native-base';
import * as Animatable from 'react-native-animatable';


const categories = [
  'age', 'alone', 'amazing', 'anger', 'architecture', 'art', 'attitude', 'beauty', 
  'best', 'birthday', 'business', 'car', 'change', 'communication', 'computers', 
  'cool', 'courage', 'dad', 'dating', 'death', 'design', 'dreams', 'education', 
  'environmental', 'equality', 'experience', 'failure', 'faith', 'family', 
  'famous', 'fear', 'fitness', 'food', 'forgiveness', 'freedom', 'friendship', 
  'funny', 'future', 'god', 'good', 'government', 'graduation', 'great', 
  'happiness', 'health', 'history', 'home', 'hope', 'humor', 'imagination', 
  'inspirational', 'intelligence', 'jealousy', 'knowledge', 'leadership', 
  'learning', 'legal', 'life', 'love', 'marriage', 'medical', 'men', 'mom', 
  'money', 'morning', 'movies', 'success'
];

const Quotescreen = () => {
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [emotion, setEmotion] = useState('inspire');
  const [initialLoadError, setInitialLoadError] = useState(false);


  const fetchQuote = async (emotion) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`https://api.api-ninjas.com/v1/quotes?category=${emotion}`, {
        headers: { 'X-Api-Key': 'p8D6YXnl8N2CbFQ1yJaxEA==AXBnd95kGLfn5Juw' },
      });
      if (response.data && response.data.length > 0) {
        setQuote(response.data[0].quote);
        setInitialLoadError(false);
      } else {
        setQuote('No quote available for this category.');
        setInitialLoadError(true);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote(emotion);
  }, [emotion]);

  const handleQuoteChange = () => {
    fetchQuote(emotion);
  };

  return (
    <Center w="100%" h="100%" bg="white">
      <Animatable.View animation="fadeIn" duration={1000} style={styles.container}>
        <Text style={styles.title}>Quotes</Text>
        <Picker
          selectedValue={emotion}
          style={styles.picker}
          onValueChange={(itemValue) => setEmotion(itemValue)}
        >
          {categories.map((category) => (
            <Picker.Item key={category} label={category.charAt(0).toUpperCase() + category.slice(1)} value={category} />
          ))}
        </Picker>
        <Box style={styles.quoteBox}>
          {isLoading ? (
            <ActivityIndicator size="large" color="#0D0D93" />
          ) : (
            <Animatable.Text animation="fadeInUp" duration={1500} style={styles.quote}>
              {quote}
            </Animatable.Text>
          )}
        </Box>
        <Button mt="5" colorScheme="indigo" bg="#0D0D93" onPress={handleQuoteChange} style={styles.button}>
          Change Quote
        </Button>
      </Animatable.View>
    </Center>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0D0D93',
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
  },
  quoteBox: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 3,
    marginVertical: 20,
  },
  quote: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
  },
  button: {
    borderRadius: 10,
    padding: 10,
  },
});

export default Quotescreen;
