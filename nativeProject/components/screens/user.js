import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserNew = ({ navigation }) => {
    const [data, setData] = useState(null);

    const fetchDataFromPostmanCollection = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            const response = await axios.get('http://116.203.203.79:3003/users', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setData(response.data.response);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    useEffect(() => {
        fetchDataFromPostmanCollection();
    }, []);


    const handleEditPress = (id) => {
        navigation.navigate('editUser', { user_id: id });
    };
    return (
        <View style={styles.container}>
            <View style={styles.topContent}>
                <Text style={styles.centerText}>Users</Text>
            </View>

            <View style={styles.content}>
                <FlatList
                    data={data} keyExtractor={(item) => item.user_id.toString()} renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handleEditPress(item.user_id)}>
                            <View style={styles.userContain} >
                                <View style={styles.userLeftIn}>
                                    <Image source={require('../../assets/userGray.png')} />
                                    <Text style={styles.userLeftTitle}>{item.user_fullname}</Text>
                                </View>
                                <View style={styles.userRightIn}>
                                    {item.user_status == "Active" ? (
                                        <Text style={styles.userActive} >Active</Text>
                                    ) : (
                                        <Text style={styles.userPassive} >Passive</Text>

                                    )}
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View >
    );
}

export default UserNew;
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
        flexDirection: "row",
        textAlign: 'center',
        justifyContent: 'center'
    },
    content: {
        flex: 3,
        backgroundColor: '#F6F6F6',
        width: "100%",
    },
    centerText: {
        flex: 1.4,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 16,
        lineHeight: 24,
        fontWeight: "600",
        textAlign: 'center'
    },
    userContain: {
        width: "100%",
        height: 76,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 17,
        marginBottom: 20,
    },
    userLeftIn: {
        flexDirection: 'row',
        alignItems: "center",
    },
    userLeftTitle: {
        color: '#2A2A2E',
        paddingLeft: 15,
        fontSize: 14,
        lineHeight: 17.64,
        fontWeight: '600',
    },
    userActive: {
        color: '#12AA18',
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#D2FBD4',
        borderRadius: 20,
        fontSize: 12,
        fontWeight: '700'

    },
    userPassive: {
        color: '#FF6464',
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#FFF0F0',
        borderRadius: 20,
        fontSize: 12,
        fontWeight: '700'
    },
});
