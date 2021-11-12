import React from "react";
import { ImageBackground, View } from "react-native";

const BackgroundImage = () => {
  return (
    <View>
      <ImageBackground
        source={require("../assets/background.jpeg")}
        style={{ flex: 1 }}
      ></ImageBackground>
    </View>
  );
};
export default BackgroundImage;
