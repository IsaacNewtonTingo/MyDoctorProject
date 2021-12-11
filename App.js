import "react-native-gesture-handler";
import * as React from "react";

import { StatusBar } from "expo-status-bar";

import WelcomeScreen from "./Src/Screens/WelcomeScreen";
import SignupScreen from "./Src/Screens/SignupScreen";
import LoginScreen from "./Src/Screens/LoginScreen";
import HomeScreen from "./Src/Screens/HomeScreen";
import FunctionalityScreen from "./Src/Screens/FunctionalityScreen";
import SymptomsAPIScreen from "./Src/Screens/SymptomsAPIScreen";
import Profile from "./Src/Screens/Profile/profile";
import EditProfile from "./Src/Screens/EditProfileScreen/editProfile";
import YearSelection from "./Src/Screens/YearSelectionScreen/yearSelection";
import SymptomSearch from "./Src/Screens/SymptomsSearchScreen/symptomSearch";

import DrawerContent from "./Src/Screens/DrawerContent";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Diseases from "./Src/Screens/DiseasesScreen/diseases";
import Records from "./Src/Screens/RecordsScreen/records";

import { LogBox } from "react-native";
import FinishEdit from "./Src/Screens/EditProfileScreen/finish";
import SocialLogin from "./Src/Screens/SocialLoginScreen/socialLogin";
import FirstLoading from "./Src/Screens/FirstLoadingScreen/FirstLoading";
import ReportProblem from "./Src/Screens/ReportProblemScreen/reportProblem";

LogBox.ignoreLogs(["AsyncStorage", "Setting a timer"]);

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar />
      <Drawer.Navigator
        drawerContent={(props) => <DrawerContent {...props} />}
        initialRouteName="Welcome"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#009973",
            height: 100,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Drawer.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            headerTitle: "",
            swipeEnabled: false,
            headerShown: false,
            hidden: true,
          }}
        />

        <Drawer.Screen
          name="SignUp"
          component={SignupScreen}
          options={{
            headerTitle: "Create Account",
            swipeEnabled: false,
            headerShown: false,
            hidden: true,
          }}
        />

        <Drawer.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerTitle: "Create Account",
            swipeEnabled: false,
            headerShown: false,
            hidden: true,
          }}
        />

        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerTitle: "" }}
        />

        <Drawer.Screen name="Functionality" component={FunctionalityScreen} />

        <Drawer.Screen
          name="SymptomsAPI"
          component={SymptomsAPIScreen}
          options={{ headerTitle: " Search for Symptoms" }}
        />
        <Drawer.Screen
          name="Profile"
          component={Profile}
          options={{ headerTitle: " Profile" }}
        />
        <Drawer.Screen
          name="EditProfile"
          component={EditProfile}
          options={{ headerTitle: " Edit Profile" }}
        />

        <Drawer.Screen
          name="YearSelection"
          component={YearSelection}
          options={{ headerTitle: " " }}
        />

        <Drawer.Screen
          name="SymptomSearch"
          component={SymptomSearch}
          options={{ headerTitle: " Search for symtoms" }}
        />
        <Drawer.Screen
          name="Diseases"
          component={Diseases}
          options={{ headerTitle: " Conditions" }}
        />
        <Drawer.Screen
          name="Records"
          component={Records}
          options={{ headerTitle: " Records" }}
        />
        <Drawer.Screen
          name="FinishEdit"
          component={FinishEdit}
          options={{ headerTitle: " Finish" }}
        />

        <Drawer.Screen
          name="SocialLogin"
          component={SocialLogin}
          options={{
            headerTitle: "Create Account",
            swipeEnabled: false,
            headerShown: false,
            hidden: true,
          }}
        />

        <Drawer.Screen
          name="FirstLoading"
          component={FirstLoading}
          options={{
            headerTitle: "",
            swipeEnabled: false,
            headerShown: false,
            hidden: true,
          }}
        />

        <Drawer.Screen
          name="ReportProblem"
          component={ReportProblem}
          options={{ headerTitle: " Report Problem / Contact Us" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default App;
