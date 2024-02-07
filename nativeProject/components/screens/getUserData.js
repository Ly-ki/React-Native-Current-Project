import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getUserData = async () => {
    try {
        const token = await AsyncStorage.getItem('token');
        const response = await axios.get('http://116.203.203.79:3003/users', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const userData = response.data;
        return userData;
    } catch (error) {
        console.error('Kullanıcı verileri alınırken bir hata oluştu:', error);
        throw error;
    }
};