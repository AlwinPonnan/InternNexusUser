import React, { Component } from 'react'
import { View, Text, ScrollView, Input, TextInput, Button, CheckBox, ImageBackground, Alert, Image, TouchableOpacity } from 'react-native'
import { createAppContainer, createStackNavigator } from 'react-navigation';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from "react-native-responsive-screen"
import ImagePicker from 'react-native-customized-image-picker';

class RegisterComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:'',
       email:'',
       phone:'',
       password:'',
       password2:''

    }
  }
  
  imagepicker(){
    ImagePicker.openPicker({
        // isHidePreview:false,
      
      }).then(images => {
        console.log(images);
      });
}; 
  static navigationOptions = {
        // drawerLabel: 'Company Register'
        drawerLabel: () => null
      }
      registerUser(){
        if(this.state.password==this.state.password2)
        {
        fetch('http://192.168.31.156:3000/mcomp/cpyRegister', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: this.state.name,
              email: this.state.email,
              phone: this.state.phone,
              password: this.state.password,
              password2: this.state.password2,
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
          alert("you have been rdererf")
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
          COMPANY REGISTER
            </Text>
            <Image style={{height:35,width:35}} source={require('../../img/logog.png')} />
                  </View>
              </View>
              <ScrollView style={styles.Mainbox}>
                <View style={styles.innerTextW}>
      
                  <Image style={styles.LogoImg} source={require('../../img/logo3.png')} />
                  <Text style={styles.welcomeText}>Company Registration</Text>
                </View>
          
                <View style={styles.innerBox}>
                  <View style={styles.innerInput}>
                    <Text style={styles.userText}>Name</Text>
                    <TextInput style={styles.inputField} onChangeText={(name)=>this.setState({name})} />
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
                    <Text style={styles.userText}>Password</Text>
                    <TextInput style={styles.inputField} secureTextEntry={true} onChangeText={(password)=>this.setState({password})} />
                  </View>
      
                  <View style={styles.innerInput}>
                    <Text style={styles.userText}> Confirm Password</Text>
                    <TextInput style={styles.inputField} secureTextEntry={true} onChangeText={(password2)=>this.setState({password2})} />
                  </View>
                  
               </View>
               {/* <TouchableOpacity onPress={()=>{this.registerUser()}} style={styles.btn}>
                    
                    <Text style={styles.SubmitText}>Submit</Text>
                    </TouchableOpacity> */}
                    <TouchableOpacity onPress={()=>{this.registerUser()}} style={styles.test}>
                      <Text style={ styles.subText}>Register</Text>
                    </TouchableOpacity>
              </ScrollView>
            </View>
          )
    }
}

const styles = {
 test:{
   alignSelf:"center",
   height:50,
   backgroundColor:"#4834d4",
   borderRadius:40,
   textAlign:"center",
   width:"80%",
  marginTop:-85,
  marginBottom:"7%",
 },
 subText:{
   textAlign:"center",
   paddingTop:"4%",
   fontSize:20,
   color:"#fff",
   fontFamily: 'Montserrat-Bold',
 },
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
  // SubmitText: {
  //       color:'white',
  //       fontSize: 20,
  //       fontFamily: 'Montserrat-Bold',
  //       borderWidth:2,
  //       backgroundColor:'red',
  //       borderRadius:20,
  //       width:300,
  //       padding:8,
  //       alignSelf:'center',
  //       borderColor:'transparent',
  //       textAlign:'center',
  //       elevation: 5,
  //       position:"relative",
  //       top:hp("-70"),
  // },
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
    height:hp("45")
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
    top:hp("-17"),
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
        backgroundColor: "#fff",
        borderWidth: 1,
        width: wp('75%'),
        fontSize: 18,
        borderColor: 'transparent',
        borderRadius:20,
        color: 'black',
        fontFamily: 'Montserrat-Regular',
        marginBottom: 5,
        elevation: 5,
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



export default RegisterComponent
