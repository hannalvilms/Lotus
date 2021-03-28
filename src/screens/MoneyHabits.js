import React, { Component } from 'react';
import {Button, View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

class MoneyHabits extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#C3E6E2'}}>
                <View style={styles.moneyContainer}>
                    <TouchableOpacity
                        onPress = {() => this.props.navigation.navigate('AddMoneyHabit')}
                        style={styles.moneyItem}>
                        <Image
                            style={styles.moneyImage}
                            source={require('../../assets/piggy-bank.png')}/>
                        <Text style={styles.moneyHeading}>Save 10% of the income</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress = {() => this.props.navigation.navigate('PlanExpenses')}
                        style={styles.moneyItem}>
                        <Image
                            style={styles.moneyImage}
                            source={require('../../assets/expenses.png')}/>
                        <Text style={[styles.moneyHeading, styles.headingTwo]}>Plan expenses</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    moneyContainer: {
        backgroundColor: '#C3E6E2',
        width: '90%',
        height: '90%',
        alignItems: 'center',
        paddingTop: '10%',
        paddingBottom: '5%',
        borderRadius: 40,
        marginTop: 5,
        marginBottom: 30,
        shadowColor: 'grey',
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 0.26,
        elevation: 10
    },
    moneyItem: {
        height:'15%',
        width: '90%',
        backgroundColor: '#FFFFFF',
        borderRadius: 40,
        marginTop: 15,
        shadowColor: 'grey',
        shadowOffset: {width: 3, height: 3},
        shadowOpacity: 0.26,
        elevation: 10,
        paddingLeft: 20,
        flexDirection: 'row',
    },
    moneyImage: {
        width: 60,
        height: 60,
        margin: 10
    },
    moneyHeading: {
        fontSize: 25,
        marginTop: 10,
        marginLeft: 10,
        width: '65%'
    },
    headingTwo: {
        marginTop: 25
    }
});

export default MoneyHabits;
