import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { hospitalRecords } from "../../API/firebaseMethods";
import { ambulanceRecords } from "../../API/firebaseMethods";

import * as firebase from "firebase";
import "firebase/firestore";

import { useHeaderHeight } from "react-navigation-stack";

const Records = () => {
  let currentUserUID = firebase.auth().currentUser.uid;
  const [hospitalName, setHospitalName] = useState("");
  const [county, setCounty] = useState("");
  const [hospitalDate, setHospitalDate] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [ambulanceName, setAmbulanceName] = useState("");
  const [ambulanceDate, setAmbulanceDate] = useState("");

  const emptyState = () => {
    setHospitalName("");
    setCounty("");
    setAmbulanceDate("");
    setRegistrationNumber("");
    setAmbulanceName("");
    setHospitalDate("");
  };

  const handleHospitalSubmit = () => {
    if (!hospitalName && !county && !hospitalDate) {
      Alert.alert("All fields must be filled");
    } else if (!hospitalName) {
      Alert.alert("Hospital name must be field");
    } else if (!county) {
      Alert.alert("County must be included");
    } else if (!hospitalDate) {
      Alert.alert("Date you visited the hospital must be included");
    } else {
      hospitalRecords(hospitalName, county, hospitalDate, currentUserUID);
      emptyState();
      Alert.alert("Sumbmitted successfully");
    }
  };

  const handleAmbulanceSubmit = () => {
    if (!ambulanceName && !registrationNumber && !ambulanceDate) {
      Alert.alert("All fields must be filled");
    } else if (!ambulanceName) {
      Alert.alert("Ambulance Service name must be included");
    } else if (!registrationNumber) {
      Alert.alert("Ambulance registration number must be included");
    } else if (!ambulanceDate) {
      Alert.alert("Date you used the ambulance must be included");
    } else {
      ambulanceRecords(
        registrationNumber,
        ambulanceName,
        ambulanceDate,
        currentUserUID,
        county
      );
      emptyState();
      Alert.alert("Sumbmitted successfully");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>
            Please enter records of different Hospitals, or Ambulance services
            you have used.
          </Text>
        </View>
        <View style={styles.innerContainer}>
          <Text style={styles.titleText}>Hospital information</Text>
          <View
            style={{
              borderBottomColor: "white",
              borderBottomWidth: 1,
              marginRight: 170,
              marginLeft: 10,
              marginBottom: 10,
              opacity: 0.05,
            }}
          />

          <Text style={styles.text}>Hospital Name</Text>
          <TextInput
            style={styles.textInput}
            placeholder="e.g Aga Khan Hospital,Parklands"
            value={hospitalName}
            onChangeText={(text) => setHospitalName(text)}
          />

          <Text style={styles.text}>County hospital location </Text>
          <TextInput
            style={styles.textInput}
            placeholder="e.g Nairobi"
            value={county}
            onChangeText={(text) => setCounty(text)}
          />

          <Text style={styles.text}>Date visited (D/M/Y)</Text>
          <TextInput
            style={styles.textInput}
            placeholder="e.g 30/09/2021"
            value={hospitalDate}
            onChangeText={(text) => setHospitalDate(text)}
            keyboardType="numbers-and-punctuation"
          />

          <Text style={styles.text}>User (This is your user ID)</Text>
          <TextInput
            style={styles.textInput}
            placeholder=""
            value={currentUserUID}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={handleHospitalSubmit}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.innerContainer}>
          <Text style={styles.titleText}>Ambulance information</Text>
          <View
            style={{
              borderBottomColor: "white",
              borderBottomWidth: 1,
              marginRight: 145,
              marginLeft: 10,
              marginBottom: 10,
              opacity: 0.05,
            }}
          />

          <Text style={styles.text}>Name of Service</Text>
          <TextInput
            style={styles.textInput}
            placeholder="e.g St.John Ambulance"
            value={ambulanceName}
            onChangeText={(text) => setAmbulanceName(text)}
          />

          <Text style={styles.text}>Vehicle Registration Number</Text>
          <TextInput
            style={styles.textInput}
            placeholder="e.g KBA 254J"
            value={registrationNumber}
            onChangeText={(text) => setRegistrationNumber(text)}
          />

          <Text style={styles.text}>County of use</Text>
          <TextInput
            style={styles.textInput}
            placeholder="e.g Nairobi"
            value={county}
            onChangeText={(text) => setCounty(text)}
          />

          <Text style={styles.text}>Date used (D/M/Y)</Text>
          <TextInput
            style={styles.textInput}
            placeholder="e.g 13/08/2021"
            value={ambulanceDate}
            onChangeText={(text) => setAmbulanceDate(text)}
          />

          <Text style={styles.text}>User (This is your user ID)</Text>
          <TextInput
            style={styles.textInput}
            placeholder=""
            value={currentUserUID}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={handleAmbulanceSubmit}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
        {/* <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity> */}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  headerContainer: {
    marginVertical: 10,
    padding: 10,
    borderColor: "rgb(224, 224, 235)",
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 20,
    marginTop: 30,
  },
  headerText: {
    fontWeight: "500",
    fontSize: 18,
    color: "white",
  },

  titleText: {
    color: "white",
    marginLeft: 10,
    fontWeight: "bold",
    marginBottom: 15,
    fontSize: 20,
  },
  text: {
    color: "gray",
    marginHorizontal: 10,
    marginVertical: 20,
  },
  textInput: {
    backgroundColor: "white",
    borderRadius: 10,
    height: 50,
    marginBottom: 10,
    paddingLeft: 20,
    marginHorizontal: 10,
  },
  innerContainer: {
    backgroundColor: "#1a1a1a",
    marginVertical: 20,
    borderRadius: 20,
    padding: 20,
    elevation: 20,
    shadowColor: "white",
    shadowRadius: 10,
    shadowOffset: {
      height: 10,
      width: 10,
    },
    shadowOpacity: 0.2,
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
});

export default Records;
