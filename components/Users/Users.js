import React, { useState } from 'react'
import { StyleSheet, View, Button, Text } from 'react-native'
import { useSelector } from 'react-redux'
import UsersCard from './UsersCard'
import { getAllUsers } from './UsersSlice'
import { styled } from 'nativewind';
import AddUserModal from './AddUserModal'

const Users = () => {
    const [openDialog, setOpenDialog] = useState(true)
    const users = useSelector(getAllUsers);
    const StyledView = styled(View)

    const addUser = () => {
        setOpenDialog(!openDialog);
    }

    return (
        <>
            <View style={styles.container}>
                {users?.users ? users.users.map(item => (
                    <UsersCard key={item.id} data={item} />
                )) : null}

                {openDialog ?
                    <AddUserModal closeDialog={addUser} openDialog={openDialog} /> : null
                }
            </View >

            <StyledView style={styles.button}>
                <Button title="Add User" style={styles.addUser} onPress={addUser} />
            </StyledView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    addUser: {
        backgroundColor: '#4032a8',
        borderRadius: 4,
        flex: 1,
        flexDirection: 'column',
        width: 200,
    },
    text: {
        display: 'flex',
        justifyContent: 'center',
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 18
    },

});


export default Users