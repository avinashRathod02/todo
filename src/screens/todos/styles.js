import { StyleSheet, StatusBar } from "react-native";
import { COLOR_CONT } from "../../constants/colors";
export const TODOS_STYLES = StyleSheet.create({
  searchInput: {
    borderColor: COLOR_CONT.GREEN,
    borderBottomWidth: 1,
    flex: 0.5,
    backgroundColor: COLOR_CONT.WHITE,
    color: COLOR_CONT.BLACK,
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: COLOR_CONT.BLACK,
    alignItems: "center",
    justifyContent: "center",
  },
  flatlist: { flex: 0.76, width: "100%" },
  scrollView: { flex: 0.9, width: "100%" },
  addNewView: {
    flex: 0.12,
    justifyContent: "center",
    width: "90%",
  },
  keyboardView: {
    flex: 0.85,
    justifyContent: "center",
    width: "100%",
  },
  descText: {
    flex: 0.9,
    borderWidth: 1,
    borderColor: COLOR_CONT.TRANSPARENT,
    color: COLOR_CONT.GREEN,
    fontSize: 15,
  },
  titleText: {
    flex: 1,
    borderWidth: 1,
    borderColor: COLOR_CONT.TRANSPARENT,
    color: COLOR_CONT.WHITE,
    fontSize: 20,
  },
  itemContainer: {
    flexDirection: "row",
    flex: 1,
    width: "100%",
    justifyContent: "center",
    height: 59,
  },
  flex1: { flex: 1, width: "100%" },
  textView: { flexDirection: "column", flex: 0.8 },
});
