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

class Todos extends React.Component {
  render() {
    const {navigation} = this.props;
    const todoList = [
      { title: 'title1', desc: 'desc1' },
      { title: 'title2', desc: 'desc2' },
      { title: 'title3', desc: 'desc3' },
      { title: 'title4', desc: 'desc4' },
      { title: 'title1', desc: 'desc1' },
      { title: 'title2', desc: 'desc2' },
      { title: 'title3', desc: 'desc3' },
      { title: 'title4', desc: 'desc4' },
      { title: 'title1', desc: 'desc1' },
      { title: 'title2', desc: 'desc2' },
      { title: 'title3', desc: 'desc3' },
      { title: 'title4', desc: 'desc4' },
      { title: 'title1', desc: 'desc1' },
      { title: 'title2', desc: 'desc2' },
      { title: 'title3', desc: 'desc3' },
      { title: 'title4', desc: 'desc4' },
      { title: 'title1', desc: 'desc1' },
      { title: 'title2', desc: 'desc2' },
      { title: 'title3', desc: 'desc3' },
      { title: 'title4', desc: 'desc4' },
      { title: 'title1', desc: 'desc1' },
      { title: 'title2', desc: 'desc2' },
      { title: 'title3', desc: 'desc3' },
      { title: 'title4', desc: 'desc4' },
    ];
    const ListItems = (item, index) => {
      return (
        <View key={index} style={{ flexDirection: 'row',flex:1,width:'100%',justifyContent:'center',height:50 }}>
        <View style={{ flexDirection: 'column',flex:0.8,}}>
          <Text style={{ flex:1, borderWidth: 1,borderColor:'transparent',  color: 'black',fontSize:20 }}>
            {item.item.title}
          </Text>
          <Text numberOfLines={1} style={{ flex:0.9, borderWidth: 1,borderColor:'transparent', color:'gray',fontSize:15 }}>
            {item.item.desc}
          </Text>
          </View>
          <Button
            title={'edit'}
            onPress={() => {
              console.log('edit button pressed ' + item.index);
              navigation.navigate('editTodos');
            }}
          />
          <Button
          color='red'
            title={'delete'}
            onPress={() => {
              console.log('delete button pressed ' + item.index);
            }}
          />
        </View>
      );
    };
    return (
      <View style={styles.container}>
        <View style={{flex:0.1,justifyContent:'center',width:'100%'}}>
          <Button
          color="gray"
          title="+ ADD NEW TASK"
        onPress={()=>{console.log("add new");
        navigation.navigate('editTodos');
      }}
          />
        </View>
        <ScrollView style={{flex:0.9,width:'100%'}} >
          <FlatList style={{flex:1,width:'100%'}} data={todoList} renderItem={ListItems} />
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Todos;
