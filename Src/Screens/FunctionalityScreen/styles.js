import { StyleSheet, StatusBar } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    //paddingTop: StatusBar.currentHeight,
  },
  itemsContainer: {
    marginTop: 60,
    padding: 20,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 20,
  },
  titleText: {
    color: "white",
    fontSize: 20,
    // fontFamily: "serif",
    fontWeight: "700",
    marginBottom: 20,
  },
  paragraphText: {
    color: "white",
    fontSize: 16,
    marginBottom: 20,
  },
  buttonContainer: {
    borderRadius: 20,
    borderWidth: 1,
    // borderColor: "white",
    width: 200,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#003326",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
  },

  // ambulanceContainer: {
  //   top: 200,
  //   padding: 20,
  //   borderWidth: 1,
  //   borderColor: "white",
  //   borderRadius: 20,
  // },
  // nextOfKinContainer: {
  //   top: 250,
  //   padding: 20,
  //   borderWidth: 1,
  //   borderColor: "white",
  //   borderRadius: 20,
  // },
});
export default styles;
