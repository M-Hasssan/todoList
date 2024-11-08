import { useState } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Task from './components/Task';

export default function App() {

const [task, setTask] = useState();

const [taskItems, setTaskItems] = useState([]);


const handleAddTask = () => {
  Keyboard.dismiss();
  setTaskItems([...taskItems, task])
  setTask(null);
};

const completeTask = (index) => {
  let itemsCopy = [...taskItems];
  itemsCopy.splice(index, 1);
  setTaskItems(itemsCopy);
}
 
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Todays's Task
        </Text>

        <View style={styles.item}>

          {
            taskItems.map((item, index) => {
             return (
             <TouchableOpacity key={index} onPress={() => completeTask()}>
              <Task  text={item} />
             </TouchableOpacity>
             )
            })
          }

        </View>

      </View>
      

      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper }
      >

        

        <TextInput style={styles.input} placeholder={'write a task'} value={task} onChangeText={text =>   setTask(text)} />

        <TouchableOpacity
        onPress={() => handleAddTask()}
        style={styles.addWrapper}>
          <View style={styles.addWrapper}>
           <Text style={styles.taskAdd}>+</Text>
           </View>
            </TouchableOpacity>   

      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },

  wrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  item: {
    marginTop: 30,
  },
  writeTaskWrapper : {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'

  },

  input:{
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor:  '#C0C0C0',
    borderWidth: 1,
  },

  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor:  '#C0C0C0',
    borderWidth: 1,
  },

  taskAdd: {},
});
