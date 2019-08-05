import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';
import { Dropdown } from 'react-native-material-dropdown';
import { TextButton, RaisedTextButton } from 'react-native-material-buttons';
import SInfo from 'react-native-sensitive-info'
import ImagePicker from 'react-native-customized-image-picker';


export class CpyProfile extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            name: '',
            fullname: '',
            phone: '',
            hrcontact: '',
            employeesno: '',
            startdate: '',
            field: '',
            other: '',
            compadd: '',
            State: '',
            _id: '',
            updateChk: true,
            switchPage: false

        }
        this.upData = this.upData.bind(this)
        this.upLoc = this.upLoc.bind(this)
        this.backLoc = this.backLoc.bind(this)
    }
    imagepicker() {
        ImagePicker.openPicker({
            // isHidePreview:false,

        }).then(images => {
            console.log(images);
        });
    };
    componentWillMount() {
        // alert("component will mount running");
        SInfo.getItem("id", {
            sharedPreferencesName: "compSharedPrefs",
            keychainService: "compKeychain"
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
                    `http://192.168.31.156:3000/mcomp/cpyProfileOt/${this.state._id}`,
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
                            // console.log(res)
                            // alert(res) 
                            this.setState({
                                name: res.name,
                                fullname: res.fullname,
                                hrcontact: res.hrcontact,
                                employeesno: res.employeesno,
                                startdate: res.startdate,
                                field: res.field,
                                other: res.other,
                                compadd: res.compadd,
                                State: res.state,
                                phone: res.phone,
                                email: res.email,
                            })
                        }
                    })
                    .catch(err => console.log(err))
            })
    }




    chkFunction() {
        if (this.state.name != '' && this.state.fullname != '' && this.state.email != ''
            && this.state.hrcontact != '' && this.state.employeesno != '' && this.state.startdate != '' && this.state.phone != ''
            && this.state.field != '' && this.state.other != '' && this.state.compadd != '' && this.state.State != ''
        ) {
            return true
        }
        else {
            return false
        }
    }
    upData() {
        if (this.chkFunction() == true) {

            fetch(`http://192.168.31.156:3000/mcomp/cpyProfileIn/${this.state._id}`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: this.state.name,
                    fullname: this.state.fullname,
                    hrcontact: this.state.hrcontact,
                    employeesno: this.state.employeesno,
                    startdate: this.state.startdate,
                    field: this.state.field,
                    other: this.state.other,
                    compadd: this.state.compadd,
                    state: this.state.State,
                    phone: this.state.phone,
                    email: this.state.email,
                    userId: this.state.id
                }),
            });
        }
        else {
            alert('please fill all the fields')

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
        if (this.state.switchPage) {
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
                                INTERNNEXUS
                      </Text>
                            <Image style={styles.Logo} source={require('../../img/logo.png')} />
                        </View>
                    </View>
                    <ScrollView>
                        <View style={{marginBottom:150}}>

                            <TouchableOpacity style={styles.userImage2} onPress={() => this.imagepicker()}></TouchableOpacity>
                            <Image style={styles.userImage} source={require('../../img/a.jpg')} />

                            <View style={styles.userprofilebox}>

                            </View>
                            <View style={styles.profilePosition}>
                                <TextInput
                                    placeholder="Name" placeholderTextColor="grey"
                                    style={styles.textBox2}
                                    onChangeText={(name) => this.setState({ name })}
                                />
                                <TextInput
                                    placeholder="Email address" placeholderTextColor="grey"
                                    style={styles.textBox2}
                                    onChangeText={(email) => this.setState({ email })}
                                />
                                <TextInput placeholder="Full name" placeholderTextColor="grey" style={styles.textBox2}
                                    onChangeText={(fullname) => this.setState({ fullname })}
                                />
                                <TextInput placeholder="HrContact" placeholderTextColor="grey" style={styles.textBox2}
                                    onChangeText={(hrcontact) => this.setState({ hrcontact })}
                                />
                                <TextInput placeholder="Phone number" placeholderTextColor="grey" style={styles.textBox2}
                                    onChangeText={(phone) => this.setState({ phone })}
                                />
                                <TextInput placeholder="Number of Employees" placeholderTextColor="grey" style={styles.textBox2}
                                    onChangeText={(employeesno) => this.setState({ employeesno })}
                                />
                                <TextInput placeholder="Started Since" placeholderTextColor="grey" style={styles.textBox2}
                                    onChangeText={(startdate) => this.setState({ startdate })}
                                />
                                <TextInput placeholder="field" placeholderTextColor="grey" style={styles.textBox2}
                                    onChangeText={(field) => this.setState({ field })}
                                />
                                <TextInput placeholder="State" placeholderTextColor="grey" style={styles.textBox2}
                                    onChangeText={(State) => this.setState({ State })}
                                />
                                <TextInput placeholder="company address" placeholderTextColor="grey" style={styles.textBox2}
                                    onChangeText={(compadd) => this.setState({ compadd })}
                                />
                                <TextInput placeholder="other" placeholderTextColor="grey" style={styles.textBox2}
                                    onChangeText={(other) => this.setState({ other })}
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
                        </View>
                    </ScrollView>
                </View>
            )
        }
        else{
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
                            <Text style={styles.logoText}>INTERNNEXUS</Text>
                            <Image
                                style={styles.Logo}
                                source={require("../../img/logo.png")}
                            />
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
                            <Text style={styles.staticText}>Name : </Text>
                            <Text style={styles.dynamicText}>
                                {this.state.name}
                            </Text>
                            <Text style={styles.staticText}>Email : </Text>
                            <Text style={styles.dynamicText}>
                                {this.state.email}
                            </Text>
                            <Text style={styles.staticText}>Phone Number : </Text>
                            <Text style={styles.dynamicText}>
                                {this.state.phone}
                            </Text>
                            <Text style={styles.staticText}>Full Name : </Text>
                            <Text style={styles.dynamicText}>
                                {this.state.fullname}
                            </Text>
                            <Text style={styles.staticText}>HR Contact : </Text>
                            <Text style={styles.dynamicText}>
                                {this.state.hrcontact}
                            </Text>
                            <Text style={styles.staticText}>Number Of Employees </Text>
                            <Text style={styles.dynamicText}>
                                {this.state.employeesno}
                            </Text>
                            <Text style={styles.staticText}>StartDate </Text>
                            <Text style={styles.dynamicText}>
                                {this.state.startdate}
                            </Text>
                            <Text style={styles.staticText}>Field </Text>
                            <Text style={styles.dynamicText}>
                                {this.state.field}
                            </Text>
                            <Text style={styles.staticText}>State </Text>
                            <Text style={styles.dynamicText}>
                                {this.state.State}
                            </Text>
                            <Text style={styles.staticText}>Company Address </Text>
                            <Text style={styles.dynamicText}>
                                {this.state.compadd}
                            </Text>
                            <Text style={styles.staticText}>Other</Text>
                            <Text style={styles.dynamicText}>
                                {this.state.other}
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
        top: 180
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
export default CpyProfile
