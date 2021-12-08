import React from "react";
import { View, TextInput, Text, Image, Keyboard } from "react-native";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { StatusBar } from "expo-status-bar";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emptyState = () => {
    setEmail(""), setPassword("");
  };

  // const navigation = useNavigation()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("Home");
      }
    });

    return unsubscribe;
  }, []);

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
      })
      .catch((error) => alert(error.message));
    emptyState();
  };

  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={{ top: 90 }}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../../assets/loginDoc.gif")}
          />
        </View>

        <View style={styles.lowerContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.nameText}>Email</Text>
            <View style={styles.iconAndInput}>
              <View style={styles.icon}>
                <Ionicons name="mail" size={20} color="black" />
              </View>

              <TextInput
                style={styles.nameInput}
                placeholder="e.g john@gmail.com"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={(text) => setEmail(text)}
                value={email}
              />
            </View>
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.nameText}>Password</Text>
            <View>
              <View style={styles.icon}>
                <Ionicons name="lock-closed" size={20} color="black" />
              </View>

              <TextInput
                style={styles.nameInput}
                placeholder="********"
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
                value={password}
              />

              <View style={styles.iconRight}>
                <Ionicons name="eye-off" size={20} color="black" />
              </View>
            </View>
          </View>
          <TouchableOpacity onPress={handleLogin}>
            <View elevation={5} style={styles.buttonContainer}>
              <Text style={styles.buttonTextStyle}>Login</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.signupContainer}>
          <Text style={styles.accountText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.signupText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
