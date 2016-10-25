/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NativeAppEventEmitter,
  TouchableHighlight,
  Slider
} from 'react-native';


var Navigation = require('./Navigation')
export default class ReactObj extends Component {

  render() {
     return <Navigation/>
  }
}

var styles = StyleSheet.create({
    mainContainer : {
        flex : 1
    },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  eqContainer : {
    flex : 1,
    // alignItems: 'stretch',
    // flexDirection : 'row'
  },
  eq : {
    margin : 20
    // height: 20
  }
});

AppRegistry.registerComponent('ReactObj', () => ReactObj);
