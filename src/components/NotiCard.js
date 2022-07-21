import React from 'react';
import {View, Dimensions, Text, StyleSheet} from 'react-native';
import {moderateScale} from '../../Theme/Dimensions';
import Theme from '../../Theme/Theme';
const {height, width} = Dimensions.get('window');
export const NotiCard = ({Title, Time, SubTitle, DateTitle}) => {
  return (
    <View style={style.mainContainer}>
      <View style={style.cardContainer}>
        {/* TextStyle */}
        <View style={style.TextViewStyle}>
          <Text style={style.TitleTextStyle}>{Title}</Text>
          <Text style={style.TimeTextStyle}>{Time}</Text>
        </View>

        {/* SubTitle */}
        <View style={style.SubTitleViewStyle}>
          <Text style={style.SubTitleTextStyle}>{SubTitle}</Text>
          <Text style={style.DateTitleTextStyle}>{DateTitle}</Text>
        </View>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  cardContainer: {
    height: (height / 100) * 16,
    width: (width / 100) * 85,
    backgroundColor: 'white',
    borderRadius: 15,
    elevation: 10,
    overflow: 'hidden',
    marginBottom: moderateScale(10),
    marginTop: moderateScale(5),
  },
  TextViewStyle: {
    height: (height / 100) * 10,
    // backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  TitleTextStyle: {
    marginLeft: moderateScale(27),
    fontSize: Theme.fontSizes.xmedium,
    color: 'black',
    fontWeight: 'bold',
  },
  TimeTextStyle: {
    marginRight: moderateScale(20),
    color: 'gray',
    fontWeight: 'bold',
  },
  SubTitleViewStyle: {
    height: (height / 100) * 5,
    // backgroundColor: 'orange',
  },
  SubTitleTextStyle: {
    marginLeft: moderateScale(26),
    marginTop: moderateScale(-19),
    fontSize: Theme.fontSizes.small,
    color: 'gray',
    fontWeight: 'bold',
  },
  DateTitleTextStyle: {
    marginLeft: moderateScale(26),
    marginTop: moderateScale(5),
  },
});
