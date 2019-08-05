import React, { Component } from 'react'
import { Text, View, Button, StyleSheet, Image ,TouchableOpacity, ScrollView } from 'react-native'
import FontAwesome, { Icons } from 'react-native-fontawesome';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class CoursesNotes extends Component {
  static navigationOptions = {
    drawerLabel: 'Notes'
  }

  Display() {
    this.setState({
        visible: 0
    })
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
              INTERNNEXUS
            </Text>
            <Image style={styles.Logo} source={require('../../img/logo.png')} />
          </View>
        </View>
        <ScrollView style={styles.MainBox}>
           
            <View style={styles.TileODD}>
             
            <Text style={styles.TileHead}>W3schools Notes</Text>
            <TouchableOpacity >
                        <View style={styles.btn}>
                            <Text style={styles.btnText}>Link</Text>
                        </View>
                    </TouchableOpacity>
            </View>

            {/* <View style={styles.Tile}>
              <View>
            <Image source={require('../../img/earth.jpg')} style={styles.TileImg}/>
            </View>
            <Text style={styles.TileHead}>Google Earth</Text>
            <Text style={styles.TileText}>With Google Earth for Chrome, fly anywhere in seconds and explore hundreds of 3D cities right in your browser. </Text>
            </View> */}

            <View style={styles.TileEVEN}>
            <Text style={styles.TileHead}>MDN Notes</Text>
            <TouchableOpacity >
                        <View style={styles.btn}>
                            <Text style={styles.btnText}>Browse</Text>
                        </View>
                    </TouchableOpacity>
            </View>

            <View style={styles.TileODD}>
             
             <Text style={styles.TileHead}>W3schools Notes</Text>
             <TouchableOpacity >
                         <View style={styles.btn}>
                             <Text style={styles.btnText}>Link</Text>
                         </View>
                     </TouchableOpacity>
             </View>

             <View style={styles.TileEVEN}>
            <Text style={styles.TileHead}>MDN Notes</Text>
            <TouchableOpacity >
                        <View style={styles.btn}>
                            <Text style={styles.btnText}>Browse</Text>
                        </View>
                    </TouchableOpacity>
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
    // height:hp('10%')
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

TileODD: {
  height:180,
  width:wp('90%'),
  alignSelf:'center',
  marginTop:'5%',
  borderRadius:20,
  backgroundColor:'#1e3799',
  elevation:15
},
TileEVEN: {
    height:180,
    width:wp('90%'),
    alignSelf:'center',
    marginTop:'5%',
    borderRadius:20,
    backgroundColor:'#0c2461',
    elevation:15
  },
btn: {
    position: "relative",
    width: "100%",
    marginTop: hp("5%"),
    borderRadius: 40,
    fontFamily: "Montserrat-Regular",
},
btnText: {
    color: "white",
    fontSize: 20,
    fontFamily: "Montserrat-Bold",
    borderWidth: 2,
    backgroundColor: "#4834d4",
    borderRadius: 20,
    alignSelf:'center',
    width: wp('45%'),
    padding: 8,
    borderColor: "transparent",
    textAlign: "center",
    elevation: 5,
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
  fontSize:30,
  textAlign:'center',
  position:'relative',
  top:hp('2%')
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
   marginRight:10,
    //   width:"75%",
    color: "#FFF",
    textAlign: 'right',
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