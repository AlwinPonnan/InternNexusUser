import React, { Component } from "react"
import {View,Text,TextInput,StatusBar,Button,ImageBackground,Alert,Image,TouchableOpacity} from "react-native"
import LoginComponent from "./LoginComponent"
import RegisterComponent from "./RegisterComponent"
import { createAppContainer, createStackNavigator } from "react-navigation"
import SInfo from "react-native-sensitive-info"
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from "react-native-responsive-screen"
// import NotificationPopup from 'react-native-push-notification-popup';


class Login extends Component {
    constructor(props) {
        super(props)
        this.goDash = this.goDash.bind(this)
        this.state = {
            email: "",
            password: "",
            userData: {},
            loginErr: {}
        }
    }

    // componentDidMount() {
    //     this.popup.show({
    //       onPress: function() {console.log('Pressed')},
    //       appTitle: 'Some App',
    //       timeText: 'Now',
    //       title: 'Hello World',
    //       body: 'This is a sample message.\nTesting emoji 😀',
    //       slideOutTime: 5000
    //     });
    //   }


    componentWillMount() {
        SInfo.getItem("id", {
            sharedPreferencesName: "userSharedPrefs",
            keychainService: "userKeychain"
        }).then(value => {
            if (value) {
                this.props.navigation.navigate("Dash")
            }
        })
    }
    componentWillUnmount() {
        this.setState = {
            value: {
                email: "",
                password: null
            }
        }
    }
    login() {
        fetch("http://192.168.31.156:3000/musers/login", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
            .then(response => response.json())
            .then(res => {
                if (res.error) {
                    alert(res.error)
                }
                if (res.message) {
                    alert(res.message)
                } else {
                    alert("You have logged in")
                    SInfo.setItem("id", res._id, {
                        sharedPreferencesName: "userSharedPrefs",
                        keychainService: "userKeychainService"
                    })

                    this.goDash()
                }
            })
    }
    goDash() {
        this.props.navigation.navigate("Dash")
    }

    goRegister() {
        this.props.navigation.navigate("Register")
    }
    static navigationOptions = {
        drawerLabel: "Login"
    }
    render() {
        return (
            // <ImageBackground source={require("../../img/cugsdtai.png")} style={styles.outerContainer}>
            <View style={styles.outerContainer}>
                  <StatusBar showHideTransition/>
                <View style={styles.header}>
                    <TouchableOpacity
                        style={styles.hamburger}
                        onPress={() => this.props.navigation.toggleDrawer()}
                    >
                        <View style={styles.hamburgerOdd} />
                        <View style={styles.hamburgerEven} />
                        <View style={styles.hamburgerOdd} />
                        <View style={styles.hamburgerEvenMid} />
                        <View style={styles.hamburgerOdd} />
                        <View style={styles.hamburgerEven} />
                        <View style={styles.hamburgerOdd} />
                    </TouchableOpacity>
                    <View style={styles.logoMain}>
                         <Text style={styles.logoText}>
             STUDENT LOGIN
            </Text>
            <Image style={{height:35,width:35}} source={require('../../img/logog.png')} />
                    </View>
                </View>
                <View style={styles.innerTextW}>
                    {/* <Image source={require('../..img/grad.png')} style={{height:100,width:100}}/> */}
                    <Image
                        style={styles.LogoImg}
                        source={require("../../img/logo3.png")}
                    />
                    <Text style={styles.welcomeText}>Student Login</Text>
                </View>

                <View style={styles.innerBox}>
                    <View style={styles.innerInput}>
                        <Text style={styles.userText}>Email</Text>
                        <TextInput
                            style={styles.inputField}
                            onChangeText={email => this.setState({ email })}
                        />
                    </View>
                    <View style={styles.innerInput}>
                        <Text style={styles.userText}>Password</Text>
                        <TextInput
                            style={styles.inputField}
                            secureTextEntry={true}
                            onChangeText={password =>
                                this.setState({ password })
                            }
                        />
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            this.goDash()
                        }}
                    >
                        <View style={styles.btn}>
                            <Text style={styles.LoginText}>Login</Text>
                        </View>
                    </TouchableOpacity>


                    {/* <View style={styles.container}>
        <NotificationPopup ref={ref => this.popup = ref} />
        
      </View> */}


                    

                    <TouchableOpacity
                        onPress={() => {
                            this.goRegister()
                        }}
                    >
                        <View style={styles.btn1}>
                            <Text style={styles.CompanyText}>Register Here</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = {
    outerContainer: {
        height: "100%",
        flex: 1,
        justifyContent: "center",
    },
    LoginText: {
        color: "white",
        fontSize: 20,
        fontFamily: "Montserrat-Bold",
        borderWidth: 2,
        backgroundColor: "#4834d4",
        borderRadius: 20,
        width: wp('75%'),
        padding: 8,
        borderColor: "transparent",
        textAlign: "center",
        elevation: 5,
    },
    CompanyText: {
        color: "black",
        fontSize: 20,
        fontFamily: "Montserrat-Bold",
        borderWidth: 2,
        backgroundColor: "#d2dae2",
        borderRadius: 20,
        width: wp('75%'),
        padding: 8,
        borderColor: "transparent",
        textAlign: "center",
        elevation: 5,
    },
    innerTextW: {
        flex: 3,
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    welcomeText: {
        color: "#fff",
        fontSize: 28,
        fontFamily: "Montserrat-Bold",
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        elevation: 5,
        flex: 3,
    },
    LogoImg: {
        alignItems: "center",
        justifyContent: "center",
        flex: 2,
        maxHeight: 28,
        maxWidth: 28,
        margin: 50,
    },
    innerBox: {
        position: "relative",
        top: 50,
        flex: 7,
        alignItems: "center",
    },
    userText: {
        color: "#fff",
        fontSize: 18,
        fontFamily: "Montserrat-Medium",
        position: "relative",
        left: "2%",
    },
    inputField: {
        backgroundColor: "#192a56",
        borderWidth: 1,
        width: wp('75%'),
        fontSize: 18,
        borderColor: "transparent",
        borderRadius: 20,
        color: "#fff",
        fontFamily: "Montserrat-Regular",
        marginBottom: 5,
        elevation: 5,
    },
    btn: {
        position: "relative",
        width: "80%",
        marginTop: hp("5%"),
        borderRadius: 40,
        fontFamily: "Montserrat-Regular",
    },
    btn1: {
        position: "relative",
        marginTop: hp("3%"),
    },
    btnFont: {
        fontFamily: "Montserrat-Light",
    },
    header: {
        height: 40,
        marginBottom: 5,
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    logoMain: {
        flexDirection: "row",
        flex: 12,
        marginRight: 15,
    },
    logo: {
        maxHeight: 33,
        maxWidth: 33,
        flex: 1,
    },
    logoText: {
        // marginRight: 10,
        color: "#FFF",
        textAlign: "center",
        flex: 10,
        fontFamily: "Montserrat-Bold",
        fontSize: 18,
        elevation: 5,
    },
    hamburger: {
        flex: 1,
        color: "#FFF",
        margin: 5,
        marginLeft: 15,
        marginRight: 10,
        flexDirection: "column",
        justifyContent: "center",
    },
    hamburgerOdd: {
        flex: 3,
    },
    hamburgerEven: {
        flex: 2,
        backgroundColor: "#FFF",
    },
    hamburgerEvenMid: {
        flex: 2,
        width: "80%",
        marginLeft: "10%",
        backgroundColor: "#FFF",
    }
}
export default Login