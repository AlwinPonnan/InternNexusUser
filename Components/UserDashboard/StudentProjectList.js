import React, { Component } from 'react'
import {View,Text,StyleSheet,ScrollView,Image,TouchableOpacity} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export class StudentProjectList extends Component {
  static navigationOptions = {
    drawerLabel: 'Projects List'
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
        PROJECT LIST
            </Text>
            <Image style={{height:35,width:35}} source={require('../../img/logog.png')} />
                  </View>
        </View>

     

                <ScrollView style={styles.MainBox}>    

            <View>
              {/* <Text style={styles.Head}>Projects List</Text> */}
            </View>
            <View style={styles.Tile}>
              <View>
            <Image source={require('../../img/Android.jpg')} style={styles.TileImg}/>
            </View>
            <Text style={styles.TileHead}>Project On Android Development</Text>
            </View>

            <View style={styles.Tile}>
              <View>
            <Image source={require('../../img/Linux.jpg')} style={styles.TileImg}/>
            </View>
            <Text style={styles.TileHead}>Project On Linux Shell</Text>
            <Text style={styles.TileText}></Text>
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
  Head:{
    fontSize:30,
    textAlign:'center',
    color:'white',
    fontFamily:'Montserrat-Bold'
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
  height:300,
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

export default StudentProjectList