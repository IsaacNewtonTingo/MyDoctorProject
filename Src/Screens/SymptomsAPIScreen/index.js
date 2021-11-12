import React from "react";
import { SafeAreaView, View, Text, ScrollView } from "react-native";
import { WebView } from "react-native-webview";

const SymptomsAPIScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <WebView
        originWhitelist={["*"]}
        style={{ width: 1250 }}
        source={{
          html: "<iframe src='https://dodxtx.shinyapps.io/EMSC/' style='height:500'> </iframe>",
        }}
      />
    </View>
  );
};
export default SymptomsAPIScreen;
