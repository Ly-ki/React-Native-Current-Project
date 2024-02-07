import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Tabs from "./tabs";

const UserPages = ({ navigation }) => {
    return (
        <Tabs />
    );
}

export default UserPages;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F6F6',
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        padding: 20,
    },

});
