import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

const SignUp = ({ navigation }) => {
    const [user_fullname, setName] = useState('');
    const [user_email, setEmail] = useState('');
    const [user_password, setPassword] = useState('');
    const [user_status] = useState('');

    const sendRequestToServer = async () => {
        try {
            if (user_fullname.trim() !== '' && user_email.trim() !== '' && user_password.trim() !== '') {
                const response = await axios.post(
                    'http://116.203.203.79:3003/users/',
                    { user_fullname, user_email, user_password, user_status }
                );
                Alert.alert('Success', 'Sing Up Success');
                setName('');
                setEmail('');
                setPassword('');
            } else {
                console.warn('Fields Cannot Be Left Blank');
            }

        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.topContent}>
                <View style={styles.lefIconContent}>
                    <Icon name="arrow-left" style={styles.lefIcon} onPress={() => navigation.navigate('home')} />
                </View>

                <Text style={styles.centerText}>Sign Up</Text>

            </View>
            <View style={styles.content}>
                <Text style={styles.signSubTitle}>Hello There 🖐</Text>
                <Text style={styles.signTitle}>Create an account</Text>
                <TextInput value={user_fullname} onChangeText={(text) => setName(text)} style={styles.singInput} placeholder='Full Name' />
                <TextInput value={user_email} onChangeText={(text) => setEmail(text)} style={styles.singInputTwo} placeholder='Email Address' />
                <TextInput value={user_password} secureTextEntry={true} onChangeText={(text) => setPassword(text)} style={styles.singInputTwo} placeholder='Password' />
                <TouchableOpacity style={styles.button} onPress={sendRequestToServer}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View >
    );
}

export default SignUp;
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
