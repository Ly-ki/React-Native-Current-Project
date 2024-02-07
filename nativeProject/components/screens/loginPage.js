import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Modal, Alert, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useState } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginPage = ({ navigation }) => {
    const [email, seteEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://116.203.203.79:3003/login', {
                email,
                password,
            });

            const token = response.data.response.token;
            await AsyncStorage.setItem('token', token);
            navigation.navigate('user');
        } catch (error) {
            Alert.alert('Hata', 'Giriş başarısız oldu!');
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.topContent}>
                <View style={styles.lefIconContent}>
                    <Icon name="arrow-left" style={styles.lefIcon} onPress={() => navigation.navigate('home')} />
                </View>
                <Text style={styles.centerText}>Login</Text>
            </View>
            <View style={styles.midContent}>
                <Image source={require('../../assets/iconBg.png')} />
            </View>
            <View style={styles.content}>
                <Text style={styles.signSubTitle}>Hello There 🖐</Text>
                <Text style={styles.signTitle}>Login first to continue</Text>
                <TextInput value={email} onChangeText={text => seteEmail(text)} style={styles.singInput} placeholder='Email Address' />
                <TextInput value={password} onChangeText={text => setPassword(text)} secureTextEntry style={styles.singInputTwo} placeholder='Password' />
                <TouchableOpacity style={styles.button} onPress={handleLogin} >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </View >
    );
}

export default LoginPage;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F6F6',
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        padding: 20,
    },
    topContent: {
        flex: 1,
        backgroundColor: '#F6F6F6',
        width: "100%",
        alignItems: "center",
        flexDirection: "row"
    },
    midContent: {
        flex: 1,
        width: "100%",
        alignItems: "center"
    },
    content: {
        flex: 3,
        backgroundColor: '#F6F6F6',
        width: "100%",
    },
    lefIconContent: {
        flex: 1,
        textAlign: "center",
        justifyContent: "center",
    },
    lefIcon: {
        width: 54,
        height: 54,
        padding: 15,
        borderWidth: 1,
        textAlign: "center",
        borderRadius: 15,
        borderColor: "#c5c5c5",
        backgroundColor: "#fff",
        fontSize: 21,
    },
    centerText: {
        flex: 1.4,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 16,
        lineHeight: 24,
        fontWeight: "600",
    },
    signSubTitle: {
        fontSize: 14,
        lineHeight: 25.2,
        fontWeight: "400",
        color: "#28282899",
    },
    signTitle: {
        fontSize: 25,
        lineHeight: 35,
        fontWeight: "700",
        color: "#292D32",
        paddingTop: 10,
    },
    singInput: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        marginTop: 60,
        width: "100%"
    },
    singInputTwo: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        marginTop: 30,
        width: "100%"
    },
    button: {
        backgroundColor: '#FF6464',
        borderRadius: 50,
        padding: 15,
        marginTop: 100,
        width: "100%"
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
});
