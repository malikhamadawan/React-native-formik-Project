import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeScreen} from '../screen/homeScreen/HomeScreen';
import {Dummy} from '../screen/dummy/Dummy';
import {Dummy1} from '../screen/dummy/Dummy1';
import {CustomDrawer} from '../components/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View, StyleSheet} from 'react-native';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      defaultStatus={'closed'}
      drawerContent={props => <CustomDrawer {...props} />}
      detachInactiveScreens={false}
      screenOptions={{
        drawerActiveBackgroundColor: 'white',
        drawerInactiveTintColor: '#00066',
        drawerActiveTintColor: '#00066',
        drawerLabelStyle: {
          marginLeft: -15,
        },
      }}>
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          drawerIcon: ({color}) => (
            <View style={style.IconMainStyle}>
              <Ionicons name="person-outline" color={'#00066'} size={22} />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Notifications"
        component={Dummy}
        options={{
          headerShown: false,
          drawerIcon: ({color}) => (
            <View style={style.IconMainStyle}>
              <Ionicons
                name="notifications-outline"
                color={'#00066'}
                size={22}
              />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Dummy1}
        options={{
          headerShown: false,
          drawerIcon: ({color}) => (
            <View style={style.IconMainStyle}>
              <Ionicons name="settings-outline" color={'#00066'} size={22} />
            </View>
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
const style = StyleSheet.create({
  IconMainStyle: {
    height: 35,
    width: 35,
    backgroundColor: '#EAEAEB',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
});
