import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black",
  },
  pageContainer: {
    top: 20,
  },
  buttonContainer: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#003326",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#6600cc",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    marginHorizontal: 30,
    marginTop: 50,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 20,
    alignItems: "center",
  },
  text: {
    color: "white",
    padding: 30,
    fontSize: 18,
    textAlign: "center",
  },
  textContainer: {
    borderRadius: 50,
    borderColor: "white",
    borderWidth: 1,
    width: "95%",
  },
});
export default styles;
