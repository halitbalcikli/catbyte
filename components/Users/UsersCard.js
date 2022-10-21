import React from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { deleteUser } from '../Users/UsersSlice';

const UsersCard = (props) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const removeUser = async (id) => {
        const response = await axios.delete(`https://dummyjson.com/users/${id}`);
        dispatch(deleteUser(response.data));
    }

    return (
        <ScrollView style={styles.item}>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('UsersDetail', props.data)
                }}>
                <Text
                    title="X"
                    onPress={() => removeUser(props.data.id)}
                    style={styles.deleteButton}
                    className="bg-emerald-400"
                >
                    X
                </Text>
                <Text style={styles.info} className="text-blue-400">{props.data.firstName}, {props.data.age}</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    item: {
        position: 'relative',
        backgroundColor: '#2d2e2d',
        margin: 8,
        flexBasis: '40%',
        height: 140,
        width: 140,
    },
    info: {
        position: 'absolute',
        top: 0
    },
    textStyle: {
        fontWeight: "bold",
        textAlign: 'right'
    },
    deleteButton: {
        color: '#FFF',
        alignSelf: 'flex-end',
        padding: 8,
        color: '#FFF'
    }
})

export default UsersCard