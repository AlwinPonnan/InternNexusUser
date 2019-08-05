import React, { Component } from 'react'
import { View, Text, ScrollView, CheckBox, TouchableOpacity, StyleSheet, Image ,TextInput} from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export class ProjectQuery extends Component {
    render() {
        return (
            <View>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.hamburger} onPress={() => this.goBack()}>
                        <View style={styles.hamburgerOdd} ></View>
                        <View style={[styles.hamburgerEven, { transform: [{ rotateZ: '-54 deg' }] }, { marginTop: "31%", marginLeft: -1 }]}></View>
                        <View style={styles.hamburgerOdd} ></View>
                        <View style={styles.hamburgerEvenMid} ></View>
                        <View style={styles.hamburgerOdd} ></View>
                        <View style={[styles.hamburgerEven, { transform: [{ rotateZ: '52deg' }] }, { marginLeft: -1 }]} ></View>
                        <View style={styles.hamburgerOdd} ></View>
                    </TouchableOpacity >
                    <View style={styles.logoMain}>
                        <Text style={styles.logoText}>
                            INTERNNEXUS
            </Text>
                        <Image style={styles.Logo} source={require('../../img/logo.png')} />
                    </View>
                </View>
                <Text style={styles.heading}>
                    Project Query
                </Text>

                {/* please apply flatlist here*/}
                <ScrollView style={styles.Querycontainer}>
                <View style={styles.inputboxView}>
                
                <TextInput style={[styles.inputbox]}
                onChangeText={(name) => this.setState({ name })} maxLength={800} placeholder="Enter your Query" multiline={true} 
                placeholderTextColor="#7f8c8d" placeholderFontFamily="Montserrat-Regular"/>
                 <View>
                <TouchableOpacity onPress={() => { this.AddData() }} style={[styles.addData]}>
                    <View>
                        <Text style={styles.addDataText}>Submit</Text>
                    </View>
                </TouchableOpacity>
                <Text>{this.state.name}</Text>
                </View>
            </View>
                <View style={styles.container}>
                    </View>
                    <View style={styles.SolutionContainer}>
                        <Text style={styles.heading2}>Your Query Solutions</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    addDataText:{
        textAlign:'center',
        paddingTop:5,
        color:"#fff",
        fontSize:16,
        fontFamily:'Montserrat-Bold',
      },
    addData:{
        backgroundColor:"#4834d4",
        alignSelf:"center",
        color:"#fff",
        width:wp('40%'),
        height:hp('7'),
        alignSelf:'center',
        paddingTop:hp("1%"),
        borderRadius:10,
        marginTop:10,
        zIndex:100,
      },
    inputboxView:{
        alignSelf:'center',
        textAlignVertical:"top",
        height:hp("100%"),
        },
        inputbox: {
        height:hp('50'),
        width:wp('80%'),
        position:'relative',
        textAlign:'center',
        // left:29,
        borderRadius:10,
        fontFamily:'Montserrat-SemiBold',
        // paddingLeft:wp("2%"),
        fontSize:20,
         backgroundColor:'white',
        },
    TextInputStyle:{
    color:"#000",
    backgroundColor:"#fff",
    borderRadius:20,
   },
    SolutionContainer:{
        backgroundColor:"#1d224d",
        height:hp("147.5"),
        width:wp("82%"),
        alignSelf:"center",
        borderRadius:20,
        position:"relative",
        top:hp("-40"),
    },
    Querycontainer:{
        marginTop:15,
        backgroundColor:"#232f61",
        paddingTop:10,
        width:wp("85%"),
        alignSelf:"center",
        borderRadius:20,
        height:hp("70%"),
    },
    CheckBox:{
        borderColor:"#192a56",
        borderWidth:2,
        borderRadius:20,
        width:wp("80%"),
        marginBottom:wp("5%"),
        backgroundColor:"#192a56",
        elevation:5,
        borderRadius:10,
        alignSelf:"center",
    },
    textStyle:{
        color:"#fff",
        alignSelf:"center",
        marginTop:-25,
        position:"relative",
        top:-2,
        paddingBottom:2
    },
    container:{
        height:hp("120%"),
        backgroundColor:"red",
    },
    ProgressBar: {
        borderRadius: 10,
        marginTop:35,
        marginBottom:20,
        alignSelf:"center",
    },
    heading2: {
        textAlign: 'center',
        color: '#FFF',
        fontSize: 25,
        paddingTop:10,
        fontFamily: 'Montserrat-Bold',
    },
    heading: {
        textAlign: 'center',
        color: '#FFF',
        fontSize: 30,
        fontFamily: 'Montserrat-Bold',
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
        width: '65%',
        position: "relative",
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
})
export default ProjectQuery
