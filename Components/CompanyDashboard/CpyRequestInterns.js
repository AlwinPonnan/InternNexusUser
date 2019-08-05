import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, Image, TouchableOpacity,CheckBox } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';
import { Dropdown } from 'react-native-material-dropdown';
import { TextButton, RaisedTextButton } from 'react-native-material-buttons';
import ImagePicker from 'react-native-customized-image-picker';


export default class CpyRequestInterns extends Component {
  static navigationOptions = {
    drawerLabel: 'Request Interns'
  }


  imagepicker(){
    ImagePicker.openPicker({
        // isHidePreview:false,
      
      }).then(images => {
        console.log(images);
      });
};

  constructor(props) {
    super(props)


  

    this.state = {
        number: '',
        duration: '',
        phone: '',
        hr: '',
        interviewdate: '',
        interviewer: '',
        AI: false,
        gd: false,
        market: false,
        cybersec: false,
        webdjs: false,
        webdph: false,
        webdpy: false,
        NumAI: '',
        NumGD: '',
        NumMark: '',
        NumCyber: '',
        NumJs: '',
        NumPhp: '',
        NumPy: '',
        add: '',
        state:'',
        city:'',

    }
    this.upData = this.upData.bind(this)
}
chkFunction() {
    if (this.state.duration != '' && this.state.phone != '' && this.state.number != ''
        && this.state.interviewdate != '' && this.state.interviewer != '' && this.state.NumAI != '' && this.state.hr != ''
        && this.state.NumGD != '' && this.state.NumMark != '' && this.state.NumCyber != '' && this.state.NumJs != ''
        && this.state.add!='' && this.state.NumPy!='' && this.state.state!='' && this.state.city!='' 
    ) {
        return true
    }
    else {


        return false
    }
}
upData() {
    if (this.chkFunction()==true) {

        fetch(`http://192.168.31.156:3000/mcomp/ReqInt`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                number:this.state.number,
                duration: this.state.duration,
                phone: this.state.phone,
                interviewdate: this.state.interviewdate,
                interviewer: this.state.interviewer,
                AI: this.state.AI,
                gd: this.state.gd,
                market: this.state.market,
                cybersec: this.state.cybersec,
                webdjs: this.state.webdjs,
                hr: this.state.hr,
                webdph:this.state.webdph,
                webdpy:this.state.webdpy,
                NumAI:this.state.NumAI,
                NumGD:this.state.NumGD,
                NumMark:this.state.NumMark,
                NumJs:this.state.NumJs,
                NumPhp:this.state.NumPhp,
                NumPy:this.state.NumPy,
                NumCyber:this.state.NumCyber,
                add:this.state.add,
                state:this.state.state,
                city:this.state.city,
            }),
        });
    }
    else {
        alert('please fill all the fields')

    }
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
                      INTERNNEXUS
                  </Text>
                  <Image style={styles.Logo} source={require('../../img/logo.png')} />
              </View>
          </View>

          <TouchableOpacity onPress={() => this.imagepicker()}>
              <Text>sample text</Text>
          </TouchableOpacity>
          <ScrollView>
              <View style={styles.outerContainer}>
                  {/* <Image style={styles.userImage} source={require('../../img/a.jpg')} /> */}
                  {/* <View style={styles.userprofilebox}>
                  </View> */}
                  <View style={styles.profilePosition}>
                      <TextInput
                          placeholder="Number" placeholderTextColor="grey"
                          style={styles.textBox2} 
                          onChangeText={(number) => this.setState({ number })}
                      />
                      <TextInput
                          placeholder="duration" placeholderTextColor="grey"
                          style={styles.textBox2}
                          onChangeText={(duration) => this.setState({  duration })}
                      />
                      <TextInput placeholder="phone" placeholderTextColor="grey" style={styles.textBox2}
                          onChangeText={(phone) => this.setState({ phone })}
                      />
                      <TextInput placeholder="Hr" placeholderTextColor="grey" style={styles.textBox2}
                          onChangeText={(hr) => this.setState({ hr })}
                      />
                      <TextInput placeholder="InterviewDate" placeholderTextColor="grey" style={styles.textBox2}
                          onChangeText={(interviewdate) => this.setState({  interviewdate })}
                      />
                      <TextInput placeholder="Interviewer"  placeholderTextColor="grey" style={styles.textBox2}
                          onChangeText={(interviewer) => this.setState({ interviewer })}
                      />
                      <CheckBox 
                value={this.state.AI}
                onValueChange={() => this.setState({ AI:!this.state.AI })}
              /><Text style={styles.CheckBoxText}> AI/ML</Text>
                      <CheckBox 
                value={this.state.gd}
                onValueChange={() => this.setState({ gd:!this.state.gd })}
              /><Text style={styles.CheckBoxText}> Graphic Design</Text>
                      <CheckBox 
                value={this.state.cybersec}
                onValueChange={() => this.setState({ cybersec:!this.state.cybersec })}
              /><Text style={styles.CheckBoxText}> Cyber Security</Text>
                      <CheckBox 
                value={this.state.market}
                onValueChange={() => this.setState({ market:!this.state.market })}
              /><Text style={styles.CheckBoxText}> Marketing</Text>
                      <CheckBox 
                value={this.state.webdjs}
                onValueChange={() => this.setState({ webdjs:!this.state.webdjs })}
              /><Text style={styles.CheckBoxText}> Web Desiging Js</Text>
                      <CheckBox 
                value={this.state.webdph}
                onValueChange={() => this.setState({ webdph:!this.state.webdph })}
              /><Text style={styles.CheckBoxText}> Web Desiging Php</Text>
                      <CheckBox 
                value={this.state.webdpy}
                onValueChange={() => this.setState({ webdpy:!this.state.webdpy })}
              /><Text style={styles.CheckBoxText}>Web Designing Python</Text>
                      <TextInput placeholder="NumAI" placeholderTextColor="grey" style={styles.textBox2}
                          onChangeText={(NumAI) => this.setState({ NumAI })}
                      />
                      <TextInput placeholder="NumGD" placeholderTextColor="grey" style={styles.textBox2}
                          onChangeText={(NumGD) => this.setState({ NumGD })}
                      />
                      <TextInput placeholder="NumCyber" placeholderTextColor="grey" style={styles.textBox2}
                          onChangeText={(NumCyber) => this.setState({ NumCyber })}
                      />
                      <TextInput placeholder="Numjs" placeholderTextColor="grey" style={styles.textBox2}
                          onChangeText={(NumJs) => this.setState({ NumJs })}
                      />
                      <TextInput placeholder="NumMArk" placeholderTextColor="grey" style={styles.textBox2}
                          onChangeText={(NumMark) => this.setState({ NumMark })}
                      />
                      <TextInput placeholder="NumPhp" placeholderTextColor="grey" style={styles.textBox2}
                          onChangeText={(NumPhp) => this.setState({ NumPhp })}
                      />
                      <TextInput placeholder="NumPy" placeholderTextColor="grey" style={styles.textBox2}
                          onChangeText={(NumPy) => this.setState({ NumPy })}
                      />
                      <TextInput placeholder="address" placeholderTextColor="grey" style={styles.textBox2}
                          onChangeText={(add) => this.setState({ add })}
                      />
                      <TextInput placeholder="state" placeholderTextColor="grey" style={styles.textBox2}
                          onChangeText={(state) => this.setState({ state })}
                      />
                      <TextInput placeholder="city" placeholderTextColor="grey" style={styles.textBox2}
                          onChangeText={(city) => this.setState({ city })}
                      />
                      

                      <View style={styles.btnView}>
                          <TouchableOpacity
                              onPress={this.upData}
                              style={[styles.Btn, { marginLeft: wp("5%") }]}
                          >
                              <View style={styles.btn}>
                                  <Text style={styles.LoginText}>Update Profile Details</Text>
                              </View>
                          </TouchableOpacity>

                      </View>

                  </View>
              </View>
          </ScrollView>
      </View>
  )
}
}



