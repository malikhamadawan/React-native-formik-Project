import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import {Dummy} from '../screen/dummy/Dummy';
import {Dummy1} from '../screen/dummy/Dummy1';
import {Dummy2} from '../screen/dummy/Dummy2';
import DrawerNavigator from './DrawerNavigator';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#114D96',
        tabBarInactiveTintColor: 'grey',
        tabBarShowLabel: false,
        // tabBarStyle: {backgroundColor: 'red'},
      }}>
      <Tab.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Octicons name="apps" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Dummy"
        component={Dummy}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icons name="md-search-outline" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Dummy1"
        component={Dummy1}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icons name="notifications-outline" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Dummy2"
        component={Dummy2}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icons name="ios-person-outline" color={color} size={22} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigator;
