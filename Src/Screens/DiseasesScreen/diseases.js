import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Linking from "expo-linking";

const Diseases = ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Image
          source={require("../../assets/doc.gif")}
          style={{
            width: 90,
            height: 110,
            marginVertical: 10,
          }}
        />
      </View>

      <View
        style={{
          borderBottomColor: "white",
          borderBottomWidth: 1,
          marginHorizontal: 80,
          marginVertical: 10,
          opacity: 0.1,
        }}
      />
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            marginHorizontal: 10,
            marginTop: 0,
            flex: 1,
            padding: 10,
            borderRadius: 20,
          }}
        >
          <View style={styles.iconAndText}>
            <Text style={styles.text}>1. {route.params.disease1}</Text>
          </View>
          <View style={styles.iconAndText}>
            <Text style={styles.text}>2. {route.params.disease2}</Text>
          </View>
          <View
            style={[
              styles.iconAndText,
              { flexDirection: "column", alignItems: "center" },
            ]}
          >
            <Text style={[styles.text, { fontSize: 18, fontWeight: "700" }]}>
              Treatment:
            </Text>
            <Text style={styles.text}> {route.params.treament}</Text>
          </View>
        </View>
      </ScrollView>

      <View style={{ bottom: 10, position: "absolute", width: "100%" }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#ff6600",
            height: 40,
            justifyContent: "center",
            alignItems: "center",

            borderRadius: 10,
            padding: 10,
            shadowColor: "white",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowRadius: 8,
            shadowOpacity: 0.3,
            marginTop: 30,
            elevation: 10,
            borderWidth: 0.5,
            borderColor: "gray",
            marginHorizontal: 10,
          }}
          onPress={() => navigation.navigate("SymptomSearch")}
        >
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            Linking.openURL("https://www.google.com/maps/search/clinics/");
          }}
        >
          <Text style={styles.buttonText}>Search fo Hospital</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            Linking.openURL("https://www.google.com/maps/search/ambulance/");
          }}
        >
          <Text style={styles.buttonText}>Search for Ambulance</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Diseases;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  text: {
    color: "white",
    alignItems: "center",
    fontWeight: "500",
    marginBottom: 10,
    justifyContent: "center",
    marginHorizontal: 10,
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
    shadowRadius: 8,
    shadowOpacity: 0.3,
    marginTop: 10,
    elevation: 10,
    borderWidth: 0.5,
    borderColor: "gray",
    marginHorizontal: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  iconAndText: {
    flexDirection: "row",
    marginBottom: 10,
  },
});
