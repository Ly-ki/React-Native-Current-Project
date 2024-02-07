import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Modal, Alert, Pressable } from 'react-native';
import React, { useState } from 'react';

const UpdateModal = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.container}>
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
                        <Pressable style={styles.button} onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.buttonText}>Okey</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Pressable onPress={() => setModalVisible(true)}>
                <Text>Test</Text>
            </Pressable>
        </View >
    );
}

export default UpdateModal;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        padding: 20,
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
    button: {
        backgroundColor: '#FF6464',
        borderRadius: 50,
        padding: 15,
        marginTop: 30,
        width: "100%"
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
});
