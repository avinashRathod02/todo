import { StyleSheet, StatusBar } from "react-native";
import { COLOR_CONT } from "../../constants/colors";
export const TODOS_STYLES = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: COLOR_CONT.BLACK,
    alignItems: "center",
    justifyContent: "center",
  },
  flatlist: { flex: 1, width: "100%" },
  scrollView: { flex: 0.9, width: "100%" },
  addNewView: { flex: 0.1, justifyContent: "center", width: "100%" },
  descText: {
    flex: 0.9,
    borderWidth: 1,
    borderColor: COLOR_CONT.TRANSPARENT,
    color: COLOR_CONT.GRAY,
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
  textView: { flexDirection: "column", flex: 0.8 },
});
