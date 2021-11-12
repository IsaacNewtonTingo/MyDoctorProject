import React from "react";
import { View, TextInput, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Ionicons } from "@expo/vector-icons";

const AmbulanceSearchScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../../assets/amb.gif")} />
      </View>

      <View style={styles.iconAndInput}>
        <View style={styles.icon}>
          <Ionicons name="location" size={35} color="black" />
        </View>

        <View style={styles.textInputContainer}>
          <GooglePlacesAutocomplete
            styles={{
              textInput: { paddingLeft: 50, height: 50 },
            }}
            placeholder="Enter Your Location"
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              navigation.navigate("Ambulances Result");
              //console.log(data, details);
            }}
            query={{
              key: "AIzaSyCoo128F13cYWagQSREDTa3gwwUIhm2v-E",
              language: "en",
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default AmbulanceSearchScreen;
