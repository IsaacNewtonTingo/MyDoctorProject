import React from "react";
import { View, TextInput, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles";

const NextOfKinScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.pageContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../../assets/kin.png")}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            During emegergencies, you may sometimes need help from a close
            family member or a friend. Adding their contact details here will
            make it easy for you to contact them at the tap of a button. A
            single message will be sent to all the available numbers indication
            that you need help. You can preview the message here.
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("ContactAddScreen")}
        >
          <View elevation={5} style={styles.buttonContainer}>
            <Text style={styles.buttonTextStyle}>Add next of kin</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View elevation={5} style={styles.buttonContainer}>
            <Text style={styles.buttonTextStyle}>View added next of kin</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NextOfKinScreen;
