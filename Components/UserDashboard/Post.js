import React, { Component } from "react"
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    Modal,
    TextInput,
    FlatList
} from "react-native"
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen"
import SInfo from "react-native-sensitive-info"

export class Post extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modalVisible: false,
            commentText: "",
            _id: "",
            comments: [{}],
            isFetching: false
        }
    }
    handleCommentsRefresh() {
        this.setState({ isFetching: true })
        this.commentsRefresh()
        this.setState({ isFetching: false })
    }
    AddDataComment() {
        if (this.state.commentText != "") {
            fetch("http://192.168.31.156:3000/musers/Comment", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    forumId: this.props.item._id,
                    comment: this.state.commentText,
                    userId: this.state._id
                })
            })
            this.commentsRefresh()
        }
    }
    componentWillMount() {
        SInfo.getItem("id", {
            sharedPreferencesName: "userSharedPrefs",
            keychainService: "userKeychain"
        }).then(value => {
            this.setState({ _id: value }) //value1
            console.log(value)
            return value
        })
        this.commentsRefresh()
    }

    commentsRefresh() {
        fetch(
            `http://192.168.31.156:3000/musers/CommentShow/${
                this.props.item._id
            }`
        )
            .then(response => response.json())
            .then(res => {
                this.setState({
                    comments: res.reverse()
                })
            })
            .catch(err => alert(err))
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible })
    }

    render() {
        return (
            <TouchableOpacity
                onPress={() => {
                    this.setModalVisible(true)
                }}
            >
                <View style={styles.forumOuterBox}>
                    <Text style={styles.forumHeading}>
                        {this.props.item.heading}
                    </Text>
                    <Text style={styles.forumContent}>
                        {this.props.item.content}
                    </Text>
                </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(false)
                    }}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalStyle}>
                            <Text style={styles.modalNewPost}>Answers</Text>
                            <Text style={styles.modalLabel}>Add a Answer:</Text>
                            <TextInput
                                multiline={true}
                                style={styles.headingInput}
                                numberOfLines={2}
                                onChangeText={commentText =>
                                    this.setState({ commentText })
                                }
                            />

                            <TouchableOpacity
                                style={[styles.addNPButton]}
                                onPress={() => {
                                    this.AddDataComment()
                                }}
                            >
                                <View>
                                    <Text style={styles.addNP}>
                                        Add Your Answer
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <Text style={styles.modalLabel}>
                                Community Answers:
                            </Text>
                            <View style={styles.commentView}>
                                <FlatList
                                    onRefresh={() => this.handleCommentsRefresh}
                                    refreshing={this.state.isFetching}
                                    data={this.state.comments}
                                    keyExtractor={(item, index) => item._id}
                                    renderItem={({ item }) => (
                                        <Text style={styles.comments}>
                                            {item.comment}
                                        </Text>
                                    )}
                                />
                            </View>
                            <TouchableOpacity
                                style={[styles.addNPButton]}
                                onPress={() => {
                                    this.setModalVisible(false)
                                }}
                            >
                                <View>
                                    <Text style={styles.addNP}>Close</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    comments: {
        marginTop: hp("1%"),
        color: "black"
    },
    commentView: {
        height: hp("55%")
    },
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
        color: "black",
        textAlign: "center",
        fontSize: 22
    },
    modalLabel: {
        marginTop: hp("2%"),
        fontSize: 18
    },
    headingInput: {
        textAlignVertical: "top",

        borderWidth: 1,
        borderRadius: 5,
        marginTop: hp("1%"),
        padding: 7
    },
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

    FlatListStyle: {
        height: hp("75%"),
        borderRadius: 40,
        width: wp("95%")
    },
    modalStyle: {
        // height: 150,
        height: hp("94%"),
        width: wp("90%"),
        marginTop: hp("3%"),
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
        marginTop: hp("1%"),
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
        // marginTop: 9
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

export default Post