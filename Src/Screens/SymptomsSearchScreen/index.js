import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import Task from "../../Components/task";
import { Ionicons } from "@expo/vector-icons";
import symptoms from "../../Components/symptoms";
import { NavigationContainer } from "@react-navigation/native";

const SymptomsSearchScreen = ({ navigation }) => {
  const [symptoms, setSymptoms] = useState([
    { name: "Headache", key: "1" },
    { name: "Chest pain", key: "2" },
    { name: "joint pain", key: "3" },
    { name: "Stomachache", key: "4" },
    { name: "Dry lips", key: "5" },
    { name: "Blood in stool", key: "6" },
    { name: "Dandruff", key: "7" },
    { name: "Constipation", key: "8" },
    { name: "Pain when urinating", key: "9" },
    { name: "Dirrhoea", key: "10" },
    { name: "Dry eyes", key: "11" },
    { name: "Fever", key: "12" },
    { name: "Body ache", key: "13" },
    { name: "Bachache", key: "14" },
    { name: "Dry cough", key: "15" },
    { name: "Loss of taste", key: "16" },
    { name: "Loss of smell", key: "17" },
    { name: "Dizziness", key: "18" },
    { name: "Insomnia", key: "19" },
    { name: "Nausea", key: "20" },
    { name: "Hair Loss", key: "21" },
    { name: "Pale eyes", key: "22" },
  ]);

  // const [symptomsItems, setSymptomsItems] = useState([]);

  // const submitHandler = () => {
  //   setSymptomsItems([...setSymptomsItems, symptoms]);
  // };

  // const [task, setTask] = useState();

  // const [taskItems, setTaskItems] = useState([]);

  // const handleAddTask = (item) => {
  //   Keyboard.dismiss();
  //   setTask(null);
  //   setTaskItems([...taskItems, item]);
  //   navigation.navigate("SymptomsCollection", item);
  // };

  // const completeTask = (index) => {
  //   let itemsCopy = [...taskItems];
  //   itemsCopy.splice(index, 1);
  //   setTaskItems(itemsCopy);
  // };

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}
        >
          <View>
            <View style={styles.icon}>
              <Ionicons name="search" size={30} color="black" />
            </View>
            <TextInput style={styles.input} placeholder="Input symptom" />
          </View>
        </KeyboardAvoidingView>

        <View
          style={{
            height: "100%",
            paddingTop: 5,
            borderWidth: 1,
            borderLeftColor: "#333333",
            borderRightColor: "#333333",
            backgroundColor: "#0d0d0d",
          }}
        >
          <FlatList
            data={symptoms}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("SymptomsCollection", item)}
              >
                <Text
                  style={{
                    color: "white",
                    margin: 5,
                    textAlign: "center",
                    fontWeight: "bold",
                    fontFamily: "serif",
                    backgroundColor: "#1a1a1a",
                    borderRadius: 5,
                    padding: 5,
                  }}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>

        {/* <View
          style={{ backgroundColor: "red", marginTop: 20, marginBottom: 20 }}
        >
          {symptomsItems.map((symptoms, index) => {
            return (
              <Text style={{ color: "white" }} key={index}>
                {symptoms}
              </Text>
            );
          })}
        </View> */}

        {/* <View>
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
            );
          })}
        </View> */}
      </View>

      {/* <TouchableOpacity>
        <View elevation={5} style={styles.buttonContainer}>
          <Text style={styles.buttonTextStyle}>Next</Text>
        </View>
      </TouchableOpacity> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },

  tasksWrapper: {
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  items: {
    marginTop: 30,
  },

  input: {
    paddingVertical: 15,
    paddingHorizontal: 50,
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "gray",
  },
  addkWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 60,
    borderColor: "gray",
    borderWidth: 1,
  },

  icon: {
    position: "absolute",
    zIndex: 1,
    paddingLeft: 10,
    top: 15,
  },
  buttonContainer: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2E9298",
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 20,
    zIndex: 1,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});

export default SymptomsSearchScreen;
