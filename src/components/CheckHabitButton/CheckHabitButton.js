import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { isDateInCheckList } from '../../util/isDateInCheckList';

const CheckHabitButton = props => (
  // console.log(isDateInCheckList(props.habit.checkList, props.date));
  <Button
    type="clear"
    icon={
      isDateInCheckList(props.habit.checkList, props.date) ? (
        <Icon
          type="ionicon"
          name="ios-checkmark-circle"
          color="#148025"
          size={40}
        />
      ) : (
        <Icon
          type="ionicon"
          name="ios-checkmark-circle-outline"
          color="#7B7B7B"
          size={40}
        />
      )
    }
    onPress={() => props.handleCheckButton(props.habit)}
  />
);
export default CheckHabitButton;
