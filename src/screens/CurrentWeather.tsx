import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText';

const CurrentWeather =()=> {

  const {wrapper, container, highLow, highlowWrapper, temp, feels} = styles
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name='sun' color={'#000'} size={100} />
        {/* <Text>Current Weather</Text> */}
        <Text style={temp}>6</Text>
        <Text style={feels}>feels like 5</Text>
        <RowText  
          msg='High: 8'
          msg2='Low: 6'
          msgStyles={highLow}
          msg2Styles={highLow}
          containerStyles={highlowWrapper}
        />
      </View>
      <RowText  
        msg='It&apos;s sunny'
        msg2='It&apos;s perfect t-shirt weather'
        msgStyles={styles.desc}
        msg2Styles={styles.msg}
        containerStyles={styles.bodyWrapper}
      />
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
    backgroundColor: 'pink',
    flex: 1,
  },
  temp: {
    fontSize: 40,
    color: '#000',
    // paddingTop: 20
  },
  feels: {
    fontSize: 27,
    color: '#000'
  },
  highLow: {
    fontSize: 18,
    color: '#000'
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
    color: '#000'
  },
  msg: {
    fontSize: 18,
    color: '#000'
  },
});

export default CurrentWeather;