import React, { Component } from 'react'
import { Text, View, Button,StatusBar, StyleSheet, Image ,TouchableOpacity, ScrollView } from 'react-native'
import FontAwesome, { Icons } from 'react-native-fontawesome';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



export default class LandingPage extends Component {



  static navigationOptions = {
    // drawerLabel: 'Welcome To Internnexus'
    drawerLabel: () => null
  }
  componentWillMount()
  {
    // this.props.navigation.navigate('Login')
  }

  goLogin()
  {
this.props.navigation.navigate('Login')
  }

  goCpyLogin()
  {
this.props.navigation.navigate('LoginComponent')
  }

  render() {
    return (

      <View style={styles.container}>
      
      <StatusBar backgroundColor="black" barStyle="dark-content" />
            <View style={styles.EventImgbox}>
              <Image source={require('../../img/introduction-visual2.png')} style={styles.EventImg}/>
            </View>
            <View style={styles.MainTextBox}>
              <Text style={styles.EventText}>Your Next Interactive Experience</Text>
              
              <TouchableOpacity style={styles.EventText2} onPress={()=>{this.goLogin()}}>
                <View>
              <Text style={styles.buttonStyle}>Are You A Student →</Text>
              </View>
              </TouchableOpacity>


              <TouchableOpacity style={styles.EventText3} onPress={()=>{this.goCpyLogin()}}>
                <View>
              <Text style={styles.buttonStyle}>Are You A Company →</Text>
              </View>
              </TouchableOpacity>

    
            </View>

        
       
                
          
      </View>
      
    )
  }
}
const styles = StyleSheet.create({
  container: {
    height:'100%'
  },
  EventImgbox:{
    height : hp('100%'),
    zIndex: -1,
    width:wp('100%'),
  },
  MainTextBox:{
    // flex:1,
    // alignItems:'center'
  },
  EventImg:{
    resizeMode: 'stretch',
    zIndex: -1,
    height: hp('50%'),
    width: wp('100%'),
    position:'relative',
    top:hp('50%'),
  },
  container: {
    backgroundColor:'black' 
  },
  buttonStyle: {
    color: '#FFF',
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    borderWidth:2,
    borderRadius:8,
    width:190,
    paddingTop:4,
    borderColor:'white',
    textAlign:'center',
  },

  EventText:{
          color: '#FFF',
          fontSize: 50,
          fontFamily: 'Montserrat-Bold',
          textAlign:'center',
          zIndex: 3,
          marginTop:hp('7%'),
          position:'relative',
          top:hp('-95%'),
  },

  EventText2: {
    zIndex: 3,
    marginTop:0,
    position:'relative',
    alignItems:'center',
    top:hp('-70%')
  },
  
  EventText3: {
    zIndex: 3,
    marginTop:10,
    position:'relative',
    alignItems:'center',
    top:hp('-66%')
  },
});

