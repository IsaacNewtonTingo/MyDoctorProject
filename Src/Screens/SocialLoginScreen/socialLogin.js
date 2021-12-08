import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Platform,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import SocialButton from "../../Components/socialButton";

const SocialLogin = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      <StatusBar style="light" />

      <Text
        style={{
          color: "white",
          fontWeight: "bold",
          marginLeft: 10,
          marginVertical: 20,
          fontSize: 20,
          textAlign: "center",
          marginTop: 50,
        }}
      >
        Create Account
      </Text>
      {Platform.OS === "ios" ? (
        <View>
          <Text style={styles.text}>Email</Text>

          <TextInput
            style={styles.textInput}
            placeholder="e.g johndoe@gmail.com"
            value={email}
            onChangeText={(email) => setEmail(email)}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={styles.text}>Password</Text>

          <TextInput
            style={styles.textInput}
            placeholder="********"
            value={password}
            onChangeText={(password) => setPassword(password)}
            secureTextEntry={true}
          />

          <Text style={styles.text}>Confirm Password</Text>

          <TextInput
            style={styles.textInput}
            placeholder="********"
            value={confirmPassword}
            onChangeText={(password2) => setConfirmPassword(password2)}
            secureTextEntry={true}
          />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      ) : null}

      <View style={{ alignItems: "center" }}>
        <Image
          source={require("../../assets/doc.gif")}
          style={{
            width: 200,
            height: 250,
            marginVertical: 10,
          }}
        />
      </View>

      {Platform.OS === "android" ? (
        <View>
          <SocialButton
            buttonTitle="Sign Up with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => {}}
          />
        </View>
      ) : null}
      {Platform.OS === "ios" ? (
        <View style={styles.signupContainer}>
          <Text style={styles.accountText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.signupText}>Login</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};
export default SocialLogin;

const styles = StyleSheet.create({
  text: {
    color: "white",
    marginLeft: 10,
    fontWeight: "bold",
    marginBottom: 10,
  },
  textInput: {
    backgroundColor: "white",
    borderRadius: 10,
    height: 50,
    marginBottom: 10,
    paddingLeft: 20,
    marginHorizontal: 10,
  },
  button: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#003326",
    borderRadius: 10,
    padding: 10,
    shadowColor: "white",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 15,
    shadowOpacity: 0.3,
    marginTop: 20,
    elevation: 10,
    borderWidth: 0.5,
    borderColor: "gray",
    marginHorizontal: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  signupContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
  },
  accountText: {
    color: "#d9d9d9",
    marginRight: 20,
  },
  signupText: {
    color: "white",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center",
    // fontFamily: "serif",
    letterSpacing: 5,
    color: "white",
    textShadowColor: "white",
    textShadowOffset: {
      width: 0,
      height: 0,
    },
    textShadowRadius: 10,
    textDecorationColor: "white",
  },
  subTitle: {
    color: "gray",
    textAlign: "center",
    //fontSize: 17,
    fontWeight: "700",
    // fontFamily: "serif",
  },
});
