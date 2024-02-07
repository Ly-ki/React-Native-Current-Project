import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from "./components/screens/signUp";
import LoginPage from "./components/screens/loginPage";
import Home from "./components/screens/homePage";
import UserPages from "./components/screens/userPage";
import AuthFlow from "./components/screens/AuthFlow";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='home' component={Home} />
        <Stack.Screen name='sign' component={SignUp} />
        <Stack.Screen name='login' component={LoginPage} />
        <Stack.Screen name='Auth' component={AuthFlow} />
        <Stack.Screen name='user' component={UserPages} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


