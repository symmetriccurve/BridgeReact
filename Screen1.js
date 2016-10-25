import React, { Component, PropTypes } from 'react';
import { NavigatorIOS,TouchableHighlight, Text,View } from 'react-native';


var Screen2 = require('./Screen2')
class Screen1 extends Component {

  constructor(props) {
    super(props);
   //this._onForward = this._onForward.bind(this);
   //  this._onBack = this._onBack.bind(this);
  }

  _onForward() {
    this.props.navigator.push({
      title: 'Home ',
      component: Screen2
    });
  }

  render() {
     return(
        <View style={{flex:1,backgroundColor:'tan',alignItems:'center',justifyContent:'center'}}>
            <TouchableHighlight onPress={()=>{this._onForward()}}>
              <Text>Tap me to load the next scene</Text>
            </TouchableHighlight>
        </View>
     )
    return (
      <View>
        <Text>Current Scene: { this.props.title }</Text>
        <TouchableHighlight onPress={this._onForward}>
          <Text>Tap me to load the next scene</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

module.exports = Screen1
