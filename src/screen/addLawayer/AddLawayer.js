import React, {useState} from 'react';
import {
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  Alert,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {NavHeader} from '../../components/NavHeader';
import ImagePicker from 'react-native-image-crop-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {AppInput} from '../../components/AppInput';
import Theme from '../../../Theme/Theme';
import {moderateScale} from '../../../Theme/Dimensions';
import {Button} from '../../components/Button';
import {Btn} from '../../components/Btn';
import {AppBtn} from '../../components/AppBtn';
const {height, width} = Dimensions.get('window');
export const AddLawayer = () => {
  const [text, setText] = useState(require('../../assets/man.png'));
  const [image, setImage] = useState('');
  const [isActive, setActive] = useState(false);
  const onSelectImage = () => {
    ImagePicker.openPicker({
      multiple: true,
    });
  };
  const onSelectCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      //   cropping: true,
      freeStyleCropEnabled: true,
    }).then(image => {
      setImage(image.path);
    });
  };
  return (
    <ScrollView>
      <View style={style.mainContainer}>
        <NavHeader leftIc={'arrow-back'} title={'Add lawyer'} />
        {/* ImagePicker */}
        <View style={style.ImagePickerStyle}>
          <Image
            source={image === '' ? text : {uri: image}}
            resizeMode={'contain'}
            style={style.ImageStyle}
          />
          <TouchableOpacity
            onPress={() => {
              Alert.alert('Alert....', 'Select One Option', [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                },
                {
                  text: 'Camera',
                  onPress: () => onSelectCamera(),
                },
                {text: 'Gallery', onPress: () => onSelectImage()},
              ]);
            }}
            style={style.TouchableOpacityStyle}>
            <MaterialCommunityIcons
              name={'pencil-outline'}
              size={20}
              color={'white'}
            />
          </TouchableOpacity>
        </View>
        {/* TextInput */}
        <View style={style.TextInputMainStyle}>
          <Text style={style.TextStyle}>Email Address</Text>
          <View style={style.InputMianStyle}>
            <AppInput placeholder={'Email Address'} />
          </View>
        </View>

        {/* frimCode */}
        <View style={style.FrimCodeStyle}>
          <Text style={style.FrimCodeTextStyle}>Firm Code</Text>
          <View style={style.TextInputMain}>
            <View
              style={[
                style.frimInputStyle,
                {borderColor: isActive ? '#114D96' : 'white'},
              ]}>
              <TextInput
                placeholder="Enter Firm Code"
                placeholderTextColor="gray"
                onFocus={() => setActive(true)}
                onBlur={() => setActive(false)}
                keyboardType="number-pad"
                style={{
                  marginLeft: moderateScale(15),
                }}
              />
            </View>
            <Btn txt={'Generate Code'} color={'#114D96'} />
          </View>
        </View>

        <View style={style.AppBtnStyle}>
          <AppBtn txt={'Add'}  marginTop={ moderateScale(90)} />
        </View>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  ImagePickerStyle: {
    height: (height / 100) * 30,
    //   backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImageStyle: {
    height: 200,
    width: 200,
    borderRadius: 200,
  },
  TouchableOpacityStyle: {
    height: 40,
    width: 40,
    borderRadius: 34,
    backgroundColor: '#114D96',
    position: 'absolute',
    top: 160,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextInputMainStyle: {
    height: (height / 100) * 14,
    //   backgroundColor: 'red',
  },
  TextStyle: {
    fontSize: Theme.fontSizes.xmedium,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: moderateScale(20),
  },
  InputMianStyle: {
    height: (height / 100) * 8,
    //backgroundColor: 'blue',
    alignItems: 'center',
    marginTop: moderateScale(10),
  },
  FrimCodeStyle: {
    height: (height / 100) * 15,
    //   backgroundColor: 'blue',
  },
  FrimCodeTextStyle: {
    fontSize: Theme.fontSizes.xmedium,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: moderateScale(18),
  },
  TextInputMain: {
    height: (height / 100) * 8,
    //backgroundColor: 'blue',
    alignItems: 'center',
    flexDirection: 'row',
  },
  frimInputStyle: {
    height: 50,
    width: (width / 100) * 50,
    backgroundColor: 'white',
    elevation: 10,
    borderWidth: 1.5,
    borderRadius: 5,

    overflow: 'hidden',
    marginLeft: moderateScale(22),
    marginTop: moderateScale(8),
    flexDirection: 'row',
  },
  AppBtnStyle: {
    height: (height / 100) * 30,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
