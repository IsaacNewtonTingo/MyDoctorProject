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
import "firebase/firestore";

import { auth } from "../../firebase";

const HomeScreen = ({ navigation }) => {
  let currentUserUID = firebase.auth().currentUser.uid;
  const [firstName, setFirstName] = useState("");
  const [firstNextOfKin, setfirstNextOfKin] = useState("");
  const [secondNextOfKin, setSecondNextOfKin] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("User found");
        setUserInfo();
      } else {
        console.log("No user found");
      }
    });

    return unsubscribe;
  }, []);

  async function setUserInfo() {
    let doc = await firebase
      .firestore()
      .collection("users")
      .doc(currentUserUID)
      .get();

    if (doc.exists) {
      let dataObj = doc.data();
      setFirstName(dataObj.firstName);
      setfirstNextOfKin(dataObj.firstNextOfKin);
      setSecondNextOfKin(dataObj.secondNextOfKin);
    }
  }
  setUserInfo();

  useEffect(() => {
    navigation.addListener("focus", () => setLoading(!loading));
  }, [navigation, loading]);

  onPress = async () => {
    const { result } = await SMS.sendSMSAsync(
      [firstNextOfKin, secondNextOfKin],
      "Hi. Hope you're doing great. I'm not feeling okay and I need some help. Please call me as soon as possible."
      // {
      //   attachments: {
      //     uri: "path/myfile.png",
      //     mimeType: "image/png",
      //     filename: "myfile.png",
      //   },
      // }
    );
  };

  return (
    <View style={styles.homePageContainer}>
      <View style={styles.helloContainer}>
        <Text style={styles.hello}>Hello {firstName}</Text>
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
            onPress={() => navigation.navigate("SymptomSearch")}
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
              Linking.openURL("https://www.google.com/maps/search/ambulance/");
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
          <TouchableOpacity onPress={onPress}>
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
    </View>
  );
};

export default HomeScreen;
