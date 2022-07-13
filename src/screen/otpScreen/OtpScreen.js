import React, {useState, useRef} from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';
import Theme from '../../../Theme/Theme';
import {moderateScale} from '../../../Theme/Dimensions';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {NavHeader} from '../../components/NavHeader';
import {Otp} from '../../components/Otp';
import { AppBtn } from '../../components/AppBtn';
const {height, width} = Dimensions.get('window');
export const OtpScreen = ({navigation}) => {
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
        leftIc={'arrow-back'}
        source={require('../../assets/AppLogo.png')}
        leftPressed={()=>{
          navigation.navigate('LogIn')
        }}
      />
      <View style={styles.imgView}>
        <Text style={styles.textStyle}>Enter your verification code</Text>
        <Text
          style={{
            color: '#7681A5',
            // maxWidth: 250,
          }}>
          Enter the verification code sent to your
        </Text>
        <Text
          style={{
            color: '#7681A5',
            // maxWidth: 250,
          }}>
          email address
        </Text>
      </View>
      <View
        style={{
          width: width,
          height: 200,
          alignItems: 'center',
          justifyContent: 'center',
          // backgroundColor: 'red',
        }}>
        <OTPInputView
          style={{width: '85%', height: 200}}
          placeholderTextColor={'red'}
          keyboardType={'default'}
          pinCount={4}
          // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          // onCodeChanged = {code => { this.setState({code})}}
          autoFocusOnLoad={false}
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={code => {
            console.log(`Code is ${code}, you are good to go!`);
          }}
        />
      </View>
      <AppBtn txt={'Submit'} />
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
