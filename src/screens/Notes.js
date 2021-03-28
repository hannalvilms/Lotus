import React, {Component} from 'react';
import {
    View,
    Text,
    AsyncStorage,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    TextInput,
    Keyboard,
    ActivityIndicator,
} from 'react-native';

export default class Notes extends Component {
    state = {
        isEdit: null,
        list: [],
        isLoading: false,
        editText: '',
    };
    componentDidMount = () => {
        this.setState({isLoading: true});
        // AsyncStorage.removeItem('list')
        AsyncStorage.getItem('list')
            .then(list => {
                if (list) {
                    this.setState({list: JSON.parse(list), isLoading: false});
                } else {
                    this.setState({list: [], isLoading: false});
                }
            })
            .catch(err => {
                this.setState({isLoading: false});
            });
    };
    add = () => {
        let list = this.state.list;
        list.push('');
        this.setState({list: list});
        this.saveToStorage();

        this.setEdit(list.length-1);
    };
    setEdit = index => {
        if (this.state.isEdit !== index) {
            this.setState({isEdit: index, editText: this.state.list[index]});
        }
    };
    setList = (text, index) => {
        let list = this.state.list;
        list[index] = text;
        this.setState({list: list, isEdit: null, editText: ''});

        this.saveToStorage();
    };
    saveToStorage = () => {
        let data = JSON.stringify(this.state.list);
        AsyncStorage.setItem('list', data);
    };
    deleteItem = index => {
        let list = this.state.list;
        list.splice(index, 1);
        this.setState({list: list});
        this.saveToStorage();
    };
    render() {
        return (
            <ScrollView style={style.container}>
                <TouchableOpacity style={style.btnAdd} onPress={() => this.add()}>
                    <Text style={style.btnAddText}>Add new note</Text>
                </TouchableOpacity>
                {this.state.isLoading ? (
                    <ActivityIndicator color="#d28888" size="large" />
                ) : (
                    <View style={style.body}>
                        {this.state.list.map((item, key) => (
                            <React.Fragment>
                                {this.state.isEdit === null || this.state.isEdit !== key ? (
                                    <TouchableOpacity
                                        style={style.item}
                                        activeOpacity={0.5}
                                        onLongPress={() => this.setEdit(key)}>
                                        <Text style={style.itemText}>{item}</Text>
                                        <TouchableOpacity
                                            style={style.itemDelete}
                                            onPress={() => this.deleteItem(key)}>
                                            <Text style={style.itemDeleteText}>Delete</Text>
                                        </TouchableOpacity>
                                    </TouchableOpacity>
                                ) : null}
                                {this.state.isEdit !== null ? (
                                    key === this.state.isEdit ? (
                                        <TextInput
                                            style={style.itemInput}
                                            onBlur={() => this.setList(this.state.editText, key)}
                                            onSubmitEditing={() =>
                                                this.setList(this.state.editText, key)
                                            }
                                            value={this.state.editText}
                                            autoFocus
                                            onChangeText={editText => this.setState({editText})}
                                        />
                                    ) : null
                                ) : null}
                            </React.Fragment>
                        ))}

                    </View>
                )}
            </ScrollView>
        );
    }
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#C3E6E2',
        height: '100%'
    },
    btnAdd: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#FFF',
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        shadowColor: 'grey',
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 0.26,
        elevation: 10,
        marginBottom: 20,
        borderRadius: 50,
        paddingTop: 20,
        paddingBottom: 20,
    },
    btnAddText: {
        fontSize: 35,
        color: '#262626'
    },
    body: {
        paddingHorizontal: '4%',
        paddingVertical: 15,
        backgroundColor: '#FFF',
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 40,
        marginBottom: 30,
        shadowColor: 'grey',
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 0.26,
        elevation: 10,
    },
    item: {
        marginBottom: 10,
        backgroundColor: '#FFF',
        borderRadius: 20,
        padding: 10,
        minHeight: 50,
        position: 'relative',
        shadowColor: 'grey',
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 0.26,
        elevation: 10,
    },
    itemDelete: {
        position: 'absolute',
        fontSize: 16,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 10,
        marginRight: 10,
        right: 0,
        backgroundColor: '#FF8D8D',
        borderRadius: 20
    },
    itemDeleteText: {
        fontSize: 16,
        color: '#262626'
    },
    itemText: {
        fontSize: 16,
        marginRight: 90,
        paddingHorizontal: '1%',
        color: '#262626'
    },
    itemInput: {
        borderBottomWidth: 1,
        marginBottom: 15,
        fontSize: 16,
        width: '90%',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: 10
    },
});
