import React from 'react';
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';
import { connect } from 'react-redux'
import TodoList from '../components/Add'
import { toggleTodo } from '../actions/index'

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
