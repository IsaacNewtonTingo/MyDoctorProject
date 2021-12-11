import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Linking from "expo-linking";
import * as SMS from "expo-sms";

const ReportProblem = () => {
  const number = "+254724753175";
  const message = "hello there!!";

  onPress = async () => {
    const { result } = await SMS.sendSMSAsync("+254724753175", "Hi there");
  };

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 40, marginHorizontal: 20 }}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/doc.gif")}
            style={{ width: 120, height: 150, marginRight: 20 }}
          />
        </View>

        <TouchableOpacity
          style={styles.items}
          onPress={() =>
            Linking.openURL("mailto:ape30technologies@gmail.com?subject=&body=")
          }
        >
          <Image
            source={require("../../assets/GmailLogo.png")}
            style={styles.image}
          />
          <Text style={styles.text}>Send us an email</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.items}
          onPress={() => {
            Linking.openURL(`tel:${number}`);
          }}
        >
          <Image
            source={require("../../assets/CallLogo.png")}
            style={styles.image}
          />
          <Text style={styles.text}>Call us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.items} onPress={onPress}>
          <Image
            source={require("../../assets/SMSLogo.png")}
            style={styles.image}
          />
          <Text style={styles.text}>Send us a text</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.items}
          onPress={() => {
            Linking.openURL(`whatsapp://send?phone=${number}&&text=${message}`);
          }}
        >
          <Image
            source={require("../../assets/WhatsAppLogo.png")}
            style={styles.image}
          />
          <Text style={styles.text}>Contact us on WhatsApp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ReportProblem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  imageContainer: {
    alignItems: "center",
  },

  items: {
    justifyContent: "flex-start",
    backgroundColor: "#262626",
    height: 55,
    borderRadius: 15,
    marginTop: 20,
    paddingLeft: 10,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 20,
  },
});
