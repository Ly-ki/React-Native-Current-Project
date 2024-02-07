import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Modal, Alert, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const data = [
    { label: 'Active', value: '1' },
    { label: 'Passive', value: '2' },
];
const Logout = ({ navigation }) => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [deleteModalVisible, deleteSetModalVisible] = useState(false);
    const route = useRoute();
    const { user_id } = route.params;

    const deleteUser = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            const response = await axios.delete(`http://116.203.203.79:3003/users/${user_id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (response.status === 200) {
                deleteSetModalVisible(!deleteModalVisible);
            } else {
                Alert.alert('Hata', `Sunucu hatası: ${response.status}`);
            }
        } catch (error) {
            Alert.alert('Hata', `Bir hata oluştu: ${error.message}`);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.topContent}>
                <View style={styles.lefIconContent}>
                    <Icon name="arrow-left" style={styles.lefIcon} onPress={() => navigation.navigate('usernew')} />
                </View>
                <Text style={styles.centerText}>Edit User</Text>
            </View>
            <View style={styles.midContent}>
                <Image style={styles.usersEdit} source={require('../../assets/userGray.png')} />
            </View>
            <View style={styles.content}>
                <TextInput style={styles.singInput} placeholder='Full Name' />
                <TextInput style={styles.singInputTwo} placeholder='Phone Number' />
                <TextInput style={styles.singInputTwo} placeholder='E-mail' />
                <Dropdown
                    style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={data}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Status' : '...'}
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        setValue(item.value);
                        setIsFocus(false);
                    }}
                    renderLeftIcon={() => (
                        <AntDesign
                            style={styles.icon}
                            color={isFocus ? 'blue' : 'black'}
                            name="Safety"
                            size={20}
                        />
                    )}
                />
                <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
                    <Text style={styles.buttonText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonDelete} onPress={() => deleteSetModalVisible(true)} >
                    <Text style={styles.buttonText}>Delete User</Text>
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
                        <Pressable style={styles.buttonNew} onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.buttonNewText}>Okey</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Modal
                animationType='slide'
                transparent={true}
                visible={deleteModalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal Closed');
                }}
            >
                <View style={styles.modalContent}>
                    <View style={styles.modalContain}>
                        <Image source={require('../../assets/deleteImg.png')} />
                        <Text style={styles.modalTitle}>Delete!</Text>
                        <Text style={styles.modalSubTitle}>Are you sure you want to delete?</Text>
                        <View style={styles.deleteButtonContent}>
                            <Pressable style={styles.buttonNewDelete} onPress={deleteUser}>
                                <Text style={styles.buttonNewDeleteText}>Okey</Text>
                            </Pressable>
                            <Pressable style={styles.buttonNewClose} onPress={() => deleteSetModalVisible(!deleteModalVisible)}>
                                <Text style={styles.buttonNewDeleteText}>Close</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>

        </View >
    );
}

export default Logout;
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
        marginTop: 40,
        width: "100%"
    },
    buttonDelete: {
        backgroundColor: '#FF6464',
        borderRadius: 50,
        padding: 15,
        marginTop: 15,
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
    buttonNewDelete: {
        backgroundColor: '#FF6464',
        borderRadius: 50,
        padding: 15,
        marginTop: 30,
        width: "47%"
    },
    buttonNewClose: {
        backgroundColor: 'black',
        borderRadius: 50,
        padding: 15,
        marginTop: 30,
        width: "47%"
    },
    buttonNewDeleteText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
    deleteButtonContent: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
});
