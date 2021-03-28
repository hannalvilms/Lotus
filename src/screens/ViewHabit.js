import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import moment from 'moment';
import EStyleSheet from 'react-native-extended-stylesheet';
import { DetailHabit } from '../components/DetailHabit';
import { calculateWeeklyGoal } from '../util/calculateWeeklyGoal';

const ViewHabitStyles = EStyleSheet.create({
  title: {
    fontSize: 25,
    paddingTop: 10,
    textAlign: 'center',
    color: '#262626',
    margin: 10,
    fontWeight: '700',
  },
});

export default class ViewHabit extends Component {
  render() {
    const { params } = this.props.navigation.state;
    const habit = params ? params.habit : null;
    const {
      name,
      startDate,
      isDaily,
      dailyInfo,
      weeklyInfo,
      checkList,
    } = habit;
    const weeklyGoal = calculateWeeklyGoal(
      isDaily,
      weeklyInfo,
      dailyInfo,
      checkList
    );
    return (
      <ScrollView style={{backgroundColor: "#C3E6E2"}}>
        <View style={{
          backgroundColor: "#FFF",
          height: 680,
          width: '90%',
          marginLeft: 'auto',
          marginRight: 'auto',
          borderRadius: 40
        }}>
        <Text style={ViewHabitStyles.title}>{name}</Text>
        <DetailHabit
          {...this.props}
          habit={habit}
          done={weeklyGoal.done}
          goal={weeklyGoal.goal}
        />
        </View>
      </ScrollView>
    );
  }
}
