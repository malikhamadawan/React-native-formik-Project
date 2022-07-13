import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {Formik} from 'formik';
import {NavHeader} from '../../components/NavHeader';
import Theme from '../../../Theme/Theme';
import {AppInput} from '../../components/AppInput';
import {moderateScale} from '../../../Theme/Dimensions';
import {AppBtn} from '../../components/AppBtn';
import {
  loginInitialValues,
  loginValidationSchema,
} from '../../components/validation';
import {Picker} from '../../components/Picker';
const {height, width} = Dimensions.get('window');

export const CreateAccount = ({navigation}) => {
  const [isActive, setActive] = useState(false);
  const [show, setShow] = useState(true);
  const showHidePassword = () => {
    setShow(!show);
  };
  const [checked, setChecked] = useState(true);

  const showPassword = () => {
    setChecked(!checked);
  };
  return (
    <View style={style.header}>
      <ScrollView>
        <NavHeader
          leftPressed={() => {
            navigation.navigate('LogIn');
          }}
          leftIc={'arrow-back'}
          source={require('../../assets/AppLogo.png')}
        />
        <View style={style.imgView}>
          <Text style={style.textStyle}>Create Account</Text>
          <Text
            style={{
              color: '#7681A5',
            }}>
            Create an account to access ELA
          </Text>
        </View>

        <Formik
          initialValues={loginInitialValues}
          validationSchema={loginValidationSchema}
          onSubmit={values => console.log(values)}>
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
              {/* Name */}

              <View style={style.mainEmailView}>
                <View style={style.nameView}>
                  <Text style={style.nameTextStyle}>Name</Text>
                  <AppInput
                    placeholder={'You Name'}
                    placeholderTextColor={'gray'}
                    keyboardType="email-address"
                    rightIc={'ios-person'}
                    color={'black'}
                  />
                </View>
                {/* Email */}
                <View style={style.emailView}>
                  <Text style={style.emailTextStyle}>Email Address</Text>
                  <AppInput
                    placeholder={'Your Email Address'}
                    placeholderTextColor={'gray'}
                    onChangeText={handleChange('email')}
                    value={values.email}
                    errorMessage={errors.email}
                    touched={touched.email}
                    secureTextEntry={show}
                    leftIc={show ? 'eye-off-sharp' : 'ios-eye-sharp'}
                    rightIc={'ios-lock-closed'}
                    onPress={showHidePassword}
                    color={'black'}
                  />
                </View>

                {/* phone */}
                <View style={style.mainPhoneStyle}>
                  <View style={style.phoneStyle}>
                    <Text style={style.phoneTextStyle}>Phone</Text>
                  </View>
                  <View style={style.mainTextInput}>
                    <View style={style.pickerStyle}>
                      <Picker
                        leftIc={'arrow-drop-down'}
                        rightIc={'ios-person'}
                      />
                    </View>
                    <View
                      style={[
                        style.phoneTextInput,
                        {borderColor: isActive ? 'blue' : 'white'},
                      ]}>
                      <TextInput
                        placeholder="Enter Phone No"
                        placeholderTextColor="gray"
                        onFocus={() => setActive(true)}
                        onBlur={() => setActive(false)}
                        keyboardType="number-pad"
                      />
                    </View>
                  </View>
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
                    rightIc={'ios-lock-closed'}
                    onPress={showHidePassword}
                    color={'black'}
                  />
                </View>
                {/* confrimPassword */}
                <View style={style.confirmPasswordMainView}>
                  <Text style={style.confirmPasswordTextStyle}>
                    Confirm Password
                  </Text>
                  <AppInput
                    placeholder={'Confirm Password'}
                    placeholderTextColor={'gray'}
                    onChangeText={handleChange('confirmPassword')}
                    value={values.confirmPassword}
                    errorMessage={errors.confirmPassword}
                    touched={touched.confirmPassword}
                    secureTextEntry={show}
                    leftIc={checked ? 'eye-off-sharp' : 'ios-eye-sharp'}
                    rightIc={'ios-lock-closed'}
                    onPress={showPassword}
                    color={'black'}
                  />
                </View>
                {/* AppBtn */}
                <View style={style.AppBtnStyle}>
                  <AppBtn
                    txt={'Create'}
                    onPress={handleSubmit}
                    // disabled={!isValid}
                  />
                </View>
                <View style={style.footerStyle}>
                  <Text style={style.footerText}>Already have an account?</Text>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('LogIn');
                    }}>
                    <Text style={style.footerTextStyle}>Login</Text>
                  </TouchableOpacity>
                </View>
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
    height: (height / 100) * 10,
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
    height: (height / 100) * 100,
    width: width,
    // backgroundColor: '#faf',
    alignItems: 'center',
    // justifyContent: 'center',
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
  nameView: {
    height: (height / 100) * 15,
    width: width,
    // backgroundColor: 'green',
    alignItems: 'center',
    // justifyContent: 'flex-end',
  },
  nameTextStyle: {
    fontSize: Theme.fontSizes.medium,
    color: 'black',
    marginRight: moderateScale(340),
    marginBottom: moderateScale(6),
  },
  passwordMainView: {
    height: (height / 100) * 15,
    width: width,
    // backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainTextInput: {
    height: (height / 100) * 11,
    // backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  passwordTextStyle: {
    fontSize: Theme.fontSizes.medium,
    color: 'black',
    marginRight: moderateScale(310),
    marginBottom: moderateScale(8),
  },
  pickerStyle: {
    height: (height / 100) * 11,
    width: (width / 100) * 24,
    // backgroundColor: '#faf',
    alignItems: 'center',
    justifyContent: 'center',
  },
  phoneTextStyle: {
    fontSize: Theme.fontSizes.medium,
    color: 'black',
    marginLeft: moderateScale(20),
  },
  phoneTextInput: {
    height: 50,
    width: (width / 100) * 62,
    backgroundColor: 'white',
    elevation: 10,
    borderWidth: 1.5,
    borderRadius: 6,
    overflow: 'hidden',
  },
  phoneStyle: {
    height: (height / 100) * 3,
    // backgroundColor: 'red',
  },
  mainPhoneStyle: {
    height: (height / 100) * 15,
    width: width,
    // backgroundColor: 'blue',
    // alignItems: 'center',
    // justifyContent: 'space-between',
  },
  forgotStyle: {
    height: (height / 100) * 3,
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
    height: (height / 100) * 7,
    width: width,
    // backgroundColor: 'orange',
    justifyContent: 'flex-end',
  },
  footerStyle: {
    height: (height / 100) * 5,
    // backgroundColor: 'red',
    // alignItems: 'flex-end',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  footerTextStyle: {
    color: '#114D96',
    fontSize: Theme.fontSizes.medium,
    fontWeight: 'bold',
    marginTop: moderateScale(8),
  },
  footerText: {
    color: '#7681A5',
    marginTop: moderateScale(8),
  },
  confirmPasswordMainView: {
    height: (height / 100) * 16,
    width: width,
    // backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirmPasswordTextStyle: {
    fontSize: Theme.fontSizes.medium,
    color: 'black',
    marginRight: moderateScale(250),
    marginBottom: moderateScale(8),
  },
});
