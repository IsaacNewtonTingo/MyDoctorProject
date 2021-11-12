import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 200,
  },
  loginContainer: {
    // top: 100,
    borderRadius: 3,
    borderWidth: 0.2,
    borderColor: "grey",
    width: 200,
    left: 70,
  },
  loginText: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "serif",
    textAlign: "center",
  },
  nameContainer: {
    marginHorizontal: 30,
    justifyContent: "space-between",
  },
  nameText: {
    color: "white",
    marginBottom: 10,
  },
  nameInput: {
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    height: 50,
    marginBottom: 10,
    paddingLeft: 50,
  },
  buttonContainer: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#003326",
    borderRadius: 10,
    padding: 10,
    shadowColor: "white",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 0.3,
    marginHorizontal: 30,
    marginTop: 10,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  signupContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 30,
    top: 40,
  },
  accountText: {
    color: "#d9d9d9",
    marginRight: 20,
  },
  signupText: {
    color: "white",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  lowerContainer: {
    //top: 130,
  },
  icon: {
    position: "absolute",
    zIndex: 1,
    paddingLeft: 10,
    top: 14,
  },
  iconRight: {
    position: "absolute",
    zIndex: 1,
    paddingLeft: 10,
    top: 15,
    right: 10,
  },
});
export default styles;
