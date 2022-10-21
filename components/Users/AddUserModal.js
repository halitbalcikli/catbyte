import { StyleSheet, View, TextInput, Text, Modal, Button, Pressable } from 'react-native'
import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUsers } from '../Users/UsersSlice';

const AddUserModal = ({ openDialog, closeDialog }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');

    const dispatch = useDispatch();
    const fetchUser = async () => {
        const form = {
            firstName: firstName,
            lastName: lastName,
            age: age
        }

        const response = await axios.post('https://dummyjson.com/users/add', form);
        dispatch(addUsers(response.data));

        if (response) {
            closeDialog(false)
        }
    }

    console.log("")

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={openDialog}
            onRequestClose={() => {
                closeDialog(false);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => closeDialog(false)}
                    >
                        <Text style={styles.textStyle}
                            className="bg-rose-500">X</Text>
                    </Pressable>

                    <Text>First Name</Text>
                    <TextInput
                        label="First Name"
                        style={styles.input}
                        underlineColor='transparent'
                        theme={{ colors: { primary: '#02C5AB' } }}
                        defaultValue={firstName}
                        onChangeText={text => setFirstName(text)}
                    />

                    <Text>Last Name</Text>
                    <TextInput
                        label="Last Name"
                        style={styles.input}
                        defaultValue={lastName}
                        onChangeText={text => setLastName(text)}
                    />

                    <Text>Age</Text>
                    <TextInput
                        label="Age"
                        style={styles.input}
                        underlineColor='transparent'
                        theme={{ colors: { primary: '#02C5AB' } }}
                        defaultValue={age}
                        onChangeText={text => setAge(text)}
                    />
                    <Button title="Send" onPress={fetchUser} />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 15,
        alignItems: "center",
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        alignSelf: 'flex-end'
    },
    textStyle: {
        fontWeight: "bold",
        textAlign: 'right',
        padding: 8,
        color: '#FFF'
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    input: {
        fontSize: 11,
        height: 52,
        width: 200,
        margin: 8,
        borderRadius: 7,
        backgroundColor: '#d4d3de'
    },
})

export default AddUserModal