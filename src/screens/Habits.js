import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

class NewHabit extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress = {() => this.props.navigation.navigate('AddHabit')}
                    style={styles.habitButton}>
                    <Text style={styles.habitFont}>New Habit</Text>
                </TouchableOpacity>
                <View style={styles.recommended}>
                    <Text style={styles.recommendedText}>Recommended</Text>
                    <TouchableOpacity
                        onPress = {() => this.props.navigation.navigate('MoneyHabits')}
                        style={styles.recommendedItem}>
                        <Image
                            style={styles.recommendedImage}
                            source={require('../../assets/money.png')}/>
                        <Text style={styles.recommendedHeading}>Money</Text>
                    </TouchableOpacity>
                    {/*<TouchableOpacity
                        onPress = {() => this.props.navigation.navigate('HomeHabits')}
                        style={styles.recommendedItem}>
                        <Image
                            style={styles.recommendedImage}
                            source={require('../../Lotus/assets/broom.png')}/>
                        <Text style={styles.recommendedHeading}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress = {() => this.props.navigation.navigate('ExerciseHabits')}
                        style={styles.recommendedItem}>
                        <Image
                            style={styles.recommendedImage}
                            source={require('../../Lotus/assets/exercise.png')}/>
                        <Text style={styles.recommendedHeading}>Stay in Shape</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress = {() => this.props.navigation.navigate('FocusHabits')}
                        style={styles.recommendedItem}>
                        <Image
                            style={styles.recommendedImage}
                            source={require('../../Lotus/assets/book.png')}/>
                        <Text style={styles.recommendedHeading}>Focus and Effort</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress = {() => this.props.navigation.navigate('NightHabits')}
                        style={styles.recommendedItem}>
                        <Image
                            style={styles.recommendedImage}
                            source={require('../../Lotus/assets/night.png')}/>
                        <Text style={styles.recommendedHeading}>Nighttime</Text>
                    </TouchableOpacity>*/}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#C3E6E2',
    },
    habitButton: {
        backgroundColor: '#C3E6E2',
        width: '90%',
        alignItems: 'center',
        paddingTop: '5%',
        paddingBottom: '5%',
        borderRadius: 40,
        marginTop: 5,
        marginBottom: 30,
        shadowColor: 'grey',
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 0.26,
        elevation: 10
    },
    habitFont: {
        fontSize: 30
    },
    recommended: {
        backgroundColor: '#C3E6E2',
        width: '90%',
        height: '80%',
        alignItems: 'center',
        paddingTop: '5%',
        paddingBottom: '5%',
        borderRadius: 40,
        marginTop: 5,
        marginBottom: 30,
        shadowColor: 'grey',
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 0.26,
        elevation: 10
    },
    recommendedText: {
        marginBottom: 10
    },
    recommendedItem: {
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
    recommendedHeading: {
        fontSize: 25,
        marginTop: 20,
        marginLeft: 10
    },
    recommendedImage: {
        width: 60,
        height: 60,
        margin: 10
    }
});
export default NewHabit;
