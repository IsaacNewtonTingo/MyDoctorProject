import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";

import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import * as Linking from "expo-linking";

import * as SMS from "expo-sms";
import * as firebase from "firebase";
import { loggingOut } from "../API/firebaseMethods";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function DrawerContent(props) {
  const handleLogout = () => {
    loggingOut();
    props.navigation.navigate("Welcome");
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Profile")}
            >
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 15,
                  alignItems: "center",
                  marginBottom: 20,
                  marginTop: 40,
                }}
              >
                <Image
                  source={require("../assets/doc.gif")}
                  style={{ width: 60, height: 80, marginRight: 20 }}
                />
                <View style={{ marginLeft: 15, flexDirection: "column" }}>
                  <Title style={styles.title}>My Doctor</Title>
                  <Caption style={styles.caption}>View Profile</Caption>
                </View>
              </View>
              {/* <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  70
                </Paragraph>
                <Caption style={styles.caption}>Following</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  340
                </Paragraph>
                <Caption style={styles.caption}>Followers</Caption>
              </View>
            </View> */}
            </TouchableOpacity>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Ionicons name="home" color={color} size={size} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate("Home");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="stethoscope"
                  color={color}
                  size={size}
                />
              )}
              label="Search Symptoms"
              onPress={() => {
                props.navigation.navigate("SymptomSearch");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <FontAwesome5 name="hospital-alt" color={color} size={size} />
              )}
              label="Search Hospital"
              onPress={() => {
                Linking.openURL("https://www.google.com/maps/search/clinics/");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="ambulance"
                  color={color}
                  size={size}
                />
              )}
              label="Search Ambulance"
              onPress={() => {
                Linking.openURL(
                  "https://www.google.com/maps/search/ambulance/"
                );
              }}
            />
            {/* <DrawerItem
              icon={({ color, size }) => (
                <Ionicons name="md-people-sharp" color={color} size={size} />
              )}
              label="Contact Kin"
              onPress={onPress}
            /> */}
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialIcons name="settings-cell" color={color} size={size} />
              )}
              label="How App Works"
              onPress={() => {
                props.navigation.navigate("Functionality");
              }}
            />
          </Drawer.Section>

          <Drawer.Section style={{ marginTop: 10 }}>
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="bookshelf"
                  color={color}
                  size={size}
                />
              )}
              label="RECORDS"
              onPress={() => props.navigation.navigate("Records")}
            />
          </Drawer.Section>

          <Drawer.Section style={{ marginTop: 10 }}>
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialIcons
                  name="report-problem"
                  color={color}
                  size={size}
                />
              )}
              label="Contact Us"
              onPress={() => props.navigation.navigate("ReportProblem")}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Ionicons name="exit-outline" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => handleLogout()}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
});
