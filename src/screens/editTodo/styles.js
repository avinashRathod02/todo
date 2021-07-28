import { StyleSheet, StatusBar } from "react-native";
import { COLOR_CONT } from "../../constants/colors";
export const EDIT_TODO_STYLES = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: COLOR_CONT.WHITE,
    alignItems: "center",
    // justifyContent: "center",
  },
  title: {
    borderWidth: 0.1,
    borderBottomWidth: 1,
    borderBottomColor: COLOR_CONT.BLACK,
    // backgroundColor:'gray',
    width: "50%",
    marginTop: 50,
  },
  desc: {
    borderWidth: 0.1,
    borderBottomWidth: 1,
    borderBottomColor: COLOR_CONT.BLACK,
    // backgroundColor:'gray',
    width: "50%",
    marginTop: 50,
    marginBottom: 50,
    height: "25%",
    textAlignVertical: "top",
    textAlign: "left",
  },
  backView: {
    backgroundColor: COLOR_CONT.GRAY,
    alignSelf: "flex-start",
    width: "100%",
    alignItems: "flex-start",
  },
});
