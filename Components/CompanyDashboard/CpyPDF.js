import React, { Component } from "react";
import {
	Text,
	View,
	StyleSheet,
	Image,
	TouchableOpacity,
	TextInput,
	Button,
	CheckBox
} from "react-native";
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { ScrollView, BorderlessButton } from "react-native-gesture-handler";
import { Dropdown } from "react-native-material-dropdown";
import { TextButton, RaisedTextButton } from "react-native-material-buttons";
import SInfo from 'react-native-sensitive-info'

export class StudentProjectList extends Component {
  static navigationOptions={
    drawerLabel:'PDF'
}

constructor(props) {
  super(props);

  this.state = {
    link: "",
	name: "",
	_id:''
  };
}
componentWillMount() {
	SInfo.getItem("id", {
		sharedPreferencesName: "compSharedPrefs",
		keychainService: "compKeychain"
	}).then(value => {
		this.setState({ _id: value }) //value1
		// alert(value)
		return value
	})
	
}
AddData() {
  // this.setState({
  //   data:this.state.data
  // })
  if (this.state.name != "") {
    fetch("http://192.168.31.156:3000/mcomp/cpyPDFsIn", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        link: this.state.link
      })
    });
    alert("Your Response have been recorded successfully");
  }
  else{
    alert('Please fill above field')
  }
}


render() {
  return (
    <View>
      <ScrollView>
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
        {/*header ends here  */}

        {/*main content starts here*/}

        <View style={styles.containerPosition}>
          <View style={styles.outerContainer} />
          <View style={styles.titleView}>
            <Text style={styles.titleText}>
              PDFs
              {/*variable name must come here (name of the user) */}
            </Text>
          </View>
          <View style={styles.inputboxView}>
		  <TextInput
              style={[styles.inputbox]}
              multiline={true}
              numberOfLines={5}
              onChangeText={name => this.setState({ name })}
              maxLength={80}
              placeholder="Enter Name"
              placeholderTextColor="#7f8c8d"
              placeholderFontFamily="Montserrat-Regular"
            />
			<TextInput
              style={[styles.inputbox]}
              multiline={true}
              numberOfLines={5}
              onChangeText={link => this.setState({ link })}
              maxLength={80}
              placeholder="Enter Link"
              placeholderTextColor="#7f8c8d"
              placeholderFontFamily="Montserrat-Regular"
            />
          </View>
        </View>
      </ScrollView>
      <View>
        <TouchableOpacity
          onPress={() => {
            this.AddData();
          }}
          style={[styles.addData]}
        >
          <View>
            <Text style={styles.addDataText}>Submit</Text>
          </View>
        </TouchableOpacity>
        <Text>{this.state.name}</Text>
      </View>
      <View style={styles.outerContainer2} />
    </View>
  );
}
}

const styles = StyleSheet.create({
	headingText: {
		color: "#FFF",
		fontSize: 30,
		fontFamily: "Montserrat-Bold",
		marginTop: hp("20%"),
		textAlign: "center",
		backgroundColor: "red"
	},
	heading: {
		height: 50,
		backgroundColor: "#7b1fa2",
		color: "green",
		marginTop: 200
	},
	containerPosition: {
		marginTop: hp('5%'),
		// height: wp("140"),
		zIndex: 100
	},
	addData: {
		backgroundColor: "#4834d4",
		position: "absolute",
		color: "#fff",
		top: hp("-8%"),
		width: wp("40%"),
		height: hp("7"),
		// marginLeft: wp("30%"),
		alignSelf:'center',
		paddingTop: hp("1%"),
		borderRadius: 10,
		zIndex: 100
	},
	titleText: {
		color: "#fff",
		fontFamily: "Montserrat-Bold",
		justifyContent: "center",
		textAlign: "center",
		fontSize:18,
		paddingTop: hp("3%")
	},
	titleView: {
		height: hp("10"),
		width: wp("80%"),
		color: "#fff",
		fontFamily: "Montserrat-Regular",
		borderRadius: 10,
		position: "absolute",
		top: hp("-2%"),
		// left: wp("10%"),
		alignSelf:'center',
		backgroundColor: "#4834d4"
	},
	addDataText: {
		textAlign: "center",
		position: "absolute",
		paddingLeft: wp("11.5%"),
		paddingTop: 5,
		color: "#fff",
		fontSize: 16,
		fontFamily: "Montserrat-Bold"
	},
	inputboxView: {
		position: "absolute",
		top: hp("13%"),
		alignSelf:'center',
		textAlignVertical: "top"
	},
	inputbox: {
		height: hp("20"),
		width: wp("80%"),
		// marginLeft: wp("2%"),
		position: "relative",
		textAlign: "center",
		// left: 29,
		borderRadius: 10,
		fontFamily:'Montserrat-SemiBold',
		paddingLeft: wp("2%"),
		fontSize: 20,
		backgroundColor: "#fff"
	},
	// outerContainer2: {
	// 	height: hp("3"),
	// 	width: wp("84%"),
	// 	marginLeft: wp("8%"),
	// 	justifyContent: "center",
	// 	marginTop: hp("-2.8%"),
	// 	backgroundColor: "#000",
	// 	borderBottomLeftRadius: 20,
	// 	borderBottomRightRadius: 20,
	// 	opacity: 0.6
	// },
	outerContainer: {
		height: hp("80"),
		width: wp("84%"),
		alignSelf:'center',
		// marginLeft: wp("8%"),
		justifyContent: "center",
		backgroundColor: "#000",
		borderRadius: 20,
		opacity: 0.6
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
	logo: {
		maxHeight: 33,
		maxWidth: 33,
		flex: 1
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


export default StudentProjectList
