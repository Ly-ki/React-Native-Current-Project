import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View, Image, Text } from 'react-native';

import UserNew from "./user";
import UserAdd from "./addUser";
import EditUser from "./editUser";

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (

        <NavigationContainer independent={true}>
            <Tab.Navigator screenOptions={{ headerShown: false, tabBarLabel: () => null, tabBarStyle: { backgroundColor: 'white', borderTopLeftRadius: 25, borderTopRightRadius: 25, height: 70, }, tabBarActiveTintColor: 'red', tabBarInactiveTintColor: 'gray', }} >
                <Tab.Screen name='usernew' component={UserNew} options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image source={require('../../assets/user.png')} resizeMode='contain' style={{ width: 54, }} />
                        </View>
                    ),
                }} />
                <Tab.Screen name='useradd' component={UserAdd} options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image source={require('../../assets/addUser.png')} resizeMode='contain' style={{ width: 74, top: -25 }} />
                        </View>
                    ),
                }} />
                <Tab.Screen name='editUser' component={EditUser} options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image source={require('../../assets/logout.png')} resizeMode='contain' style={{ width: 54, }} />
                        </View>
                    ),
                }} />
            </Tab.Navigator>
        </NavigationContainer >
    );
}

export default MyTabs;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F6F6',
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        padding: 20,
    },
    test: {
        height: 50,
    },

});
