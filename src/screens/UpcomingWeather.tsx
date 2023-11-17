import React from 'react'
import { StyleSheet, Text, SafeAreaView, FlatList, StatusBar, ImageBackground } from 'react-native'
import ListItem from '../components/ListItem';
import { ItemProps } from '../lib/types';
import { DATA } from '../services/data';


const UpcomingWeather = () => {

  const renderItem = ({ item }: ItemProps)=> (
    <ListItem 
      condition={item?.weather[0].main} 
      dt_txt={item?.dt_txt} min={item?.main.temp_min} 
      max={item?.main.temp_max}
    />
  )

  const { container, image } = styles

  return (
    <SafeAreaView style={container}>
      <ImageBackground 
        source={require('../../assets/images/upcoming-bg.jpg')} 
        style={image}
        >
        <Text>Upcoming Weather</Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'royalblue'
  },
  image: {
    flex: 1,
  }
})
export default UpcomingWeather