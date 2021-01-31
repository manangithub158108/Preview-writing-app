import React, {Component} from 'react';
import {Text, View} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import WriteStory from './screens/WriteStory';
import ReadStory from './screens/Preview';
import LoginScreen from './screens/LoginScreen'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';


export default class App extends Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}

var BottomTabNavigator = createBottomTabNavigator({
  "Write story" : {screen : WriteStory},
  "Preview story" : {screen : ReadStory},
});


var TabNavigator = createSwitchNavigator({
  LoginScreen : {screen : LoginScreen},
  BottomTabNavigator : {screen : BottomTabNavigator}
})

var AppContainer = createAppContainer(TabNavigator)