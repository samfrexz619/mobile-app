import React from 'react'
import { View, Text, StyleProp, TextStyle, ViewStyle } from 'react-native'

interface RowTextProps {
  msg: string;
  msg2: string;
  msgStyles: StyleProp<TextStyle>;
  msg2Styles: StyleProp<TextStyle>;
  containerStyles: StyleProp<ViewStyle>
}

const RowText = (props: RowTextProps) => {

  const { msg, msg2, msgStyles, msg2Styles, containerStyles } = props
  return (
    <View style={containerStyles}>
      <Text style={msgStyles}>{ msg } </Text>
      <Text style={msg2Styles}>{ msg2 }</Text>
    </View>
  )
}

export default RowText