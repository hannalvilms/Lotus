import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function SaveIcons({ navigation }) {
    const [items, setItems] = useState([
        {icon: 'book', alt:'book'},
        {icon: 'brain', alt:'brain'},
        {icon: 'business-time', alt:'business-time'},
        {icon: 'calendar-alt', alt:'calendar-alt'},
        {icon: 'credit-card', alt:'credit-card'},
        {icon: 'donate', alt:'donate'},
        {icon: 'envelope', alt:'envelope'},
        {icon: 'hand-holding-usd', alt:'hand-holding-usd'},
        {icon: 'piggy-bank', alt:'piggy-bank'},
        {icon: 'tasks', alt:'tasks'},
    ]);

    return (
        <View style={styles.container}>
            <View style={styles.iconsContainer} >
                <FlatList
                    key={'_'}
                    keyExtractor={item => "_" + item.alt}
                    style={{flexDirection: 'column'}}
                    numColumns={5}
                    data={items} renderItem={({ item }) => (
                    <TouchableOpacity style={{
                        borderWidth: 2,
                        borderRadius: 50,
                        borderColor: '#52ABC1',
                        margin: 2,
                        width: 55,
                        height: 55
                    }}
                                      onPress={() => navigation.navigate('AddMoneyHabit', item)}
                    >
                        <Icon style={styles.image}
                              name={item.icon}
                              size={25}
                              color="#4EA3B8"/>
                    </TouchableOpacity>
                )} />
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#C3E6E2'
    },
    iconsContainer: {
        backgroundColor: '#FFF',
        width: '90%',
        height: '90%',
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
    image: {
        padding: 5,
        margin: 5,
        marginTop: 6,
        marginLeft: 'auto',
        marginRight: 'auto',
    }
});
