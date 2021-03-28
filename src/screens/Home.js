import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import moment from 'moment';
import { Container } from '../components/Container';
import { HabitList } from '../components/HabitList';
import Icon from 'react-native-vector-icons/AntDesign';

class Home extends Component {
    state = {
        selectedDate: moment(),
    };
    handleAddNewHabit = () => {
        const { navigation } = this.props;
        navigation.navigate('Habits');
    };
    addNote = () => {
        const { navigation } = this.props;
        navigation.navigate('Notes');
    };
    handleViewHabit = habit => {
        const { navigation } = this.props;
        navigation.navigate('ViewHabit', { habit });
    };
    onDateSelected = date => {
        this.setState({ selectedDate: date });
    };

    componentDidMount() {
        let that = this;
        let date = new Date().getDate(); //Current Date
        let month = new Date().getMonth() + 1; //Current Month
        if (month === 1) {
            month = 'January';
        } else if (month === 2) {
            month = 'February';
        } else if (month === 3) {
            month = 'March';
        } else if (month === 4) {
            month = 'April';
        } else if (month === 5) {
            month = 'May';
        } else if (month === 6) {
            month = 'June';
        } else if (month === 7) {
            month = 'July';
        } else if (month === 8) {
            month = 'August';
        } else if (month === 9) {
            month = 'September';
        } else if (month === 10) {
            month = 'October';
        } else if (month === 11) {
            month = 'November';
        } else if (month === 12) {
            month = 'December';
        }
        that.setState({
            //Setting the value of the date time
            date: date,
            month: month,
        });
    }

    render() {
        return (
            <Container>
                <View style={{
                flexDirection: 'row',
                paddingBottom: 15,
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: '15%',
                backgroundColor: '#C3E6E2',
                }}>
                    <View style={{ flexDirection: 'row', paddingRight: '50%' }}>
                        <Text style={{
                        backgroundColor: '#FFFFFF',
                        borderRadius: 50,
                        width: 40,
                        height: 40,
                        textAlign: 'center',
                        alignItems: 'center',
                        paddingTop: 5,
                        fontSize: 20,
                        shadowColor: 'grey',
                        shadowOffset: {width: 2, height: 2},
                        shadowOpacity: 0.26,
                        elevation: 5,
                        }}>
                            {this.state.date}
                        </Text>
                        <Text style={{
                        fontSize: 25,
                        paddingTop: 2,
                        paddingLeft: 5
                        }}>
                            {this.state.month}
                        </Text>
                    </View>
                    <TouchableOpacity
                    onPress={this.handleAddNewHabit}
                    style={{
                    width: 45,
                    height: 45,
                    backgroundColor: '#FFCE00',
                    textAlign: 'center',
                    alignItems: 'center',
                        marginTop: -5,
                    borderRadius: 50,
                    shadowColor: 'grey',
                    shadowOffset: {width: 2, height: 2},
                    shadowOpacity: 0.26,
                    elevation: 5,
                    }}>
                        <Icon style={{
                        marginTop: 8,
                        }}
                        name={'plus'}
                        size={30}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{backgroundColor:'#C3E6E2'}}>
                    <HabitList
                    date={this.state.selectedDate}
                    handleViewHabit={this.handleViewHabit}
                    />
                    <View style={{
                        flexDirection: 'row',
                        flex: 2,
                        paddingTop: 10,
                        paddingLeft: 50,
                        paddingRight: 50,
                        bottom: '18%',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                    }}>
                        <TouchableOpacity>
                            <Image
                                style={{
                                    width: 30,
                                    height: 30,
                                    marginLeft: 30,
                                    marginRight: 30,
                                    marginTop: 'auto',
                                    marginBottom: 5
                                }}
                                source={require('../../assets/home.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.addNote}>
                            <Image
                                style={{
                                    width: 30,
                                    height: 30,
                                    marginLeft: 30,
                                    marginRight: 30,
                                    marginTop: 'auto',
                                    marginBottom: 5
                                }}
                                source={require('../../assets/notes.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </Container>
        );
    }
}

export default Home;
