import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Modal, Alert, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useState } from 'react';
import axios from 'axios';
import RNPickerSelect from 'react-native-picker-select';
import AsyncStorage from '@react-native-async-storage/async-storage';


const UserAdd = ({ navigation }) => {
    const [user_fullname, setFullName] = useState('');
    const [user_phone, setFullPhone] = useState('');
    const [user_password, setFullPassword] = useState('');
    const [user_email, setFullMail] = useState('');
    const [user_status, setUserStatus] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const handleFormSubmit = async () => {
        try {
            const token = await AsyncStorage.getItem('token');

            if (!token) {
                console.log('Token bulunamadı.');
                return;
            }

            const userData = {
                'user_fullname': user_fullname,
                'user_phone': user_phone,
                'user_password': user_password,
                'user_email': user_email,
                'user_status': user_status,
            };
            if (user_fullname.trim() !== '' && user_email.trim() !== '' && user_password.trim() !== '' && user_phone.trim() !== '') {
                const response = await axios.post(
                    'http://116.203.203.79:3003/users/new',
                    userData,
                    {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        },
                    }
                );
                setModalVisible(!modalVisible);
                setFullName('');
                setFullPhone('');
                setFullPassword('');
                setFullMail('');
            } else {
                console.log('Veri başarıyla eklendi:', response.data.response);
                Alert.alert('Başarılı', 'Veri başarıyla eklendi');

            }

        } catch (error) {
            setModalVisible(!modalVisible);
            console.log('Veri eklenirken bir hata oluştu:', error);
            Alert.alert('Error', 'Fields Cannot Be Left Blank!!!');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.topContent}>
                <View style={styles.lefIconContent}>
                    <Icon name="arrow-left" style={styles.lefIcon} onPress={() => navigation.navigate('usernew')} />
                </View>
                <Text style={styles.centerText}>Add User</Text>
            </View>
            <View style={styles.midContent}>
                <Image style={styles.usersEdit} source={require('../../assets/userGray.png')} />
            </View>
            <View style={styles.content}>
                <TextInput value={user_fullname} onChangeText={(text) => setFullName(text)} style={styles.singInput} placeholder='Full Name' />
                <TextInput keyboardType="numeric" value={user_phone} onChangeText={(text) => setFullPhone(text)} style={styles.singInputTwo} placeholder='Phone Number' />
                <TextInput value={user_password} onChangeText={(text) => setFullPassword(text)} secureTextEntry style={styles.singInputTwo} placeholder='Password' />
                <TextInput value={user_email} onChangeText={(text) => setFullMail(text)} style={styles.singInputTwo} placeholder='E-mail' />
                <RNPickerSelect
                    onValueChange={(value) => setUserStatus(value)}
                    items={[
                        { label: 'Active', value: 'Active' },
                        { label: 'Passive', value: 'Passive' },
                    ]}
                    placeholder={{ label: 'Select status', value: null }}
                />
                <TouchableOpacity style={styles.button} onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
            </View>
            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal Closed');
                }}
            >
                <View style={styles.modalContent}>
                    <View style={styles.modalContain}>
                        <Image style={styles.successImg} source={require('../../assets/successImg.png')} />
                        <Text style={styles.modalTitle}>Updated!</Text>
                        <Text style={styles.modalSubTitle}>Update Successfully.</Text>
                        <Pressable style={styles.buttonNew} onPress={handleFormSubmit}>
                            <Text style={styles.buttonNewText}>Okey</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
};
export default UserAdd;
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
        flex: .3,
        width: "100%",
        alignItems: "center",
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
    singInput: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        marginTop: 30,
        width: "100%"

    },
    singInputTwo: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        marginTop: 20,
        width: "100%"
    },
    button: {
        backgroundColor: '#42CD00',
        borderRadius: 50,
        padding: 15,
        marginTop: 50,
        width: "100%"
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
    usersEdit: {
        width: 50,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 50
    },
    dropdown: {
        height: 50,
        borderRadius: 8,
        paddingHorizontal: 8,
        backgroundColor: 'white',
        marginTop: 20,
        fontSize: 10
    },
    icon: {
        marginRight: 5,
        display: 'none',
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 14,
        paddingLeft: 10,
        color: '#28282866',
        opacity: 40
    },
    selectedTextStyle: {
        fontSize: 14,
        paddingLeft: 10
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    modalContent: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    modalContain: {
        width: '100%',
        height: '45%',
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: 'center',
        padding: 30
    },
    modalTitle: {
        color: '#272A48',
        fontSize: 20,
        fontWeight: '700',
        paddingTop: 30,
    },
    modalSubTitle: {
        color: '#7F879E',
        fontSize: 14,
        fontWeight: '500',
        paddingTop: 10,
    },
    buttonNew: {
        backgroundColor: '#FF6464',
        borderRadius: 50,
        padding: 15,
        marginTop: 30,
        width: "100%"
    },
    buttonNewText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
});
