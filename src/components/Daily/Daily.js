import React from 'react';
import { View, Text } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import styles from './styles';

const selectedIndexesHelper = dailyInfo => {
  const selectedIndexes = [];
  for (let i = 0; i < dailyInfo.length; i++) {
    if (dailyInfo[i]) selectedIndexes.push(i);
  }
  return selectedIndexes;
};

const Daily = props => (
  <View style={{color: '#262626'}}>
    <ButtonGroup
        buttonStyle={styles.buttonTwo}
        selectedButtonStyle={styles.button}
        containerStyle={{
            borderWidth: 0,
            color: '#262626',
            outline: 'none',
            boxShadow: 'none'
        }}
        buttonContainerStyle={{
            borderColor: 'transparent',
            color: '#262626',
        }}
        textStyle={{
            color: '#262626',
        }}
        onPress={props.handleUpdateDailyInfo}
        buttons={['S', 'M', 'T', 'W', 'T', 'F', 'S']}
        selectedIndexes={selectedIndexesHelper(props.dailyInfo)}
    />
  </View>
);

export default Daily;
