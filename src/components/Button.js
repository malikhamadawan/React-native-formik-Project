import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Theme from '../../Theme/Theme';
export const Button = ({txt, onPress, disabled, color, ic}) => {
  return (
    <View style={[style.mainView]}>
      <TouchableOpacity
        onPress={onPress}
        style={[style.touchableView, {backgroundColor: color}]}
        disabled={disabled}>
        <Ionicons name={ic} size={25} color={'#7681A5B3'} />
        <Text style={style.text}>{txt}</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  mainView: {
    // backgroundColor: '#faf',
    width: '100%',
    // height : '100%',
    alignItems: 'center',
  },
  touchableView: {
    backgroundColor: '#114D96',
    height: 55,
    width: '75%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderColor: 'black',
    flexDirection :'row',
  },
  text: {
    color: '#fff',
    fontSize: Theme.fontSizes.medium,
  },
});
export default style;
