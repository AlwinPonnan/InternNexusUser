import React, { Component } from 'react'
import { Text, View, Button, StyleSheet, Image, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native'
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';

const { height } = Dimensions.get('window');

export default class About extends Component {
    state = {
        screenHieght: 0,
    }
    onContenSizeChange = (contentWidth, contentHeight) => {
        this.setState({
            screenHieght: contentHeight
        });
    }
    static navigationOptions = {
        drawerLabel: 'About Us'
    }
    render() {
        const scrollEnabled = this.state.screenHeight > height;

        return (

            <SafeAreaView style={styles.container}>
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
        ABOUT US
            </Text>
            <Image style={{height:35,width:35}} source={require('../../img/logog.png')} />
                  </View>
                </View>
                <View style={styles.container}>
                    <ScrollView>
                        <Text style={styles.heading}>About Us </Text>
                        <View>
                            <Text style={styles.contentText}>InternNexus is a rising platform for connecting students and companies by providing internships to students.
                             Our aim is to improve easiness of opportunities for students and professionalism.
                         {"\n\n"}We focus on quality of interns, practical approach and authenticity of procedure.
                         To improve easiness of opportunities for students, encouraging internships and professionalism is our main aim.</Text>
                        </View>
                        <View style={styles.imagepos}>
                            <Text style={styles.subheading}>Our Mission</Text>
                            <Image style={styles.img} source={require('../../img/mission.jpg')} />
                            <Text style={styles.contentText}>
                                Our platform connects students and start-ups by providing internships to students.
                            {'\n\n'} We assure quality of interns with our task oriented approach. Students are verified of their skills using our online tests.
                            {"\n\n"} Build your resume with our progressing tasks and increase your skills required by employers.</Text>
                        </View>
                        <View style={styles.imagepos2}>
                            <Text style={styles.subheading}>Our Vision</Text>
                            <Image style={styles.img} source={require('../../img/vision.jpg')} />
                            <Text style={[styles.contentText, styles.bottomScroll]}>
                                We have a broad vision of improving a student’s career while taking care of job market pool.
                            {"\n\n"} Our vision is to motivate students to take active steps towards their career with our digital help.
                            {"\n\n"} We want efficient students to rise up and improve coming society with their skills and work.</Text>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    bottomScroll: {
        marginBottom: hp('8%'),

    },
    container: {
        height: hp('100%'),
    },
    imagepos: {
        position: "relative",
        top: 0,
    },
    imagepos2: {
        position: 'relative',
        top: 0,
    },
    img: {
        height: 200,
        width: wp('90%'),
        borderRadius: 10,
        marginLeft: wp('5%'),
        marginRight: wp('5%'),
    },
    subheading: {
        color: '#FFF',
        margin: 5,
        textAlign: 'center',
        fontSize: 40,
        fontFamily: 'Montserrat-Bold',
        marginBottom: hp('2%')
    },
    contentText: {
        marginLeft: wp('5%'),
        marginRight: wp('5%'),
        color: '#FFF',
        fontFamily: 'Montserrat-Light',
        fontSize: 16,
        textAlign: 'center',
        // height: hp('67%'),
        textAlign: 'justify'
        // backgroundColor:'#900'
    },

    heading: {
        color: '#FFF',
        fontSize: 40,
        marginTop: hp('2%'),
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
