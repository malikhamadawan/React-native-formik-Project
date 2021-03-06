import React, {useState} from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';
import {Formik} from 'formik';
import Theme from '../../../Theme/Theme';
import {AppInput} from '../../components/AppInput';
import {moderateScale} from '../../../Theme/Dimensions';
import {AppBtn} from '../../components/AppBtn';
import {
  createInitialValues,
  createValidationSchema,
} from '../../components/validation';
import {NavHeader} from '../../components/NavHeader';
const {height, width} = Dimensions.get('window');

export const CreatePassword = ({navigation}) => {
  const [show, setShow] = useState(true);

  const showHidePassword = () => {
    setShow(!show);
  };
  const [checked, setChecked] = useState(true);

  const showPassword = () => {
    setChecked(!checked);
  };
  const onPressConfirm = e => {
    navigation.navigate('HomeScreen');
    console.log('hhhh--', onPressConfirm);
  };
  return (
    <View style={style.header}>
      <NavHeader
        leftPressed={() => {
          navigation.navigate('CreateAccount');
        }}
        leftIc={'arrow-back'}
        source={require('../../assets/AppLogo.png')}
      />
      <View style={style.imgView}>
        <Text style={style.textStyle}>Create new password</Text>
        <Text
          style={{
            color: '#7681A5',
          }}>
          Your new password must be different from
        </Text>
        <Text
          style={{
            color: '#7681A5',
          }}>
          your previously used passwords
        </Text>
      </View>
      <Formik
        initialValues={createInitialValues}
        validationSchema={createValidationSchema}
        onSubmit={values => {
          onPressConfirm(values);
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <>
            {/* Email */}
            <View style={style.mainEmailView}>
              <View style={style.passwordView}>
                <Text style={style.passwordTextStyle}>Password</Text>
                <AppInput
                  placeholder={'You Password'}
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
                  onPress={showHidePassword}
                  color={'black'}
                />
              </View>
              {/* Password */}
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
                  secureTextEntry={checked}
                  leftIc={checked ? 'eye-off-sharp' : 'ios-eye-sharp'}
                  rightIc={
                    values.confirmPassword.length > 0 ? null : 'ios-lock-closed'
                  }
                  onPress={showPassword}
                  color={'black'}
                />
              </View>
            </View>
            {/* AppBtn */}
            <View style={style.AppBtnStyle}>
              <AppBtn
                txt={'Confirm'}
                onPress={handleSubmit}
                // disabled={!isValid}
              />
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: 'white',
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
    fontSize: Theme.fontSizes.xxbig,
    fontWeight: 'bold',
    color: 'black',
  },
  mainEmailView: {
    height: (height / 100) * 35,
    width: width,
    // backgroundColor: '#faf',
    alignItems: 'center',
    justifyContent: 'center',
  },
  passwordView: {
    height: (height / 100) * 16,
    width: width,
    // backgroundColor: 'green',
    alignItems: 'center',
  },
  passwordTextStyle: {
    fontSize: Theme.fontSizes.medium,
    color: 'black',
    marginRight: moderateScale(310),
    marginBottom: moderateScale(6),
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
  AppBtnStyle: {
    height: (height / 100) * 9,
    width: width,
    // backgroundColor: 'red',
    justifyContent: 'flex-end',
  },
});
