import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Feather } from '@expo/vector-icons';




const ErrorItem = () => {
  return ( 
    <View style={styles.container}>
      <Text style={styles.errMsg}>Sorry sth went wrong!!</Text>
      <Feather name="frown" size={100} color={'#fff'}  />
    </View>
   );
}
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  },
  errMsg: {
    fontSize: 30,
    color: '#fff',
    marginHorizontal: 10,
    textAlign: 'center'
  }
})
export default ErrorItem;