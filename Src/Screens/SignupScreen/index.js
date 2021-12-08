import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  ScrollView,
  Keyboard,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  ActivityIndicator,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { registration } from "../../API/firebaseMethods";
import { auth } from "../../firebase";
import { StatusBar } from "expo-status-bar";

export default function SignupScreen({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstNextOfKin, setFirstNextOfKin] = useState("");
  const [secondNextOfKin, setSecondNextOfKin] = useState("");

  const [firebaseSumitting, setFirebaseSubmitting] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("Home");
      }
    });

    return unsubscribe;
  }, []);

  const emptyState = () => {
    setFirstName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setFirstNextOfKin("");
    setSecondNextOfKin("");
  };

  const handlePress = () => {
    if (
      !firstName &&
      !email &&
      !password &&
      !firstNextOfKin &&
      !secondNextOfKin
    ) {
      Alert.alert("All fields must be filled");
    } else if (!firstName) {
      Alert.alert("First name is required");
    } else if (!email) {
      Alert.alert("Email field is required.");
    } else if (!password) {
      Alert.alert("Password field is required.");
    } else if (!confirmPassword) {
      setPassword("");
      Alert.alert("Confirm password field is required.");
    } else if (password !== confirmPassword) {
      Alert.alert("Password does not match!");
    } else if (!firstNextOfKin) {
      Alert.alert(" Next of Kin is required");
    } else if (!secondNextOfKin) {
      Alert.alert(" Next of Kin is required");
    } else if (firstNextOfKin == secondNextOfKin) {
      Alert.alert("Duplicate next of kin detected \n Use different numbers");
    } else {
      registration(email, password, firstName, firstNextOfKin, secondNextOfKin);
      navigation.navigate("FirstLoading");
      emptyState();
      // Alert.alert("Account succesfully created");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <StatusBar style="light" />
      <ScrollView
        onPress={Keyboard.dismiss}
        style={[{ top: 50 }, styles.container]}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
            fontSize: 20,
          }}
        >
          Create Account
        </Text>
        <Text style={[{ marginTop: 10 }, styles.text]}>Name</Text>

        <TextInput
          style={styles.textInput}
          placeholder="e.g John"
          value={firstName}
          onChangeText={(name) => setFirstName(name)}
        />

        <Text style={styles.text}>Email</Text>

        <TextInput
          style={styles.textInput}
          placeholder="e.g johndoe@gmail.com"
          value={email}
          onChangeText={(email) => setEmail(email)}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.text}>Next of Kin contact (1)</Text>

        <TextInput
          style={styles.textInput}
          placeholder="e.g+254724753175"
          keyboardType="phone-pad"
          value={firstNextOfKin}
          onChangeText={(firstNextOfKin) => setFirstNextOfKin(firstNextOfKin)}
        />

        <Text style={styles.text}>Next of Kin contact (2)</Text>

        <TextInput
          style={styles.textInput}
          placeholder="e.g +2547181818124"
          keyboardType="phone-pad"
          value={secondNextOfKin}
          onChangeText={(secondNextOfKin) =>
            setSecondNextOfKin(secondNextOfKin)
          }
        />

        <Text style={styles.text}>Password</Text>

        <TextInput
          style={styles.textInput}
          placeholder="********"
          value={password}
          onChangeText={(password) => setPassword(password)}
          secureTextEntry={true}
        />

        <Text style={styles.text}>Confirm Password</Text>

        <TextInput
          style={styles.textInput}
          placeholder="********"
          value={confirmPassword}
          onChangeText={(password2) => setConfirmPassword(password2)}
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <View style={styles.signupContainer}>
          <Text style={styles.accountText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.signupText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  text: {
    color: "white",
    marginLeft: 10,
    fontWeight: "bold",
    marginBottom: 10,
  },
  textInput: {
    backgroundColor: "white",
    borderRadius: 10,
    height: 50,
    marginBottom: 10,
    paddingLeft: 20,
    marginHorizontal: 10,
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
  inlineText: {
    color: "white",
    marginRight: 20,
  },

  accountText: {
    color: "#d9d9d9",
    marginRight: 20,
  },
  signupText: {
    color: "white",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  icon: {
    zIndex: 1,
    paddingLeft: 10,
    top: 30,
  },
  signupContainer: {
    alignItems: "center",
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
});
