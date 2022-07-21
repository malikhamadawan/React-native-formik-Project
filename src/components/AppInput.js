import React, {useState} from 'react';
import {
  View,
  TextInput,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {moderateScale} from '../../Theme/Dimensions';
import Theme from '../../Theme/Theme';
const {height, width} = Dimensions.get('window');
export const AppInput = ({
  placeholder,
  secureTextEntry,
  onPress,
  keyboardType,
  value,
  touched,
  errorMessage,
  onChangeText,
  rightIc,
  leftIc,
  placeholderTextColor,
  marginRight,
}) => {
  const [isActive, setActive] = useState(false);
  return (
    <>
      <View
        style={[style.mainView, {borderColor: isActive ? '#114D96' : 'white'}]}>
        <View onPress={onPress} style={style.icView}>
          <Ionicons name={rightIc} size={20} color={'#7681A5B3'} />
        </View>
        <View style={[style.container, {marginRight: marginRight}]}>
          <TextInput
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
            onChangeText={onChangeText}
            value={value}
            onFocus={() => setActive(true)}
            onBlur={() => setActive(false)}
            style={{
            }}
          />
        </View>
        <TouchableOpacity onPress={onPress} style={style.icView}>
          <Ionicons name={leftIc} size={20} color={'#7681A5B3'} />
        </TouchableOpacity>
      </View>
      <View style={style.errorMessageStyle}>
        {touched && errorMessage && (
          <Text style={style.errorText}>{errorMessage}</Text>
        )}
      </View>
    </>
  );
};

const style = StyleSheet.create({
  mainView: {
    height: 50,
    width: (width / 100) * 90,
    backgroundColor: 'white',
    flexDirection: 'row',
    elevation: 10,
    borderWidth: 1.5,
    borderRadius: 6,
    overflow: 'hidden',
  },
  icView: {
    height: '100%',
    width: '13%',
    // backgroundColor: '#aaf',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    height: '100%',
    width: '75%',
    // backgroundColor: 'blue,',
  },
  errorText: {
    fontSize: Theme.fontSizes.small,
    color: 'red',
  },
  errorMessageStyle: {
    height: 20,
    width: 250,
    // backgroundColor: 'blue',
    marginRight: moderateScale(120),
    marginTop: moderateScale(7),
  },
});
export default style;
