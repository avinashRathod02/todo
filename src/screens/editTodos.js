import React from 'react';
import { Text,Button, View, StyleSheet, TextInput ,StatusBar} from 'react-native'
import { connect } from 'react-redux'
import { addTodo } from '../actions';
import store from '../store'
class Add extends React.Component {
    state = {
        title: '',
        desc:''
    }

    addTodo = (title,desc) => {
        //redux store 
        this.props.dispatch({ type: 'ADD_TODO', title,desc})
        this.setState({ title: '',desc: '' })
    }
    render() {
        const {navigation} = this.props;
        const {title,desc} =  this.state;
        return (
            <View style={styles.container}>
                <View style={{
                    // flex: 1,
                    // position:'absolute',
                    backgroundColor:'gray',alignSelf:'flex-start',
                   width:'100%' ,alignItems:'flex-start'
                }}>
                    <Button
                    title={'< Back'}
                    color='gray'
                    onPress={()=>{console.log('save button called');navigation.navigate('todos');}}
                    />
                </View>
                <Text> Add new task </Text>
                <TextInput
                onChangeText={(title) => this.setState({ title })}
                value={title}
                style={styles.title}
                placeholder={"Title"}
                />
                <TextInput
                onChangeText={(desc) => this.setState({ desc })}
                value={desc}
                style={styles.desc}
                placeholder={"Description"}
                />
                <View style={{flexDirection:'row',marginTop:25,width:'50%',justifyContent:'space-evenly'}}>
                <Button
                title={'Save'}
                color='green'
                onPress={()=>{this.addTodo(title,desc)}}
                />
                <Button
                title={'Delete'}
                color='red'
                onPress={()=>{console.log(store.getState)}}
                />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    borderWidth:0.1,
    borderBottomWidth:1,
    borderBottomColor:'black',
    // backgroundColor:'gray',
    width:'50%',
    marginTop:50
  },
  desc: {
    borderWidth:0.1,
    borderBottomWidth:1,
    borderBottomColor:'black',
    // backgroundColor:'gray',
    width:'50%',
    marginTop:50,
    height:"25%",
    textAlignVertical:'top',
    textAlign:'left'
  },
});

export default connect()(Add);

