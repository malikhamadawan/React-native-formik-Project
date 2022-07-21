import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Theme from '../../../Theme/Theme';
export const Dummy1 = () => {
  return (
    <View style={style.mainView}>
      <Text style={style.text}>Dummy</Text>
    </View>
  );
};

const style = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: Theme.fontSizes.xbig,
    color: 'black',
  },
});
export default style;