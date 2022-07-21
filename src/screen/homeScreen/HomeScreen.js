import React from 'react';
import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {NavHeader} from '../../components/NavHeader';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {moderateScale} from '../../../Theme/Dimensions';
import Theme from '../../../Theme/Theme';
import {HomeBtn} from '../../components/HomeBtn';
const {height, width} = Dimensions.get('window');
export const HomeScreen = ({navigation}) => {
  return (
    <ImageBackground source={require('../../assets/bk.jpg')}>
      {/* headerView */}
      <View style={style.headerView}>
        {/* headerButton */}
        <View style={style.headerBottom}>
          <TouchableOpacity
            onPress={() => {
              navigation.openDrawer();
            }}>
            <Ionicons name={'ios-menu'} size={35} color={'white'} />
          </TouchableOpacity>
        </View>

        {/* imageView */}
        <View style={style.imageMainView}>
          <Image
            source={require('../../assets/img.jpg')}
            style={style.imageView}
          />
          <Text style={style.textStyle}>Nadila Aulia</Text>
        </View>
      </View>

      {/* buttomView */}
      <View style={style.BottomMainView}>
        {/* button1 */}
        <TouchableOpacity style={style.buttonOneStyle}>
          <HomeBtn
            height={170}
            width={'65%'}
            marginLeft={moderateScale(14)}
            marginTop={moderateScale(10)}
            backgroundColor={'#652D904D'}
            txt={'Search Directory'}
            ic={'ios-person-outline'}
            color={'#652D90'}
          />
        </TouchableOpacity>
        {/* button2 */}
        <TouchableOpacity style={style.buttonTwoStyle}>
          <HomeBtn
            height={90}
            width={'65%'}
            // marginLeft={moderateScale(120)}
            backgroundColor={'#63A7444D'}
            txt={'Global Employer Handbook'}
            ic={'card-outline'}
            marginLeft={moderateScale(29)}
            color={'#63A744'}
          />
        </TouchableOpacity>

        {/* button3 */}
        <TouchableOpacity style={style.buttonThreeStyle}>
          <HomeBtn
            height={170}
            width={'65%'}
            marginLeft={moderateScale(5)}
            marginTop={moderateScale(20)}
            backgroundColor={'#D1B02D4D'}
            txt={'Media Library'}
            ic={'folder-open-outline'}
            color={'#D1B02D'}
          />
        </TouchableOpacity>

        {/* button4 */}
        <TouchableOpacity style={style.buttonFourStyle}>
          <HomeBtn
            height={170}
            width={'65%'}
            marginTop={moderateScale(20)}
            marginLeft={moderateScale(12)}
            backgroundColor={'#114D964D'}
            txt={'Settings'}
            ic={'ios-settings-outline'}
            color={'#114D96'}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const style = StyleSheet.create({
  headerView: {
    height: (height / 100) * 35,
    //  backgroundColor: 'green',
  },
  headerBottom: {
    height: (height / 100) * 10,
    width: (width / 100) * 15,
    // backgroundColor: '#faf',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageMainView: {
    height: (height / 100) * 10,
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    //   justifyContent: 'space-between',
  },
  imageView: {
    height: 70,
    width: 70,
    borderRadius: moderateScale(50),
    marginLeft: moderateScale(10),
  },
  BottomMainView: {
    height: (height / 100) * 70,
    width: width,
    backgroundColor: 'white',
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
    overflow: 'visible',
    // flexDirection: 'row',
  },
  buttonOneStyle: {
    height: 170,
    width: 180,
    marginHorizontal: 17,
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'flex-end',
    top: -75,
    borderRadius: 35,
    elevation: 15,
    overflow: 'hidden',
  },
  buttonTwoStyle: {
    height: 170,
    width: 180,
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'flex-end',
    top: -246,
    left: 215,
    borderRadius: 35,
    elevation: 15,
    overflow: 'hidden',
  },
  buttonThreeStyle: {
    height: 170,
    width: 180,
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'flex-end',
    top: -230,
    left: 18,
    borderRadius: 35,
    elevation: 15,
    overflow: 'hidden',
  },
  buttonFourStyle: {
    height: 170,
    width: 180,
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'flex-end',
    top: -400,
    left: 215,
    borderRadius: 35,
    elevation: 15,
    overflow: 'hidden',
  },
  textStyle: {
    fontSize: Theme.fontSizes.big,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: moderateScale(15),
  },
});
