import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import firebase from 'firebase';

export default class App extends Component{

    state = {email : '', password : ''};

    loginAuth = async() => {
        if(this.state.email && this.state.password){
            const loginAuth = await firebase
            .auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password);

            if(loginAuth){
                this.props.navigation.navigate('Write story');
            }
        }
    }

    render(){
        return(
            <View style = {{backgroundColor : '#f8dc88'}}>
                <Text style = {style.AppHeading}> Login screen </Text>

                <Image 
                source = {require('../Images/logo.png')}
                 style = {{
                     alignSelf : 'center', 
                     width : 270, 
                     height : 250, 
                     marginTop : 75, 
                     marginBottom : 75}}
                />

                <TextInput onChangeText = {(text) => {
                    this.setState({
                        email : text
                    })
                }} placeholder = "enter email" style = {style.TextInput}></TextInput>
                <TextInput 
                onChangeText = {(text) => {
                    this.setState({
                        password : text
                    })
                }} placeholder = "enter password" secureTextEntry = 'false' style = {style.TextInput1}>
                </TextInput>

                <TouchableOpacity onPress = {() => {
                    this.loginAuth();
                }}><Text style = {style.button}> Login </Text></TouchableOpacity>
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
        width : '60%',
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
        width : '60%',
        height : 50,
        fontSize : 30, 
        fontFamily : 'bradley hand',
        color : '#6fe7dd',
        backgroundColor : '#6639a6',
        marginTop : 30, 
        borderRadius : 50,
        alignSelf : 'center',
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
        marginBottom : 100
    }
})
