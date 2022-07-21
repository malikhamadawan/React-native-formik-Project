import React from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';
import Theme from '../../../Theme/Theme';
import {moderateScale} from '../../../Theme/Dimensions';
import {NavHeader} from '../../components/NavHeader';
import {AppBtn} from '../../components/AppBtn';
import {AppInput} from '../../components/AppInput';
const {height, width} = Dimensions.get('window');
export const ResetPassword = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        // flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'center',
      }}>
      <NavHeader
        leftPressed={() => {
          navigation.navigate('LogIn');
        }}
        leftIc={'arrow-back'}
        source={require('../../assets/AppLogo.png')}
      />
      <View style={styles.imgView}>
        <Text style={styles.textStyle}>Reset Password</Text>
        <Text
          style={{
            color: '#7681A5',
            // maxWidth: 250,
          }}>
          Enter the email address associated with your
        </Text>
        <Text
          style={{
            color: '#7681A5',
            // maxWidth: 250,
          }}>
          account and will send you a verification
        </Text>
        <Text
          style={{
            color: '#7681A5',
            // maxWidth: 250,
          }}>
          code
        </Text>
      </View>
      <View
        style={{
          width: width,
          height: 150,
          //   backgroundColor: 'red',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: Theme.fontSizes.medium,
            color: 'black',
            marginRight: moderateScale(280),
            marginBottom: moderateScale(6),
          }}>
          Email Address
        </Text>
        <AppInput placeholder={'Enter your email'} />
      </View>
      <AppBtn txt={'Send Verification Code'} onPress={()=>{
        navigation.navigate('OtpScreen')
      }} />
    </View>
  );
};

const styles = StyleSheet.create({
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: 'blue',
  },

  underlineStyleBase: {
    width: 40,
    height: 50,
    borderWidth: 4,
    // borderWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },
  imgView: {
    height: (height / 100) * 15,
    // backgroundColor: 'blue',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  imgStyle: {
    height: 50,
    width: 50,
  },
  textStyle: {
    fontSize: Theme.fontSizes.xbig,
    fontWeight: 'bold',
    color: 'black',
  },
});
