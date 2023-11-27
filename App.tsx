import React, {} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import Tabs from './src/components/Tabs';
import { useGetWeather } from './src/hooks/useGetWeather';

// http://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

export default function App() {

  const [weather, loading, error] = useGetWeather()

  console.log(weather, loading, error);
  
  if(weather && weather.list) {
    return (
      <NavigationContainer>
       <Tabs weather={weather} />
      </NavigationContainer>
    );
  }

  return(
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={'blue'}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  }
})
