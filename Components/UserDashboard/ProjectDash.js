import React, { Component } from 'react'
import Events from '../Home/Events'
import { View, Text, StyleSheet, Image, TouchableOpacity , CheckBox} from 'react-native'
import { BackHandler } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';
import SInfo from 'react-native-sensitive-info'

export class ProjectDash extends Component {
    constructor(props) {
        super(props)
        this.state = {
            _id: "",
        }
    }

    goToPDetails()
  {
this.props.navigation.navigate('ProjectDetails')
  }
  goToQuery()
  {
this.props.navigation.navigate('ProjectQuery')
  }
  goToProgress()
  {
this.props.navigation.navigate('ProjectProgress')
  }

    componentWillMount() {
        SInfo.getItem('id', {
            sharedPreferencesName: 'userSharedPrefs',
            keychainService: 'userKeychain'
        }).then(value => {
            this.setState({ _id: value })//value1
        });
        if (this.state._id) { }
        else {
            // this.props.navigation.navigate('login')
        }
        // this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    componentDidMount() {
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
      }
    
      componentWillUnmount() {
        this.backHandler.remove()
      }
    
      handleBackPress = () => {
        // alert('dsadsadsa')          
        this.goBack(); // works best when the goBack is async
        return true;
      }
      goBack(){
        this.props.navigation.navigate('Dash')
        }

    static navigationOptions = {
        drawerLabel: '',

    }




    render() {
        return (
            <View>
                 <View style={styles.header}>
          
          <TouchableOpacity  style={styles.hamburger} onPress={() => this.goBack()}>
            <View style={styles.hamburgerOdd} ></View>
            <View style={[styles.hamburgerEven,{transform:[{rotateZ:'-54 deg'}]},{marginTop:"31%",marginLeft:-1}]}></View>
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
                <View >
                    <ScrollView>
                        <View style={styles.outerContainer}>
                            <Text style={styles.heading}>
                                Project Dashboard
                        </Text>
                            <View >
                                <View style={styles.content}>
                                    <TouchableOpacity onPress={()=>this.goToPDetails()} >
                                        <View style={styles.tile}>
                                        <Image style={styles.ProjectImage} source={require('../../img/python2.jpg')} />
                                        <Text style={styles.imgHeading}>Project Details</Text>
                                   </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={()=>this.goToProgress()} >
                                    <View style={styles.tile}>
                                         <Image style={styles.ProjectImage} source={require('../../img/Blockchain1.jpg')} />
                                         <Text style={styles.imgHeading1}>Project Progress</Text>
                                    </View>   
                                    </TouchableOpacity>                             
                                    <TouchableOpacity onPress={()=>this.goToQuery()} >
                                    <View style={styles.tile}>
                                         <Image style={styles.ProjectImage} source={require('../../img/Blockchain1.jpg')} />
                                         <Text style={styles.imgHeading1}>Project Query</Text>
                                    </View>   
                                    </TouchableOpacity>                             
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
        height: hp('100%'),
    },
    tile: {
        height: hp('25%'),
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
        textAlign: 'center'
    },
    outerContainer: {
        flex: 1,
        justifyContent: "center",
        textAlign: 'center',
        color: '#FFF',
        flexDirection: 'column',
    },
    ProjectImage:{
        height:hp('25%'),
        width:wp('89%'),
        position:"relative",
        // left:wp('-2.75%'),
        top:hp('-1.5%'),
        borderRadius:10,
        // borderWidth:5,
        borderColor:'#282f38',
},
imgHeading:{
    fontSize:35,
    textAlign:"center",
    alignSelf:"center",
    fontFamily:'Montserrat-Bold',
    fontWeight:'300',
    color:'#fff',
    position:'absolute',
    top:hp('10%'),
    zIndex:10,
},
imgHeading1:{
    fontSize:35,
    fontFamily:'Montserrat-Bold',
    // fontWeight:'100',
    textAlign:"center",
    alignSelf:"center",
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
        marginRight: 10,
        //   width:"75%",
        color: "#FFF",
        textAlign: 'right',
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
    container: {
        flex: 1,
    },
});


export default ProjectDash