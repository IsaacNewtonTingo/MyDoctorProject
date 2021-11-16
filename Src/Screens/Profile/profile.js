import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  RefreshControl,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Avatar, Text } from "react-native-paper";

import * as firebase from "firebase";

const Profile = ({ navigation }) => {
  const [userData, setUserData] = useState(null);

  let currentUserUID = firebase.auth().currentUser.uid;
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [firstNextOfKin, setFirstNextOfKin] = useState("");
  const [secondNextOfKin, setSecondNextOfKin] = useState("");

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
        setEmail(dataObj.email);
        setFirstNextOfKin(dataObj.firstNextOfKin);
        setSecondNextOfKin(dataObj.secondNextOfKin);
      }
    }
    getUserInfo();
  });

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "black" }}>
      <View style={{ marginTop: 20, marginHorizontal: 20 }}>
        <View style={styles.imageContainer}>
          <Avatar.Image
            source={require("../../assets/chilombo.jpeg")}
            size={150}
          />

          <Text
            style={[
              styles.text,
              {
                color: "#cc5200",
                textAlign: "center",
                marginTop: 10,
                letterSpacing: 4,
              },
            ]}
          >
            Profile Picture
          </Text>
        </View>
        <View>
          <View style={styles.items}>
            <Text style={(styles.text, { color: "gray" })}>Name</Text>
            <Text style={styles.text}> {firstName}</Text>
          </View>
          <View style={styles.items}>
            <Text style={(styles.text, { color: "gray" })}> Email</Text>
            <Text style={styles.text}> {email}</Text>
          </View>
          <View style={styles.items}>
            <Text style={(styles.text, { color: "gray" })}>
              Next of Kin (1)
            </Text>
            <Text style={styles.text}> {firstNextOfKin}</Text>
          </View>
          <View style={styles.items}>
            <Text style={(styles.text, { color: "gray" })}>
              Next of Kin (2)
            </Text>
            <Text style={styles.text}> {secondNextOfKin}</Text>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("EditProfile")}
          >
            <Text style={styles.buttonText}>Make Changes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
export default Profile;

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
  },

  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "white",
    borderRadius: 10,
    height: 40,
    width: 200,
    marginBottom: 10,
    paddingLeft: 20,
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  items: {
    justifyContent: "center",
    backgroundColor: "#262626",
    height: 55,
    borderRadius: 15,
    marginTop: 20,
    paddingLeft: 10,
    paddingVertical: 10,
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
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});
