import React, { useEffect } from "react";
import { Image, Text, View, StatusBar } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles";
import { auth } from "../../firebase";

const WelcomeScreen = ({ navigation }) => {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("Home");
      }
    });

    return unsubscribe;
  }, []);

  return (
    <View style={styles.Container}>
      <ScrollView style={{ marginTop: 100, flex: 1 }}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.welcomeImage}
            source={require("../../assets/micro.gif")}
          />
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.text}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>MY DOCTOR</Text>
            </View>
            <View
              style={{
                borderBottomColor: "white",
                borderBottomWidth: 1,
                width: 300,
                marginBottom: 10,
                opacity: 0.1,
              }}
            />
            <Text style={styles.subTitle}>
              Personal assistant medical application
            </Text>
            <Text style={styles.otherSubtitle}>
              Get instant help at the tap of of a button
            </Text>
            <View
              style={{
                borderBottomColor: "white",
                borderBottomWidth: 1,
                width: 300,
                marginBottom: 50,
                opacity: 0.1,
              }}
            />
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <View style={styles.buttonContainer}>
                <Text style={styles.buttonTextStyle}>Get Started</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default WelcomeScreen;
