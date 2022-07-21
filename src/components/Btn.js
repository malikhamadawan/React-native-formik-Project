import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {moderateScale} from '../../Theme/Dimensions';
import Theme from '../../Theme/Theme';
export const Btn = ({txt, onPress, disabled, color, ic}) => {
  return (
    <View style={[style.mainView]}>
      <TouchableOpacity
        onPress={onPress}
        style={[style.touchableView, {backgroundColor: color}]}
        disabled={disabled}>
        <Ionicons name={ic} size={25} color={'white'} />
        <Text style={style.text}>{txt}</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  mainView: {
    // backgroundColor: '#faf',
    width: '42%',
    alignItems: 'flex-end',
  },
  touchableView: {
    // backgroundColor: '#114D96',
    height: 50,
    width: '85%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderColor: 'black',
    flexDirection: 'row',
    marginTop: moderateScale(7),
    marginRight: moderateScale(10),
  },
  text: {
    color: '#fff',
    fontSize: Theme.fontSizes.medium,
    marginLeft: moderateScale(6),
  },
});
export default style;
