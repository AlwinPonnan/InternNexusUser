import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, Image, TouchableOpacity, ImageBackground, Linking } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class Contact extends Component {
    static navigationOptions = {
        drawerLabel: 'Contact Us'
    }
    call1() {
        Linking.openURL(`tel:+91 99993 32123`)
    }
    call2() {
        Linking.openURL(`tel:+91 88262 26227`)
    }
    call3() {
        Linking.openURL(`tel:+91 93547 66675`)
    }
    mailsupport() {
        Linking.openURL(`mailto:support@internnexus.com`)
    }
    openMaps() {
        Linking.openURL(`https://goo.gl/maps/PXNPE68U66cYjirN8`)
    }
    openfb() {
        Linking.openURL(`https://www.facebook.com/internnexus`)
    }
    openLn() {
        Linking.openURL(`https://www.linkedin.com/company/internnexus`)
    }
    render() {
        return (

            <ImageBackground source={require('../../img/contact-visual.png')} style={{ width: wp('100%'), height: hp('100%') }}>
                <View style={styles.header}>
                    {/* <Button style={styles.hamburger} title='Drawer' onPress={() => this.props.navigation.toggleDrawer()} /> */}
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
     CONTACT US
            </Text>
            <Image style={{height:35,width:35}} source={require('../../img/logog.png')} />
                  </View>
                </View>
                <View style={{ marginTop: 10 }}>
                    {/* <Text style={styles.heading}>Contact Us</Text> */}
                </View>
                <View style={{backgroundColor:'#00000090', marginTop: hp('20%'), padding: 20, width:wp('80%'), left:wp('10%') }}>

                    <TouchableOpacity  onPress={() => this.openMaps()} >
                        <Text style={styles.mainText}>Vasant Kunj, New Delhi, Delhi 110070</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> this.mailsupport()}>
                        <Text style={styles.mainText}>support@internnexus.com</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.call1()}>
                        <Text style={styles.mainText} >+91 99993 32123</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.call2()}>
                        <Text style={styles.mainText}>+91 88262 26227</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.call3()}>
                        <Text style={styles.mainText}>+91 93547 66675</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.openfb()}>
                        <Text style={styles.mainText}>Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.openLn()}>
                        <Text style={styles.mainText}>LinkedIn</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    mainText: {
        color: '#FFF',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10,
        fontFamily: 'Montserrat-Medium',


    },
    heading: {
        color: '#FFF',
        fontSize: 30,
        fontFamily: 'Montserrat-Bold',
        textAlign: 'center',
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

    logo: {
        maxHeight: 33,
        maxWidth: 33,
        flex: 1,

    },
    logoText: {
        // marginRight: 10,
        //   width:"75%",
        color: "#FFF",
        textAlign: 'center',
        flex: 10,
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
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
});
