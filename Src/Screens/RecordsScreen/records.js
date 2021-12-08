// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   ScrollView,
//   Alert,
//   KeyboardAvoidingView,
// } from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";

// import { hospitalRecords } from "../../API/firebaseMethods";
// import { ambulanceRecords } from "../../API/firebaseMethods";

// import { useHeaderHeight } from "react-navigation-stack";

// const Records = () => {
//   const [hospitalName, setHospitalName] = useState("");
//   const [county, setCounty] = useState("");
//   const [hospitalDate, setHospitalDate] = useState("");
//   const [registrationNumber, setRegistrationNumber] = useState("");
//   const [ambulanceName, setAmbulanceName] = useState("");
//   const [ambulanceDate, setAmbulanceDate] = useState("");

//   const emptyState = () => {
//     setHospitalName("");
//     setCounty("");
//     setAmbulanceDate("");
//     setRegistrationNumber("");
//     setAmbulanceName("");
//     setHospitalDate("");
//   };

//   const handleHospitalSubmit = () => {
//     if (!hospitalName && !county && !hospitalDate) {
//       Alert.alert("All fields must be filled");
//     } else if (!hospitalName) {
//       Alert.alert("Hospital name must be field");
//     } else if (!county) {
//       Alert.alert("County must be included");
//     } else if (!hospitalDate) {
//       Alert.alert("Date you visited the hospital must be included");
//     } else {
//       hospitalRecords(hospitalName, county, hospitalDate);
//       emptyState();
//       Alert.alert("Sumbmitted successfully");
//     }
//   };

//   const handleAmbulanceSubmit = () => {
//     if (!ambulanceName && !registrationNumber && !ambulanceDate) {
//       Alert.alert("All fields must be filled");
//     } else if (!ambulanceName) {
//       Alert.alert("Ambulance Service name must be included");
//     } else if (!registrationNumber) {
//       Alert.alert("Ambulance registration number must be included");
//     } else if (!ambulanceDate) {
//       Alert.alert("Date you used the ambulance must be included");
//     } else {
//       ambulanceRecords(registrationNumber, ambulanceName, ambulanceDate);
//       emptyState();
//       Alert.alert("Sumbmitted successfully");
//     }
//   };

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === "ios" ? "padding" : "height"}
//       style={styles.container}
//     >
//       <ScrollView style={styles.container}>
//         <View style={styles.innerContainer}>
//           <Text style={styles.titleText}>Hospital information</Text>
//           <View
//             style={{
//               borderBottomColor: "white",
//               borderBottomWidth: 1,
//               marginRight: 170,
//               marginLeft: 10,
//               marginBottom: 10,
//               opacity: 0.05,
//             }}
//           />

//           <Text style={styles.text}>Name</Text>
//           <TextInput
//             style={styles.textInput}
//             placeholder="e.g Aga Khan Hospital,Parklands"
//             value={hospitalName}
//             onChangeText={(text) => setHospitalName(text)}
//           />

//           <Text style={styles.text}>County</Text>
//           <TextInput
//             style={styles.textInput}
//             placeholder="e.g Nairobi"
//             value={county}
//             onChangeText={(text) => setCounty(text)}
//           />

//           <Text style={styles.text}>Date visited (D/M/Y)</Text>
//           <TextInput
//             style={styles.textInput}
//             placeholder="e.g 30/09/2021"
//             value={hospitalDate}
//             onChangeText={(text) => setHospitalDate(text)}
//             keyboardType="numbers-and-punctuation"
//           />

//           <TouchableOpacity
//             style={styles.button}
//             onPress={handleHospitalSubmit}
//           >
//             <Text style={styles.buttonText}>Submit</Text>
//           </TouchableOpacity>
//         </View>

//         <View style={styles.innerContainer}>
//           <Text style={styles.titleText}>Ambulance information</Text>
//           <View
//             style={{
//               borderBottomColor: "white",
//               borderBottomWidth: 1,
//               marginRight: 145,
//               marginLeft: 10,
//               marginBottom: 10,
//               opacity: 0.05,
//             }}
//           />

