import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class MyWeb extends Component {
  static navigationOptions = {
    header: null
  };
  
  render() {
    return (
      <WebView
        source={{uri: 'https://github.com/facebook/react-native'}}
        style={{marginTop: 20}}
      />
    );
  }
}