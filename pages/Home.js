import { View, Text, ScrollView } from 'react-native'
import React, { useLayoutEffect, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fetchAsyncUsers } from '../components/Users/UsersSlice';
import Users from '../components/Users/Users.js';

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, []);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAsyncUsers());
    }, [dispatch]);

    return (
        <SafeAreaView className="bg-white">
            <ScrollView
                className="bg-gray-100 flex-1 my-2"
                contentContainerStyle={{
                    paddingBottom: 100,
                }}
            >
                <Users />
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen