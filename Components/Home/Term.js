import React, { Component } from 'react'
import { Text, View, Button, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';

export default class Terms extends Component {

    constructor(props) {
        super(props);
        this.state = { visible: 1 }
    }
    static navigationOptions = {
        drawerLabel: 'Terms & Conditions'

    }
    func() {
        this.setState({
            visible: 0
        })
    }
    render() {
        if (this.state.visible == 1) {
            return (

                <SafeAreaView style={styles.Container}>
                    <View style={styles.header}>
                        {/* <Button style={styles.hamburger} title='Drawer' onPress={() => this.props.navigation.toggleDrawer()} /> */}
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
      TERMS & CONDITIONS
            </Text>
            <Image style={{height:35,width:35}} source={require('../../img/logog.png')} />
                  </View>
                    </View>
                    {/* <Text style={{ 
                  color: '#FFF',
                  fontSize: 30,
                  position:'relative',
                  top:'65%',
                  fontFamily: 'Montserrat-Bold',
                  textAlign:'center', 
                  }}></Text> */}

                    {/* style={{height:1500}} */}
                    <View>
                        <ScrollView style={[styles.Container,{ marginBottom: hp('100%') }]}>
                            <Text style={styles.headingMain}>Terms & Conditions </Text>
                            <View style={styles.termsPosition}>
                                <Text style={styles.contentText}>This Application is owned and operated by Internnexus a unit of Hounding Infosec Private Limited.
                                 {"\n\n"}Please read these terms and conditions carefully, as by accessing this site, you are agreeing to abide by all the conditions set out below.
                                 </Text>
                                <Text style={[styles.contentText]}>
                                    Intern Nexus expressly reserves all rights in the content and compilation of entire content
                                    on the website.
                                </Text>
                            </View>
                            {/* due some problems extra view tag is added*/}
                            <View style={styles.position2}>
                                <View>
                                    <Text style={styles.contentText} >
                                        The content and software on this website may be used for the purposes of private, non-commercial viewing of web pages only.
                                        Any other use, including the downloading, reproduction, copying, modification, distribution, republication, display or performance of the content of this website is strictly prohibited without the express written consent of Intern Nexus.
                                </Text>
                                </View>
                            </View>
                            <TouchableOpacity  onPress={() => this.func()}>
                        <View style={styles.buttonStyle}>
                            <Text style={styles.buttonText}>
                                  More → 
                          </Text>
                        </View>
                    </TouchableOpacity>
                        </ScrollView>
                        
                    </View>
                  
                </SafeAreaView>

            )
        }


        else {
            return (
                <SafeAreaView>
                    <View style={styles.header}>
                        {/* <Button style={styles.hamburger} title='Drawer' onPress={() => this.props.navigation.toggleDrawer()} /> */}
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
        TERMS & CONDITIONS
            </Text>
            <Image style={{height:35,width:35}} source={require('../../img/logog.png')} />
                  </View>
                    </View>
                    {/* <Text style={{ 
                  color: '#FFF',
                  fontSize: 30,
                  position:'relative',
                  top:'65%',
                  fontFamily: 'Montserrat-Bold',
                  textAlign:'center', 
                  }}></Text> */}

                    {/* style={{height:1500}} */}
                    <View>
                        <ScrollView style={{ marginBottom: 100, marginTop:hp("-0.5%")}}>
                            <Text style={styles.headingMain}>Terms & Conditions </Text>
                            <View>
                                <Text style={styles.contentText}>This Application is owned and operated by Internnexus a unit of Hounding Infosec Private Limited.
                                 {"\n\n"}Please read these terms and conditions carefully, as by accessing this site, you are agreeing to abide by all the conditions set out below.
                                 </Text>
                                <Text style={[styles.contentText]}>
                                    Intern Nexus expressly reserves all rights in the content and compilation of entire content
                                    on the website.
                                </Text>
                            </View>
                            {/* due some problems extra view tag is added*/}
                            <View style={styles.position2}>
                                <View>
                                    <Text style={styles.contentText} >
                                        The content and software on this website may be used for the purposes of private, non-commercial viewing of web pages only.
                                        Any other use, including the downloading, reproduction, copying, modification, distribution, republication, display or performance of the content of this website is strictly prohibited without the express written consent of Intern Nexus.
                                </Text>
                                </View>
                                <View>
                                    <Text style={[styles.contentText, styles.subHeading]}>
                                        "We", "us", "our", means Intern Nexus "You", "your" means the person or the user
                                          using the Website under these Terms.
                              </Text>
                                </View>
                                <View>
                                    <Text style={styles.contentText}>
                                        Intern Nexus has all the rights to change/delete/add the content on the website without any announcement or permission.
                                        User/buyer is limited to viewing the content for any book/material/publications available on the website.
                              </Text>
                                    <Text style={styles.contentText}>
                                        User is required to provide correct information at the time of Registration.
                                        If any information is incorrect, the user may get blocked at the sites and in that case no money is refundable.
                              </Text>
                                    <Text style={styles.contentText}>
                                        No refund whatsoever shall be applicable.
                              </Text>
                                    <Text style={styles.contentText}>User/Buyer has to make complete payment transaction (amount should be credited into Hounding Infosec account)
                                      to consider the order as confirmed.
                              </Text>
                                    <Text style={styles.contentText}>
                                        Once the order is placed user is not able to make any changes in their registration.
                              </Text>
                                    <Text style={styles.contentText}>
                                        If any technical issues come from the website of Intern Nexus then the
                                        students have to wait till 24hrs to 48hrs the problem get resolved.
                              </Text>
                                    <Text style={styles.contentText}>
                                        Any Xerox, duplicacy, reproduction etc of Intern Nexus Books, material and other content is strictly prohibited. Intern Nexus has dedicated
                                        Anti-Piracy Cell and any person doing the above act(s) shall be dealt legally in a suitable Court of Law.
                                    </Text>
                                    <Text style={styles.contentText}>On registering on Intern Nexus, you and respective company are giving permission to Intern Nexus to use your company
                                      logo on www.internnexus.com
                                    </Text>
                                    <Text style={styles.contentText}>
                                        On registering on Intern Nexus, you allow Intern Nexus to use your company logo for any current
                                        promotional activity and conducted in future.
                                        We have freedom to use company logo in events such as internship fair, startup activity and
                                        college event activity
                                    </Text>
                                    <Text style={styles.contentText}>
                                        On agreeing these terms and conditions, you agree that the number of interns that can be
                                        hired is proportional to your subscription plan with which your company registered.
                                    </Text>
                                    <Text style={styles.contentText}>
                                        On agreeing these terms and conditions, you agree that we don't guarantee 100% internship to any
                                        student or user
                                    </Text>
                                    <Text style={styles.contentText}>
                                        On agreeing these terms and conditions, you agree that we don't guarentee 100% vacancy fulfilment by interns
                                    </Text>
                                    <Text style={styles.contentText}>
                                        On agreeing these terms and conditions, you agree that once your event has been registered and hosted on our website,
                                         you allow Intern Nexus to use your registered logo for current promotional activities and conducted in future.
                                    </Text>
                                    <Text style={[styles.contentText, styles.subHeading]}>
                                    Privacy Policy Summary
                                    </Text>
                                    <Text style={styles.contentText}>
Thank you for visiting the Intern Nexus website and reviewing our privacy policy. Our policy is simple: We collect no personal information about you unless you choose to provide that information to us.
                                    </Text>

                                    
                                    <Text style={[styles.contentText, styles.subHeading]}>Non-personal Information We Record</Text>
                                    <Text style={styles.contentText}>If you do nothing during your visit but browse through the website, read pages, or download information, our website's operating system will automatically record some general information about your visit. During your visit, our web operating system will record
                                    </Text>
<Text style={styles.contentText}>The Internet domain for your Internet service, such as "xyz.com" or "xyz.net" if you use a private Internet access account, or "yourcollege.edu" if you connect from a college or university domain
</Text>                                  

<Text style={styles.contentText}>The type of browser (such as "Netscape version X" or "Internet Explorer version X") that you are using.</Text>
<Text style={styles.contentText}>The type of operating system that you use (such as Macintosh, Unix, or Windows).</Text>
<Text style={styles.contentText}>The date and time you visit our site, and theweb pages that you visit on our site.</Text>
<Text style={styles.contentText}>The address of the previous website you were visiting, if you linked to us from another website.</Text>
<Text style={styles.contentText}>We use this information for statistical analysis, to help us make our site more useful to visitors. This tracking system does not record information about individuals.</Text>


<Text style={[styles.contentText, styles.subHeading]}>Cookies</Text>
<Text style={styles.contentText}>
On certain Intern Nexus web pages, we use "cookies" to help you use our websites interactively. A cookie is a small file that a website transfers to your computer's hard disk, usually to keep track of you while you are connected to that site. The cookies on Intern Nexus web pages do not collect information about you, but only about your browser "session." The cookie makes it easier for you to use the dynamic features of these web pages, without having to provide the same information again as you move from one page to another. To protect your privacy, be sure to close your browser completely after you have finished conducting the complete information with a website that uses cookies. If you are concerned about the potential use of information gathered from your computer by cookies, you can set your browser to prompt you before it accepts a cookie. Most Internet browsers have settings that let you identify and/or reject cookies.
</Text>
<Text style={[styles.contentText, styles.subHeading]}>Information from E-mail You Send to Us</Text>
<Text style={styles.contentText}>If you decide to send us an electronic mail message (e-mail), the message will usually contain your return e-mail address. If you include personally-identifying information in your e-mail because you want us to address issues specific to your situation, we may use that information in responding to your request. Also, e-mail is not necessarily secure against interception. Please send only information necessary to help us process your request.
</Text>
<Text style={[styles.contentText, styles.subHeading]}>Information Collected from Interactive Forms</Text>

<Text style={styles.contentText}>On some of our web pages we offer interactive forms that let you voluntarily submit personal information (such as your e-mail address, name, or organization). This occurs when you are registering for counseling, or any queries regarding activities offered by Intern Nexus. In those cases, all submitted information is used only for the purposes for which it is intended and is not made available to any third party.
</Text>
<Text style={[styles.contentText, styles.subHeading]}>Links to Other Sites</Text>


<Text style={styles.contentText}>Our policy discloses the privacy practices for the Intern Nexus. But Intern Nexus provides links to other websites. When you leave the Intern Nexus, you will be going to sites that are beyond our control. These other sites may send their own cookies to users, collect data, or solicit personal information. The privacy policies and procedures described here for Intern Nexus do not apply to any external links. We encourage you to read the privacy policies of any site you link to from ours, especially if you share any personal information. Be informed. You are the person best qualified to protect your own privacy
</Text>
                                    <Text style={[styles.contentText, styles.subHeading]}>Payment Cancellation & Refund Policy</Text>
<Text style={styles.contentText}>The following terms constitute an agreement between registred user and Intern Nexus (A group of Hounding Infosec Private Limited) , the owner and operator of the website www.Intern Nexus.com(“Intern Nexus Website” or the “Site” or the “Website”). This agreement governs your use of the Site, both as a casual visitor and a registered member as described below. By visiting, accessing or registering on this Site, you unconditionally accept to be bound by the Payment cancellation and refund policy provided herein, as well as the Terms and conditions, Privacy Policy documented separately. You agree and confirm that the Terms and conditions, Payment cancellation and refund policy, Privacy Policy may be amended from time to time without notice. Please ensure that you periodically update yourself of the current version of the Terms and conditions, Payment cancellation and refund policy, Privacy Policy. If you are not agreeable to any of the stated terms and conditions, we recommend that you stop visiting or using the Site with immediate effect to avoid any breach of agreement.
For the purpose of this document, wherever the context so requires “You”‘ or “User” shall mean any natural or legal person who has agreed to become a member of the Site by providing Registration Data while registering on the Site as Registered User using the computer systems. Intern Nexus allows User to surf the Site or making purchases only after registering on the Site. The term “we”, “us”, “our” shall mean Intern Nexus.
This Payment cancellation and refund policy document must always be read along with Terms and conditions, Privacy Policy. The clauses of this Payment cancellation and refund policy are applicable in conjunction with Terms and conditions, Privacy Policy. By reading and agreeing to the Payment cancellation and refund policy, you are deemed to have read and agreed on Terms and conditions, Privacy Policy.
This document is an electronic record in terms of Information Technology Act, 2000 and rules there under as applicable and the amended provisions pertaining to electronic records in various statutes as amended by the Information Technology Act, 2000. This electronic record is generated by a computer system and does not require any physical or digital signatures.
By accessing, registering with and using the services of Intern Nexus Website, you agree that you have read and understood the Payment cancellation and refund policy of Intern Nexus for using the services of Intern Nexus Website and all your monetary transactions with Intern Nexus through this Site will be governed by this Payment cancellation and refund policy.
</Text>
                                    <Text style={[styles.contentText, styles.subHeading]}>Price of products and services offered at Intern Nexus Website</Text>
                                    <Text style={styles.contentText}>The price for the products and services sold on Intern Nexus Website would be pre-decided by Intern Nexus and will be displayed at Intern Nexus Website. This price would be final and not subject to any discounts or negotiations, except those discounts which the user is eligible for as decided by Intern Nexus and as displayed on the Site. Intern Nexus reserves the right to change any or all rates of any or all products and services without any prior notice.
Intern Nexus reserves the right to change the availability of products and services on the Site without giving a prior intimation.
Intern Nexus attempts to be as accurate and as close to the real product as possible in displaying contents like product name, product description, product images, product videos and product price. However, Intern Nexus does not warrant that such contents are accurate, complete, reliable, current and error free. If Intern Nexus comes across any difference in pricing of the product due to typographical error, Intern Nexus will have the right to rectify the same. The customer will then be liable to pay the difference as per the corrected price. In case the customer is eligible for a refund due to the corrected price, Intern Nexus will refund the difference through any feasible means that Intern Nexus deems fit.
</Text>
                                    <Text style={[styles.contentText, styles.subHeading]}>Availability of Products</Text>
<Text style={styles.contentText}>While Intern Nexus makes all attempts to display the course or Exam paper in Intern Nexus Website that are available sale, Intern Nexus does not guarantee the availability of all products shown in Eaexam Website at the time of processing a particular customer order. It is possible that some papers shown in the website are not available in for that time due to any mistakes sale, or are available in part quantity, at the time of processing the order. </Text>
                                <Text style={[styles.contentText, styles.subHeading]}>Payment Mode</Text>
                                    <Text style={styles.contentText}>. Online Net Banking</Text>
                                    <Text style={styles.contentText}>. Credit Card</Text>
                                    <Text style={styles.contentText}>. Debit Card</Text>
                                    <Text style={styles.contentText}>. UPI</Text>
                                    <Text style={styles.contentText}>. Wallets</Text>
                                    <Text style={styles.contentText}>The transfer of money needs to be done before accessing the services in terms of Exam paper solutions or Course offered by Intern Nexus. Intern Nexus Website is not liable to deliver the goods the contents are available only for online reading or by the means of virtual training.</Text>
                                    <Text  style={styles.contentText}>Intern Nexus reserves the right to introduce new payment modes or withdraw any payment mode or add, remove or change payment processing agent at the Site without prior intimation.
In case and as and when Intern Nexus introduces online payment modes like through credit card, debit card, net banking, Paypal, online bank transfer, etc., you agree, understand and confirm that the contact address for monetary transactions provided by you for availing services of Intern Nexus Website will be correct and accurate. You confirm that you shall not use credit cards/debit cards that are not lawfully owned by you. You further agree and undertake to provide the correct and valid credit card/debit card details at Intern Nexus Website Site and/or sites of the payment processing agents. The said information will not be utilized and shared by Intern Nexus with any of the third parties unless required by law, regulation or court order. For all payment transactions made in Intern Nexus Website Site, BIntern Nexus uses the payment gateway services of third parties (e.g. HDFC bank payment gateway) and all matters related to security, authenticity of information provided and its remedies will be governed by policies of these third party service providers.</Text>
                                    <Text style={styles.contentText}>While availing of any of the payment method’s available on the Website, we will not be responsible or assume any liability, whatsoever in respect of any loss or damage arising directly or indirectly to you due to:</Text>
                                    <Text style={styles.contentText}>. Lack of authorization for any transaction’s, or</Text>
                                    <Text style={styles.contentText}>. Exceeding the preset limit mutually agreed by you and between your “Bank’s”, or</Text>
                                    <Text style={styles.contentText}>. Any payment issues arising out of the transaction, or</Text>
                                    <Text style={styles.contentText}>. Decline of transaction for any other reason’s.</Text>
                                  

                                    <Text style={[styles.contentText, styles.subHeading]}>Payment, Cancellation and Refund Policy</Text>
                                    <Text style={styles.contentText}>. 100% of total value of Intern Nexus registration amount will be refundable if the refund requested with in a 7 days of registration or payment.</Text>
                                    <Text style={styles.contentText}>. Only a single order per user is refundable.</Text>
                                    <Text style={styles.contentText}>. No registration amount is aplicable for refundable in case of virtual training</Text>
                                    <Text style={styles.contentText}>. If any registered details is incorrect than the user may get blocked and no refund is aplicable</Text>
                                    <Text style={styles.contentText}>. Refundable amount does not include Tax or GST or any other online transactional charges i.e no transactional or any type of tax is refundable.</Text>
                                    <Text style={styles.contentText}>. Registration Amount can only be refundable with a valid reason & It may require prrof if its due to technical problem.</Text>
                                    <Text style={styles.contentText}>. Intern Nexus is entitled to cancel the Registration and forfeit the “Registration Amount” paid. In case of failure to comply with payment terms agreed by the Applicant/s.</Text>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </SafeAreaView>
            )
        }
    }
}


const styles = StyleSheet.create({

    contentText: {
        marginLeft: wp('5%'),
        marginRight: wp('5%'),
        marginBottom:hp("3%"),
        color: '#FFF',
        margin: 5,
        // height:650,
        fontFamily: 'Montserrat-Light',
        fontSize: 14,
        // fontStyle: enum('normal','italic'),
        textAlign: 'center',
        textAlign: 'justify',
    },
    Container: {
        height:hp('200%')
    },
    position2: {
        position: 'relative',
        top: 16,
    },
    buttonStyle:{
        position:'relative',
        top:30,
        left:wp('28%'),
        height: hp(10),
        width:wp(38),
        paddingLeft:50,
        paddingTop:4,
        // color:'white',
        // borderBottomColor:'red',
        // borderBottomWidth:2,
        // backgroundColor:'black',
        borderRadius:20,
        // borderTopRightRadius:10,
        // borderTopLeftRadius:10,
        // borderBottomRightRadius:10,
        // borderBottomLeftRadius:10,
        zIndex:10,
    },
    buttonText:{
        fontFamily:'Montserrat-Medium',
        color:'white',
        fontSize:20,
        borderWidth:1,
        borderColor:'white',
        // padding:2,
        // paddingLeft:10,
        paddingBottom:1,
        borderRadius:20,
        textAlign:'center'
    },
    test: {
        backgroundColor: "#000",
        color: "#000",
    },
    subHeading: {
        fontFamily: 'Montserrat-Bold',
        marginTop: '7%',
    },

    headingMain: {
        color: '#FFF',
        fontSize: 32,
        marginTop: hp('1%'),
        marginLeft: wp('3%'),
        fontFamily: 'Montserrat-Bold',
        textAlign: 'center',
    },
    header: {
        height: 40,
        marginBottom: 2,
        marginTop: 10,
        // backgroundColor:"#FFF",
        flexDirection: 'row',
        alignItems: 'center',

    },
    headerMain: {
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

    logo: {
        maxHeight: 33,
        maxWidth: 33,
        flex: 1,

    },
    logoText: {
        // marginRight: 10,
        //   width:"75%",
        color: "#FFF",
        textAlign: 'center',
        flex: 10,
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
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
        flex: 3
    },
    hamburgerEven: {
        flex: 2,
        backgroundColor: '#FFF'
    },
    hamburgerEvenMid: {
        flex: 2,
        width: '80%',
        marginLeft: '10%',
        backgroundColor: '#FFF'
    },
});
