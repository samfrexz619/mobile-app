import React from 'react'
import { 
  SafeAreaView, 
  StyleSheet, 
  Text, 
  ImageBackground, 
  View,
  StatusBar } from 'react-native'
import moment from 'moment'
import IconText from './IconText'
import { City as CityProp } from '../lib/types'



interface Prop {
  weatherInfo: CityProp;
}

const City = ({ weatherInfo}: Prop) => {

  const {name, population, sunrise, sunset, country} = weatherInfo

  const { 
    cityText, 
    cityName, 
    countryStyle, 
    container,
    image,
    populatnWrapper,
    poplatnText,
    riseSet,
    riseSetText,
    rowLayout
  } = styles

  return (
    <SafeAreaView style={container}>
      <ImageBackground 
        source={require('../../assets/images/city-bg.jpg')}
        style={image}
      >
        <Text style={[cityName, cityText]}>{ name }</Text>
        <Text style={[countryStyle, cityText]}>{ country }</Text>
        <View style={[populatnWrapper, rowLayout]}>
          <IconText 
            iconColor='red' 
            iconName='user' 
            bodyText={`Population: ${population}`} 
            bodyTextStlyes={poplatnText}
          />
        </View>
        <View style={[riseSet, rowLayout]}>
          <IconText 
            iconColor='white' 
            iconName='sunrise' 
            bodyText={moment(sunrise).format('h:mm:ss a')} 
            bodyTextStlyes={riseSetText}
          />
          <IconText 
            iconColor='white' 
            iconName='sunset' 
            bodyText={moment(sunset).format('h:mm:ss a')} 
            bodyTextStlyes={riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    // backgroundColor: '#483d8b',
  },
  image: {
    flex: 1
  },
  cityName: {
    fontSize: 35,
  },
  countryStyle: {
    fontSize: 25
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  populatnWrapper: {
    // flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  poplatnText: {
    fontSize: 20,
    color: 'red',
    marginLeft: 7.5,
  },
  riseSet: {
    // flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 18,
    color: '#fff',
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center'
  },
})
export default City