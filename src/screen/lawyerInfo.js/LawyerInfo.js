import React from 'react';
import {View, Dimensions, Text, Image} from 'react-native';
import {moderateScale} from '../../../Theme/Dimensions';
import Theme from '../../../Theme/Theme';
import {NavHeader} from '../../components/NavHeader';
const {height, width} = Dimensions.get('window');
export const LawyerInfo = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <NavHeader leftIc={'arrow-back'} title={'Lawyer Info'} />
      <View
        style={{
          height: (height / 100) * 35,
          backgroundColor: 'blue',
        }}>
        <View
          style={{
            height: (height / 100) * 13,
            // backgroundColor: 'red',
            flexDirection: 'row',
          }}>
          {/* Image */}
          <View
            style={{
              height: (height / 100) * 15,
              //   backgroundColor: '#fda',
              width: (width / 100) * 23,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../../assets/man.png')}
              style={{
                height: 50,
                width: 50,
                marginLeft: moderateScale(35),
              }}
            />
          </View>
          {/* Text */}
          <View
            style={{
              height: (height / 100) * 15,
              width: (width / 100) * 50,
              // backgroundColor: '#dfd',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: Theme.fontSizes.xmedium,
                color: 'black',
                // fontWeight: 'bold',
              }}>
              William
            </Text>
            <Text
              style={{
                color: 'gray',
              }}>
              Employment Lawyer
            </Text>
          </View>
        </View>
        {/* PhoneStyle */}
        <View
          style={{
            height: (height / 100) * 10,
            // backgroundColor: 'green',
          }}>
          <View
            style={{
              height: (height / 100) * 10,
              //   backgroundColor: '#adf',
            }}>
            <Text
              style={{
                fontSize: Theme.fontSizes.xmedium,
                color: 'black',
                fontWeight: 'bold',
                marginLeft: moderateScale(45),
              }}>
              Phone no:
            </Text>
            <Text
              style={{
                fontSize: Theme.fontSizes.medium,
                color: 'black',
                marginLeft: moderateScale(45),
                marginTop: moderateScale(2),
              }}>
              +124567880880
            </Text>
          </View>

          {/* EmailStyle */}
          <View
            style={{
              height: (height / 100) * 10,
              // backgroundColor: 'green',
            }}>
            <View
              style={{
                height: (height / 100) * 10,
                //   backgroundColor: '#adf',
              }}>
              <Text
                style={{
                  fontSize: Theme.fontSizes.xmedium,
                  color: 'black',
                  fontWeight: 'bold',
                  marginLeft: moderateScale(45),
                }}>
                Email:
              </Text>
              <Text
                style={{
                  fontSize: Theme.fontSizes.medium,
                  color: 'black',
                  marginLeft: moderateScale(45),
                  marginTop: moderateScale(2),
                }}>
                bardelysimon98@gmail.com
              </Text>
            </View>
          </View>
        </View>
      </View>
      {/* YTD Referrals */}
      <View
        style={{
          height: (height / 100) * 20,
          backgroundColor: 'red',
        }}>
            <Text  style={{
                fontSize: Theme.fontSizes.xmedium,
                
            }} >YTD Referrals</Text>
        </View>
    </View>
  );
};
