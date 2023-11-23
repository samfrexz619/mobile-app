import React, { useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location'
import Tabs from './src/components/Tabs';



export default function App() {

  const [loading, setLoading] = useState(false)
  const [location, setLocation] = useState({})
  const [error, setError] = useState('')

  useEffect(()=> {
    (async()=> {
      const { status } = await Location.requestForegroundPermissionsAsync()
      if(status !== 'granted'){
        setError('permission to access location was denied')
        return
      }
      const location = await Location.getCurrentPositionAsync({})
      setLocation(location)
    })()
  }, [])

  if(location) {
    console.log(location)
  }

  if(loading) {
    return(
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={'blue'}/>
      </View>
    )
  }

  return (
    <NavigationContainer>
     <Tabs  />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  }
})
