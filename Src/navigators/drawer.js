import "react-native-gesture-handler";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";

import HomeStack from "./homeStack";

import HomeScreen from "../Screens/HomeScreen";
import SignupScreen from "../Screens/SignupScreen";
import LoginScreen from "../Screens/LoginScreen";
import AmbulanceSearchScreen from "../Screens/AmbulanceSearchScreen";
import SymptomsSearchScreen from "../Screens/SymptomsSearchScreen";
import HospitalSearchScreen from "../Screens/HospitalSearchScreen";
import AmbulancesResultScreen from "../Screens/AmbulancesResultScreen";
import HospitalsResultScreen from "../Screens/HospitalsResultScreen";
import FunctionalityScreen from "../Screens/FunctionalityScreen";
import NextOfKinScreen from "../Screens/NextOfKinScreen";
import WelcomeScreen from "../Screens/WelcomeScreen";

const RootDrawerNavigator = createDrawerNavigator({
  Welcome: {
    screen: HomeStack,
  },
  Signup: {
    screen: SignupScreen,
  },
  Login: {
    screen: LoginScreen,
  },
  AmbulanceSearch: {
    screen: AmbulanceSearchScreen,
  },
  SymptomsSearch: {
    screen: SymptomsSearchScreen,
  },
  HospitalSearch: {
    screen: HospitalSearchScreen,
  },
});
export default createAppContainer(RootDrawerNavigator);
