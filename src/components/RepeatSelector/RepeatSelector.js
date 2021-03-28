import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import styles from './styles';
import { Daily } from '../Daily';
import { Weekly } from '../Weekly';

const RepeatSelector = props => (
  <View style={styles.container}>
    <View>
        <Daily
          dailyInfo={props.dailyInfo}
          handleUpdateDailyInfo={props.handleUpdateDailyInfo}
        />
    </View>
  </View>
);

export default RepeatSelector;
