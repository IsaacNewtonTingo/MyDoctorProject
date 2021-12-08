import React, { useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { color } from "react-native-reanimated";
import { auth } from "../../firebase";

const FirstLoading = ({ navigation }) => {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("Home");
      }
    });

    return unsubscribe;
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View>
        <ActivityIndicator size="large" color="white" />
      </View>
    </View>
  );
};
export default FirstLoading;
