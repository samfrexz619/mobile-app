import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText';
import { weatherType } from '../utils/weatherType';
import { List } from '../lib/types';




interface Prop {
  weatherInfo: List;
}

const CurrentWeather =({ weatherInfo }: Prop)=> {

  const { main: {temp, feels_like, temp_max, temp_min}, weather} = weatherInfo

  const {wrapper, container, highLow, highlowWrapper, tempStyle, feels} = styles
  
  const weatherCondition = weather[0]?.main

  console.log(weatherCondition);
  

  return (
    <SafeAreaView style={[wrapper, {backgroundColor: weatherType[weatherCondition]?.backgroundColor}]}>
      <View style={container}>
        <Feather 
          name={weatherType[weatherCondition]?.icon} 
          color={'#fff'} 
          size={100} 
        />
        <Text style={tempStyle}>{temp}</Text>
        <Text style={feels}>feels like 5: {feels_like}°</Text>
        <RowText  
          msg={`High: ${temp_max}° `}
          msg2={`Low: ${temp_min}°`}
          msgStyles={highLow}
          msg2Styles={highLow}
          containerStyles={highlowWrapper}
        />
      </View>
      <RowText  
        msg={weather[0]?.description}
        msg2={weatherType[weatherCondition]?.msg}
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
  tempStyle: {
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