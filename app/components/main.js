

import React, {Component} from 'react';

import {Platform, StyleSheet, Text, View,ScrollView,TextInput,TouchableOpacity} from 'react-native';
import Note from './note';

type Props = {};
export default class Main extends Component<Props> {
    constructor(props) {
      super(props)
      this.state = {
        noteArray:[],
        noteText: '',
      };
    };
    
  
    render() {
    let notes = this.state.noteArray.map((val, key) => { 
        return <Note key={key} keyval={key} val={val} 
        deleteMethod={()=> this.deleteNote(key)}/>
    });
        return (
        <View style = {styles.container}>
            <View style = {styles.header}>
                <Text style = {styles.textHeader}> - Note App Reynaldy Zara - </Text>
            </View>
            <ScrollView style={styles.scrollContainer}>
                {notes}
            </ScrollView>
            <View style = {styles.footer}>
                <TextInput
                onChangeText={(noteText) => this.setState({noteText})}
                style={styles.TextInput}
                placeholder  = "Write Here"
                placeholderTextColor = "white"/>
            </View>
            <TouchableOpacity style={styles.addButton} onPress={this.addNote.bind(this)}>
                <Text style={styles.addButtonText}> + </Text>
            </TouchableOpacity>

        </View>
        );
  }

addNote(){
    if (this.state.noteArray) {
        var d = new Date()  ;
        this.state.noteArray.push({
            'date' : d.getFullYear() +
            '/' + (d.getMonth()+1) +
            '/' + d.getDate(),
            'note' : this.state.noteText
        });
        this.setState({noteArray: this.state.noteArray})
        this.setState({noteText: ''})
        }
    }
    deleteNote(key){
        this.state.noteArray.splice(key, 1);
        this.setState({noteArray: this.state.noteArray})
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    backgroundColor : '#fdd835',
    alignItems: 'center',
    justifyContent :'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',  
    padding:20,
  },
  textHeader: {
    color : 'white',
    fontSize : 15,
    paddingTop: 10,
    paddingBottom: 10,
  },
  scrollContainer:{
      flex:1,
      marginBottom: 100,
  },
  footer:{
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 10, },
  TextInput:{
      alignSelf: 'stretch',
      color:'#fff',
      padding: 30,
      backgroundColor: '#f9a825',
      borderTopWidth: 2,
      borderTopColor:'#ededed',
  },
  addButton:{
    position: 'absolute',
    zIndex : 11,
    right:10,
    bottom:100,
    backgroundColor : '#e91e63',
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',  
  },
  addButtonText:{
      color: 'white',
      fontSize: 24,

  }
});
