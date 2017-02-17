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
  View
} from 'react-native';

import BallzyLogin from './BallzyLogin/BallzyLogin';

class BallzyApp extends Component {
  render() {
    return (
//Uncomment the following line to see what it does.
//      <BallzyLogin/>
    )
  }
}

AppRegistry.registerComponent('BallzyApp', () => BallzyApp);