//           <Text style={styles.text}>Name of Service</Text>
//           <TextInput
//             style={styles.textInput}
//             placeholder="e.g St.John Ambulance"
//             value={ambulanceName}
//             onChangeText={(text) => setAmbulanceName(text)}
//           />

//           <Text style={styles.text}>Vehicle Registration Number</Text>
//           <TextInput
//             style={styles.textInput}
//             placeholder="e.g KBA 254J"
//             value={registrationNumber}
//             onChangeText={(text) => setRegistrationNumber(text)}
//           />

//           <Text style={styles.text}>Date used (D/M/Y)</Text>
//           <TextInput
//             style={styles.textInput}
//             placeholder="e.g 13/08/2021"
//             value={ambulanceDate}
//             onChangeText={(text) => setAmbulanceDate(text)}
//           />

//           <TouchableOpacity
//             style={styles.button}
//             onPress={handleAmbulanceSubmit}
//           >
//             <Text style={styles.buttonText}>Submit</Text>
//           </TouchableOpacity>
//         </View>
//         {/* <TouchableOpacity style={styles.button}>
//         <Text style={styles.buttonText}>Next</Text>
//       </TouchableOpacity> */}
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "black",
//   },

//   titleText: {
//     color: "white",
//     marginLeft: 10,
//     fontWeight: "bold",
//     marginBottom: 15,
//     fontSize: 20,
//   },
//   text: {
//     color: "gray",
//     marginHorizontal: 10,
//     marginVertical: 20,
//   },
//   textInput: {
//     backgroundColor: "white",
//     borderRadius: 10,
//     height: 50,
//     marginBottom: 10,
//     paddingLeft: 20,
//     marginHorizontal: 10,
//   },
//   innerContainer: {
//     backgroundColor: "#1a1a1a",
//     marginVertical: 20,
//     borderRadius: 20,
//     padding: 20,
//     elevation: 20,
//     shadowColor: "white",
//     shadowRadius: 10,
//     shadowOffset: {
//       height: 10,
//       width: 10,
//     },
//     shadowOpacity: 0.2,
//   },
//   button: {
//     height: 50,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#003326",
//     borderRadius: 10,
//     padding: 10,
//     shadowColor: "white",
//     shadowOffset: {
//       width: 0,
//       height: 3,
//     },
//     shadowRadius: 15,
//     shadowOpacity: 0.3,
//     marginTop: 20,
//     elevation: 10,
//     borderWidth: 0.5,
//     borderColor: "gray",
//     marginHorizontal: 10,
//   },
//   buttonText: {
//     color: "#FFFFFF",
//     fontWeight: "bold",
//   },
// });

// export default Records;

import React, { Component } from "react";
import { View, Text } from "react-native";

import { GiftedChat } from "react-native-gifted-chat";

const botAvatar = require("../../assets/doc.gif");

const BOT = {
  _id: 2,
  name: "Mr.Bot",
  avatar: botAvatar,
};

class Records extends Component {
  state = {
    messages: [
      {
        _id: 3,
        text: "I won't be replying to any of your messages. This is your record keeping zone",
        createdAt: new Date(),
        user: BOT,
      },
      {
        _id: 2,
        text: "This is a section for you to add you NOTES, TODOs, UPCOMING APPOINTMENTS and any other thing you have in mind. ",
        createdAt: new Date(),
        user: BOT,
      },
      { _id: 1, text: "Hi", createdAt: new Date(), user: BOT },
    ],
    id: 1,
    name: "",
  };

  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }
  //onQuickReply(quickReply) {}

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <GiftedChat
          messages={this.state.messages}
          onSend={(message) => this.onSend(message)}
          //onQuickReply={(quickReply) => this.onQuickReply(quickReply)}
          user={{ _id: 1 }}
        />
      </View>
    );
  }
}
export default Records;
