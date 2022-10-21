import React, { useEffect } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncUsersWithID, getUsersWithId } from '../Users/UsersSlice';

const UsersDetail = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAsyncUsersWithID(props.route.params.id));
    }, [dispatch]);

    const usersWithID = useSelector(getUsersWithId);

    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: usersWithID.image
                }}
                className="h-36 w-64 rounded-sm"
            />
            <View className="px-3 pb-4">
                <Text className="font-bold pt-2 mt-4 text-sm">Age - {usersWithID.age}</Text>
                <View className="flex-row items-center space-x-1">
                    <Text className="text-lg text-gray-500">
                        <Text className="text-green-500 font-bold">{usersWithID.firstName} </Text>
                        <Text className="text-green-500 font-bold">{usersWithID.lastName} </Text>

                    </Text>
                </View>

                <View className="flex-row items-center space-x-1">
                    <Text className="text-xs text-gray-500">University : {usersWithID.university}</Text>
                </View>

                <View className="mt-4">
                    <Text className="text-md text-gray-500 mt-2 ">Address</Text>
                    <Text className="text-rose-500">{usersWithID.company?.address?.address}</Text>

                    <Text className="text-md text-gray-500 mt-2">City</Text>
                    <Text className="text-rose-500">{usersWithID.company?.address?.city}</Text>

                    <Text className="text-md text-gray-500 mt-2">State</Text>
                    <Text className="text-rose-500">{usersWithID.company?.address?.state}</Text>

                    <Text className="text-md text-gray-500 mt-2">Postal Code</Text>
                    <Text className="text-rose-500">{usersWithID.company?.address?.postalCode}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 12,
    }
})

export default UsersDetail