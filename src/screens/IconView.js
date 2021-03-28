import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function IconView({ navigation }) {
    return (
        <Icon  name={'rocket'}
               size={60}
        />
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
    image: {
        padding: 5,
        margin: 5,
    }
});
