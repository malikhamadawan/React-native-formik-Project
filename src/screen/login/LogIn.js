import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Formik} from 'formik';
import Theme from '../../../Theme/Theme';
import {AppInput} from '../../components/AppInput';
import {moderateScale} from '../../../Theme/Dimensions';
import {AppBtn} from '../../components/AppBtn';
import {
  loginInitialValues,
  loginValidationSchema,
} from '../../components/validation';
import {BooleanSchema} from 'yup';
import {Button} from '../../components/Button';
const {height, width} = Dimensions.get('window');

export const LogIn = ({navigation}) => {
  const [show, setShow] = useState(true);

  const showHidePassword = () => {
    setShow(!show);
  };

  const onPressLogin = e => {
    navigation.replace('HomeScreen');
  };
  return (
    <View style={style.header}>
      <ScrollView>
        <View style={style.imgView}>
          <Image
            source={require('../../assets/AppLogo.png')}
            style={style.imgStyle}
          />
          <Text style={style.textStyle}>Welcome Back!</Text>
          <Text
            style={{
              color: '#7681A5',
            }}>
            Log in to your existing account
          </Text>
        </View>
        <Formik
          initialValues={loginInitialValues}
          validationSchema={loginValidationSchema}
          onSubmit={values => {
            onPressLogin(values);
          }}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isValid,
            touched,
            onBlur,
            onFocus,
          }) => (
            <>
              {/* Email */}
              <View style={style.mainEmailView}>
                <View style={style.emailView}>
                  <Text style={style.emailTextStyle}>Email Address</Text>
                  <AppInput
                    placeholder={'You Email Address'}
                    placeholderTextColor={'gray'}
                    onChangeText={handleChange('email')}
                    value={values.email}
                    keyboardType="email-address"
                    errorMessage={errors.email}
                    touched={touched.email}
                    rightIc={values.email.length > 0 ? null : 'mail'}
                    color={'black'}
                  />
                </View>
                {/* Password */}
                <View style={style.passwordMainView}>
                  <Text style={style.passwordTextStyle}>Password</Text>
                  <AppInput
                    placeholder={'Your Password'}
                    placeholderTextColor={'gray'}
                    onChangeText={handleChange('password')}
                    value={values.password}
                    errorMessage={errors.password}
                    touched={touched.password}
                    secureTextEntry={show}
                    leftIc={show ? 'eye-off-sharp' : 'ios-eye-sharp'}
                    rightIc={
                      values.password.length > 0 ? null : 'ios-lock-closed'
                    }
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onPress={showHidePassword}
                    color={'black'}
                  />
                </View>
                <View style={style.forgotStyle}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('ResetPassword');
                    }}>
                    <Text style={style.forgotTextStyle}>Forgot Password?</Text>
                  </TouchableOpacity>
                </View>
              </View>
              {/* AppBtn */}
              <View style={style.AppBtnStyle}>
                <AppBtn
                  leftPress={() => {
                    navigation.navigate('OtpScreen');
                  }}
                  txt={'Login'}
                  onPress={handleSubmit}
                />
              </View>

              {/* login with */}
              <View style={style.middleVStyle}>
                <View style={style.leftLineStyle} />
                <View style={style.middleTextViewStyle}>
                  <Text style={style.middleTextStyle}>Or Login with</Text>
                </View>
                <View style={style.RightLineStyle} />
              </View>
              <View style={style.ButtonStyle}>
                {/* Button1 */}
                <View style={style.ButtonOneStyle}>
                  <Button color={'black'} ic={'logo-apple'} txt={'Apple'} />
                </View>

                {/* Button2 */}
                <View style={style.ButtonTwoStyle}>
                  <Button color={'red'} ic={'logo-google'} txt={'Google'} />
                </View>
              </View>
              <View style={style.footerStyle}>
                <Text style={style.footerText}>Don't have an account?</Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('CreateAccount');
                  }}>
                  <Text style={style.footerTextStyle}>Signup</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: 'white',
  },
  imgView: {
    height: (height / 100) * 20,
    // backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgStyle: {
    height: 50,
    width: 50,
  },
  textStyle: {
    fontSize: Theme.fontSizes.xxbig,
    fontWeight: 'bold',
    color: 'black',
  },
  mainEmailView: {
    height: (height / 100) * 37,
    width: width,
    // backgroundColor: '#faf',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emailView: {
    height: (height / 100) * 15,
    width: width,
    // backgroundColor: 'green',
    alignItems: 'center',
    // justifyContent: 'flex-end',
  },
  emailTextStyle: {
    fontSize: Theme.fontSizes.medium,
    color: 'black',
    marginRight: moderateScale(280),
    marginBottom: moderateScale(6),
  },
  passwordMainView: {
    height: (height / 100) * 15,
    width: width,
    // backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  passwordTextStyle: {
    fontSize: Theme.fontSizes.medium,
    color: 'black',
    marginRight: moderateScale(310),
    marginBottom: moderateScale(8),
  },
  forgotStyle: {
    height: (height / 100) * 5,
    width: width,
    // backgroundColor: 'red',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  forgotTextStyle: {
    fontSize: Theme.fontSizes.medium,
    fontWeight: 'bold',
    marginRight: moderateScale(20),
    color: '#114D96',
  },
  AppBtnStyle: {
    height: (height / 100) * 9,
    width: width,
    // backgroundColor: 'red',
    justifyContent: 'flex-end',
  },
  leftLineStyle: {
    height: (height / 100) * 6,
    width: (width / 100) * 30,
    // backgroundColor: 'blue',
    borderBottomWidth: moderateScale(1),
    marginLeft: moderateScale(25),
    borderBottomColor: '#7681A5',
  },
  middleVStyle: {
    height: (height / 100) * 7,
    width: width,
    // backgroundColor: 'red',
    flexDirection: 'row',
  },
  middleTextViewStyle: {
    height: (height / 100) * 8,
    width: (width / 100) * 25,
    // backgroundColor: 'green',
    marginLeft: moderateScale(10),
  },
  middleTextStyle: {
    fontSize: Theme.fontSizes.medium,
    color: '#7681A5',
    marginTop: moderateScale(27),
    marginLeft: moderateScale(1),
  },
  RightLineStyle: {
    height: (height / 100) * 6,
    width: (width / 100) * 30.4,
    // backgroundColor: 'blue',
    borderBottomWidth: moderateScale(1),
    // marginLeft: moderateScale(5),
    // marginRight: moderateScale(17),
    borderBottomColor: '#7681A5',
  },
  ButtonStyle: {
    height: (height / 100) * 10,
    width: width,
    // backgroundColor: 'red',
    flexDirection: 'row',
  },
  ButtonOneStyle: {
    height: (height / 100) * 13,
    width: (width / 100) * 50,
    // backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonTwoStyle: {
    height: (height / 100) * 13,
    width: (width / 100) * 50,
    // backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerStyle: {
    height: (height / 100) * 12,
    // backgroundColor: 'red',
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  footerTextStyle: {
    color: '#114D96',
    fontSize: Theme.fontSizes.medium,
    fontWeight: 'bold',
  },
  footerText: {
    color: '#7681A5',
  },
});
