import React from "react";
import { View, Text, StyleSheet, StyleProp, TextStyle } from "react-native";
import { Feather } from '@expo/vector-icons'



interface IconTextProps {
  iconName: 'user' | 'sunrise' | 'sunset';
  iconColor: string;
  bodyText: string;
  bodyTextStlyes: StyleProp<TextStyle>
}


const IconText = ({ iconName, iconColor, bodyText, bodyTextStlyes }:IconTextProps) => {

  return ( 
    <View style={styles.container}>
       <Feather name={iconName} size={50} color={iconColor} />
       <Text style={[styles.textTheme, bodyTextStlyes]}>
        { bodyText }
       </Text>
    </View>
   );
}
 
const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  textTheme: {
    fontWeight: 'bold',
  }
})
export default IconText;