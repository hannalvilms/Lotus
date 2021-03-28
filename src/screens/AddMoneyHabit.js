import React, { Component } from 'react';
import { Button, TouchableHighlight, DatePickerIOS, Image, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import { InputWithButton } from '../components/TextInput';
import { addNewHabit } from '../actions/habits';
import { Container } from '../components/Container';
import { RepeatSelector } from '../components/RepeatSelector';
import { StartDate } from '../components/StartDate';
import { ConfirmButton } from '../components/ConfirmButton';
import Icon from 'react-native-vector-icons/FontAwesome5';

class AddHabit extends Component {
    constructor(props) {
        super(props);
        const { navigation } = this.props;
        this.state = {
            name: 'Save 10% of the income',
            startDate: moment(new Date()),
            checkDate: null,
            isDaily: true,
            dailyInfo: [true, true, true, true, true, true, true], // ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
            weeklyInfo: 1,
            checkList: [],
            isDateTimePickerVisible: false,
            color: '#4EA3B8',
            //icon: 'question-circle-o'
            icon: 'piggy-bank'
        };
    }

    handleChangeText = input => {
        this.setState({ name: input });
    };

    pink = () => {
        this.setState({color: '#EA84BB'})
    };

    lightPurple = () => {
        this.setState({color: '#8986D9'})
    };

    yellow = () => {
        this.setState({color: '#FFA700'})
    };

    green = () => {
        this.setState({color: '#157730'})
    };

    red = () => {
        this.setState({color: '#CE1A1A'})
    };

    blue = () => {
        this.setState({color: '#4EA3B8'})
    };

    darkPink = () => {
        this.setState({color: '#B40C59'})
    };

    purple = () => {
        this.setState({color: '#423B95'})
    };

    handleRepeatSelector = input => {
        this.setState({ repeat: input });
    };

    handleIsDaily = () => {
        this.setState({ isDaily: !this.state.isDaily });
    };

    handlePressAddHabit = () => {
        const { navigation } = this.props;
        this.props.dispatch(
            addNewHabit({
                name: this.state.name,
                startDate: this.state.startDate,
                isDaily: this.state.isDaily,
                dailyInfo: this.state.dailyInfo,
                weeklyInfo: this.state.weeklyInfo,
                checkList: this.state.checkList,
                completionRate: 0,
                color: this.state.color,
                icon: navigation.getParam('icon'),
            })
        );
        this.setState({ name: 'Save 10% of the income',
            icon: 'piggy-bank',
        });
        navigation.navigate('Home');
    };

    handleStartDateChange = input => {
        this.setState({ startDate: input });
    };

    handleUpdateWeeklyInfo = index => {
        this.setState({ weeklyInfo: index + 1 });
    };

    handleUpdateDailyInfo = index => {
        const updatedInfo = [...this.state.dailyInfo];
        updatedInfo[index] = !updatedInfo[index];
        this.setState({ dailyInfo: updatedInfo });
    };

    showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
    };

    hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
    };

    handleDatePicked = date => {
        this.setState({ startDate: moment(date) });
        this.hideDateTimePicker();
    };

    render() {
        const { navigation } = this.props;
        return (
            <Container>
                <View style={{
                    backgroundColor: '#FFF',
                    width: '90%',
                    height: 670,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    borderRadius: 40,
                    padding: 5,
                    paddingTop: 20,
                    shadowColor: 'grey',
                    shadowOffset: {width: 5, height: 5},
                    shadowOpacity: 0.26,
                    elevation: 10,
                    marginTop: 15
                }}>
                    <Text style={{textAlign: 'center'}}>Name</Text>
                    <InputWithButton
                        placeholder=" "
                        buttonText="Button"
                        defaultValue="Save 10% of the income"
                    />
                    <Text style={{textAlign: 'center'}}>Choose an icon</Text>
                    <TouchableOpacity
                        style={{alignItems: 'center'}}
                        onPress = {() => this.props.navigation.navigate('SaveIcons')}>
                        <Icon  style={styles.icon}
                               name={navigation.getParam('icon')}
                               size={45}
                               color={this.state.color}
                        />
                    </TouchableOpacity>
                    <Text style={{textAlign: 'center'}}>Icon color</Text>
                    <View style={styles.colors}>
                        <View style={{flexDirection: "row"}}>
                            <TouchableOpacity onPress={this.pink} style={[styles.color, styles.pink]}/>
                            <TouchableOpacity onPress={this.lightPurple} style={[styles.color, styles.lightPurple]}/>
                            <TouchableOpacity onPress={this.yellow} style={[styles.color, styles.yellow]}/>
                            <TouchableOpacity onPress={this.green} style={[styles.color, styles.green]}/>
                        </View>
                        <View style={{flexDirection: "row"}}>
                            <TouchableOpacity onPress={this.red} style={[styles.color, styles.red]}/>
                            <TouchableOpacity onPress={this.blue} style={[styles.color, styles.blue]}/>
                            <TouchableOpacity onPress={this.darkPink} style={[styles.color, styles.darkPink]}/>
                            <TouchableOpacity onPress={this.purple} style={[styles.color, styles.purple]}/>
                        </View>
                    </View>
                    <Text style={{textAlign: 'center', marginBottom: 10}}>
                        Starting day
                    </Text>
                    <StartDate
                        value={this.state.startDate.format('MMM Do YY')}
                        isDateTimePickerVisible={this.state.isDateTimePickerVisible}
                        showDateTimePicker={this.showDateTimePicker}
                        hideDateTimePicker={this.hideDateTimePicker}
                        handleDatePicked={this.handleDatePicked}
                    />
                    <Text style={{textAlign: 'center'}}>
                        Days of the week
                    </Text>
                    <RepeatSelector
                        handleRepeatSelector={this.handleRepeatSelector}
                        handleUpdateDailyInfo={this.handleUpdateDailyInfo}
                        handleIsDaily={this.handleIsDaily}
                        {...this.props}
                        {...this.state}
                    />
                    <ConfirmButton
                        title="Add Habit"
                        disabled={this.state.name.length === 0}
                        onPress={this.handlePressAddHabit}
                    />
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        marginTop: 15,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 20,
    },
    color: {
        width: 25,
        height: 25,
        borderRadius: 50,
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10
    },
    colors: {
        width: '100%',
        marginTop: 15,
        marginBottom: 25,
        alignItems: 'center'
    },
    pink: {
        backgroundColor: '#EA84BB'
    },
    lightPurple: {
        backgroundColor: '#8986D9'
    },
    yellow: {
        backgroundColor: '#FFA700'
    },
    green: {
        backgroundColor: '#157730'
    },
    red: {
        backgroundColor: '#CE1A1A'
    },
    blue: {
        backgroundColor: '#52ABC1'
    },
    darkPink: {
        backgroundColor: '#B40C59'
    },
    purple: {
        backgroundColor: '#423B95'
    }
});

export default connect()(AddHabit);
