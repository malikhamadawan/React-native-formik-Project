import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Dimensions,
  StyleSheet,
  TextInput,
} from 'react-native';
import {moderateScale} from '../../Theme/Dimensions';
import Theme from '../../Theme/Theme';
import CountryPicker from 'react-native-country-picker-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const {height, width} = Dimensions.get('window');
export const Picker = ({
  onPress,
  secureTextEntry,
  keyboardType,
  onChangeText,
  rightIc,
  leftIc,
  placeholderTextColor,
  onOpen,
  placeholder,
  value,
  onClose,
}) => {
  const [callingCode, setCallingCode] = useState('+1');
  const [countryCode, setCountryCode] = useState('');
  console.log('jddd---', callingCode,countryCode);
  return (
    <View style={style.mainView}>
      <View onPress={onPress} style={style.icView}>
        <Ionicons name={rightIc} size={20} color={'#7681A5B3'}/>
      </View>
      <CountryPicker
        countryCode={countryCode? callingCode: null}
        translation={'ita'}
        withCallingCodeButton
        withAlphaFilter
        withFilter
        withEmoji={true}
        withFlagButton={false}
        // visible={false}
        onSelect={country => {
          setCallingCode(country.cca2);
          setCountryCode(country.callingCode);
        }}
      />
      <TouchableOpacity onPress={onOpen} style={style.icView}>
        <MaterialIcons name={leftIc} size={25} color={'#7681A5B3'} />
      </TouchableOpacity>
    </View>
  );
};
const style = StyleSheet.create({
  mainView: {
    height: 50,
    width: (width / 100) * 25,
    backgroundColor: 'white',
    flexDirection: 'row',
    elevation: 10,
    // borderWidth: 0.5,
    borderRadius: 5,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icView: {
    height: '100%',
    width: '22%',
    // backgroundColor: '#aaf',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default style;
