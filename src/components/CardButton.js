import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {moderateScale} from '../../Theme/Dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Theme from '../../Theme/Theme';
export const CardButton = ({txt, onPress, disabled, leftPress, ic}) => {
  return (
    <View style={style.mainView}>
      <TouchableOpacity
        onPress={onPress}
        style={style.touchableView}
        disabled={disabled}>
        <Text style={style.text}>{txt}</Text>
        <View style={style.iconStyle}>
          <Ionicons name={ic} color={'white'} size={30} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  mainView: {
    // backgroundColor: '#faf',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: moderateScale(10),
  },
  touchableView: {
    backgroundColor: '#114D96',
    height: 45,
    width: '85%',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 6,
    borderColor: 'black',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  iconStyle: {
    // backgroundColor: '#faf',
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    marginLeft: moderateScale(30),
    fontSize: Theme.fontSizes.xmedium,
  },
});
export default style;
