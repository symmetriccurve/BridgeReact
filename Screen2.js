import React, { Component, PropTypes } from 'react';
import { NavigatorIOS,TouchableHighlight, Text,View,  NativeAppEventEmitter, requireNativeComponent,NativeModules } from 'react-native';


var NativeComponent = requireNativeComponent('NativeView', null)
var NativeComponent2 = NativeModules.NativeView;
class Screen2 extends Component {

  constructor(props) {
    super(props);
   //  this._onBack = this._onBack.bind(this);
  }


  render() {
     return (
        <View style ={{height:500,width:500,backgroundColor:'peachpuff'}}>
               <ReactComponent FirstProp = '1stFromReact' SecondProp = '2ndFromReact'  style={{flex:1,height:100,width:200,backgroundColor:'red'}} />
        </View>
     );

     return <ReactComponent FirstProp = 'FirstProp' SecondProp = 'SecondProp'  style={{flex:1,height:100,width:200,backgroundColor:'red'}} />
  }
}



//Node Modules Done Behind the Scenes

class ReactComponent extends Component {

  render() {
     NativeComponent2.setProps(this.props.FirstProp,this.props.SecondProp)
    // NativeView.someNativeMethod()
     //render a native view here
     return <NativeComponent style={{flex:1,height:100,width:200}}  />
  }
}



module.exports = Screen2
