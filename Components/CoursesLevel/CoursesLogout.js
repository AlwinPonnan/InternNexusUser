import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import SInfo from 'react-native-sensitive-info'

export class Logout extends Component {

    logout() {

        SInfo.deleteItem('id', {
            sharedPreferencesName: 'userSharedPrefs',
            keychainService: 'userKeychainService'
        })

        this.props.navigation.navigate('Login')

    }
    notLogout() {
        this.props.navigation.navigate('Dash')

    }

    static navigationOptions = {
        drawerLabel: 'Logout'
    }

    render() {
        return (
            <View>

                <View style={styles.header}>

                    <TouchableOpacity style={styles.hamburger} onPress={() => this.props.navigation.toggleDrawer()}>
                        <View style={styles.hamburgerOdd} ></View>
                        <View style={styles.hamburgerEven} ></View>
                        <View style={styles.hamburgerOdd} ></View>
                        <View style={styles.hamburgerEvenMid} ></View>
                        <View style={styles.hamburgerOdd} ></View>
                        <View style={styles.hamburgerEven} ></View>
                        <View style={styles.hamburgerOdd} ></View>
                    </TouchableOpacity >
                    <View style={styles.logoMain}>
                        <Text style={styles.logoText}>
                            INTERNNEXUS
            </Text>
                        <Image style={styles.Logo} source={require('../../img/logo.png')} />
                    </View>
                </View>
                <View >
                    <Text style={styles.heading}>
                        Are You sure you want to Logout?
                    </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => this.logout()}>
                        <Text style={styles.yesButton}>
                            Yes
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => this.notLogout()}>
                        <Text style={styles.noButton}>
                            No
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    yesButton: {
        borderWidth: 1,
        borderColor: "#FFF",
        color: "#FFF",
        padding: 20,
        textAlign: 'center',
        margin: 5,
        fontFamily: 'Montserrat-Bold',
        fontSize: 15,
    },
    noButton: {
        borderWidth: 1,
        borderColor: "#FFF",
        color: "#FFF",
        padding: 20,
        textAlign: 'center',
        margin: 5,
        fontFamily: 'Montserrat',
        fontSize: 15,
    },
    heading: {
        color: "#FFF",
        fontSize: 27,
        textAlign: 'center',
        marginTop: 20,
        fontFamily: 'Montserrat',
        padding: 20

    },
    outerContainer: {
        height: '100%',
        flex: 1,
        justifyContent: "center",

    },
    LogoImg: {
        // backgroundColor:'#F0F',
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        maxHeight: 28,
        maxWidth: 28,
        margin: 50,
    },
    logo: {
        maxHeight: 33,
        maxWidth: 33,
        flex: 1,

    },
    logoText: {
        marginRight: 10,
        //   width:"75%",
        color: "#FFF",
        textAlign: 'right',
        flex: 10,
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
    },
    header: {
        height: 40,
        marginBottom: 5,
        marginTop: 10,
        // backgroundColor:"#FFF",
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoMain: {
        flexDirection: 'row',
        flex: 12,
        marginRight: 15,
        // backgroundColor:'#FFF'
    },
    hamburger: {
        // width:"25%",
        flex: 1,
        color: '#FFF',
        margin: 5,
        marginLeft: 15,
        marginRight: 10,
        flexDirection: 'column',
        justifyContent: 'center'
        // right:10
    },
    hamburgerOdd: {
        flex: 3
    },
    hamburgerEven: {
        flex: 2,
        backgroundColor: '#FFF'
    },
    hamburgerEvenMid: {
        flex: 2,
        width: '80%',
        marginLeft: '10%',
        backgroundColor: '#FFF'
    },
    container: {
        flex: 1,
    },
});
export default Logout