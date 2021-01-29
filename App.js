import React from 'react';
import {View ,  StyleSheet , Text , TextInput , TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import db from './config.js';
import WelcomScreen from './screens/welcome.js'

export default class App extends  React.Component {
  render(){
    return(
<WelcomScreen/>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
