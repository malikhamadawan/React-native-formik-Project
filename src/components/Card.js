import React, {useState} from 'react';
import {
  View,
  FlatList,
  Image,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {moderateScale} from '../../Theme/Dimensions';
import Theme from '../../Theme/Theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
const {height, width} = Dimensions.get('window');
export const Card = ({
  txt,
  rightIc,
  rightPressed,
  leftPressed,
  leftIc,
  source,
  email,
  phone,
  employee,
  rightColor,
  title,
  backgroundColor,
  right,
  left,
}) => {
  return (
    <View style={style.cardMainContainer}>
      <View style={style.cardContainer}>
        <View style={style.headerView}>
          {/* imageView */}
          <View style={style.ImgMainStyle}>
            <Image
              source={source}
              style={{
                height: 55,
                width: 60,
              }}
            />
          </View>
          {/* Text */}
          <View style={style.textMainStyle}>
            <Text style={style.nameStyle}>{txt}</Text>
            <Text style={style.employeeStyle}>{employee}</Text>
          </View>
          {/* Icon */}
          <View style={style.iconMainStyle}>
            <TouchableOpacity
              onPress={rightPressed}
              style={{
                marginLeft: moderateScale(13),
                height: 40,
                // backgroundColor: 'red',
              }}>
              <Fontisto
                name={rightIc}
                size={40}
                color={rightColor}
                style={{
                  marginTop: moderateScale(7),
                }}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: Theme.fontSizes.medium,
                color: 'gray',
                fontWeight: 'bold',
                // marginRight: moderateScale(35),
              }}>
              Activate
            </Text>
          </View>
        </View>
        {/* leftIc */}
        <View style={style.leftIcstyle}>
          <TouchableOpacity
            onPress={leftPressed}
            style={[
              style.leftIcView,
              {backgroundColor: backgroundColor},
              {alignItems: 'center'},
            ]}>
            <MaterialCommunityIcons
              name={leftIc}
              size={20}
              color={'white'}
              style={{
                right: right,
              }}
            />
            <Text
              style={{
                left: left,
              }}>
              {title}
            </Text>
          </TouchableOpacity>
        </View>
        {/* footer */}
        <View style={style.footerMainStyle}>
          {/* phoneView */}
          <View style={style.phoneMainStyle}>
            <Text style={style.phoneTextStyle}>Phone no:</Text>
            <Text style={style.phoneItemStyle}>{phone}</Text>
          </View>

          {/* emailView */}
          <View style={style.emailMainStyle}>
            <Text style={style.emailTextStyle}>Email:</Text>
            <Text style={style.emailItemStyle}>{email}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  cardMainContainer: {
    flex: 1,
    // backgroundColor: '#faf',
    alignItems: 'center',
  },
  cardContainer: {
    height: (height / 100) * 25,
    width: (width / 100) * 90,
    backgroundColor: 'white',
    borderRadius: 15,
    borderWidth: 1.5,
    elevation: 10,
    overflow: 'hidden',
    marginBottom: moderateScale(10),
    marginTop: moderateScale(10),
  },
  headerView: {
    height: (height / 100) * 10,
    // backgroundColor: 'green',
    flexDirection: 'row',
    marginTop: moderateScale(5),
  },
  ImgMainStyle: {
    height: (height / 100) * 10,
    // backgroundColor: '#fda',
    width: (width / 100) * 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textMainStyle: {
    height: (height / 100) * 10,
    // backgroundColor: 'purple',
    width: (width / 100) * 45,
    justifyContent: 'center',
  },
  nameStyle: {
    fontSize: Theme.fontSizes.xmedium,
    color: 'gray',
    fontWeight: 'bold',
    marginLeft: moderateScale(10),
  },
  employeeStyle: {
    fontSize: Theme.fontSizes.xmedium,
    color: 'gray',
    marginLeft: moderateScale(10),
  },
  iconMainStyle: {
    height: (height / 100) * 10,
    width: (width / 100) * 30,
    // backgroundColor: 'orange',
  },
  leftIcstyle: {
    height: (height / 100) * 3,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftIcView: {
    height: 27,
    width: 90,
    borderRadius: 34,
    flexDirection: 'row',
    marginLeft: moderateScale(200),
    marginTop: moderateScale(10),
  },
  footerMainStyle: {
    height: (height / 100) * 10,
    width: (width / 100) * 100,
    // backgroundColor: '#ffa',
    flexDirection: 'row',
  },
  phoneMainStyle: {
    height: (height / 100) * 10,
    width: (width / 100) * 32,
    // backgroundColor: 'green',
  },
  phoneTextStyle: {
    fontSize: Theme.fontSizes.big,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: moderateScale(12),
  },
  phoneItemStyle: {
    fontSize: Theme.fontSizes.xmedium,
    color: 'gray',
    marginLeft: moderateScale(12),
  },
  emailMainStyle: {
    height: (height / 100) * 10,
    width: (width / 100) * 80,
    // backgroundColor: 'green',
  },
  emailTextStyle: {
    fontSize: Theme.fontSizes.big,
    color: 'black',
    fontWeight: 'bold',
  },
  emailItemStyle: {
    fontSize: Theme.fontSizes.xmedium,
    color: 'gray',
  },
});
