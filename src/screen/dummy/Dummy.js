import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Theme from '../../../Theme/Theme';
import {NavHeader} from '../../components/NavHeader';
import {NotiCard} from '../../components/NotiCard';
export const Dummy = () => {
  const [Data, setData] = useState([
    {
      id: '1',
      employee: 'Employment Lawyer',
      record: 'Record rate 1.1%',
      date: '29 November 2021(13.00)',
      time: '30m',
    },
    {
      id: '2',
      employee: 'Employment Lawyer',
      record: 'Record rate 1.1%',
      date: '29 November 2021(13.00)',
      time: '1d',
    },
    {
      id: '3',
      employee: 'Employment Lawyer',
      record: 'Record rate 1.1%',
      date: '29 November 2021(13.00)',
      time: '2d',
    },
    {
      id: '4',
      employee: 'Employment Lawyer',
      record: 'Record rate 1.1%',
      date: '29 November 2021(13.00)',
      time: '3d',
    },
    {
      id: '5',
      record: 'Record rate 1.1%',
      employee: 'Employment Lawyer',
      date: '29 November 2021(13.00)',
      time: '4d',
    },
  ]);
  return (
    <View style={style.mainView}>
      <NavHeader leftIc={'arrow-back'} title={'Notifications'} />
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        data={Data}
        extraData={Data}
        renderItem={({item, index}) => {
          return (
            <NotiCard
              Title={item.employee}
              SubTitle={item.record}
              DateTitle={item.date}
              Time={item.time}
            />
          );
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    fontSize: Theme.fontSizes.xbig,
    color: 'black',
  },
});
export default style;
