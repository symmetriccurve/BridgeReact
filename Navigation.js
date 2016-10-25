import React, { Component, PropTypes } from 'react';
import { NavigatorIOS, Text } from 'react-native';


var Screen1 = require('./Screen1')
class Navigation extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: Screen1,
          title: 'My Initial Scene',
        }}
        style={{flex: 1}}
      />
    );
  }
}

module.exports = Navigation
