import React from 'react';
import { StyleSheet, View } from 'react-native';
// import City from './src/components/City';
import CurrentWeather from './src/screens/CurrentWeather';
// import UpcomingWeather from './src/screens/UpcomingWeather';


export default function App() {

  return (
    <View style={styles.container}>
      {/* <City  /> */}
      <CurrentWeather  />
      {/* <UpcomingWeather  /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
