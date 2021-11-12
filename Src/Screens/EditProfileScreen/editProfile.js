import React from "react";
import {
  View,
  Image,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
  Keyboard,
  Alert,
} from "react-native";

import {
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";

import Animated from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";

import { Text } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

import ImagePicker from "react-native-image-crop-picker";

const EditProfile = ({ navigation }) => {
  // const bs = React.createRef();
  // const fall = new Animated.Value(1);

  // const keyboardVerticalOffset = Platform.OS === "ios" ? 120 : 0;

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

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <BottomSheet
        ref={bs}
        snapPoints={[330, 0]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
        enabledContentTapInteraction={false}
      />

      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={keyboardVerticalOffset}
      >
        <Animated.View
          style={{
            marginTop: 20,
            marginHorizontal: 20,
            opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
          }}
        >
          <View style={styles.imageContainer}>
            <ImageBackground
              source={require("../../assets/chilombo.jpeg")}
              style={{ height: 150, width: 150 }}
              imageStyle={{ borderRadius: 15 }}
            >
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  flex: 1,
                }}
              >
                <Ionicons
                  name="camera-outline"
                  size="50"
                  color="white"
                  onPress={() => bs.current.snapTo(0)}
                />
              </View>
            </ImageBackground>

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
              Edit Picture
            </Text>
          </View>
          <View>
            <TextInput
              placeholder="Name"
              style={[{ marginTop: 20 }, styles.input]}
            />
            <TextInput
              placeholder="Email"
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TextInput
              placeholder="Next of Kin (1)"
              style={styles.input}
              keyboardType="phone-pad"
            />
            <TextInput
              placeholder="Next of Kin (2)"
              style={styles.input}
              keyboardType="phone-pad"
            />

            <TouchableOpacity
              style={styles.button}
              // onPress={() => navigation.navigate("EditProfile")}
            >
              <Text style={styles.buttonText}>Make Changes</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
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
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "white",
    borderRadius: 10,
    height: 50,
    marginBottom: 20,
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
