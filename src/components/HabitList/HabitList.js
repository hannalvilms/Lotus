import React, { Component } from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import { checkHabit } from '../../actions/habits';
import { showHabits } from '../../util/showHabits';
import { CheckHabitButton } from '../CheckHabitButton';
import Notes from "../../screens/Notes";
import Icon from 'react-native-vector-icons/FontAwesome5';

class HabitList extends Component {

    handleCheckButton = habit => {
    this.props.dispatch(checkHabit(habit.name, this.props.date));
    };

  render() {
    const { navigation } = this.props;
    return (
        <View>
            <View style={{
              height: '91%',
              backgroundColor: '#FFF',
              width: '93%',
              marginLeft: 'auto',
              marginRight: 'auto',
              borderRadius: 50,
              shadowColor: 'grey',
              shadowOffset: {width: 5, height: 5},
              shadowOpacity: 0.26,
              elevation: 10,
              overflow: 'hidden'
            }}>
                <Text style={{
                  textAlign: 'center',
                  fontSize: 15,
                  marginTop: 10
                }}>Habits</Text>
                <ScrollView style={styles.container} showsVerticalScrollIndicator={false} ScrollIndicator={false}>
                  {showHabits(this.props.date, this.props.habitList).map(habit => (
                    <View
                      style={styles.habitItemContainer}
                      key={habit.name}>
                      <View style={styles.habitItem}>
                          <View style={{
                              borderColor: habit.color,
                              borderWidth: 2,
                              borderRadius: 50,
                              height: 60,
                              width: 60,
                          }}>
                              <Icon
                                  style={{
                                      marginTop: 'auto',
                                      marginBottom: 'auto',
                                      marginLeft: 'auto',
                                      marginRight: 'auto',
                                  }}
                                  name={habit.icon}
                                  size={30}
                                  color={habit.color}
                              />
                          </View>
                        <TouchableOpacity
                          style={styles.textBox}
                          onPress={() => this.props.handleViewHabit(habit)}>
                            <Text style={styles.text}>{habit.name}</Text>
                        </TouchableOpacity>
                        <CheckHabitButton
                            habit={habit}
                            date={this.props.date}
                            handleCheckButton={this.handleCheckButton}/>
                      </View>
                    </View>
                  ))}
                </ScrollView>
            </View>
        </View>
    );
  }
}

const mapStateToProps = state => {
  const { habitList } = state.habits;
  return {
    habitList,
  };
};

export default connect(mapStateToProps)(HabitList);
