import React, { useContext, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  Text,
  Alert,
  Keyboard,
  ScrollView,
  Image,
} from "react-native";

import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

import BottomSheet from "reanimated-bottom-sheet";
import Animated from "react-native-reanimated";

import * as firebase from "firebase";
import "firebase/firestore";
import { auth } from "../../firebase";

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
  const [password, setPassword] = useState("");

  const emptyState = () => {
    setEmail("");
    setUserData("");
    setPassword("");
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
        // setEmail(dataObj.email);
        setFirstNextOfKin(dataObj.firstNextOfKin);
        setSecondNextOfKin(dataObj.secondNextOfKin);
      }
    }
    getUserInfo();
  });

  /////////////////////////////////////////////////

  const handleUpdate = async () => {
    let doc = await firebase

      .firestore()
      .collection("users")
      .doc(currentUserUID)
      .update({
        firstName: userData.firstName,
        firstNextOfKin: userData.firstNextOfKin,
        secondNextOfKin: userData.secondNextOfKin,
      })
      .then(() => {
        Alert.alert("Profile Updated");
        navigation.navigate("Profile");
        emptyState();
      });
  };

  const bs = React.createRef();
  const fall = new Animated.Value(1);

  const renderInner = () => (
    <View style={styles.panel}>
      <Text style={styles.text}>Enter email you used to sign up</Text>
      <TextInput
        placeholder="Email"
        style={[styles.input, { width: "100%", marginHorizontal: 0 }]}
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <Text style={styles.text}>Enter password you used to sign up</Text>
      <TextInput
        placeholder="********"
        style={[styles.input, { width: "100%", marginHorizontal: 0 }]}
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <TouchableOpacity
        style={[
          styles.button,
          { height: 50, width: "100%", marginHorizontal: 0, marginBottom: 20 },
        ]}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Finish</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => bs.current.snapTo(1)}
      >
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
      }
    });

    return unsubscribe;
  }, []);

  const handleSubmit = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        handleUpdate();
        bs.current.snapTo(1);
      })
      .catch((error) => alert(error.message));
  };

  const handleNext = () => {
    if (!userData) {
      Alert.alert("All fields must be filled");
    } else {
      bs.current.snapTo(0);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
      onPress={Keyboard.dismiss}
    >
      <BottomSheet
        ref={bs}
        snapPoints={[330, 0]}
        renderContent={renderInner}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
        enabledContentTapInteraction={false}
      />

      <Animated.View
        style={{
          opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
          flex: 1,
        }}
      >
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/doc.gif")}
            style={{ width: 120, height: 150, marginRight: 20 }}
          />
        </View>
        <ScrollView style={{ top: 10 }}>
          <Text style={styles.text}>Current Name: {firstName}</Text>
          <View style={styles.miniContainer}>
            <TextInput
              placeholder="Name: "
              style={[{ marginTop: 0 }, styles.input]}
              onChangeText={(txt) =>
                setUserData({ ...userData, firstName: txt })
              }
              value={userData ? userData.firstName : ""}
            />
          </View>

          <Text style={styles.text}>
            Current first next of Kin No. : {firstNextOfKin}
          </Text>
          <View style={styles.miniContainer}>
            <TextInput
              placeholder="e.g +254724753175"
              style={styles.input}
              keyboardType="phone-pad"
              onChangeText={(txt) =>
                setUserData({ ...userData, firstNextOfKin: txt })
              }
              value={userData ? userData.firstNextOfKin : ""}
            />
          </View>

          <Text style={styles.text}>
            Current second next of kin No. : {secondNextOfKin}
          </Text>

          <View style={styles.miniContainer}>
            <TextInput
              placeholder="e.g +254721345698"
              style={styles.input}
              keyboardType="phone-pad"
              onChangeText={(txt) =>
                setUserData({ ...userData, secondNextOfKin: txt })
              }
              value={userData ? userData.secondNextOfKin : ""}
            />
          </View>

          <View
            style={{
              borderBottomColor: "white",
              borderBottomWidth: 1,
              marginHorizontal: 50,
              marginVertical: 20,
              opacity: 0.2,
            }}
          />

          <TouchableOpacity style={styles.button} onPress={handleNext}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Profile")}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </ScrollView>
      </Animated.View>
    </KeyboardAvoidingView>
  );
};
export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  imageContainer: {
    alignItems: "center",
  },

  text: {
    color: "gray",
    fontWeight: "bold",
    marginBottom: 5,
    marginLeft: 20,
  },
  input: {
    backgroundColor: "white",
    borderRadius: 10,
    height: 50,
    marginBottom: 20,
    paddingLeft: 20,
    marginHorizontal: 10,
    width: "90%",
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },

  button: {
    height: 40,
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
    marginBottom: 30,
    marginHorizontal: 10,
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
    backgroundColor: "#cccccc",
    paddingTop: 20,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    height: 400,
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
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
  button1: {
    height: 40,
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
    marginBottom: 20,
    marginRight: 10,
    width: 100,
  },
  miniContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 20,
  },
});
