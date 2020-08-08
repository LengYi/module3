/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';

import Router from './src/router';
class App extends Component {
  componentDidMount() {}
  render() {
    return (
        <View style={{flex:1}}>
          <Router {...this.props} />
      </View>
    );
  }
}

export default App;