const styles = StyleSheet.create({
  posbuttons2: {
      marginLeft: wp("5%"),
  },
  staticText: {
      textAlign: "center",
      color: "#FFF",
      marginBottom: 10,
      fontSize: 18,
      fontFamily: "Montserrat-Regular"
  },
  LoginText: {
      color: "white",
      fontSize: 20,
      fontFamily: "Montserrat-Bold",
      borderWidth: 2,
      backgroundColor: "#4834d4",
      borderRadius: 20,
      width: wp('70%'),
      padding: 12,
      borderColor: "transparent",
      textAlign: "center",
      elevation: 5,
      alignSelf: 'center',
      marginLeft: wp("-2.5%"),
      marginTop: hp("2%"),
      marginBottom: hp("1%")
  },

  dynamicText: {
      fontFamily: "Montserrat-Medium",
      color: "white",
      textAlign: "center",
      fontSize: 21,
      backgroundColor: "#fff",
      borderWidth: 1,
      opacity: 0.9,
      width: wp("89%"),
      borderColor: "transparent",
      borderRadius: 20,
      elevation: 5,
      padding: 7,
      alignItems: "center"
  },
  staticPosition: {
      marginTop: hp("18%"),
      backgroundColor: "#00000050",
      padding: 20,
      paddingTop: 80
  },
  outerContainer: {
      height: "100%",
      marginBottom: hp("10%"),
      flex: 1,
      justifyContent: "center"
  },
  LogoImg: {
      // backgroundColor:'#F0F',
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
      maxHeight: 28,
      maxWidth: 28,
      margin: 50
  },
  dropDown: {
      marginTop: 10,
      height: 40,
      color: "#fff",
      backgroundColor: "#fff",
      marginBottom: 50,
      position: "relative",
      top: -30,
      fontSize: 20,
      fontFamily: 'Montserrat-Bold',
      borderRadius: 15,
      textAlign: 'center',
      position: 'relative',
  },
  dropDownText: {
      color: "#fff",
      fontSize: 16,
      position: "relative",
      top: -17,
      marginLeft: wp("2%"),
  },
  dropDownContainer: {
      width: wp("90%"),
      height: 50,
      marginLeft: wp("8%"),
      marginBottom: 20,
  },
  logo: {
      maxHeight: 33,
      maxWidth: 33,
      flex: 1
  },
  profilePosition: {
      marginTop: hp("30%"),
      justifyContent: 'center',
      alignItems: 'center'
  },
  textBox: {
      height: 50,
      backgroundColor: "#fff",
      position: "relative",
      marginTop: 270,
      borderWidth: 1,
      width: 300,
      // marginLeft: wp("8%"),
      fontSize: 18,
      borderColor: 'transparent',
      borderRadius: 20,
      color: '#000',
      fontFamily: 'Montserrat-Regular',
      marginBottom: -15,
      elevation: 5,
  },
  textBox2: {
      height: 50,
      backgroundColor: "#192a56",
      position: "relative",
      marginTop: 10,
      borderWidth: 1,
      width: wp('75%'),
      fontSize: 18,
      borderColor: 'transparent',
      borderRadius: 20,
      color: '#000',
      fontFamily: 'Montserrat-Regular',
      marginBottom: 5,
      elevation: 5,
      alignSelf: 'center',
      // marginLeft: wp("8%"),
      paddingLeft: wp("5%"),
  },

  userprofilebox: {
      height: hp('20%'),
      marginTop: 90,
      width: wp("90%"),
      borderRadius: 20,
      alignSelf: 'center',
      // marginLeft: wp("5%"),
      opacity: 0.3,
      marginBottom: -190,
      backgroundColor: "#000",
      zIndex: 1
  },
  logoText: {
      marginRight: 10,
      //   width:"75%",
      color: "#FFF",
      textAlign: "right",
      flex: 10,
      fontFamily: "Montserrat-Bold",
      fontSize: 18
  },
  header: {
      height: 40,
      marginBottom: 5,
      marginTop: 10,
      // backgroundColor:"#FFF",
      flexDirection: "row",
      alignItems: "center"
  },
  logoMain: {
      flexDirection: "row",
      flex: 12,
      marginRight: 15
      // backgroundColor:'#FFF'
  },
  userImage: {
      position: "absolute",
      left: wp("30%"),
      height: hp("20"),
      width: wp("40"),
      top: 50,
      opacity: 1,
      borderRadius: 150,
      zIndex: 100
  },
  hamburger: {
      // width:"25%",
      flex: 1,
      color: "#FFF",
      margin: 5,
      marginLeft: 15,
      marginRight: 10,
      flexDirection: "column",
      justifyContent: "center"
      // right:10
  },
  hamburgerOdd: {
      flex: 3
  },
  hamburgerEven: {
      flex: 2,
      backgroundColor: "#FFF"
  },
  hamburgerEvenMid: {
      flex: 2,
      width: "80%",
      marginLeft: "10%",
      backgroundColor: "#FFF"
  },
  container: {
      flex: 1
  }
});