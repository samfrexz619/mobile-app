import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons'



type ListProps = {
  dt_txt: string;
  min: number;
  max: number;
  condition?: string;
}

const ListItem = ({ dt_txt, min, max }: ListProps) => {

  const { date, temp, item } = styles
  return ( 
    <View style={item}>
      <Feather name='sun' color={'white'} size={40} />
      <Text style={date}>{ dt_txt }</Text>
      <Text style={temp}>{ min }</Text>
      <Text style={temp}>{ max }</Text>
      {/* <Text>{ condition}</Text> */}
    </View>
   );
}
 

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    backgroundColor: 'pink',
  },
  temp: {
    color: '#fff',
    fontSize: 20,
  },
  date: {
    color: '#fff',
    fontSize: 15
  }
})
export default ListItem;