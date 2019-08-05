import React, { Component } from 'react'
import Events from '../Home/Events'
import { View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { BackHandler } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';
import SInfo from 'react-native-sensitive-info'

export class CpyDashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            _id: ""
        }
    }

    componentDidMount() {
        SInfo.getItem("id", {
            sharedPreferencesName: "compSharedPrefs",
            keychainService: "compKeychain"
        }).then(value => {
            this.setState({ _id: value }) //value1
            console.log(value)
            return value
        }).then(id=>{
            if(id){

            }
            else{
            this.props.navigation.navigate('LoginComponent')

            }
        })

        // if(this.state._id){

        // }
        // else{
        //     this.props.navigation.navigate('LoginComponent')
        // }
    }

    static navigationOptions = {
        drawerLabel: 'Company Dashboard',

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
                    <ScrollView>
                        <View style={styles.outerContainer}>
                            <Text style={styles.heading}>
                                CpyDashboard
                        </Text>
                            <View >
                                <View style={styles.content}>
                                    <View style={styles.tile}>
                                         <Image style={styles.courseImage} source={require('../../img/php3.jpg')} />
                                         <Text style={styles.imgHeading}>PHP</Text>
                                    </View>
                                    <View style={styles.tile}>
                                         <Image style={styles.courseImage} source={require('../../img/python2.jpg')} />
                                         <Text style={styles.imgHeading}>Python</Text>
                                    </View>
                                    <View style={styles.tile}>
                                         <Image style={styles.courseImage} source={require('../../img/Blockchain1.jpg')} />
                                         <Text style={styles.imgHeading1}>Blockchain</Text>
                                    </View>

                                    <View style={styles.tile}>
                                         <Image style={styles.courseImage} source={require('../../img/ai2.jpg')} />
                                         <Text style={styles.imgHeading1}>AI</Text>
                                    </View>

                                    <View style={styles.tile}>
                                         <Image style={styles.courseImage} source={require('../../img/ContentWriting2.jpg')} />
                                         <Text style={styles.imgHeading1}>Content Writing</Text>
                                    </View>

                                    <View style={styles.tile}>
                                         <Image style={styles.courseImage} source={require('../../img/cybersecurity2.jpg')} />
                                         <Text style={styles.imgHeading1}>Cyber Security</Text>
                                    </View>

                                    <View style={styles.tile}>
                                         <Image style={styles.courseImage} source={require('../../img/CloudComputing2.jpg')} />
                                         <Text style={styles.imgHeading1}>Cloud Computing</Text>
                                    </View>

                                    <View style={styles.tile}>
                                         <Image style={styles.courseImage} source={require('../../img/Ios2.jpg')} />
                                         <Text style={styles.imgHeading1}>Ios</Text>
                                    </View>
                                    <View style={styles.tile}>
                                         <Image style={styles.courseImage} source={require('../../img/Linux2.jpg')} />
                                         <Text style={styles.imgHeading1}>Linux</Text>
                                    </View>
                                    <View style={styles.tile}>
                                         <Image style={styles.courseImage} source={require('../../img/Android2.jpg')} />
                                         <Text style={styles.imgHeading1}>Android Development</Text>
                                    </View>
                                    <View style={styles.tile}>
                                         <Image style={styles.courseImage} source={require('../../img/marketing2.jpg')} />
                                         <Text style={styles.imgHeading1}>Marketing</Text>
                                    </View>
                                    <View style={styles.tile}>
                                        <Text style={styles.tileHeading}>
                                            Current Plan :
                                     </Text>
                                        <Text style={styles.tileContent}>
                                            Show Current Plan here
                                    </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    heading: {
        textAlign: 'center',
        color: '#FFF',
        fontSize: 30,
        fontFamily: 'Montserrat-Bold',

    },
    content: {
        height: 2500
    },
    tile: {
        height: hp('30%'),
        marginTop: hp('2%'),
        backgroundColor: "transparent",
        padding: 10,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 5,
        opacity:1,
        zIndex:-1,
        elevation: 5,
    },
    tileHeading: {
        fontFamily: 'Montserrat-Bold',
        marginBottom: hp('12%'),
    },
    tileContent: {
        fontFamily: 'Montserrat-Bold',
        textAlign: 'right'
    },
    outerContainer: {
        flex: 1,
        justifyContent: "center",
        textAlign: 'center',
        color: '#FFF',
        flexDirection: 'column',
    },
    courseImage:{
        height:hp('30%'),
        width:wp('89%'),
        position:"relative",
        left:wp('-2.75%'),
        top:hp('-1.5%'),
        borderRadius:10,
        // borderWidth:5,
        borderColor:'#282f38',
},
imgHeading:{
    height:45,
    width:150,
    fontSize:35,
    fontFamily:'Montserrat-Bold',
    fontWeight:'300',
    color:'#fff',
    position:'absolute',
    top:hp('10%'),
    left:wp('25%'),
    zIndex:10,
},
imgHeading1:{
    height:45,
    width:250,
    fontSize:35,
    fontFamily:'Montserrat-Bold',
    fontWeight:'300',
    color:'#fff',
    position:'absolute',
    top:hp('10%'),
    left:wp('15%'),
    zIndex:10,
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


export default CpyDashboard
