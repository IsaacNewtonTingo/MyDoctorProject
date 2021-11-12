import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

const Task = (props) => {
  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View style={style.item}>
      <View style={style.itemLeft}>
        <View style={style.square}></View>
        <Text style={style.itemText}>{props.text}</Text>
      </View>
      <TouchableOpacity style={style.circular}>
        <Text>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  item: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: "80%",
  },
  circular: {
    width: 18,
    height: 18,
    borderColor: "#55BCF6",
    borderRadius: 50,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e6f2ff",
    zIndex: 1,
  },
});

export default Task;
