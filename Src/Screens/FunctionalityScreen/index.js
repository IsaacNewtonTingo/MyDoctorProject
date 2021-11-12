import React from "react";
import { View, Text, ScrollView, StatusBar, SafeAreaView } from "react-native";
import styles from "./styles";

const FunctionalityScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={[styles.itemsContainer, { marginTop: 2 }]}>
          <Text style={styles.titleText}>Symptom Search</Text>
          <Text style={styles.paragraphText}>
            When you are at the search symptoms page, you enter the symptoms you
            are are experiencing, one at at time, on the seach area. Click on
            add to list all your symptoms. After you are satisfied, click on
            next, following the details provided to get more information on your
            condition. This will take you to the last point to your diagnosis.
          </Text>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Search for Symptoms</Text>
          </View>
        </View>
        <View style={styles.itemsContainer}>
          <Text style={styles.titleText}>Hospital Search</Text>
          <Text style={styles.paragraphText}>
            When you are at the search hospital page, all you have to do is
            enter the location you are and the application will suggest the
            hospitals within your location with their relative distance. Other
            than entering the location manually, you can use the live location
            feature for more accuracy. You can the go ahead and contact the
            hospital or make an appointment if the option is available.
          </Text>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Search for Hospital</Text>
          </View>
        </View>
        <View style={styles.itemsContainer}>
          <Text style={styles.titleText}>Ambulance Search</Text>
          <Text style={styles.paragraphText}>
            When you are at the search ambulance page, all you have to do is
            enter the location you are and the application will suggest the
            ambulance services within your location. Other than entering the
            location manually, you can use the live location feature for more
            accuracy. You can the go ahead and contact them
          </Text>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Search for Ambulance</Text>
          </View>
        </View>
        <View style={styles.itemsContainer}>
          <Text style={styles.titleText}>Contact next of kin</Text>
          <Text style={styles.paragraphText}>
            You have to 1st add the contact details of next of kin. When there
            is an emergency,you can send a single text to the listed people.
            This message indicates that you are in a critical condition and you
            need emediate help. Your location is also provided so that you can
            easily be tracked and offered help
          </Text>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Contact Next Of Kin</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default FunctionalityScreen;
