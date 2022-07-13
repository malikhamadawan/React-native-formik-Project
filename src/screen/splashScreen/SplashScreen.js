import React, {useEffect} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import Theme from '../../../Theme/Theme';
export const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('LogIn');
    }, 3000);
  });
  return (
    <View style={style.container}>
      <Image source={require('../../assets/AppLogo.png')} style={style.image} />
      <Text style={style.textStyle}>Employment</Text>
      <Text style={style.textStyle}>Law Alliance</Text>
      <Text style={style.gobalText}>GOBAL HR LEGAL SOLUTIONS</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 150,
    width: 150,
  },
  textStyle: {
    fontSize: Theme.fontSizes.xxbig,
    fontWeight: 'bold',
    color: 'black',
  },
  gobalText: {
    fontSize: Theme.fontSizes.medium,
    color: 'gray',
  },
});
