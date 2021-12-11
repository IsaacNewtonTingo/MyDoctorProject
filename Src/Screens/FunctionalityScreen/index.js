import React, { useState } from "react";
import { View, Text, ScrollView, StatusBar, SafeAreaView } from "react-native";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Linking from "expo-linking";
import * as SMS from "expo-sms";
import * as firebase from "firebase";
import "firebase/firestore";

const FunctionalityScreen = ({ navigation }) => {
  let currentUserUID = firebase.auth().currentUser.uid;
  const [firstNextOfKin, setfirstNextOfKin] = useState("");
  const [secondNextOfKin, setSecondNextOfKin] = useState("");

  async function setUserInfo() {
    let doc = await firebase
      .firestore()
      .collection("users")
      .doc(currentUserUID)
      .get();

    if (doc.exists) {
      let dataObj = doc.data();
      setfirstNextOfKin(dataObj.firstNextOfKin);
      setSecondNextOfKin(dataObj.secondNextOfKin);
    }
  }
  setUserInfo();

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
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={[styles.itemsContainer, { marginTop: 2 }]}>
          <Text style={styles.titleText}>Symptom Search</Text>
          <Text style={styles.paragraphText}>
            The home screen presents you with a button that when you click on,
            it, you are ridirected to a screen whereby you can search Symptoms.
            On that screen, there is a search bar in which you can enter your
            symptoms and as you type there are suggestions and you can pick the
            appropriate one for you. This will take you to a screen where ou can
            see your condition and a proposed way of treatment.
          </Text>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate("SymptomSearch")}
          >
            <Text style={styles.buttonText}>Search for Symptoms</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.itemsContainer}>
          <Text style={styles.titleText}>Hospital Search</Text>
          <Text style={styles.paragraphText}>
            According to your location, you are able to see the various
            hospitals close to you, with the closest one at the top. This
            functionality can be accessed by pressing the "Search Hospital"
            button on the home screen or on Menu items. Youcan the see
            directions to them or even contact them as their contact details are
            made available.
          </Text>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              Linking.openURL("https://www.google.com/maps/search/clinics/");
            }}
          >
            <Text style={styles.buttonText}>Search for Hospital</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.itemsContainer}>
          <Text style={styles.titleText}>Ambulance Search</Text>
          <Text style={styles.paragraphText}>
            When you press the "Search Ambulance" button, you are able to see
            the different ambulance services close to your location. Their
            contact details are also provided so you can contact them in case of
            an emergency.
          </Text>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              Linking.openURL("https://www.google.com/maps/search/ambulance/");
            }}
          >
            <Text style={styles.buttonText}>Search for Ambulance</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.itemsContainer}>
          <Text style={styles.titleText}>Contact next of kin</Text>
          <Text style={styles.paragraphText}>
            When you created an account, you had to input next of kin
            contactdetails. Upon clicking "Contact next of kin" a default
            message will be sent to them. You are able to preview the message
            and make the changes needed before sending.
          </Text>
          <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
            <Text style={styles.buttonText}>Contact Next Of Kin</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default FunctionalityScreen;
