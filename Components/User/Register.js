import React, { Component } from 'react'
import { View, Text, ScrollView, Input, TextInput, Button, CheckBox, ImageBackground, Alert, Image, TouchableOpacity } from 'react-native'
import { createAppContainer, createStackNavigator } from 'react-navigation';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from "react-native-responsive-screen"
import Snackbar from 'react-native-snackbar';

export default class Register extends Component {
  static navigationOptions = {
    drawerLabel: 'Register'
  }
  constructor(props) {
    super(props)
  
    this.state = {
      username:'',
    email:'',
    phone:'',
    password:'',
    password2:'',
    college:'',
    ArtificialIntelligence:false,
    GraphicDesign:false,
    ContentWriting:false,
    Marketing:false,
    Cybersecurity:false,
    Blockchain:false,
    CloudComputing:false,
    Linux:false,
    Ios:false,
    Android:false,
    WebDevelopmentJavascript: false,
    WebDevelopmentPHP: false,
    WebDevelopmentPython: false,
    termsAccepted:false   
    }
    this.registerUser=this.registerUser.bind(this)
  }


  handleCheckBox = () => this.setState({ termsAccepted: !this.state.termsAccepted })
  
  registerUser(){
    if(this.state.password==this.state.password2)
    {
    fetch('http://192.168.31.156:3000/musers/register', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: this.state.username,
          email: this.state.email,
          phone: this.state.phone,
          password: this.state.password,
          password2: this.state.password2,
          college: this.state.college,
          ArtificialIntelligence: this.state.ArtificialIntelligence,
          GraphicDesign: this.state.GraphicDesign,
          ContentWriting: this.state.ContentWriting,
          Marketing: this.state.Marketing,
          Cybersecurity: this.state.Cybersecurity,
          WebDevelopmentJavascript: this.state.WebDevelopmentJavascript,
          WebDevelopmentPHP: this.state.WebDevelopmentPHP,
          WebDevelopmentPython: this.state.WebDevelopmentPython,
          Linux: this.state.Linux,
          Ios: this.state.Ios,
          Blockchain: this.state.Blockchain,
          CloudComputing: this.state.CloudComputing,
          Android: this.state.Android,
        })

      }).then(response => response.json())
      .then(res => {
          if (res.error) {
              alert(res.error)
          }
          if (res.message) {
              alert(res.message)
          } else {
              alert("You have been registered please check your email for verification")
              
              this.props.navigation.navigate('login')
          }
      });
      Snackbar.show({
        title: 'User Has Been Registered successfully',
        duration: Snackbar.LENGTH_INDEFINITE,
        color:"#fff",
        backgroundColor:'#232f61',
        action: {
          title: 'Login',
          color: 'white',
          onPress: () => { 
            this.props.navigation.navigate('Login')
           },
        },
      });
      ///////////////redirect to login/////////////////
    }
  }
  render() {
    return (

      <View style={styles.outerContainer}>
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
           STUDENT REGISTER
            </Text>
            <Image style={{height:35,width:35}} source={require('../../img/logog.png')} />
                    </View>
        </View>
        <ScrollView style={styles.Mainbox}>
          <View style={styles.innerTextW}>

            {/* <Image style={styles.LogoImg} source={require('../../img/logo.png')} /> */}
            {/* <Text style={styles.welcomeText}>Student Registration</Text> */}
          </View>

          <View style={styles.innerBox}>
            <View style={styles.innerInput}>
              <Text style={styles.userText}>Username</Text>
              <TextInput style={styles.inputField} onChangeText={(username)=>this.setState({username})} />
            </View>

            <View style={styles.innerInput}>
              <Text style={styles.userText}>Email</Text>
              <TextInput style={styles.inputField } onChangeText={(email)=>this.setState({ email})} />
            </View>

            <View style={styles.innerInput}>
              <Text style={styles.userText}>Phone</Text>
              <TextInput style={styles.inputField} onChangeText={(phone)=>this.setState({phone})} />
            </View>

            <View style={styles.innerInput}>
              <Text style={styles.userText}>College</Text>
              <TextInput style={styles.inputField} onChangeText={(college)=>this.setState({college})} />
            </View>

            <View style={styles.innerInput}>
              <Text style={styles.userText}>Password</Text>
              <TextInput style={styles.inputField} secureTextEntry={true} onChangeText={(password)=>this.setState({password})} />
            </View>

            <View style={styles.innerInput}>
              <Text style={styles.userText}> Confirm Password</Text>
              <TextInput style={styles.inputField} secureTextEntry={true} onChangeText={(password2)=>this.setState({password2})} />
            </View>

            <View style={styles.innerInput}>
              <Text style={styles.userText}> Select Your Choice Of Field:</Text>
            </View>
            <View style={styles.checkboxContainer}>
            <View style={[{ flexDirection: 'row'},styles.checkboxStyle ]}>
            <CheckBox 
                value={this.state.ArtificialIntelligence}
                onValueChange={() => this.setState({ ArtificialIntelligence:!this.state.ArtificialIntelligence })}
              />
              <Text style={styles.CheckBoxText}> AI/ML</Text>
            </View>

            <View style={[{ flexDirection: 'row'},styles.checkboxStyle ]}>
              <CheckBox 
                value={this.state.ContentWriting}
                onValueChange={() => this.setState({ ContentWriting: !this.state.ContentWriting })}
              />
              <Text style={styles.CheckBoxText}> Content Writing</Text>
            </View>

            <View style={[{ flexDirection: 'row'},styles.checkboxStyle ]}>
              <CheckBox
                value={this.state.Marketing}
                onValueChange={() => this.setState({ Marketing: !this.state.Marketing })}
              />
              <Text style={styles.CheckBoxText}> Digital Marketing</Text>
            </View>

            <View style={[{ flexDirection: 'row'},styles.checkboxStyle ]}>
              <CheckBox 
                value={this.state.Cybersecurity}
                onValueChange={() => this.setState({ Cybersecurity: !this.state.Cybersecurity })}
              />
              <Text style={styles.CheckBoxText}> Cyber Security</Text>
            </View>
          
            <View style={[{ flexDirection: 'row'},styles.checkboxStyle ]}>
              <CheckBox 
                value={this.state.WebDevelopmentJavascript}
                onValueChange={() => this.setState({ WebDevelopmentJavascript: !this.state.WebDevelopmentJavascript })}
              />
              <Text style={styles.CheckBoxText}> Web Development - Mean Stack</Text>
            </View>

            <View style={[{ flexDirection: 'row'},styles.checkboxStyle ]}>
              <CheckBox
                value={this.state.WebDevelopmentPHP}
                onValueChange={() => this.setState({ WebDevelopmentPHP: !this.state.WebDevelopmentPHP })}
              />
              <Text style={styles.CheckBoxText}> Web Development - PHP</Text>
            </View>

            <View style={[{ flexDirection: 'row'},styles.checkboxStyle ]}>
              <CheckBox 
                value={this.state.Blockchain}
                onValueChange={() => this.setState({ Blockchain: !this.state.Blockchain })}
              />
              <Text style={styles.CheckBoxText}> Block Chain</Text>
            </View>

            <View style={[{ flexDirection: 'row'},styles.checkboxStyle ]}>
              <CheckBox 
                value={this.state.CloudComputing}
                onValueChange={() => this.setState({ CloudComputing: !this.state.CloudComputing })}
              />
              <Text style={styles.CheckBoxText}> Cloud Computing</Text>
            </View>

            <View style={[{ flexDirection: 'row'},styles.checkboxStyle ]}>
              <CheckBox 
                value={this.state.Android}
                onValueChange={() => this.setState({ Android: !this.state.Android })}
              />
              <Text style={styles.CheckBoxText}> Android</Text>
            </View>

            <View style={[{ flexDirection: 'row'},styles.checkboxStyle ]}>
              <CheckBox 
                value={this.state.Ios}
                onValueChange={() => this.setState({ Ios: !this.state.Ios })}
              />
              <Text style={styles.CheckBoxText}> IOS</Text>
            </View>

            <View style={[{ flexDirection: 'row'},styles.checkboxStyle ]}>
              <CheckBox
                value={this.state.Linux}
                onValueChange={() => this.setState({ Linux: !this.state.Linux })}
              />
              <Text style={styles.CheckBoxText}> Linux</Text>
            </View>

            <View style={[{ flexDirection: 'row'},styles.checkboxStyle ]}>
              <CheckBox
                value={this.state.GraphicDesign}
                onValueChange={() => this.setState({ GraphicDesign: !this.state.GraphicDesign })}
              />
              <Text style={styles.CheckBoxText}> Graphics Design</Text>
            </View>

            <View style={[{ flexDirection: 'row'},styles.checkboxStyle ]}>
              <CheckBox
                value={this.state.WebDevelopmentPython}
                onValueChange={() => this.setState({ WebDevelopmentPython: !this.state.WebDevelopmentPython })}
              />
              <Text style={styles.CheckBoxText}> Python With Django and Flask</Text>
            </View>
            </View>

            {/* <View style={styles.btn}>
              <Button style={styles.btnFont} title="Submit" onPress={this.registerUser}></Button>
            </View> */}
         </View>
        <TouchableOpacity onPress={()=>{this.registerUser()}}>
                    <View style={styles.btn}>
                    <Text style={styles.SubmitText}>Submit</Text>
                    </View>
                    </TouchableOpacity>
         
        </ScrollView>
      </View>
    )
  }
}



