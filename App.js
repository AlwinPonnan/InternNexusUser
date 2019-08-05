/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component} from 'react';
import {
  Platform,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Login from "./Components/User/Login"
import LoginComponent from "./Components/User/LoginComponent"
import Register from "./Components/User/Register"
import RegisterComponent from "./Components/User/RegisterComponent"
import Events from "./Components/Home/Events"
import Dashboard from "./Components/UserDashboard/Dashboard"
import {
    createAppContainer,
    createDrawerNavigator,
    createStackNavigator,
    createSwitchNavigator
} from "react-navigation"
import Resume from "./Components/UserDashboard/Resume"
import Forum from "./Components/UserDashboard/Forum"
import StudentEvent from "./Components/UserDashboard/StudentEvent"
import Report from "./Components/UserDashboard/Report"
import StudentProjectList from "./Components/UserDashboard/StudentProjectList"
import Suggestion from "./Components/UserDashboard/Suggestion"
import Profile from "./Components/UserDashboard/Profile"
import StudentQuery from "./Components/UserDashboard/StudentQuery"
import About from "./Components/Home/About"
import Terms from "./Components/Home/Term"
import Gallery from "./Components/Home/Gallery"
import Contact from "./Components/Home/Contact"
import Logout from "./Components/UserDashboard/Logout"
import LandingPage from "./Components/Home/LandingPage"

import CpyDashboard from "./Components/CompanyDashboard/CpyDashboard"
import CpyNotes from "./Components/CompanyDashboard/CpyNotes"
import CpyPDF from "./Components/CompanyDashboard/CpyPDF"
import CpyProfile from "./Components/CompanyDashboard/CpyProfile"
import CpyRequestInterns from "./Components/CompanyDashboard/CpyRequestInterns"
import CpyStudentInfo from "./Components/CompanyDashboard/CpyStudentInfo"
import CpyVideoLinks from "./Components/CompanyDashboard/CpyVideoLinks"
import CpyLogout from "./Components/CompanyDashboard/CpyLogout"

import CoursesDashboard from "./Components/CoursesLevel/CoursesDashboard"
import CoursesLogout from "./Components/CoursesLevel/CoursesLogout"
import Basic from "./Components/CoursesType/Basic";
import Notes from "./Components/CoursesType/Notes";
import Pdf from "./Components/CoursesType/Pdf";
import CoursesNotes from "./Components/CoursesLevel/CoursesNotes"
import CoursesPDF from "./Components/CoursesLevel/CoursesPDF"
import CoursesVideoLinks from "./Components/CoursesLevel/CoursesVideoLinks"
import StudentProjectEnrolled from './Components/UserDashboard/StudentProjectEnrolled';
import ProjectDash from './Components/UserDashboard/ProjectDash';
import ProjectDetails from './Components/UserDashboard/ProjectDetails';
import ProjectQuery from './Components/UserDashboard/ProjectQuery';
import ProjectProgress from './Components/UserDashboard/ProjectProgress';


export const RootStack = createDrawerNavigator(
    {
        Events: {
            screen: Events
        },
        Login: {
            screen: Login
        },
        About: {
            screen: About
        },
        Terms: {
            screen: Terms
        },
        Gallery: {
            screen: Gallery
        },
        Contact: {
            screen: Contact
        },
        Register: {
            screen: Register
        },
        LandingPage: {
            screen: LandingPage
        },
        LoginComponent: {
            screen: LoginComponent
        },
        RegisterComponent: {
            screen: RegisterComponent
        }
    },
    {
        initialRouteName: "Login",
        activeTintColor: "#fff",
        drawerBackgroundColor: "black",
        flex: 1,

        contentOptions: {
            activeTintColor: "white",
            inactiveTintColor: "#0097e6",
            labelStyle: {
                fontFamily: "Montserrat-Regular",
                fontWeight: "100"
            }
        }
    }
)
const ButtonNavigators = createDrawerNavigator(
    {
        Dash: Dashboard,
        Resume: Resume,
        StudentEvents: StudentEvent,
        Report: Report,
        Forum: Forum,
        Suggestion: Suggestion,
        StudentProjectList: StudentProjectList,
        StudentProjectEnrolled:StudentProjectEnrolled,
        Profile: Profile,
        StudentQuery: StudentQuery,
        Logout: Logout
    },
    {
        drawerBackgroundColor: "black",
        contentOptions: {
            activeTintColor: "white",
            inactiveTintColor: "#0097e6",
            labelStyle: {
                fontFamily: "Montserrat-Regular",
                fontWeight: "100"
            }
        }
    }
)

const ButtonNavigatorsCpy = createDrawerNavigator(
    {
        CpyDash: CpyDashboard,
        CpyProfile: CpyProfile,
        CpyStudentInfo:CpyStudentInfo,
        CpyNotes:CpyNotes,
        CpyVideoLinks:CpyVideoLinks,
        CpyPDF:CpyPDF,
        CpyRequestInterns:CpyRequestInterns,
        CpyLogout: CpyLogout
    },
    {
        drawerBackgroundColor: "black",
        contentOptions: {
            activeTintColor: "white",
            inactiveTintColor: "#0097e6",
            labelStyle: {
                fontFamily: "Montserrat-Regular",
                fontWeight: "100"
            }
        }
    }
)

const ButtonNavigatorsCoursesDashboard = createDrawerNavigator(
    {
        CoursesDashboard: CoursesDashboard,
        // CoursesNotes: CoursesNotes,
        // CoursesVideoLinks: CoursesVideoLinks,
        // CoursesPDF: CoursesPDF,
        CoursesLogout: CoursesLogout
    },
    {
        drawerBackgroundColor: "black",
        contentOptions: {
            activeTintColor: "white",
            inactiveTintColor: "#0097e6",
            labelStyle: {
                fontFamily: "Montserrat-Regular",
                fontWeight: "100"
            }
        }
    }
)
const BNavigator = createDrawerNavigator(
    {
        Basic:Basic,
        Notes:Notes,
        Pdf:Pdf
    },
    {
        drawerBackgroundColor: "black",
        contentOptions: {
            activeTintColor: "white",
            inactiveTintColor: "#0097e6",
            labelStyle: {
                fontFamily: "Montserrat-Regular",
                fontWeight: "100"
            }
        }
    }
)
const ProjectDashNavigator = createDrawerNavigator(
    {
        ProjectDashboard:ProjectDash,
        ProjectDetails:ProjectDetails,
        ProjectProgress:ProjectProgress,
        ProjectQuery:ProjectQuery,
    },
    {
        drawerBackgroundColor: "black",
        contentOptions: {
            activeTintColor: "white",
            inactiveTintColor: "#0097e6",
            labelStyle: {
                fontFamily: "Montserrat-Regular",
                fontWeight: "100"
            }
        }
    }
)

const AppContainer = createAppContainer(
    createSwitchNavigator(
        {
            btnNav: ButtonNavigators,
            Root: RootStack,
            cpY: ButtonNavigatorsCpy,
            LandingPage:LandingPage,
            ButtonNavigatorsCoursesDashboard:ButtonNavigatorsCoursesDashboard,
            BNavigator:BNavigator,
            ProjectDashNavigator:ProjectDashNavigator
        },
        {
            initialRouteName: "LandingPage",
        }
    )
)


const App = () => {
  return (
      
                <ImageBackground
                source={require("./img/best.png")}
                style={styles.outerContainer}
            >
                <View style={styles.StatusBar}>
                <StatusBar
  backgroundColor={'transparent'}
  translucent
/>
</View>
                <AppContainer />
            </ImageBackground>
    // <Fragment>
    //   <StatusBar barStyle="dark-content" />
    //   <SafeAreaView>
    //     <ScrollView
    //       contentInsetAdjustmentBehavior="automatic"
    //       style={styles.scrollView}>
    //       <Header />
    //       {global.HermesInternal == null ? null : (
    //         <View style={styles.engine}>
    //           <Text style={styles.footer}>Engine: Hermes</Text>
    //         </View>
    //       )}
    //       <View style={styles.body}>
    //         <View style={styles.sectionContainer}>
    //           <Text style={styles.sectionTitle}>Step One</Text>
    //           <Text style={styles.sectionDescription}>
    //             Edit <Text style={styles.highlight}>App.js</Text> to change this
    //             screen and then come back to see your edits.
    //           </Text>
    //         </View>
    //         <View style={styles.sectionContainer}>
    //           <Text style={styles.sectionTitle}>See Your Changes</Text>
    //           <Text style={styles.sectionDescription}>
    //             <ReloadInstructions />
    //           </Text>
    //         </View>
    //         <View style={styles.sectionContainer}>
    //           <Text style={styles.sectionTitle}>Debug</Text>
    //           <Text style={styles.sectionDescription}>
    //             <DebugInstructions />
    //           </Text>
    //         </View>
    //         <View style={styles.sectionContainer}>
    //           <Text style={styles.sectionTitle}>Learn More</Text>
    //           <Text style={styles.sectionDescription}>
    //             Read the docs to discover what to do next:
    //           </Text>
    //         </View>
    //         <LearnMoreLinks />
    //       </View>
    //     </ScrollView>
    //   </SafeAreaView>
    // </Fragment>
  );
};

const styles = StyleSheet.create({
      outerContainer: {
        height: "100%",
        // marginTop:'2%'
        // backgroundColor:'#000'
    },
    StatusBar:{
        marginBottom:'4%'
    },
    header: {},
    container: {
        flex: 1
    },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
