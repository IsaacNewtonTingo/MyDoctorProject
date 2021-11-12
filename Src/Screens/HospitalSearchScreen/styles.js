import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    height: "100%",
  },
  imageContainer: {
    alignItems: "center",
    top: 10,
  },
  image: {
    width: 100,
    height: 100,
  },

  hospitalText: {
    color: "white",
    fontFamily: "serif",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
  },
  hospitalTextContainer: {
    width: "100%",
    top: 20,
  },
  textInputContainer: {
    paddingHorizontal: 30,
    width: "100%",
    height: 100,
    top: 40,
  },
  textInput: {
    height: 50,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
  },
  liveContainer: {
    alignItems: "center",
    top: 140,
  },
  or: {
    color: "white",
    marginBottom: 30,
    fontWeight: "700",
    fontFamily: "serif",
  },
  buttonContainer: {
    width: 300,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2E9298",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#6600cc",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  iconAndInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    position: "absolute",
    zIndex: 1,
    paddingLeft: 35,
    top: 48,
  },
});
export default styles;
