import React, { useState } from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Task from './components/taches';

export default function App() {
  const[task,setTask] = useState();

  const AddTache = () =>{
    console.log(task);
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.lestaches}>
          <Text style={styles.Title}>Tâches à faire</Text>
          <View style={styles.tache}>
            {
              <Task text={'Rendre le projet'}/>
       
}
          </View>
        </View>

      </ScrollView>

      <TextInput style={styles.input} placeholder={'Ecrire une tâche'} value={task} onChangeText={text => setTask(text)}/>
      <TouchableOpacity onPress={() => AddTache()}>
      <View style={styles.add}>
        <Text style={styles.addText}>+</Text>
      </View>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B0E0E6',
  },
  lestaches: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  Title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  tache: {
    marginTop: 30,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  add: {
    width: 800,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    textAlign:'center'
  },
  addText: {
    
  },
});