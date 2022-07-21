import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Image,
} from 'react-native';
import Theme from '../../Theme/Theme';
const {height, width} = Dimensions.get('window');

import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {moderateScale} from '../../Theme/Dimensions';

export const NavHeader = ({
  leftIc,
  leftPressed,
  custom,
  rightIc,
  rightPressed,
  title,
  source,
  style,
}) => {
  return (
    <View style={styles.mainView}>
      <TouchableOpacity onPress={leftPressed} style={styles.LefttouchableView}>
        <Ionicons name={leftIc} size={30} color={'black'} />
      </TouchableOpacity>
      <View style={styles.view}>
        <Text
          style={{
            color: '#000',
            fontSize: Theme.fontSizes.big,
            fontWeight: 'bold',
            marginTop: moderateScale(10),
          }}>
          {title}
        </Text>
        <Image
          source={source}
          style={{
            height: 50,
            width: 50,
          }}
        />
      </View>
      <TouchableOpacity
        onPress={rightPressed}
        style={styles.RightTouchableView}>
        <Entypo name={rightIc} size={27} color={'#7681A5B3'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    height: 55,
    // backgroundColor: 'red',
    flexDirection: 'row',
  },
  view: {
    height: 55,
    width: '70%',
    // backgroundColor: '#a3a',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  LefttouchableView: {
    height: '100%',
    width: (width / 100) * 15,
    // backgroundColor: '#faf',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    // color: custom ? '#fff' : '#000',
    fontSize: Theme.fontSizes.xmedium,
    fontWeight: 'bold',
  },
  RightTouchableView: {
    height: '100%',
    width: '15%',
    // backgroundColor: '#faf',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
