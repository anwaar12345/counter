/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
class Counter extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 20 }}>Redux Base Counter App</Text>
        <View style={{flexDirection:'row',justifyContent:'space-around',width:200}}>
        <TouchableOpacity onPress={()=>this.props.increaseCounter()}><Text style={{fontSize: 20 }}>Increase</Text></TouchableOpacity>
        <Text style={{fontSize: 20,color: 'red' }}>{this.props.counter}</Text>
        <TouchableOpacity onPress={()=>this.props.decreaseCounter()}><Text style={{fontSize: 20 }}>Decrease</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
}
function mapStateToProps(state){
    return{
        counter: state.counter
    }
}
function mapDispatchToProps(dispatch){
return{
    increaseCounter : () => dispatch({type: 'INCREASE_COUNTER'}),
    decreaseCounter : () => dispatch({type: 'DECREASE_COUNTER'}),
}
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
});
