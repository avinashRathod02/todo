import React from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  StatusBar,
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
import {createSelector} from "reselect"
import axios from "axios";
import { COMMAN_CONST } from "../../constants/comman";

const ListItems = (item, index) => {
  // console.log(item.item);
  return (
    <View key={index} style={TODOS_STYLES.itemContainer}>
      <View style={TODOS_STYLES.textView}>
        <Text
          numberOfLines={1}
          style={[
            TODOS_STYLES.titleText,
            // item.item.completed ? { textDecorationLine: "line-through" } : {},
          ]}
        >
          {item.item.title}
        </Text>
        <Text numberOfLines={1} style={TODOS_STYLES.descText}>
          {item.item.desc}
        </Text>
      </View>
      {/* <Button
        color={COLOR_CONT.BLACK}
        title={TODOS_CONST.COMPLETE}
        onPress={() => {
          console.log("delete button pressed " + item.index);
          store.dispatch(action.toggleTodo(item.item.id));
        }}
      /> */}
      <Button
        color={COLOR_CONT.BLACK}
        title={TODOS_CONST.EDIT}
        onPress={() => {
          navigation.navigate(ROUTE_CONT.EDITTODO,{editMode : true,id:item.item.id,title:item.item.title,desc:item.item.desc});
        }}
      />
      <Button
        color={COLOR_CONT.BLACK}
        title={TODOS_CONST.DELETE}
        onPress={() => {
          console.log("delete button pressed " + item.index);
          store.dispatch(action.deleteTodo(item.item.id));
        }}
      />
    </View>
  );
};
const TodoList = ({ todos, toggleTodo }) => {
  axios.get(COMMAN_CONST.BASEURL)
  .then(function (response) {
    console.log(response.data.todos);
    console.log(todos);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
  });
  return (
    <View style={TODOS_STYLES.container}>
      <View style={TODOS_STYLES.addNewView}>
        <Button
          color={COLOR_CONT.GRAY}
          title={TODOS_CONST.ADD_NEW_TASK}
          onPress={() => {
            console.log("add new");
            // navigation.navigate(ROUTE_CONT.EDITTODO);
              navigation.navigate(ROUTE_CONT.EDITTODO,{editMode : false,id:'',title:"",desc:""});
          }}
        />
      </View>
      <ScrollView style={TODOS_STYLES.scrollView}>
        <FlatList
          style={TODOS_STYLES.flatlist}
          data={todos}
          renderItem={ListItems}
        />
      </ScrollView>
    </View>
  );
};
const todoSelector = (state) => ({
  todos: state.todos,
});
const mapStateToProps = createSelector(
  todoSelector,
  (todos) => (todos)
)
const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch(action.toggleTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
