import React, { Component } from 'react'
import Events from '../Home/Events'
import { View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { BackHandler } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';
import SInfo from 'react-native-sensitive-info'

export class Pdf extends Component {
    constructor(props) {
        super(props)
        this.state = {
            _id: "",
            category:this.props.navigation.state.params.category,
            type:this.props.navigation.state.params.type,
            name:'',
            link:''
        }
    }

//     goToLOGIN()
//   {
// this.props.navigation.navigate('')
//   }

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

            fetch(
                'http://192.168.31.156:3000/musers/courses',
                {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },body: JSON.stringify({
                        category:this.state.category,
                        type:this.state.type,
                    })
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
                        
                        this.setState({
                            name:res[0].name,
                            link:res[0].link
                        })
                    }
                })
                .catch(err => console.log(err))
        })
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
}
componentWillUnmount() {
    this.backHandler.remove()
  }
handleBackPress = () => {
  this.goBack(); // works best when the goBack is async
  return true;
}
goBack(){
this.props.navigation.navigate('Basic',{category:this.state.category,type:'Basic'})
}

goPdf(){
  this.props.navigation.navigate('Pdf',{category:this.state.category,type:'Basic'})

}


  Display() {
    this.setState({
        visible: 0
    })
  }
    static navigationOptions = {
        drawerLabel: 'Notes',

    }
    

    render() {
        return (
            <View style={styles.container}>
        <View style={styles.header}>
          
          <TouchableOpacity  style={styles.hamburger} onPress={() => this.goBack()}>
            <View style={styles.hamburgerOdd} ></View>
            <View style={[styles.hamburgerEven,{transform:[{rotateZ:'-54 deg'}]},{marginTop:"30%",marginLeft:-1}]}></View>
            <View style={styles.hamburgerOdd} ></View>
            <View style={styles.hamburgerEvenMid} ></View>
            <View style={styles.hamburgerOdd} ></View>
            <View style={[styles.hamburgerEven,{transform:[{rotateZ:'52deg'}]},{marginLeft:-1}]} ></View>
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
             
            <Text style={styles.TileHead}>{this.state.name}</Text>
            <TouchableOpacity >
                        <View style={styles.btn}>
                            <Text style={styles.btnText}>{this.state.link}</Text>
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
    hamburgerOdd: {
        flex: 3,
        // transform:[{rotateX:'45deg'}]
    },
    hamburgerEven: {
        flex: 1,
        backgroundColor: '#FFF',
        // transform:[{rotateX:'45deg'}]
        width:'65%',
        position:"relative",
    },
    hamburgerEvenMid: {
        flex: 1,
        width: '100%',
        marginLeft: '10%',
        backgroundColor: '#FFF',
        // transform:[{rotateX:'45deg'}]

    },
  });

export default Pdf