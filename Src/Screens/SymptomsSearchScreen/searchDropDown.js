import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, ScrollView, View, Text, TextInput } from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";

export default function SearchDropDown(props) {
  const { diagnosis } = props;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.subContainer}>
        {diagnosis.length ? (
          diagnosis.map((item) => {
            return (
              <TouchableOpacity
                key={item.key}
                style={styles.itemView}
                onPress={() => navigation.navigate("Diseases", item)}
              >
                <Text style={styles.itemText}>{item.key}</Text>
              </TouchableOpacity>
            );
          })
        ) : (
          <View style={styles.noResultView}>
            <Text style={styles.noResultText}>No search items matched</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  subContainer: {
    paddingTop: 10,
    marginHorizontal: 20,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    // justifyContent: "center",
    // alignItems: "center",
    //alignContent: "center",
    paddingHorizontal: 10,
  },
  itemView: {
    backgroundColor: "white",
    marginBottom: 10,
    justifyContent: "center",
    borderRadius: 4,
    flexWrap: "wrap",
    alignItems: "flex-start",
    paddingVertical: 10,
  },
  itemText: {
    color: "black",
    paddingHorizontal: 10,
  },
  noResultView: {
    alignSelf: "center",
    // margin: 20,
    height: 100,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  noResultText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
