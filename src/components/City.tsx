import React from 'react'
import { 
  SafeAreaView, 
  StyleSheet, 
  Text, 
  ImageBackground, 
  View,
  StatusBar } from 'react-native'
  import { Feather } from '@expo/vector-icons'


const City = () => {

  const { 
    cityText, 
    cityName, 
    country, 
    container,
    populatnWrapper,
    poplatnText,
    riseSet,
    riseSetText
  } = styles

  return (
    <SafeAreaView style={container}>
      <ImageBackground 
        source={require('../../assets/images/city-bg.jpg')}
        style={styles.image}
      >
        <Text style={[cityName, cityText]}>London</Text>
        <Text style={[country, cityText]}>UK</Text>
        <View style={populatnWrapper}>
          <Feather name='user' size={50} color={'red'} />
          <Text style={poplatnText}>8000</Text>
        </View>
        <View style={riseSet}>
          <Feather name="sunrise" size={50} color="white" />
          <Text style={riseSetText}>10:46:58am</Text>
          <Feather name="sunset" size={50} color="white" />
          <Text style={riseSetText}>17:28:15pm</Text>
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
  country: {
    fontSize: 25
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  populatnWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  poplatnText: {
    fontSize: 20,
    color: 'red',
    marginLeft: 7.5,
    fontWeight: 'bold'
  },
  riseSet: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  }
})
export default City