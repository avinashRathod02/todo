import React, { useCallback, useEffect, useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Alert,
  RefreshControl,
  Platform,
  TextInput,
} from "react-native";
import { connect } from "react-redux";
import * as action from "../../actions/index";
import * as navigation from "../../navigation";
import { TODOS_STYLES } from "./styles";
import { COLOR_CONT } from "../../constants/colors";
import { ROUTE_CONT } from "../../constants/routes";
import { TODOS_CONST } from "./constant";
import { ACTION_CONT } from "../../constants/actions";
import store from "../../store";
import { createSelector } from "reselect";
import axios from "axios";
import { COMMAN_CONST } from "../../constants/comman";
import { debounce } from "lodash";
import { Input } from "react-native-elements/dist/input/Input";
import SimpleLoader from "../../components/loading/simpleLoader";

const ListItems = (item, index) => {
  const deleteAlert = () =>
    Alert.alert(TODOS_CONST.WARNING, TODOS_CONST.WARNING_MSG, [
      {
        text: TODOS_CONST.CANCEL,
        style: "cancel",
      },
      {
        text: TODOS_CONST.OK,
        onPress: () => store.dispatch(action.deleteTodo(item.item.id)),
        style: "default",
      },
    ]);
  return (
    <View style={TODOS_STYLES.itemContainer}>
      <View style={TODOS_STYLES.textView}>
        <Text
          numberOfLines={1}
          style={[
            TODOS_STYLES.titleText,
            item.item.is_completed
              ? { textDecorationLine: "line-through" }
              : {},
          ]}
        >
          {item.item.title}
        </Text>
        <Text numberOfLines={1} style={TODOS_STYLES.descText}>
          {item.item.description}
        </Text>
      </View>
      <Button
        color={COLOR_CONT.BLACK}
        title={TODOS_CONST.EDIT}
        onPress={() => {
          navigation.navigate(ROUTE_CONT.EDITTODO, {
            editMode: true,
            id: item.item.id,
          });
        }}
      />
      <Button
        color={COLOR_CONT.BLACK}
        title={TODOS_CONST.DELETE}
        onPress={() => {
          deleteAlert();
        }}
      />
    </View>
  );
};
const TodoList = ({ todos, toggleTodo }) => {
  const [refreshing, setRefreshing] = useState(false);
  const keyboardVerticalOffset = Platform.OS != "ios" ? -580 : 0;
  const onChangeTextDelayed = debounce(
    (text) => store.dispatch(action.searchInTodo(text)),
    700
  );
  useEffect(() => {
    store.dispatch(action.getTodos());
  }, []);
  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    try {
      store.dispatch(action.getTodos());
      setRefreshing(false);
    } catch (error) {
      setRefreshing(false);
    }
  }, [refreshing]);
  return (
    <View style={TODOS_STYLES.container}>
      <View style={TODOS_STYLES.addNewView}>
        <TextInput
          placeholder={TODOS_CONST.SEARCH}
          placeholderTextColor={COLOR_CONT.GRAY}
          clearButtonMode="always"
          onChangeText={onChangeTextDelayed}
          style={TODOS_STYLES.searchInput}
        />
      </View>
      {todos.loading ? (
        <SimpleLoader />
      ) : (
        <View style={TODOS_STYLES.flex1}>
          {todos.todos.length > 0 ? (
            <FlatList
              keyboardDismissMode="on-drag"
              keyboardShouldPersistTaps="handled"
              style={TODOS_STYLES.flatlist}
              data={todos.todos}
              renderItem={ListItems}
              keyExtractor={(item, index) => index.toString()}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
            />
          ) : (
            <Text style={TODOS_STYLES.titleText}>No Todo found..!</Text>
          )}
        </View>
      )}
      <View style={TODOS_STYLES.addNewView}>
        <Button
          color={COLOR_CONT.GRAY}
          title={TODOS_CONST.ADD_NEW_TASK}
          onPress={() => {
            navigation.navigate(ROUTE_CONT.EDITTODO, {
              editMode: false,
              id: "",
            });
          }}
        />
      </View>
    </View>
  );
};
const todoSelector = (state) => ({
  todos: state.todos,
});
const mapStateToProps = createSelector(todoSelector, (state) => ({
  todos: state.todos,
}));
const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch(action.toggleTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
