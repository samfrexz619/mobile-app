import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons'
import moment from "moment";
import { weatherType } from "../utils/weatherType";

type ListProps = {
  dt_txt: string;
  min: number;
  max: number;
  condition?: string;
}

const ListItem = ({ dt_txt, min, max, condition }: ListProps) => {

  const { date, temp, item, dateTextWrapper } = styles
  return ( 
    <View style={item}>
      <Feather name={weatherType[condition].icon} color={'white'} size={40} />
      <View style={dateTextWrapper}>
        <Text style={date}>{ moment(dt_txt).format('dddd') }</Text>
        <Text style={date}>{ moment(dt_txt).format('h:mm:ss a') }</Text>
      </View>
      <Text style={temp}>{`${Math.round(min)}°/${Math.round(max)}°` }</Text>
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
  },
  dateTextWrapper: {
    flexDirection: 'column'
  }
})
export default ListItem;