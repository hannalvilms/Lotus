import React from 'react';
import { View, TextInput, Button } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import styles from './styles';

const StartDate = props => (
  <View style={styles.container}>
    <TextInput
      placeholder="Start Date"
      style={styles.input}
      underlineColorAndroid="transparent"
      {...props}
      editable={false}
    />
    <Button
        color='#52ABC1'
        title="Start day"
        onPress={props.showDateTimePicker} />
    <DateTimePicker
      isVisible={props.isDateTimePickerVisible}
      onConfirm={props.handleDatePicked}
      onCancel={props.hideDateTimePicker}
    />
  </View>
);

export default StartDate;
