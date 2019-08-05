import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';
import { Dropdown } from 'react-native-material-dropdown';
import { TextButton, RaisedTextButton } from 'react-native-material-buttons';
import SInfo from 'react-native-sensitive-info'
export class Resume extends Component {
    static navigationOptions = {
        drawerLabel: 'Resume'
    }
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            firstname: '',
            lastname: '',
            pnumber:'',
            birthday: '',
            university: '',
            languages: '',
            achievements: '',
            experience: '',
            CareerObjective: '',
            course: '',
            _id: "",
            fathername:'',
            qualification:'',
            hobbies:'',
            interest:'',
        }
        this.upData = this.upData.bind(this)
    }
    componentWillMount(){
        SInfo.getItem("id", {
            sharedPreferencesName: "userSharedPrefs",
            keychainService: "userKeychain"
        })
            .then(value => {
                this.setState({ _id: value }) //value1
                // alert(value)
                return value
            }).then(id=>{
                fetch(
                    `http://192.168.31.156:3000/musers/getResume/${this.state._id}`,
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
                            console.log("error")
                        } else {
                            console.log("test")
                            console.log(res)
                            // console.log(res[0].id)
                            this.setState({
                                firstname: res.fname,
                                lastname: res.lname,
                                fathername: res.father,
                                birthday: res.birthday,
                                university: res.university,
                                languages: res.languages,
                            achievements: res.achievements,
                                experience: res.experience,
                                CareerObjective: res.CareerObjective,
                                course: res.course,
                                email: res.email,
                                pnumber: res.pnumber,
                                qualification: res.qualification,
                                hobbies: res.hobbies,
                                interest: res.interest,
                            })
                        }}
                    )
                    .catch(err => console.log(err))
            })
    }

    chkFunction() {
        if (this.state.firstname != '' && this.state.lastname != '' && this.state.email != '' && this.state.fathername!=''
            && this.state.birthday != '' && this.state.university != '' && this.state.languages != '' && this.state.pnumber != ''
            && this.state.achievements != '' && this.state.experience != '' && this.state.CareerObjective != '' && this.state.course != ''
            && this.state.qualification!='' && this.state.hobbies!='' && this.state.interest!=''
        ) {
            return true
        }
        else {


            return false
        }
    }
    upData() {
        if (this.chkFunction()==true) {

            fetch(`http://192.168.31.156:3000/musers/resume`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstname: this.state.firstname,
                    lastname: this.state.lastname,
                    fathername: this.state.fathername,
                    birthday: this.state.birthday,
                    university: this.state.university,
                    languages: this.state.languages,
                    achievements: this.state.achievements,
                    experience: this.state.experience,
                    CareerObjective: this.state.CareerObjective,
                    course: this.state.course,
                    pnumber: this.state.pnumber,
                    email: this.state.email,
                    hobbies: this.state.hobbies,
                    userId: this.state._id,
                    qualification: this.state.qualification,
                    interest: this.state.interest,
                }),
            });
            alert('data added')
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
        RESUME
            </Text>
            <Image style={{height:35,width:35}} source={require('../../img/logog.png')} />
                  </View>
                </View>
                <ScrollView>
                    <View style={styles.outerContainer}>
                        <Image style={styles.userImage} source={require('../../img/a.jpg')} />
                        <View style={styles.userprofilebox}>
                        </View>
                        <View style={styles.profilePosition}>
                            
                            <TextInput
                                placeholder="Email address"
                                style={styles.textBox2}
                                value={this.state.email}
                                onChangeText={(email) => this.setState({ email })}
                            />
                            <TextInput placeholder="First name" style={styles.textBox2}
                            value={this.state.firstname}
                                onChangeText={(firstname) => this.setState({ firstname })}
                            />
                            <TextInput placeholder="Last name" style={styles.textBox2}
                                onChangeText={(lastname) => this.setState({ lastname })}
                                value={this.state.lastname}
                            />
                            <TextInput
                                placeholder="Father's Name"
                                style={styles.textBox2}
                                value={this.state.fathername}
                                onChangeText={(fathername) => this.setState({ fathername })}
                            />
                            <TextInput placeholder="Phone number" style={styles.textBox2}
                            value={this.state.pnumber}
                                onChangeText={(pnumber) => this.setState({ pnumber })}
                                keyboardType='numeric'
                            />
                            <TextInput placeholder="Birthday" style={styles.textBox2}
                            value={this.state.birthday}
                                onChangeText={(birthday) => this.setState({ birthday })}
                            />
                            <TextInput placeholder="Experience" style={styles.textBox2}
                            value={this.state.experience}
                                onChangeText={(experience) => this.setState({ experience })}
                            />
                            <TextInput placeholder="Career Objective" style={styles.textBox2}
                            value={this.state.CareerObjective}
                                onChangeText={(CareerObjective) => this.setState({ CareerObjective })}
                            />
                            <TextInput placeholder="University" style={styles.textBox2}
                            value={this.state.university}
                                onChangeText={(university) => this.setState({ university })}
                            />
                            <TextInput placeholder="Field of Interest" style={styles.textBox2}
                            value={this.state.languages}
                                onChangeText={(languages) => this.setState({ languages })}
                            />
                            <TextInput placeholder="Hobbies" style={styles.textBox2}
                            value={this.state.hobbies}
                                onChangeText={(hobbies) => this.setState({ hobbies })}
                            />
                            <TextInput placeholder="Achievements" style={styles.textBox2}
                            value={this.state.achievements}
                                onChangeText={(achievements) => this.setState({ achievements })}
                            />
                            <TextInput placeholder="Course" style={styles.textBox2}
                            value={this.state.course}
                                onChangeText={(course) => this.setState({ course })}
                            />
                            <TextInput placeholder="Course" style={styles.textBox2}
                            value={this.state.qualification}
                                onChangeText={(qualification) => this.setState({ qualification })}
                            />
                            <TextInput placeholder="Course" style={styles.textBox2}
                            value={this.state.interest}
                                onChangeText={(interest) => this.setState({ interest })}
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
        backgroundColor: "white",
        position: "relative",
        marginTop: 10,
        borderWidth: 1,
        width: wp('75%'),
        fontSize: 18,
        borderColor: 'transparent',
        borderRadius: 20,
        color: 'black',
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
});
export default Resume