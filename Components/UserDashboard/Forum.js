import React, { Component } from "react"
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    TextInput,
    Button,
    CheckBox,
    Modal,
    alert,
    TouchableHighlight,
    FlatList
} from "react-native"
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { ScrollView } from "react-native-gesture-handler"
import Post from "./Post"

export class Forum extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showMe: false,
            category: "technical",
            username: "test",
            name: "",
            forum: [{}],
            headingInput: "",
            contentInput: "",
            isFetching: false
        }
    }

    forumRefresh() {
        fetch("http://192.168.31.156:3000/musers/forumShow")
            .then(response => response.json())
            .then(res => {
                this.setState(
                    {
                        forum: res.reverse()
                    },
                    () => {
                        this.state.forum.forEach(
                            post => (post.showComments = false)
                        )
                    }
                )
                console.table(this.state.forum)
            })
            // .then(() => {
            //     this.setState((prevState) => {
            //         forum: prevState.forum.reverse()
            //     }, () => console.log(this.state.forum))
            // })
            .catch(err => console.log(err))
    }

    componentWillMount() {
        this.forumRefresh()
    }
    handleRefresh() {
        this.setState({ isFetching: true })
        this.forumRefresh()
        this.setState({ isFetching: false })
    }

    AddDataForum() {
        if (this.state.headingInput != "") {
            fetch("http://192.168.31.156:3000/musers/forum", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    heading: this.state.headingInput,
                    content: this.state.contentInput
                })
            })
            this.forumRefresh()
        }
    }
    render() {
        let data = [
            {
                value: "Category"
            },
            {
                value: "Technical"
            },
            {
                value: "Non-Technical"
            },
            {
                value: "Others"
            }
        ]
        return (
            <View>
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
         FORUMS
            </Text>
            <Image style={{height:35,width:35}} source={require('../../img/logog.png')} />
                  </View>
                </View>
                {/*header ends here  */}

                <View style={styles.outerContainer}>
                    <View style={styles.FlatListStyle}>
                        <FlatList
                            // inverted
                            onRefresh={() => this.handleRefresh()}
                            refreshing={this.state.isFetching}
                            data={this.state.forum}
                            keyExtractor={(item, index) => item._id}
                            renderItem={({ item }) => <Post item={item} />}
                        />
                    </View>

                    {/*code for modal starts here */}
                    <View style={styles.innerContainer}>
                        <TouchableOpacity
                            style={[styles.addNPButtonInput]}
                            onPress={() => {
                                this.setState({
                                    showMe: true
                                })
                            }}
                        >
                            <View>
                                <Text style={styles.addNP}>Create Post</Text>
                            </View>
                        </TouchableOpacity>
                        <View>
                            <Modal
                                visible={this.state.showMe}
                                transparent={true}
                                animationType="fade"
                                // refreshing={this.state.isFetching}
                                // onRefresh={this.forumRefresh()}
                                onRequestClose={() =>
                                    this.setState({ showMe: false })
                                }
                            >
                                <View style={styles.modalContainer}>
                                    <View style={styles.modalStyle}>
                                        <Text style={styles.modalNewPost}>
                                            Create A New Post
                                        </Text>
                                        <Text style={styles.modalLabel}>
                                            Input Heading:
                                        </Text>
                                        <TextInput
                                            style={styles.headingInput}
                                            onChangeText={headingInput =>
                                                this.setState({ headingInput })
                                            }
                                        />
                                        <Text style={styles.modalLabel}>
                                            Input Content:
                                        </Text>
                                        <TextInput
                                            multiline={true}
                                            style={styles.contentInput}
                                            numberOfLines={20}
                                            onChangeText={contentInput =>
                                                this.setState({ contentInput })
                                            }
                                        />
                                        <TouchableOpacity
                                            style={[styles.addNPButton]}
                                            onPress={() => {
                                                this.AddDataForum()
                                                this.setState({
                                                    showMe: false
                                                })
                                            }}
                                        >
                                            <View>
                                                <Text style={styles.addNP}>
                                                    Create Post
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={[styles.addNPButton]}
                                            onPress={() => {
                                                this.setState({
                                                    showMe: false
                                                })
                                            }}
                                        >
                                            <View>
                                                <Text style={styles.addNP}>
                                                    Cancel
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </Modal>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    forumContent: {
        marginVertical: 10,
        fontSize: 16
    },
    commentText: {
        textAlign: "center"
    },
    forumHeading: {
        textAlign: "center",
        fontSize: 18,
        marginBottom: 1,
        color: "#000000"
    },
    modalContainer: {
        backgroundColor: "rgba(0,0,0,0.5)",
        height: hp("100%"),
        width: wp("100%")
    },
    contentInput: {
        height: hp("50%"),
        borderWidth: 1,
        borderRadius: 5,
        padding: 7,
        marginBottom: hp("2%"),
        marginTop: hp("1%"),
        textAlignVertical: "top"
    },
    modalNewPost: {
        textAlign: "center",
        fontSize: 22
    },
    modalLabel: {
        marginTop: hp("2%"),
        fontSize: 18
    },
    headingInput: {
        borderWidth: 1,
        borderRadius: 5,
        marginTop: hp("1%"),
        padding: 7
    },
    headingText: {
        color: "#000",
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
    LogoImg: {
        // backgroundColor:'#F0F',
        alignItems: "center",
        justifyContent: "center",
        // flex: 1,
        maxHeight: 28,
        maxWidth: 28,
        margin: 50
    },
    logo: {
        maxHeight: 33,
        maxWidth: 33,
        flex: 1
    },
    innerContainer: {
        // marginTop: hp('-80'),
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

    FlatListStyle: {
        height: hp("75%"),
        borderRadius: 40,
        width: wp("95%")
    },
    modalStyle: {
        // height: 150,
        height: hp("90%"),
        width: wp("90%"),
        marginTop: hp("5%"),
        marginLeft: wp("5%"),
        // justifyContent: "center",
        // alignItems: "center",
        padding: 20,
        backgroundColor: "#fff",
        borderRadius: 10,
        color: "#FFF"
    },
    addNPButton: {
        color: "#fff",
        backgroundColor: "#4834d4",
        height: hp(5),
        width: "86%",
        borderRadius: 15,
        marginBottom: "3%",
        marginLeft: "6%"
    },
    addNPButtonInput: {
        color: "#fff",
        backgroundColor: "#4834d4",
        height: hp(5),
        width: "86%",
        borderRadius: 15,
        marginTop: hp("5%"),
        marginLeft: wp("6%")
    },
    addNP: {
        textAlign: "center",
        color: "#fff",
        paddingTop: hp("1")
        // marginTop:hp('5%'),
    },
    addNP2: {
        textAlign: "center"
        // marginTop:hp('5%'),
    },
    forumOuterBox: {
        padding: 10,
        // height: hp(20),
        backgroundColor: "#fff",
        color: "#000",
        marginBottom: hp(1),
        borderRadius: 10
    },
    outerContainer: {
        height: hp("100"),
        marginTop: hp("5%"),
        borderRadius: 10
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
})
export default Forum