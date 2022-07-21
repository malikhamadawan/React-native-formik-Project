import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LogIn} from '../screen/login/LogIn';
import {OtpScreen} from '../screen/otpScreen/OtpScreen';
import {CreatePassword} from '../screen/createPassword/CreatePassword';
import {ResetPassword} from '../screen/resetPassword/ResetPassword';
import {CreateAccount} from '../screen/createAccount/CreateAccount';
import {SplashScreen} from '../screen/splashScreen/SplashScreen';
import TabNavigator from './TabNavigator';
import {List} from '../screen/list/List';
import {AddLawayer} from '../screen/addLawayer/AddLawayer';
import { Dummy } from '../screen/dummy/Dummy';
import { LawyerInfo } from '../screen/lawyerInfo.js/LawyerInfo';
import { Dummy1 } from '../screen/dummy/Dummy1';
const Stack = createNativeStackNavigator();

const ScreenNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Dummy1"
          component={Dummy1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LawyerInfo"
          component={LawyerInfo}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dummy"
          component={Dummy}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="HomeScreen"
          component={TabNavigator}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="LogIn"
          component={LogIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddLawayer"
          component={AddLawayer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="List"
          component={List}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreatePassword"
          component={CreatePassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
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
