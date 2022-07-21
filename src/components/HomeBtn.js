import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {moderateScale} from '../../Theme/Dimensions';
import Theme from '../../Theme/Theme';
export const HomeBtn = ({
  txt,
  onPress,
  disabled,
  color,
  ic,
  backgroundColor,
  marginLeft,
  marginTop,
  height,
  width,
}) => {
  return (
    <View
      style={[style.mainView, {height: height}, {width: width}]}>
      <View
        onPress={onPress}
        style={[style.touchableView, {backgroundColor: backgroundColor}]}>
        <Ionicons name={ic} size={25} color={color} />
      </View>
      <Text
        style={[style.text, {marginLeft: marginLeft}, {marginTop: marginTop}]}>
        {txt}
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  mainView: {
    // backgroundColor: '#faf',
    alignItems: 'center',
  },
  touchableView: {
    backgroundColor: 'white',
    height: 60,
    width: '55%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    borderColor: 'black',
    flexDirection: 'row',
    marginTop: moderateScale(30),
    marginLeft: moderateScale(2),
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: Theme.fontSizes.xxmedium,
    marginLeft: moderateScale(22),
    marginTop: moderateScale(10),
    // maxWidth: 300,
  },
});
export default style;
