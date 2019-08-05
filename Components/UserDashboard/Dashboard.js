import React, { Component } from 'react'
import Events from '../Home/Events'
import { View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { BackHandler } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';
import SInfo from 'react-native-sensitive-info'

export class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            _id: "",
            ArtificialIntelligence:'',
            GraphicDesign:'',
            ContentWriting:'',
            Marketing:'',
            Cybersecurity:'',
            WebDevelopmentJavascript:'',
            WebDevelopmentPHP:'',
            WebDevelopmentPython:'',
            Linux:'',
            Ios:'',
            Blockchain:'',
            CloudComputing:'',
            Android:'',
            category:''
        }
    }

    componentWillMount() {
        SInfo.getItem("id", {
            sharedPreferencesName: "userSharedPrefs",
            keychainService: "userKeychain"
        })
            .then(value => {
                this.setState({ _id: value }) //value1
                console.log(value)
                return value
            })
            .then(id => {
                console.log("inside if")
                // alert(id)
                fetch(
                    `http://192.168.31.156:3000/musers/user/${this.state._id}`,
                    {
                        method: "GET",
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json"
                        }
                    }
                )
                    .then(res => {
                        console.log("first then")
                        return res.json()
                    })
                    .then(res => {
                        console.log("second then")

                        if (res.error) {
                            alert(res.error)
                            console.log("error")
                        } else {
                            console.log("test")
                            console.log(res)
                            // console.log(res[0].id)
                            this.setState({
                                ArtificialIntelligence: res.ArtificialIntelligence,
                                GraphicDesign: res.GraphicDesign,
                                Marketing: res.Marketing,
                                Cybersecurity: res.Cybersecurity,
                                WebDevelopmentJavascript: res.WebDevelopmentJavascript,
                                WebDevelopmentPHP: res.WebDevelopmentPHP,
                                WebDevelopmentPython: res.WebDevelopmentPython,
                                ContentWriting: res.ContentWriting,
                                Blockchain: res.Blockchain,
                                Android: res.Android,
                                Ios: res.Ios,
                                Linux: res.Linux,
                                CloudComputing: res.CloudComputing,
                            })
                        }
                    })
                    .catch(err => console.log(err))
            })
    }

    php(){
        this.props.navigation.navigate('CoursesDashboard',{category:'php'})
    }
    android(){
        this.props.navigation.navigate('CoursesDashboard',{category:'android'})
    }
    blockchain(){
        this.props.navigation.navigate('CoursesDashboard',{category:'blockchain'})
    }
    ios(){
        this.props.navigation.navigate('CoursesDashboard',{category:'ios'})
    }
    linux(){
        this.props.navigation.navigate('CoursesDashboard',{category:'linux'})
    }
    python(){

        this.props.navigation.navigate('CoursesDashboard',{category:'python'})
    }

    ai(){
        this.props.navigation.navigate('CoursesDashboard',{category:'ai'})
    }
    cybersecurity(){
        this.props.navigation.navigate('CoursesDashboard',{category:'cybersecurity'})
    }
    ContentWriting(){
        this.props.navigation.navigate('CoursesDashboard',{category:'contentwriting'})
    }
    Marketing(){
        this.props.navigation.navigate('CoursesDashboard',{category:'marketing'})
    }
    CloudComputing(){
        this.props.navigation.navigate('CoursesDashboard',{category:'cloudcomputing'})
    }
