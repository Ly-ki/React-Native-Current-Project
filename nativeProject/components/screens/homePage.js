import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image, ImageBackground, Linking } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.images} source={require('../../assets/bg.png')} >
                <View style={styles.contentTop}>
                    <Text style={styles.homeTitle}>Korem İpsum Dolor Sit Amet Consectetur</Text>
                    <Text style={styles.homeParagraph}>Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus</Text>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('login')}>
                        <Text style={styles.buttonText} >Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonBlue} onPress={() => navigation.navigate('sign')}>
                        <Text style={styles.buttonText} >Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View >

    );
}
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    contentTop: {
        height: "50%",
        backgroundColor: 'white',
        alignItems: 'center',
        width: '100%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 30,
    },
    images: {
        flex: 1,
        resizeMode: "contain",
        justifyContent: 'flex-end',
    },
    homeTitle: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: "800",
        lineHeight: 37.8,
    },
    homeParagraph: {
        fontSize: 14,
        textAlign: 'center',
        fontWeight: "500",
        lineHeight: 24.15,
        color: "#7F879E",
        paddingTop: 20,
        paddingBottom: 20,
    },
    button: {
        backgroundColor: '#FF6464',
        borderRadius: 50,
        padding: 15,
        margin: 10,
        width: "100%"
    },
    buttonBlue: {
        backgroundColor: '#74C6F7',
        borderRadius: 50,
        padding: 15,
        margin: 10,
        width: "100%"
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
});
