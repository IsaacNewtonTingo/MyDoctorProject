import "react-native-gesture-handler";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Header from "../Components/header";
import React from "react";

import HomeScreen from "../Screens/HomeScreen";
import WelcomeScreen from "../Screens/WelcomeScreen";
import SignupScreen from "../Screens/SignupScreen";
import LoginScreen from "../Screens/LoginScreen";
import AmbulanceSearchScreen from "../Screens/AmbulanceSearchScreen";
import SymptomsSearchScreen from "../Screens/SymptomsSearchScreen";
import HospitalSearchScreen from "../Screens/HospitalSearchScreen";
import AmbulancesResultScreen from "../Screens/AmbulancesResultScreen";
import HospitalsResultScreen from "../Screens/HospitalsResultScreen";
import FunctionalityScreen from "../Screens/FunctionalityScreen";
import NextOfKinScreen from "../Screens/NextOfKinScreen";
import SymptomsCollectionScreen from "../Screens/SymptomsCollectionScreen";
import SymptomsAPIScreen from "../Screens/SymptomsAPIScreen";

const screens = {
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: {
      headerTitle: () => <Header />,
    },
  },
  SignUp: {
    screen: SignupScreen,

    navigationOptions: {
      headerTitle: () => <Header />,
    },
  },

  Login: {
    screen: LoginScreen,
    navigationOptions: {
      headerTitle: () => <Header title="Login" />,
    },
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: () => <Header title="" />,
    },
  },
  SymptomSearch: {
    screen: SymptomsSearchScreen,
    navigationOptions: {
      headerTitle: () => <Header title="Search for symptoms" />,
    },
  },
  HospitalSearch: {
    screen: HospitalSearchScreen,
    navigationOptions: {
      headerTitle: () => <Header title="Search for Hospital" />,
    },
  },
  HospitalResult: {
    screen: HospitalsResultScreen,
    navigationOptions: {
      headerTitle: () => <Header title="Available hospitals" />,
    },
  },
  AmbulanceSearch: {
    screen: AmbulanceSearchScreen,
    navigationOptions: {
      headerTitle: () => <Header title="Search for Ambulance " />,
    },
  },
  AmbulanceResult: {
    screen: AmbulancesResultScreen,
    navigationOptions: {
      headerTitle: () => <Header title="Available ambulance services" />,
    },
  },
  NextOfKin: {
    screen: NextOfKinScreen,
    navigationOptions: {
      title: "",
    },
  },
  Functionality: {
    screen: FunctionalityScreen,
    navigationOptions: {
      headerTitle: () => <Header title="How this app works" />,
    },
  },
  SymptomsCollection: {
    screen: SymptomsCollectionScreen,
  },

  SymptomsAPIScreen: {
    screen: SymptomsAPIScreen,
    navigationOptions: {
      headerTitle: () => <Header />,
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    flex: 1,
    headerStyle: { height: 100, backgroundColor: "transparent" },
  },
});

export default createAppContainer(HomeStack);
