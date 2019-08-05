import React, { Component } from 'react'
import { Text, View, Button, StyleSheet, Image ,TouchableOpacity, ScrollView } from 'react-native'
import FontAwesome, { Icons } from 'react-native-fontawesome';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



export class StudentEvent extends Component {
  static navigationOptions={
    drawerLabel:'Events'
}
    render() {
        return (

          <View style={styles.container}>
          <View style={styles.header}>
            
            <TouchableOpacity  style={styles.hamburger} onPress={() => this.props.navigation.toggleDrawer()}>
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
        EVENTS
            </Text>
            <Image style={{height:35,width:35}} source={require('../../img/logog.png')} />
                  </View>
          </View>
          <ScrollView style={styles.MainBox}>
              <View style={styles.EventImgbox}>
                <Image source={require('../../img/about-visual.png')} style={styles.EventImg}/>
          
                <Text style={styles.EventText}>Get To Know The Upcoming Events Here</Text>
                <Text style={styles.EventText}>▼</Text>
            
              </View>
              <View style={styles.Tile}>
                <View>
              <Image source={require('../../img/earth.jpg')} style={styles.TileImg}/>
              </View>
              <Text style={styles.TileHead}>Hello There Im The Google Earth</Text>
              </View>
  
              <View style={styles.Tile}>
                <View>
              <Image source={require('../../img/earth.jpg')} style={styles.TileImg}/>
              </View>
              <Text style={styles.TileHead}>Google Earth</Text>
              <Text style={styles.TileText}>With Google Earth for Chrome, fly anywhere in seconds and explore hundreds of 3D cities right in your browser. </Text>
              </View>
  
              <View style={styles.Tile}>
                
              </View>
              
          </ScrollView>
          
            
        </View>
            
        )
    }
}
const styles = StyleSheet.create({
  
  EventImgbox: {
  
  },
  MainBox:{
    
  },
  EventImg: {
    height:hp('70%'),
    resizeMode:'contain',
    width:wp('100'),
    alignItems:'center',
  },
  EventText: {
    fontFamily:'Montserrat-Bold',
    fontSize:32,
    textAlign:'center',
    color:'white',
    position:'relative',
    top:hp('-10%'),
  },

Tile: {
  height:400,
  width:wp('90%'),
  backgroundColor:'black',
  alignSelf:'center',
  marginTop:'5%',
  borderRadius:20,
  backgroundColor:'#0d162e',
  elevation:15
},

TileImg: {
  height:'90%',
  width:'100%',
  resizeMode:'cover',
  borderRadius:20,
  
},
TileHead: {
  color:'white',
  fontFamily:'Montserrat-Bold',
  fontSize:20,
  textAlign:'center',
  position:'relative',
  top:hp('-2%')
},
TileText: {
  color:'white',
  fontFamily:'Montserrat-Regular',
  textAlign:'center',
  top:hp('-1%')
},
  header: {
    height: 40,
    marginBottom: 5,
    marginTop:10,
    // backgroundColor:"#FFF",
    flexDirection: 'row',
    width:wp('100%'),
    alignItems:'center',
  },
  logoMain: {
    flexDirection:'row',
    flex:12,
    marginRight:15,
    // backgroundColor:'#FFF'
  },

  logo: {
    maxHeight:33,
    maxWidth:33,
    flex:1,

  },
  logoText: {
  //  marginRight:10,
    //   width:"75%",
    color: "#FFF",
    textAlign: 'center',
    flex:10,
    fontFamily: 'Montserrat-Bold',
    fontSize:18,
  },
  hamburger: {
    // width:"25%",
    flex: 1,
    color:'#FFF',
    margin:5,
    marginLeft:15,
    marginRight:10,
    flexDirection:'column',
    justifyContent:'center'
    // right:10
  },
  hamburgerOdd:{
    flex:3
  },
  hamburgerEven:{
    flex:2,
    backgroundColor:'#FFF'
  },
  hamburgerEvenMid:{
    flex:2,
    width:'80%',
    marginLeft:'10%',
    backgroundColor:'#FFF'
  },
});

  
export default StudentEvent