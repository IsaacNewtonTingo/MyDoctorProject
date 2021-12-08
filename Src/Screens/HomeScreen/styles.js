import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  homePageContainer: {
    backgroundColor: "black",
    flex: 1,
  },
  helloContainer: {
    marginTop: 40,
    padding: 10,
    borderColor: "rgb(224, 224, 235)",
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 20,
  },
  hello: {
    // fontFamily: "sans-serif-medium",
    fontWeight: "700",
    fontSize: 24,
    color: "#ff6600",
  },
  help: {
    // fontFamily: "sans-serif-medium",
    fontWeight: "500",
    fontSize: 18,
    color: "white",
  },

  taskContainerOne: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 20,
  },
  taskContainerTwo: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 20,
    flexWrap: "wrap",
  },
  miniContainers: {
    backgroundColor: "#333333",
    width: 150,
    height: 150,
    borderRadius: 10,
    alignItems: "center",
    padding: 10,
    flexDirection: "column",
    elevation: 20,
    shadowColor: "white",
    shadowRadius: 10,
    shadowOffset: {
      height: 10,
      width: 10,
    },
    shadowOpacity: 0.2,
    borderWidth: 1,
    borderColor: "#262626",
  },

  text: {
    color: "white",
    fontSize: 11,
    fontWeight: "bold",
    // fontFamily: "sans-serif-medium",
  },
  microscope: {
    height: 100,
    width: 50,
    top: 10,
  },

  hospital: {
    height: 100,
    width: 120,
    top: 10,
  },

  ambulance: {
    height: 130,
    width: 120,
    top: 10,
  },

  kin: {
    height: 100,
    width: 100,
    top: 10,
  },
  fuctionalityContainer: {
    justifyContent: "center",
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: "#ffffff",
    borderRadius: 5,
    padding: 10,
    height: 80,
  },
  fuctionalityText: {
    color: "#ffffff",
    fontSize: 16,
  },
});
export default styles;
