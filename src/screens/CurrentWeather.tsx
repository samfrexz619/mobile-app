import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons'

const CurrentWeather =()=> {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Feather name='sun' color={'white'} size={100} />
        {/* <Text>Current Weather</Text> */}
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>feels like 5</Text>
        <View style={styles.highlowWrapper}>
          <Text style={styles.highLow}>High: 8 </Text>
          <Text style={styles.highLow}>Low: 6</Text>
        </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.desc}>It&apos;s sunny</Text>
        <Text style={styles.msg}>It&apos;s perfect t-shirt weather</Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    backgroundColor: '#133E53',
    flex: 1,
  },
  temp: {
    fontSize: 40,
    color: '#fff',
    // paddingTop: 20
  },
  feels: {
    fontSize: 27,
    color: '#fff'
  },
  highLow: {
    fontSize: 18,
    color: '#fff'
  },
  highlowWrapper: {
    flexDirection: 'row',
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 20,
    marginBottom: 40,
  },
  desc: {
    fontSize: 30,
    color: '#fff'
  },
  msg: {
    fontSize: 18,
    color: '#fff'
  },
});

export default CurrentWeather;