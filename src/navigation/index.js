import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native' 
import {DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import todos from '../screens/todos';
import Add from '../screens/editTodos';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}
const Stack = createStackNavigator();
// StatusBar.setHidden(true);
class ApplicationNavigator extends React.Component {
  render() {
    return (
      <NavigationContainer    ref={navigationRef}   >
        <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animationEnabled: false
        }}
        initialRouteName='todos'>
          <Stack.Screen
            name="todos"
            component={todos}
          />
          <Stack.Screen
            name="editTodos"
            component={Add}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default ApplicationNavigator;