const styles = {
  checkboxStyle:{
    borderColor:"#192a56",
    borderWidth:2,
    borderRadius:20,
    width:wp("80%"),
    marginBottom:wp("3%"),
    backgroundColor:"#192a56",
    elevation:5
  
  },
    checkboxContainer:{
  
    opacity:0.9,
    height:hp("92%"),
    width:wp('85%'),
    paddingLeft:wp("3"),
    borderRadius:20,
    marginTop:wp("5%"),
    paddingTop:hp("2%"),
    marginBottom:wp("20%"),
  },
  Mainbox: {
    height:'100%',
  },
  SubmitText: {
        color:'white',
        fontSize: 20,
        fontFamily: 'Montserrat-Bold',
        borderWidth:2,
        backgroundColor:'#4834d4',
        borderRadius:20,
        width:300,
        padding:8,
        alignSelf:'center',
        borderColor:'transparent',
        textAlign:'center',
        elevation: 5
  },
  outerContainer: {
    height: '100%',
    // height: 1500,
    // backgroundColor:'#000'
    // flex: 1,
    // alignItems:"center",
    justifyContent: "center",
  },
  innerTextW: {
    flex: 3,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor:'#000'
    // backgroundColor:'#00F'
  },
  CheckBoxText: {
    color: 'white',
    marginTop: 5,
    fontFamily: 'Montserrat-Regular',
    justifyContent:'flex-start',
  },
  welcomeText: {
    color: '#fff',
    fontSize: 25,
    fontFamily: 'Montserrat-Bold',
    position: 'relative',
    alignItems: "center",
    justifyContent: "center",
    // top: '30%',
    // fontWeight: '300',
    flex: 3
    // backgroundColor:'#FF0'
  },
  LogoImg: {
    // backgroundColor:'#F0F',
    alignItems: "center",
    justifyContent: "center",
    flex: 2,
    maxHeight: 28,
    maxWidth: 28,
    margin: 50,
  },
  innerBox: {
    position: 'relative',
    top: 50,
    flex: 7,
    alignItems: "center",
    // justifyContent:"center",
  },
  userText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Montserrat-Regular',
  },
  inputField: {
        backgroundColor: "#192a56",
        borderWidth: 1,
        width: wp('75%'),
        fontSize: 18,
        borderColor: 'transparent',
        borderRadius:20,
        color: 'white',
        fontFamily: 'Montserrat-Regular',
        marginBottom: 5,
        elevation: 5,
  },
  btn: {
    position: 'relative',
    // width: '80%',
    // marginTop: 5,
    // marginLeft:wp("10%"),
    marginBottom:hp("5%"),
    // flex: 1,
    fontFamily: 'Montserrat-Regular',
    borderRadius:40,
  },
  btnFont: {
    fontFamily: 'Montserrat-Regular',

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
}