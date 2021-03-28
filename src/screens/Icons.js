import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/Fontisto';

export default function Icons({ navigation }) {
    const [items, setItems] = useState([
        {icon: 'basketball-ball', alt:'basketball-ball'},
        {icon: 'bath', alt:'bath'},
        {icon: 'bed', alt:'bed'},
        {icon: 'bell', alt:'bell'},
        {icon: 'bicycle', alt:'bicycle'},
        {icon: 'book', alt:'book'},
        {icon: 'brain', alt:'brain'},
        {icon: 'broom', alt:'broom'},
        {icon: 'camera-retro', alt:'camera-retro'},
        {icon: 'business-time', alt:'business-time'},
        {icon: 'calendar-alt', alt:'calendar-alt'},
        {icon: 'car', alt:'car'},
        {icon: 'carrot', alt:'carrot'},
        {icon: 'cat', alt:'cat'},
        {icon: 'chess-knight', alt:'chess-knight'},
        {icon: 'church', alt:'church'},
        {icon: 'cloud-moon', alt:'cloud-moon'},
        {icon: 'cloud', alt:'cloud'},
        {icon: 'cloud-sun', alt:'cloud-sun'},
        {icon: 'cloud-sun-rain', alt:'cloud-sun-rain'},
        {icon: 'cocktail', alt:'cocktail'},
        {icon: 'code', alt:'code'},
        {icon: 'coffee', alt:'coffee'},
        {icon: 'credit-card', alt:'credit-card'},
        {icon: 'crown', alt:'crown'},
        {icon: 'dog', alt:'dog'},
        {icon: 'donate', alt:'donate'},
        {icon: 'drum', alt:'drum'},
        {icon: 'dumbbell', alt:'dumbbell'},
        {icon: 'envelope', alt:'envelope'},
        {icon: 'fire', alt:'fire'},
        {icon: 'fish', alt:'fish'},
        {icon: 'gamepad', alt:'gamepad'},
        {icon: 'futbol', alt:'futbol'},
        {icon: 'gem', alt:'gem'},
        {icon: 'gift', alt:'gift'},
        {icon: 'glass-whiskey', alt:'glass-whiskey'},
        {icon: 'grin-stars', alt:'grin-stars'},
        {icon: 'guitar', alt:'guitar'},
        {icon: 'hand-holding-usd', alt:'hand-holding-usd'},
        {icon: 'headphones-alt', alt:'headphones-alt'},
        {icon: 'heart', alt:'heart'},
        {icon: 'hiking', alt:'hiking'},
        {icon: 'home', alt:'home'},
        {icon: 'mobile-alt', alt:'mobile-alt'},
        {icon: 'palette', alt:'palette'},
        {icon: 'pen', alt:'pen'},

        {icon: 'pepper-hot', alt:'pepper-hot'},
        {icon: 'piggy-bank', alt:'piggy-bank'},
        {icon: 'pills', alt:'pills'},
        {icon: 'rainbow', alt:'rainbow'},
        {icon: 'recycle', alt:'recycle'},
        {icon: 'running', alt:'running'},
        {icon: 'seedling', alt:'seedling'},
        {icon: 'shopping-basket', alt:'shopping-basket'},
        {icon: 'shower', alt:'shower'},
        {icon: 'skiing', alt:'skiing'},
        {icon: 'snowboarding', alt:'snowboarding'},
        {icon: 'smoking-ban', alt:'smoking-ban'},
        {icon: 'seedling', alt:'seedling'},
        {icon: 'spa', alt:'spa'},
        {icon: 'spray-can', alt:'spray-can'},
        {icon: 'star', alt:'star'},
        {icon: 'stopwatch-20', alt:'stopwatch-20'},
        {icon: 'store', alt:'store'},
        {icon: 'sun', alt:'sun'},
        {icon: 'swimmer', alt:'swimmer'},
        {icon: 'tablets', alt:'tablets'},
        {icon: 'tasks', alt:'tasks'},
        {icon: 'toilet-paper', alt:'toilet-paper'},
        {icon: 'tooth', alt:'tooth'},
        {icon: 'tractor', alt:'tractor'},
        {icon: 'trash-alt', alt:'trash-alt'},
        {icon: 'tree', alt:'tree'},
        {icon: 'tshirt', alt:'tshirt'},
        {icon: 'tv', alt:'tv'},
        {icon: 'university', alt:'university'},
        {icon: 'utensils', alt:'utensils'},
        {icon: 'walking', alt:'walking'},
        {icon: 'wallet', alt:'wallet'},
        {icon: 'weight', alt:'weight'},
        {icon: 'wine-bottle', alt:'wine-bottle'},
        {icon: 'wine-glass', alt:'wine-glass'},

        {icon: 'apple-alt', alt:'apple-alt'},
        {icon: 'baby-carriage', alt:'baby-carriage'},
        {icon: 'blender', alt:'blender'},
        {icon: 'bowling-ball', alt:'bowling-ball'},
        {icon: 'bullseye', alt:'bullseye'},
        {icon: 'campground', alt:'campground'},

        {icon: 'chart-line', alt:'chart-line'},
        {icon: 'chart-pie', alt:'chart-pie'},
        {icon: 'cheese', alt:'cheese'},
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
                   onPress={() => navigation.navigate('AddHabit', item)}
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
