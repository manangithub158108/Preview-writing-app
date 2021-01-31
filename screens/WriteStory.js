import React, {Component} from 'react';
import {Text, View, TextInput, Touchable, StyleSheet} from 'react-native';
import firebase from 'firebase';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firestore from '../config';

export default class WriteStory extends Component{

    state = {title : '', author : '', story : ''}

    updateFunction = () => {
        firestore.collection('BTS').doc('Story').update({
            Title : this.state.title,
            Author : this.state.author,
            Story : this.state.story
        })
    }

  render(){
    return(
      <View style = {{backgroundColor : "#2d4059"}}>
        <Text style = {style.AppHeading}> WriteStory </Text>
        <TextInput placeholder = 'enter title of the story' onChangeText = {(text) => {
            this.setState({
                title : text
            })
        }} style = {style.TextInput}></TextInput>
        <TextInput placeholder = 'enter author of the story' onChangeText = {(text) => {
            this.setState({
                author : text
            })
        }} style = {style.TextInput}></TextInput>
        <TextInput placeholder = 'enter the story' onChangeText = {(text) => {
            this.setState({
                story : text
            })
        }} style = {style.TextInput1}></TextInput>

        <TouchableOpacity onPress = {() => {
            this.updateFunction();
        }}><Text style = {style.button}> Submit </Text></TouchableOpacity> 
        
        
      </View>
    )
  }
}

var style = StyleSheet.create({
    AppHeading : {
        display : 'flex',
        justifyContent : 'center',
        textAlign : 'center',
        width : '100%',
        height : 50,
        fontSize : 40, 
        fontFamily : 'bradley hand',
        color : '#ffd460',
        backgroundColor : '#ea5455',
        marginBottom : 10
    },

    TextInput : {
        display : 'flex',
        justifyContent : 'center',
        textAlign : 'center',
        width : '90%',
        height : 40,
        fontSize : 30, 
        fontFamily : 'bradley hand',
        color : '#6fe7dd',
        backgroundColor : '#6639a6',
        marginTop : 30, 
        borderRadius : 50,
        alignSelf : 'center'
    },

    TextInput1 : {
        display : 'flex',
        justifyContent : 'center',
        textAlign : 'center',
        width : '90%',
        height : 300,
        fontSize : 30, 
        fontFamily : 'bradley hand',
        color : '#6fe7dd',
        backgroundColor : '#6639a6',
        marginTop : 30, 
        borderRadius : 50,
        alignSelf : 'center'
    },

    button : {
        display : 'flex',
        justifyContent : 'center',
        textAlign : 'center',
        width : '60%',
        height : 40,
        fontSize : 30, 
        fontFamily : 'bradley hand',
        color : '#ff9a00',
        backgroundColor : '#ff165d',
        marginTop : 30, 
        alignSelf : 'center',
        borderRadius : 40,
        marginBottom : 210
    }
})