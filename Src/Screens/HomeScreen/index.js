import React, { useState, useEffect, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Alert,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles";
import * as Linking from "expo-linking";
import * as SMS from "expo-sms";
import * as firebase from "firebase";

const HomeScreen = ({ navigation }) => {
  let currentUserUID = firebase.auth().currentUser.uid;
  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    async function getUserInfo() {
      let doc = await firebase
        .firestore()
        .collection("users")
        .doc(currentUserUID)
        .get();

      if (!doc.exists) {
        Alert.alert("No user data found!");
      } else {
        let dataObj = doc.data();
        setFirstName(dataObj.firstName);
      }
    }
    getUserInfo();
  });

  onPress = async () => {
    const status = await SMS.sendSMSAsync(
      "0725678456",
      "Hi. I'm in distress. Please send help"
      // {
      //   attachments: {
      //     uri: 'path/myfile.png',
      //     mimeType: 'image/png',
      //     filename: 'myfile.png',
      //   },
      // }
    );
  };

  return (
    <ImageBackground
      source={require("../../assets/background.jpeg")}
      style={{ flex: 1 }}
    >
      <ScrollView style={styles.homePageContainer}>
        <View style={styles.helloContainer}>
          <Text style={styles.hello}>Hello {firstName} </Text>
          <Text style={styles.help}>How may I help you?</Text>
        </View>

        <View
          style={{
            justifyContent: "center",
            //backgroundColor: "",
            marginVertical: 40,
          }}
        >
          <View style={styles.taskContainerOne}>
            <TouchableOpacity
              onPress={() => navigation.navigate("SymptomsAPI")}
            >
              <View style={styles.miniContainers}>
                <Text style={styles.text}>Search for Symptoms</Text>
                <Image
                  style={styles.microscope}
                  source={require("../../assets/microscope.png")}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL("https://www.google.com/maps/search/clinics/");
              }}
            >
              <View elevation={5} style={styles.miniContainers}>
                <Text style={styles.text}>Search for Hospital</Text>
                <Image
                  style={styles.hospital}
                  source={require("../../assets/hospital.png")}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.taskContainerTwo}>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(
                  "https://www.google.com/maps/search/ambulance/"
                );
              }}
            >
              <View elevation={5} style={styles.miniContainers}>
                <Text style={styles.text}>Search for Ambulance</Text>
                <Image
                  style={styles.ambulance}
                  source={require("../../assets/ambulance.png")}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPress(firstNextOfKin)}>
              <View elevation={5} style={styles.miniContainers}>
                <Text style={styles.text}>Contact Next of Kin</Text>
                <Image
                  style={styles.kin}
                  source={require("../../assets/kin.png")}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={styles.fuctionalityContainer}
          onPress={() => navigation.navigate("Functionality")}
        >
          <Text style={styles.fuctionalityText}>
            Get to know more on the fuctionality of this application
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

export default HomeScreen;
