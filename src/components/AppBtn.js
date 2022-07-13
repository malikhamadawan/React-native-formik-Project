import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export const AppBtn = ({txt, onPress, disabled,leftPress}) => {
  return (
    <View style={[style.mainView]}>
      <TouchableOpacity
        onPress={onPress}
        style={style.touchableView}
        disabled={disabled}>
        <Text style={style.text}>{txt}</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  mainView: {
    // backgroundColor: '#faf',
    width: '100%',
    alignItems: 'center',
  },
  touchableView: {
    backgroundColor: '#114D96',
    height: 50,
    width: '85%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderColor: 'black',
  },
  text: {
    color: '#fff',
  },
});
export default style;
