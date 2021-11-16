import "react-native-gesture-handler";
import * as React from "react";

import { StatusBar } from "expo-status-bar";

import { Ionicons } from "@expo/vector-icons";

// import Navigator from "./Src/navigators/homeStack";

import WelcomeScreen from "./Src/Screens/WelcomeScreen";
import SignupScreen from "./Src/Screens/SignupScreen";
import LoginScreen from "./Src/Screens/LoginScreen";
import HomeScreen from "./Src/Screens/HomeScreen";
import FunctionalityScreen from "./Src/Screens/FunctionalityScreen";
import SymptomsAPIScreen from "./Src/Screens/SymptomsAPIScreen";
import Profile from "./Src/Screens/Profile/profile";
import EditProfile from "./Src/Screens/EditProfileScreen/editProfile";

import DrawerContent from "./Src/Screens/DrawerContent";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HeaderTitle } from "react-navigation-stack";
import { ImageBackground, View, Text } from "react-native";
import { isEnabled } from "react-native/Libraries/Performance/Systrace";
import { color } from "react-native-reanimated";

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
      </Drawer.Navigator>
    </NavigationContainer>

    // <View style={{ flex: 1, backgroundColor: "#d9d9d9" }}>
    //   <StatusBar />
    //   <Navigator />
    // </View>
  );
};
export default App;
