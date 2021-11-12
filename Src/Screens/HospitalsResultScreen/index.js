import React, { useState } from "react";
import { View, TextInput, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles";

const HospitalsResultScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.hospitalsTextContainer}>
        <Text style={styles.hospitalsText}>Hospitals</Text>
      </View>
    </View>
  );
};

export default HospitalsResultScreen;
