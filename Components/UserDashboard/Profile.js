import React, { Component } from "react"
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    Image,
    AppRegistry,
    TouchableOpacity
} from "react-native"
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { ScrollView } from "react-native-gesture-handler"
import { Dropdown } from "react-native-material-dropdown"
import {
    TextButton,
    RaisedTextButton,
    Button
} from "react-native-material-buttons"
import SInfo from "react-native-sensitive-info"
// import QRCode from 'react-native-qrcode';
import Snackbar from 'react-native-snackbar';

export class Profile extends Component {

    state = {
        text: 'http://facebook.github.io/react-native/',
    };

    

    constructor(props) {
        super(props)

        this.state = {
            username: "",
            email: "",
            firstname: "",
            lastname: "",
            pnumber: "",
            birthday: "",
            university: "",
            field: "",
            loc1: "",
            loc2: "",
            loc3: "",
            course: "",
            stream: "",
            nob: "",
            yg: "",
            state: "",
            city: "",
            college: "",
            _id: "",
            updateChk: true,
            switchPage: false
        }
        this.upData = this.upData.bind(this)
        this.upLoc = this.upLoc.bind(this)
        this.backLoc = this.backLoc.bind(this)
    }

    componentWillMount() {
        // alert("component will mount running");
        SInfo.getItem("id", {
            sharedPreferencesName: "userSharedPrefs",
            keychainService: "userKeychain"
        })
            .then(value => {
                this.setState({ _id: value }) //value1
                // alert(this.state._id)
                console.log(value)
                return value
            })
            .then(id => {
                console.log("inside if")

                fetch(
                    `http://192.168.31.156:3000/musers/user/${this.state._id}`,
                    {
                        method: "GET",
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json"
                        }
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
                            alert("error")
                        } else {
                            console.log("test")
                            console.log(res)
                            // alert(res.pnumber) 
                            this.setState({
                                username: res.username,
                                email: res.email,
                                firstname: res.firstname,
                                lastname: res.lastname,
                                pnumber: res.phone,
                                birthday: res.birthday,
                                university: res.university,
                                field: res.field,
                                loc1: res.loc1,
                                loc2: res.loc2,
                                loc3: res.loc3,
                                course: res.course,
                                stream: res.stream,
                                nob: res.backlogs,
                                yg: res.yeargap,
                                state: res.state,
                                city: res.city,
                                college: res.college
                            })
                        }
                    })
                    .catch(err => console.log(err))
            })
           
    }

    chkFunction() {
        if (
            this.state.firstname != "" &&
            this.state.lastname != "" &&
            this.state.birthday != "" &&
            this.state.university != "" &&
            this.state.field != "" &&
            this.state.loc1 != "" &&
            this.state.loc2 != "" &&
            this.state.loc3 != "" &&
            this.state.course != "" &&
            this.state.stream != "" &&
            this.state.state != "" &&
            this.state.city != "" &&
            this.state.college != ""
        ) {
            return true
        } else {
            return false
        }
    }
    upData() {
        if (true) {
            console.log(this.state._id)

            fetch(`http://192.168.31.156:3000/musers/user/${this.state._id}`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    firstname: this.state.firstname,
                    lastname: this.state.lastname,
                    birthday: this.state.birthday,
                    university: this.state.university,
                    college: this.state.college,
                    field: this.state.field,
                    loc1: this.state.loc1,
                    loc2: this.state.loc2,
                    loc3: this.state.loc3,
                    course: this.state.course,
                    stream: this.state.stream,
                    backlogs: this.state.nob,
                    yeargap: this.state.yg,
                    state: this.state.state,
                    city: this.state.city
                })
            })
        }
    }
    upLoc() {
        this.setState({
            switchPage: true
        })
      
    }
    backLoc() {
        this.setState({
            switchPage: false
        })
    }
    render() {
        let data = [
            {
                value: "0"
            },
            {
                value: "1"
            },
            {
                value: "2"
            },
            {
                value: "3"
            }
        ]
        // if(this.state.updateChk)
        // {
        // let Update =
        // }
        // else{
        //     let Update = <Text>test</Text>
        // }

        if (this.state.switchPage) {
            return (
                // <View>
                <View style={styles.outerContainer}>
                    <View style={styles.header}>
                        <TouchableOpacity
                            style={styles.hamburger}
                            onPress={() => this.props.navigation.toggleDrawer()}
                        >
                            <View style={styles.hamburgerOdd} />
                            <View style={styles.hamburgerEven} />
                            <View style={styles.hamburgerOdd} />
                            <View style={styles.hamburgerEvenMid} />
                            <View style={styles.hamburgerOdd} />
                            <View style={styles.hamburgerEven} />
                            <View style={styles.hamburgerOdd} />
                        </TouchableOpacity>
                        <View style={styles.logoMain}>
                         <Text style={styles.logoText}>
      PROFILE
            </Text>
            <Image style={{height:35,width:35}} source={require('../../img/logog.png')} />
                  </View>
                    </View>
                    <ScrollView>



                        <Image
                            style={styles.userImage}
                            source={require("../../img/a.jpg")}
                        />
                        <View style={styles.userprofilebox} />
                        {/* {Update} */}
                        <View style={styles.profilePosition}>
                            <TextInput
                                placeholder="Username"
                                style={styles.textBox}
                                onChangeText={username =>
                                    this.setState({ username })
                                }
                                value={this.state.username}
                            />

                            <TextInput
                                placeholder="Email address"
                                style={styles.textBox2}
                                onChangeText={email =>
                                    this.setState({ email })
                                }
                                value={this.state.email}
                            />
                            <TextInput
                                placeholder="First name"
                                style={styles.textBox2}
                                onChangeText={firstname =>
                                    this.setState({ firstname })
                                }
                                value={this.state.firstname}
                            />
                            <TextInput
                                placeholder="Last name"
                                style={styles.textBox2}
                                onChangeText={lastname =>
                                    this.setState({ lastname })
                                }
                                value={this.state.lastname}
                            />
                            <TextInput
                                placeholder="Phone number"
                                style={styles.textBox2}
                                onChangeText={pnumber =>
                                    this.setState({ pnumber })
                                }
                                value={this.state.pnumber}
                            />
                            <TextInput
                                placeholder="Birthday"
                                style={styles.textBox2}
                                onChangeText={birthday =>
                                    this.setState({ birthday })
                                }
                                value={this.state.birthday}
                            />
                            <TextInput
                                placeholder="University"
                                style={styles.textBox2}
                                onChangeText={university =>
                                    this.setState({ university })
                                }
                                value={this.state.university}
                            />
                            <TextInput
                                placeholder="College"
                                style={styles.textBox2}
                                onChangeText={college =>
                                    this.setState({ college })
                                }
                                value={this.state.college}
                            />
                            <TextInput
                                placeholder="Prefered field of internship"
                                style={styles.textBox2}
                                onChangeText={field =>
                                    this.setState({ field })
                                }
                                value={this.state.field}
                            />
                            {/* <TextInput
                                placeholder="prefered locaton of internship"
                                style={styles.textBox2}
                            /> */}
                            {/* <Text >Prefered Location for internship</Text> */}
                            <TextInput
                                placeholder="Location 1 for internship"
                                style={styles.textBox2}
                                onChangeText={loc1 =>
                                    this.setState({ loc1 })
                                }
                                value={this.state.loc1}
                            />
                            <TextInput
                                placeholder="Location 2 for internship"
                                style={styles.textBox2}
                                onChangeText={loc2 =>
                                    this.setState({ loc2 })
                                }
                                value={this.state.loc2}
                            />
                            <TextInput
                                placeholder="Location 3 for internship"
                                style={styles.textBox2}
                                onChangeText={loc3 =>
                                    this.setState({ loc3 })
                                }
                                value={this.state.loc3}
                            />
                            <TextInput
                                placeholder="Course"
                                style={styles.textBox2}
                                onChangeText={course =>
                                    this.setState({ course })
                                }
                                value={this.state.course}
                            />
                            <TextInput
                                placeholder="Stream"
                                style={styles.textBox2}
                                onChangeText={stream =>
                                    this.setState({ stream })
                                }
                                value={this.state.stream}
                            />
                            <View style={styles.dropDownContainer}><Dropdown
                                label="Number of backlogs"
                                data={data}
                                style={styles.dropDown}
                                onChangeText={nob => this.setState({ nob })}
                                value={this.state.nob}

                            />
                                {/* <Text style={styles.dropDownText}>Number of backlogs</Text> */}
                            </View>
                            <View style={styles.dropDownContainer}>
                                <Dropdown
                                    label="Year Gap"
                                    data={data}
                                    style={styles.dropDown}
                                    onChangeText={yg => this.setState({ yg })}
                                    value={this.state.yg}
                                />
                                {/* <Text style={styles.dropDownText}>Year Gap</Text> */}
                            </View>
                            <TextInput
                                placeholder="State"
                                style={styles.textBox2}
                                onChangeText={state =>
                                    this.setState({ state })
                                }
                                value={this.state.state}
                            />
                            <TextInput
                                placeholder="City"
                                style={styles.textBox2}
                                onChangeText={city =>
                                    this.setState({ city })
                                }
                                value={this.state.city}
                            />

                            <View style={styles.btnView}>
                                <TouchableOpacity
                                    onPress={this.upData}
                                    style={[styles.Btn, styles.posbuttons2]}
                                >
                                    <View style={styles.btn}>
                                        <Text style={styles.LoginText}>Update Profile </Text>
                                    </View>
                                </TouchableOpacity>

                            </View>

                            <View style={[styles.btnView, styles.posbuttons2, { marginBottom: wp("5%") }]}>
                                <TouchableOpacity
                                    onPress={this.backLoc}
                                    style={styles.Btn}
                                >
                                    <View style={styles.btn}>
                                        <Text style={styles.LoginText}>Check Profile </Text>
                                    </View>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </ScrollView>
                </View>
                // </View>
            )
        } else {
            return (
                <View style={styles.outerContainer}>
                    <View style={styles.header}>
                        <TouchableOpacity
                            style={styles.hamburger}
                            onPress={() => this.props.navigation.toggleDrawer()}
                        >
                            <View style={styles.hamburgerOdd} />
                            <View style={styles.hamburgerEven} />
                            <View style={styles.hamburgerOdd} />
                            <View style={styles.hamburgerEvenMid} />
                            <View style={styles.hamburgerOdd} />
                            <View style={styles.hamburgerEven} />
                            <View style={styles.hamburgerOdd} />
                        </TouchableOpacity>
                        <View style={styles.logoMain}>
                         <Text style={styles.logoText}>
       PROFILE
            </Text>
            <Image style={{height:35,width:35}} source={require('../../img/logog.png')} />
                  </View>
                    </View>
                    <ScrollView>
                        {/* <View style={styles.qrcode}>
              <QRCode 
              value={this.state.text}
          size={200}
          bgColor='white'
          fgColor='black'/>
        </View> */}
                        <Image
                            style={styles.userImage}
                            source={require("../../img/a.jpg")}
                        />
                        {/* <Text>{this.state.username}</Text>
                    <Text>{this.state.university}</Text>
                    <Text>{this.state.email}</Text>
                    <Text>{this.state.pnumber}</Text> */}
                        <View style={styles.staticPosition}>
                            <Text style={styles.staticText}>User name : </Text>
                            <Text style={styles.dynamicText}>
                                {this.state.username}
                            </Text>
                            <Text style={styles.staticText}>Email : </Text>
                            <Text style={styles.dynamicText}>
                                {this.state.email}
                            </Text>
                            <Text style={styles.staticText}>Phone Number : </Text>
                            <Text style={styles.dynamicText}>
                                {this.state.pnumber}
                            </Text>
                            <Text style={styles.staticText}>First Name : </Text>
                            <Text style={styles.dynamicText}>
                                {this.state.firstname}
                            </Text>
                            <Text style={styles.staticText}>Last Name : </Text>
                            <Text style={styles.dynamicText}>
                                {this.state.lastname}
                            </Text>
                            <Text style={styles.staticText}>College : </Text>
                            <Text style={styles.dynamicText}>
                                {this.state.college}
                            </Text>
                            <Text style={styles.staticText}>University : </Text>
                            <Text style={styles.dynamicText}>
                                {this.state.university}
                            </Text>
                            <Text style={styles.staticText}>Course : </Text>
                            <Text style={styles.dynamicText}>
                                {this.state.course}
                            </Text>
                            <Text style={styles.staticText}>Stream : </Text>
                            <Text style={styles.dynamicText}>
                                {this.state.stream}
                            </Text>
                            <Text style={styles.staticText}>City : </Text>
                            <Text style={styles.dynamicText}>
                                {this.state.city}
                            </Text>
                            <Text style={styles.staticText}>State : </Text>
                            <Text style={styles.dynamicText}>
                                {this.state.state}
                            </Text>
                            <Text style={styles.staticText}>Year gap : </Text>
                            <Text style={styles.dynamicText}>
                                {this.state.yg}
                            </Text>
                            <Text style={styles.staticText}>Number Of backlogs : </Text>
                            <Text style={styles.dynamicText}>
                                {this.state.nob}
                            </Text>

                            <View style={styles.btnView}>
                                <TouchableOpacity
                                    onPress={this.upLoc}
                                    style={styles.Btn}
                                >
                                    <View style={styles.btn}>
                                        <Text style={styles.LoginText}>Update Profile Details</Text>
                                    </View>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </ScrollView>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    qrcode: {
        // height:500,
        // zIndex:201,
        backgroundColor: 'transparent',
        alignSelf: 'center',
        position: 'relative',
        top: hp('30%')
        // width:500,
        // backgroundColor:'white',
    },


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
        width: 300,
        padding: 8,
        borderColor: "transparent",
        textAlign: "center",
        elevation: 5,
        alignSelf: 'center',
        // marginLeft: wp("2.5%"),
        marginTop: hp("2%"),
        marginBottom: hp("1%")
    },

    dynamicText: {
        fontFamily: "Montserrat-Medium",
        color: "white",
        textAlign: "center",
        fontSize: 21,
        backgroundColor: "#192a56",
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
        color: "#000",
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
        position: "relative",
        top: -50
    },
    textBox: {
        height: 50,
        backgroundColor: "#fff",
        position: "relative",
        marginTop: hp('33%'),
        borderWidth: 1,
        width: wp('75%'),
        // marginLeft:wp("8%"),
        alignSelf: 'center',
        fontSize: 18,
        borderColor: 'transparent',
        borderRadius: 20,
        color: '#000',
        fontFamily: 'Montserrat-Regular',
        marginBottom: -15,
        paddingLeft: wp("5%"),
        elevation: 5,
    },
    textBox2: {
        height: 50,
        backgroundColor: "#fff",
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
        height: 120,
        marginTop: 90,
        width: wp("90%"),
        borderRadius: 20,
        marginLeft: wp("5%"),
        opacity: 0.3,
        marginBottom: -190,
        backgroundColor: "#000",
        zIndex: 1
    },
    logoText: {
        // marginRight: 10,
        //   width:"75%",
        color: "#FFF",
        textAlign: "center",
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
})
export default Profile