import React, {Component} from 'react';
import {Text, View, TextInput, Touchable, StyleSheet} from 'react-native';
import firebase from 'firebase';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firestore from '../config';

export default class ReadStory extends Component{

    state = {storyPreview : '', titlePreview : '', authorPreview : ''}

    PreviewFunction = async() => {
        await firestore.collection('BTS').doc('Story').get()
        .then((doc) => {
            var StoryData = doc.data();
            if(StoryData){
                this.setState({
                    storyPreview : StoryData.Story,
                    titlePreview : StoryData.Title,
                    authorPreview : StoryData.Author
                })
            }
        })
    }

  render(){
    return(
      <View style = {{backgroundColor : "#2d4059"}}>
          <Text style = {style.AppHeading}> Read story screen (Preview screen) </Text>
        <Text style = {style.statement}> In this screen you will be able to review the story which you wrote </Text>
        <Text style = {style.statement}> Click on the button below to Preview your story </Text>
        <TouchableOpacity onPress = {() => {
            this.PreviewFunction();
        }}><Text style = {style.button}> Preview Button </Text></TouchableOpacity>
        <Text style = {style.titlePreview}> {this.state.titlePreview} </Text>
        <Text style = {style.storyPreview}> {this.state.storyPreview} </Text>
        <Text style = {style.authorPreview}> - by {this.state.authorPreview} </Text>
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
      marginBottom : 30
  },

  statement : {
      display : 'flex',
      justifyContent : 'center',
      textAlign : 'center',
      color : '#ffd31d',
      fontSize : 30,
      fontFamily : 'American typewriter'
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
      marginBottom : 30
  },

  titlePreview : {
    display : 'flex',
      justifyContent : 'center',
      textAlign : 'center',
      width : '100%',
      height : 40,
      fontSize : 30, 
      fontFamily : 'bradley hand',
      color : '#ff9a00',
      backgroundColor : '#ff165d',
      marginTop : 30, 
      alignSelf : 'center',
      borderRadius : 40,
      marginBottom : 10
  },

  storyPreview : {
    display : 'flex',
      justifyContent : 'center',
      textAlign : 'center',
      width : '100%',
      height : 300,
      fontSize : 30, 
      fontFamily : 'bradley hand',
      color : '#ff9a00',
      backgroundColor : '#ff165d',
      marginTop : 30, 
      alignSelf : 'center',
      borderRadius : 40,
      marginBottom : 10
  },

  authorPreview : {
    display : 'flex',
      justifyContent : 'center',
      textAlign : 'center',
      fontSize : 30, 
      fontFamily : 'bradley hand',
      color : '#ff9a00',
      marginTop : 30, 
      alignSelf : 'center',
      borderRadius : 40,
      marginBottom : 30
  },
})