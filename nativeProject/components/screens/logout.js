import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Modal, Alert, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import React, { useAuth } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Logout = ({ navigation }) => {

    const handleLogout = () => {
        const { logout } = useAuth();
        logout();
    };
    return (
        <View style={styles.container}>
            <Button title="Çıkış Yap" onPress={handleLogout} />
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
