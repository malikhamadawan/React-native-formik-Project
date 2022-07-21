import React from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {moderateScale} from '../../Theme/Dimensions';
import Theme from '../../Theme/Theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const {height, width} = Dimensions.get('window');
export const CustomDrawer = props => {
  return (
    <View style={style.mainView}>
      {/* DrawerContentScrollView */}
      <DrawerContentScrollView>
        <View style={style.headerMainStyle}>
          <Image
            source={require('../assets/ds.jpg')}
            style={style.ImageStyle}
          />

          {/* Text */}
          <View style={style.TextMainStyle}>
            <Text style={style.textStyle}>Lawyer</Text>
            <Text style={style.secondTextStyle}>David Smith</Text>
          </View>
        </View>

        {/* DrawerItemList */}
        <View style={style.drawerListMain}>
          <View style={style.drawerListStyle}>
            <DrawerItemList {...props} />
          </View>
          {/* ArrowView */}
          <View style={style.arrowIconMain}>
            {/* icon */}
            <TouchableOpacity style={style.touchableStyle3}>
              <MaterialIcons name={'keyboard-arrow-right'} size={25} />
            </TouchableOpacity>

            {/* Icon2 */}
            <TouchableOpacity style={style.touchableStyle2}>
              <MaterialIcons name={'keyboard-arrow-right'} size={25} />
            </TouchableOpacity>

            {/* Icon3 */}
            <TouchableOpacity style={style.touchableStyle}>
              <MaterialIcons name={'keyboard-arrow-right'} size={25} />
            </TouchableOpacity>
          </View>
        </View>
      </DrawerContentScrollView>
      {/* bottom */}

      <TouchableOpacity style={style.iconMainStyle}>
        <View style={style.iconStyle}>
          <MaterialIcons name={'keyboard-arrow-right'} size={22} color={'#00066'} />
        </View>
        <Text style={style.bottomTextStyle}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerMainStyle: {
    height: (height / 100) * 20,
    // backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
  },
  ImageStyle: {
    height: 80,
    width: 80,
    marginBottom: 10,
    borderRadius: 40,
    marginLeft: moderateScale(20),
    marginTop: moderateScale(30),
  },
  TextMainStyle: {
    height: (height / 100) * 20,
    width: (width / 100) * 26,
    // backgroundColor:  'purple',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  iconMainStyle: {
    height: (height / 100) * 10,
    // backgroundColor: 'yellow',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconStyle: {
    marginLeft: moderateScale(20),
    height: 35,
    width: 35,
    backgroundColor: '#EAEAEB',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  textStyle: {
    // marginBottom: moderateScale(10),
    marginTop: moderateScale(22),
    marginLeft: moderateScale(10),
    color: 'gray',
  },
  secondTextStyle: {
    // marginBottom: moderateScale(10),
    marginLeft: moderateScale(10),
    fontSize: Theme.fontSizes.xmedium,
    color: 'black',
    fontWeight: 'bold',
  },
  bottomTextStyle: {
    marginRight: moderateScale(165),
    color: 'gray',
  },
  drawerListMain: {
    height: (height / 100) * 60,
    // backgroundColor: 'red',
    flexDirection: 'row',
  },
  drawerListStyle: {
    height: (height / 100) * 30,
    width: (width / 100) * 59,
    // backgroundColor: 'blue',
  },
  arrowIconMain: {
    height: (height / 100) * 30,
    width: (width / 100) * 9,
    // backgroundColor: 'green',
  },
  touchableStyle: {
    marginTop: moderateScale(37),
  },
  touchableStyle2: {
    marginTop: moderateScale(35),
  },
  touchableStyle3: {
    marginTop: moderateScale(16),
  },
});
