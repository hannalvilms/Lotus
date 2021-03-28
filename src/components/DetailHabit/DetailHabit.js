import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import moment from 'moment';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import styles from './styles';
import { DeleteHabit } from '../DeleteHabit';
import calCurrentStreak from '../../util/calCurrentStreak';

const checkedDateForCalendar = checkedDate => {
  const result = {};
  checkedDate.map(
    date =>
      (result[moment(date).format('YYYY-MM-DD')] = {
        marked: true,
        dotColor: '#147718',
        activeOpacity: 0,
      })
  );
  console.log(result);
  return result;
};

const DetailHabit = props => {
  const { done, goal, habit } = props;
  const currentStreak = calCurrentStreak({ ...props, done, goal });
  console.log('curStreak: ', currentStreak);
  console.log(props);
  return (
    <View style={{
        height: 630,
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
    }}>
      <View style={styles.infoContainer}>
          <View style={styles.card}>
              <View style={styles.streakContent}>
                  <Text style={{fontSize: 40, marginTop: -10}}>{currentStreak}</Text>
                  <Text style={{fontSize: 10, marginTop: -5}}>day</Text>
              </View>
              <View style={{width: '80%'}}>
                  <Text style={{fontSize: 30, fontWeight:'bold', marginLeft: 10}}>Your longest streak</Text>
              </View>
          </View>

          {/*<View style={styles.card}>
          <Text style={styles.text}>Completion Rate</Text>
          <Text style={styles.infoText}>{habit.completionRate || 0}%</Text>
        </View>*/}
      </View>
      <Calendar
        // https://www.npmjs.com/package/react-native-calendars
        onDayPress={day => {
          console.log('selected day', day);
        }}
        monthFormat="MMM yyyy"
        onMonthChange={month => {
          console.log('month changed', month);
        }}
        disableMonthChange
        firstDay={0}
        markedDates={checkedDateForCalendar(habit.checkList)}
        style={{
            backgroundColor: '#FFF',
            marginTop: 20,
            paddingBottom: 20,
            borderRadius: 20,
            shadowColor: 'grey',
            shadowOffset: {width: 3, height: 5},
            shadowOpacity: 0.26,
            elevation: 4,
            paddingTop: 10
        }}
      />
      <DeleteHabit habit={habit} {...props} />
    </View>
  );
};


export default DetailHabit;
