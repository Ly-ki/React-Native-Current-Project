import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import User from './user';
import Home from './homePage';

const AuthFlow = () => {
    const [loading, setLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const token = await AsyncStorage.getItem('token');
                if (token) {
                    const response = await axios.post('http://116.203.203.79:3003/login', { token });
                    if (response.data.response.token) {
                        setIsLoggedIn(true);
                    } else {
                        await AsyncStorage.removeItem('token');
                    }
                }
            } catch (error) {
                console.error('Token doğrulama hatası:', error);
            } finally {
                setLoading(false);
            }
        };
        checkLoginStatus();
    }, []);

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return isLoggedIn ? <User /> : <Home />;
};

export default AuthFlow;