//     goToLOGIN()
//     {
//   this.props.navigation.navigate('CoursesDashboard',{category:this.state.category})
//     }

    static navigationOptions = {
        drawerLabel: 'Dashboard',

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
        DASHBOARD
            </Text>
            <Image style={{height:35,width:35}} source={require('../../img/logog.png')} />
                  </View>
                </View>
                <View >
                    <ScrollView>
                        <View style={styles.outerContainer}>
                            {/* <Text style={styles.heading}>
                                Dashboard
                        </Text> */}
                            <View >
                                <View style={styles.content}>
                                
                                    {this.state.WebDevelopmentPHP=="true" &&
                                    <TouchableOpacity onPress={()=>this.php()}>
                                        <View style={styles.tile}>
                                        <Image style={styles.courseImage} source={require('../../img/php3.jpg')} />
                                        <Text style={[styles.imgHeading1,{marginLeft:"-8%"}]}>PHP</Text>
                                        </View>
                                        </TouchableOpacity>
                                    }
                                    
                                    
                                    {this.state.WebDevelopmentPython=='true'?
                                    <TouchableOpacity onPress={()=>this.python()}>
                                        <View style={styles.tile}>
                                        <Image style={styles.courseImage} source={require('../../img/python2.jpg')} />
                                        <Text style={[styles.imgHeading1,{marginLeft:"-6%",}]}>Python</Text>
                                        </View>
                                    </TouchableOpacity>
                                        :<Text></Text>
                                   
                                    }
                                    
                                    {this.state.Blockchain=="true" &&
                                    <TouchableOpacity onPress={()=>this.blockchain()}>
                                        <View style={styles.tile}>
                                        <Image style={styles.courseImage} source={require('../../img/Blockchain1.jpg')} />
                                        <Text style={[styles.imgHeading1,{marginLeft:"-5%",}]}>Blockchain</Text>
                                   </View>
                                    </TouchableOpacity>
                                        
                                   
                                    }
                                    {this.state.ArtificialIntelligence=="true" &&
                                    <TouchableOpacity onPress={()=>this.ai()}>
                                        <View style={styles.tile}>
                                        <Image style={styles.courseImage} source={require('../../img/ai2.jpg')} />
                                        <Text style={[styles.imgHeading1,{marginLeft:"-8%",}]}>AI</Text>
                                   </View>
                                    </TouchableOpacity>
                                        
                                   
                                    }
                                    {this.state.ContentWriting=="true" &&
                                    <TouchableOpacity onPress={()=>this.ContentWriting()}>
                                        <View style={styles.tile}>
                                        <Image style={styles.courseImage} source={require('../../img/ContentWriting2.jpg')} />
                                        <Text style={[styles.imgHeading1,{marginLeft:"-7%",}]}>Content Writing</Text>
                                   </View>
                                    </TouchableOpacity>
                                        
                                   
                                    }
                                    {this.state.Cybersecurity=="true" &&
                                    <TouchableOpacity onPress={()=>this.cybersecurity()}>
                                        <View style={styles.tile}>
                                        <Image style={styles.courseImage} source={require('../../img/cybersecurity2.jpg')} />
                                        <Text style={[styles.imgHeading1,{marginLeft:"-7%",}]}>Cyber Security</Text>
                                   </View>
                                    </TouchableOpacity>
                                        
                                    }
                                    {this.state.CloudComputing=="true" &&
                                    <TouchableOpacity onPress={()=>this.CloudComputing()}>
                                        <View style={styles.tile}>
                                        <Image style={styles.courseImage} source={require('../../img/CloudComputing2.jpg')} />
                                        <Text style={[styles.imgHeading1,{marginLeft:"-7%",}]}>Cloud Computing</Text>
                                   </View>
                                    </TouchableOpacity> 
                                    }
                                    {this.state.Ios=="true" &&
                                    <TouchableOpacity onPress={()=>this.ios()}>
                                        <View style={styles.tile}>
                                        <Image style={styles.courseImage} source={require('../../img/Ios2.jpg')} />
                                        <Text style={[styles.imgHeading1,{marginLeft:"-8%",}]}>Ios</Text>
                                   </View>
                                    </TouchableOpacity>
                                        
                                    }
                                    {this.state.Linux=="true" &&
                                    <TouchableOpacity onPress={()=>this.linux()}>
                                        <View style={styles.tile}>
                                        <Image style={styles.courseImage} source={require('../../img/Linux2.jpg')} />
                                        <Text style={[styles.imgHeading1,{marginLeft:"-7%",}]}>Linux</Text>
                                   </View>
                                    </TouchableOpacity>
                                        
                                    }
                                    {this.state.Android=="true" &&
                                    <TouchableOpacity onPress={()=>this.android()}>
                                        <View style={styles.tile}>
                                        <Image style={styles.courseImage} source={require('../../img/Android2.jpg')} />
                                        <Text style={[styles.imgHeading1,{marginLeft:"-6%",}]}>Android</Text>
                                   </View>
                                    </TouchableOpacity>
                                        
                                    }
                                    {this.state.Marketing=="true" &&
                                    <TouchableOpacity onPress={()=>this.Marketing()}>
                                        <View style={styles.tile}>
                                        <Image style={styles.courseImage} source={require('../../img/marketing2.jpg')} />
                                        <Text style={[styles.imgHeading1,{marginLeft:"-6%",}]}>Marketing</Text>
                                   </View>
                                    </TouchableOpacity>
                                        
                                    }                    
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
        height: hp('370%'),

    },
    tile: {
        height: hp('30%'),
        marginTop: hp('2%'),
        backgroundColor: "transparent",
        padding: 10,
        alignSelf:'center',
        textAlign:'center',
        // marginLeft: 20,
        // marginRight: 20,
        borderRadius: 5,
        opacity:1,
        zIndex:-1,
        // elevation: 5,
    },
    tileHeading: {
        fontFamily: 'Montserrat-Bold',
        marginBottom: hp('12%'),
        textAlign:'center'
    },
    tileContent: {
        fontFamily: 'Montserrat-Bold',
        textAlign: 'center',
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
        // left:wp('-2.75%'),
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
    height:hp('100%'),
    width:wp('105%'),
    fontSize:35,
    fontFamily:'Montserrat-Bold',
    // fontWeight:'100',
    textAlign:"center",
    color:'#fff',
    position:'absolute',
    top:hp('10%'),
    // left:wp('15%'),
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
        // marginRight: 10,
        //   width:"75%",
        color: "#FFF",
        textAlign: 'center',
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


export default Dashboard