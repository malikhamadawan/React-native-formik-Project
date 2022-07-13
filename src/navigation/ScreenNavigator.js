import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LogIn} from '../screen/login/LogIn';
import {OtpScreen} from '../screen/otpScreen/OtpScreen';
import {CreatePassword} from '../screen/createPassword/CreatePassword';
import {ResetPassword} from '../screen/resetPassword/ResetPassword';
import {CreateAccount} from '../screen/createAccount/CreateAccount';
import { SplashScreen } from '../screen/splashScreen/SplashScreen';
const Stack = createNativeStackNavigator();

const ScreenNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LogIn"
          component={LogIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreatePassword"
          component={CreatePassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OtpScreen"
          component={OtpScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default ScreenNavigator;
