import React from 'react';
import { Text,Button, View, StyleSheet, TextInput ,StatusBar} from 'react-native'

class Add extends React.Component {
    render() {
        const {navigation} = this.props;
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
                style={styles.title}
                placeholder={"Title"}
                />
                <TextInput
                style={styles.desc}
                placeholder={"Description"}
                />
                <View style={{flexDirection:'row',marginTop:25,width:'50%',justifyContent:'space-evenly'}}>
                <Button
                title={'Save'}
                color='green'
                onPress={()=>{console.log('save button called');}}
                />
                <Button
                title={'Reset'}
                onPress={()=>{console.log('reset button called')}}
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

export default Add;

