import React, { useContext, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  Text,
  Alert,
} from "react-native";

import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

import * as firebase from "firebase";
import "firebase/firestore";

import { signIn } from "../../API/firebaseMethods";

const EditProfile = ({ navigation }) => {
  const keyboardVerticalOffset = Platform.OS === "ios" ? 10 : 0;

  let currentUserUID = firebase.auth().currentUser.uid;

  // const bs = React.createRef();
  // const fall = new Animated.Value(1);

  const [userData, setUserData] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [firstNextOfKin, setFirstNextOfKin] = useState("");
  const [secondNextOfKin, setSecondNextOfKin] = useState("");

  const emptyState = () => {
    // setFirstName("");
    // setEmail("");
    // setFirstNextOfKin("");
    // setSecondNextOfKin("");
    setUserData("");
  };

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
  // const getUser = async () => {
  //   const currentUser = await firestore()
  //     .collection("users")
  //     .doc(currentUserUID)
  //     .get()
  //     .then((documentSnapshot) => {
  //       if (documentSnapshot.exists) {
  //         console.log("User Data", documentSnapshot.data());
  //         setUserData(documentSnapshot.data());
  //       }
  //     });
  // };

  // const takePhotoFromCamera = () => {
  //   ImagePicker.openCamera({
  //     width: 300,
  //     height: 400,
  //     cropping: true,
  //   }).then((image) => {
  //     console.log(image);
  //   });
  // };
  // const choosePhotoFromGallery = () => {
  //   ImagePicker.openPicker({
  //     width: 300,
  //     height: 400,
  //     cropping: true,
  //   }).then((image) => {
  //     console.log(image);
  //   });
  // };

  // const renderInner = () => (
  //   <View style={styles.panel}>
  //     <View style={{ alignItems: "center" }}>
  //       <Text style={styles.panelTitle}>Upload Photo</Text>
  //       <Text style={styles.panelSubtitle}>Choose you profile picture</Text>
  //     </View>
  //     <TouchableOpacity
  //       style={styles.panelButton}
  //       onPress={takePhotoFromCamera}
  //     >
  //       <Text style={styles.panelButtonTitle}>Take Photo</Text>
  //     </TouchableOpacity>
  //     <TouchableOpacity
  //       style={styles.panelButton}
  //       onPress={choosePhotoFromGallery}
  //     >
  //       <Text style={styles.panelButtonTitle}>Choose from library</Text>
  //     </TouchableOpacity>
  //     <TouchableOpacity
  //       style={styles.panelButton}
  //       onPress={() => bs.current.snapTo(1)}
  //     >
  //       <Text style={styles.panelButtonTitle}>Cancel</Text>
  //     </TouchableOpacity>
  //   </View>
  // );

  // const renderHeader = () => (
  //   <View style={styles.header}>
  //     <View style={styles.panelHeader}>
  //       <View style={styles.panelHandle}></View>
  //     </View>
  //   </View>
  // );

  const handleUpdate = async () => {
    let doc = await firebase

      .firestore()
      .collection("users")
      .doc(currentUserUID)
      .update({
        firstName: userData.firstName,
        email: userData.email,
        firstNextOfKin: userData.firstNextOfKin,
        secondNextOfKin: userData.secondNextOfKin,
      })
      .then(() => {
        Alert.alert("Reload app to see changes");
        Alert.alert("Profile Updated");
        console.log("Profile updated");
        navigation.navigate("Profile");
        emptyState();
      });
  };

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={keyboardVerticalOffset}
        style={{ marginTop: 20 }}
      >
        <View>
          <Text style={styles.text}>Current: {firstName}</Text>
          <TextInput
            placeholder="Name"
            style={[{ marginTop: 0 }, styles.input]}
            onChangeText={(txt) => setUserData({ ...userData, firstName: txt })}
            value={userData ? userData.firstName : ""}
          />
          <Text style={styles.text}>Current: {email}</Text>
          <TextInput
            placeholder="Email"
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(txt) => setUserData({ ...userData, email: txt })}
            value={userData ? userData.email : ""}
          />
          <Text style={styles.text}>Current: {firstNextOfKin}</Text>
          <TextInput
            placeholder="Next of Kin (1)"
            style={styles.input}
            keyboardType="phone-pad"
            onChangeText={(txt) =>
              setUserData({ ...userData, firstNextOfKin: txt })
            }
            value={userData ? userData.firstNextOfKin : ""}
          />
          <Text style={styles.text}>Current: {secondNextOfKin}</Text>
          <TextInput
            placeholder="Next of Kin (2)"
            style={styles.input}
            keyboardType="phone-pad"
            onChangeText={(txt) =>
              setUserData({ ...userData, secondNextOfKin: txt })
            }
            value={userData ? userData.secondNextOfKin : ""}
          />

          <TouchableOpacity style={styles.button} onPress={handleUpdate}>
            <Text style={styles.buttonText}>Make Changes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleUpdate}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};
export default EditProfile;

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
  },

  text: {
    color: "gray",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    marginLeft: 10,
  },
  input: {
    backgroundColor: "white",
    borderRadius: 10,
    height: 50,
    marginBottom: 30,
    paddingLeft: 20,
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
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
    elevation: 10,
    borderWidth: 0.5,
    borderColor: "gray",
    marginBottom: 40,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  header: {
    backgroundColor: "#ffffff",
    shadowColor: "#333333",
    shadowOffset: {
      height: -1,
      width: -3,
    },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 2,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: "center",
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#00000040",
    marginBottom: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: "#FFFFFF",
    paddingTop: 20,
  },
  panelTitle: {
    fontSize: 25,
    height: 35,
    fontWeight: "500",
  },
  panelSubtitle: {
    fontSize: 14,
    color: "gray",
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: "#FF6347",
    alignItems: "center",
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
});
