import React from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Ionicons name="menu" size={30} color="black" />
      </TouchableOpacity>

      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row-reverse",
    alignItems: "center",
    height: "100%",
    width: "100%",
    justifyContent: "space-between",
    right: 65,
  },

  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
  },
});

export default Header;
