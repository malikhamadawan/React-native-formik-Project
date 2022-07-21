import React, {useState, useRef} from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';
import Theme from '../../../Theme/Theme';
import {moderateScale} from '../../../Theme/Dimensions';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {NavHeader} from '../../components/NavHeader';
import {Otp} from '../../components/Otp';
import {AppBtn} from '../../components/AppBtn';
import style from '../../components/AppInput';
const {height, width} = Dimensions.get('window');
export const OtpScreen = ({navigation}) => {
  const [code, setCode] = useState(false);
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
        leftPressed={() => {
          navigation.navigate('LogIn');
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
      <View style={styles.OtpMainView}>
        <OTPInputView
          style={{width: '95%', height: 200}}
          pinCount={4}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
        />
      </View>
      <AppBtn
        txt={'Submit'}
        onPress={() => {
          navigation.navigate('CreatePassword');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  underlineStyleBase: {
    width: 70,
    height: 70,
    borderWidth: 2,
    borderRadius: 5,
    color: 'black',
  },
  OtpMainView: {
    width: width,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },

  underlineStyleHighLighted: {
    borderColor: '#114D96',
  },
  imgView: {
    height: (height / 100) * 15,
    // backgroundColor: 'blue',
    alignItems: 'center',
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
