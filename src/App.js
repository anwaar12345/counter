/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Counter from './Counter';
const initialState = {
counter : 0
}
const reducer = (state = initialState,action) => {
switch(action.type){
  case 'INCREASE_COUNTER':
    return {counter:state.counter + 1}
  case 'DECREASE_COUNTER':
      return {counter:state.counter - 1}
}
return state;
}
const store = createStore(reducer);
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Counter/>
      </Provider>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
});
