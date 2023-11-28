import React, {} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import Tabs from './src/components/Tabs';
import { useGetWeather } from './src/hooks/useGetWeather';
import ErrorItem from './src/components/ErrorItem';

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
      {loading 
        ? <ActivityIndicator size={'large'} color={'blue'}/>
        : <ErrorItem  />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  }
})
