import { StyleSheet, StatusBar } from "react-native";
const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#d9d9d9",
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    width: "100%",
    height: 100,
    alignItems: "center",
    zIndex: 1,
    elevation: 20,
  },
  bottomContainer: {
    flex: 1,
    width: "100%",
    height: 420,
    top: 0,
    alignItems: "center",
    backgroundColor: "black",
    borderRadius: 100,
    elevation: 5,
    shadowColor: "#ff4dff",
    shadowRadius: 100,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 20,
      height: 0,
    },
    borderWidth: 1,
    borderColor: "#e6e6e6",
  },
  welcomeImage: {
    width: 200,
    height: 200,
    zIndex: 1,
  },
  buttonContainer: {
    height: 50,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#003326",
    borderRadius: 10,
    padding: 10,
    elevation: 4,
    shadowColor: "white",
    shadowOffset: {
      width: 6,
      height: 5,
    },
    shadowRadius: 5,
    shadowOpacity: 0.2,
    borderWidth: 1,
    borderColor: "gray",
  },
  buttonTextStyle: {
    color: "white",
    fontWeight: "bold",
  },
  text: {
    alignItems: "center",
    top: 100,
  },
  titleContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
    borderRadius: 50,
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center",
    // fontFamily: "serif",
    letterSpacing: 5,
    color: "white",
    textShadowColor: "white",
    textShadowOffset: {
      width: 0,
      height: 0,
    },
    textShadowRadius: 10,
    textDecorationColor: "white",
  },
  subTitle: {
    color: "gray",
    textAlign: "center",
    //fontSize: 17,
    fontWeight: "700",
    // fontFamily: "serif",
  },
  otherSubtitle: {
    color: "gray",
    textAlign: "center",
    fontWeight: "500",
    // fontFamily: "serif",
    marginBottom: 10,
  },
});
export default styles;